"use client";

/* Pointer-event dragging. Spec §7.

   Not the HTML5 drag-and-drop API: that never fires on touch and can't be
   styled mid-drag, which would mean writing the mobile path twice.

   One code path covers both surfaces — a tap adds, a drag onto the canvas adds,
   a drag anywhere else cancels. Shelf cards carry `touch-action: pan-y`, so on
   touch a vertical swipe scrolls the shelf and never starts a drag, which is
   what makes mobile tap-to-add fall out for free. */

import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import type { ModuleId } from "@/lib/configurator/types";

const DRAG_THRESHOLD_PX = 6;
/* Releasing slightly outside the canvas still counts. Without this, a near-miss
   silently discards the drag, which reads as "the drop didn't work". */
const DROP_TOLERANCE_PX = 32;

export type DragState = {
  id: ModuleId;
  x: number;
  y: number;
  /** False until the pointer moves past the threshold — before that it's still a tap. */
  active: boolean;
  overCanvas: boolean;
};

export function useModuleDrag(
  canvasRef: RefObject<HTMLElement>,
  onAdd: (id: ModuleId) => void
) {
  const [drag, setDrag] = useState<DragState | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const addRef = useRef(onAdd);
  addRef.current = onAdd;

  const set = useCallback((next: DragState | null) => {
    dragRef.current = next;
    setDrag(next);
  }, []);

  const begin = useCallback(
    (id: ModuleId) => (e: React.PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      // Stops the browser starting a text selection or native element drag,
      // which otherwise fights the pointer drag and makes it feel stuck.
      e.preventDefault();
      startRef.current = { x: e.clientX, y: e.clientY };
      set({ id, x: e.clientX, y: e.clientY, active: false, overCanvas: false });
    },
    [set]
  );

  useEffect(() => {
    if (!drag) return;

    const inCanvas = (x: number, y: number) => {
      const r = canvasRef.current?.getBoundingClientRect();
      if (!r) return false;
      const pad = DROP_TOLERANCE_PX;
      return (
        x >= r.left - pad && x <= r.right + pad && y >= r.top - pad && y <= r.bottom + pad
      );
    };

    const move = (e: PointerEvent) => {
      const current = dragRef.current;
      const start = startRef.current;
      if (!current || !start) return;
      const moved =
        Math.abs(e.clientX - start.x) > DRAG_THRESHOLD_PX ||
        Math.abs(e.clientY - start.y) > DRAG_THRESHOLD_PX;
      const active = current.active || moved;
      set({
        ...current,
        x: e.clientX,
        y: e.clientY,
        active,
        overCanvas: active && inCanvas(e.clientX, e.clientY),
      });
    };

    const finish = (e: PointerEvent) => {
      const current = dragRef.current;
      startRef.current = null;
      set(null);
      if (!current) return;
      // A tap adds; a drag only adds when released over the canvas.
      if (!current.active || inCanvas(e.clientX, e.clientY)) addRef.current(current.id);
    };

    const cancel = () => {
      startRef.current = null;
      set(null);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", finish);
    window.addEventListener("pointercancel", cancel);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", finish);
      window.removeEventListener("pointercancel", cancel);
    };
  }, [drag, canvasRef, set]);

  /* While a drag is live, stop the page selecting text under the cursor and keep
     the grabbing cursor even when the pointer is over non-draggable areas. */
  useEffect(() => {
    if (!drag?.active) return;
    const { style } = document.body;
    const prevSelect = style.userSelect;
    const prevCursor = style.cursor;
    style.userSelect = "none";
    style.cursor = "grabbing";
    return () => {
      style.userSelect = prevSelect;
      style.cursor = prevCursor;
    };
  }, [drag?.active]);

  return { drag, begin };
}
