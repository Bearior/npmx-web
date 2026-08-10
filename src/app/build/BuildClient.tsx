"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Drawer from "@mui/material/Drawer";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TuneIcon from "@mui/icons-material/Tune";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Footer from "@/components/Footer";
import BuildCanvas from "@/components/build/BuildCanvas";
import CascadeDialog, { PendingRemoval } from "@/components/build/CascadeDialog";
import ModuleShelf from "@/components/build/ModuleShelf";
import PriceRail from "@/components/build/PriceRail";
import { useModuleDrag } from "@/components/build/useModuleDrag";
import {
  DEFAULT_STUDENTS,
  MODULE_BY_ID,
  PRESETS,
  PRESET_BY_ID,
} from "@/lib/configurator/catalog";
import { formatTHB, price } from "@/lib/configurator/price";
import { quoteMailto } from "@/lib/configurator/quote";
import { remove as removeModule, resolve, wouldAdd } from "@/lib/configurator/resolve";
import { decodeBuild, encodeBuild, shareUrl } from "@/lib/configurator/share";
import type { Lang, ModuleId, OptionId, TierId } from "@/lib/configurator/types";
import { useLang } from "@/providers/LangProvider";

type Snapshot = { selected: ModuleId[]; options: OptionId[] };

export default function BuildClient() {
  const { lang, t } = useLang();

  const [selected, setSelected] = useState<ModuleId[]>([]);
  const [options, setOptions] = useState<OptionId[]>([]);
  const [students, setStudents] = useState(DEFAULT_STUDENTS);
  const [hydrated, setHydrated] = useState(false);

  const [pending, setPending] = useState<PendingRemoval | null>(null);
  const [undoSnapshot, setUndoSnapshot] = useState<Snapshot | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  const canvasRef = useRef<HTMLDivElement>(null);

  const { effective, autoAdded } = useMemo(() => resolve(selected), [selected]);
  const cost = useMemo(
    () => price(effective, options, students),
    [effective, options, students]
  );

  /* Read the build from the URL on mount. Deliberately window.location rather
     than useSearchParams — that would force a Suspense boundary and push the
     route into dynamic rendering for no benefit. */
  useEffect(() => {
    const { build, unknown } = decodeBuild(window.location.search.replace(/^\?/, ""));
    setSelected(build.selected);
    setOptions(build.options);
    setStudents(build.students);
    if (unknown.length) setNotice(t("build.someModulesSkipped"));
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Keep the URL in step so a refresh or a copied address preserves the build. */
  useEffect(() => {
    if (!hydrated) return;
    const qs = encodeBuild({ selected, options, students });
    window.history.replaceState(null, "", `${window.location.pathname}${qs}`);
  }, [hydrated, selected, options, students]);

  const add = useCallback((id: ModuleId) => {
    setSelected((prev) => (prev.includes(id) ? prev : [...prev, id]));
  }, []);

  const { drag, begin } = useModuleDrag(canvasRef, add);

  const pendingAdds = useMemo(
    () => (drag?.overCanvas ? wouldAdd(selected, drag.id) : []),
    [drag?.overCanvas, drag?.id, selected] // eslint-disable-line react-hooks/exhaustive-deps
  );

  const requestRemove = useCallback(
    (id: ModuleId) => {
      const { next, alsoRemoved } = removeModule(selected, id);
      if (!alsoRemoved.length) {
        setUndoSnapshot({ selected, options });
        setSelected(next);
        return;
      }
      const before = price(resolve(selected).effective, options, students);
      const after = price(resolve(next).effective, options, students);
      setPending({
        id,
        alsoRemoved,
        setupDropTHB: before.listSetupTHB - after.listSetupTHB,
        monthlyDropTHB: before.listMonthlyTHB - after.listMonthlyTHB,
      });
    },
    [selected, options, students]
  );

  const confirmRemove = useCallback(() => {
    if (!pending) return;
    setUndoSnapshot({ selected, options });
    setSelected(removeModule(selected, pending.id).next);
    setPending(null);
  }, [pending, selected, options]);

  const undo = useCallback(() => {
    if (!undoSnapshot) return;
    setSelected(undoSnapshot.selected);
    setOptions(undoSnapshot.options);
    setUndoSnapshot(null);
  }, [undoSnapshot]);

  const applyPreset = useCallback((id: TierId) => {
    const preset = PRESET_BY_ID[id];
    setSelected(preset.modules);
    setOptions(preset.options);
  }, []);

  const toggleOption = useCallback((id: OptionId) => {
    setOptions((prev) => (prev.includes(id) ? prev.filter((o) => o !== id) : [...prev, id]));
  }, []);

  const copyLink = useCallback(() => {
    const url = shareUrl({ selected, options, students });
    navigator.clipboard?.writeText(url).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      },
      () => setNotice(url)
    );
  }, [selected, options, students]);

  const requestQuote = useCallback(() => {
    window.location.href = quoteMailto(
      { selected, options, students },
      effective,
      options,
      cost
    );
  }, [selected, options, students, effective, cost]);

  const shelf = (
    <ModuleShelf
      effective={effective}
      draggingId={drag?.active ? drag.id : undefined}
      onBeginDrag={begin}
      onRoadmapClick={() => setNotice(t("build.roadmapNotice"))}
    />
  );

  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#0f172a] pt-32 pb-14">
          <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-[80px]" />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <Chip
              label={t("build.chip")}
              size="small"
              sx={{ bgcolor: "rgba(59,130,246,0.2)", color: "#60a5fa", fontWeight: 700, mb: 2 }}
            />
            <h1 className="mb-4 text-4xl font-extrabold text-white md:text-6xl">
              {t("build.title")}
            </h1>
            <p className="max-w-2xl text-lg text-white/70">{t("build.subtitle")}</p>
          </div>
        </section>

        {/* Presets */}
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-4">
            <span className="mr-1 text-[12px] font-bold uppercase tracking-[0.08em] text-slate-400">
              {t("build.startFrom")}
            </span>
            {PRESETS.map((p) => (
              <Button
                key={p.id}
                onClick={() => applyPreset(p.id)}
                variant={cost.matchedPreset === p.id ? "contained" : "outlined"}
                size="small"
                sx={{
                  borderRadius: "9999px",
                  textTransform: "none",
                  fontWeight: 700,
                  ...(cost.matchedPreset === p.id
                    ? { bgcolor: "#3b82f6", "&:hover": { bgcolor: "#2563eb" } }
                    : { borderColor: "#cbd5e1", color: "#475569" }),
                }}
              >
                {p.emoji} {p.name[lang as Lang]}
              </Button>
            ))}
            <Button
              onClick={() => {
                setUndoSnapshot({ selected, options });
                setSelected([]);
                setOptions([]);
              }}
              size="small"
              startIcon={<RestartAltIcon sx={{ fontSize: 16 }} />}
              sx={{ textTransform: "none", color: "#94a3b8", fontWeight: 600 }}
            >
              {t("build.reset")}
            </Button>
          </div>
        </section>

        {/* Configurator */}
        <section className="mx-auto max-w-7xl px-6 py-8 pb-32 lg:pb-8">
          <div className="grid gap-6 lg:grid-cols-[236px_1fr_286px]">
            <aside className="hidden lg:block">
              <p className="text-[13px] font-bold text-primary">{t("build.shelfTitle")}</p>
              <p className="mb-3 text-[11.5px] leading-snug text-slate-500">
                {t("build.shelfHint")}
              </p>
              {shelf}
            </aside>

            {/* Canvas and rail stay pinned while the (long) shelf scrolls past,
                so a module from the bottom of the shelf can still be dropped. */}
            <div className="lg:sticky lg:top-24 lg:self-start lg:h-[calc(100vh-7.5rem)]">
              <p className="mb-3 text-[13px] font-bold text-primary lg:hidden">
                {t("build.canvasTitle")}
              </p>
              <BuildCanvas
                ref={canvasRef}
                effective={effective}
                selected={selected}
                autoAdded={autoAdded}
                options={options}
                isOver={!!drag?.overCanvas}
                pendingAdds={pendingAdds}
                pendingName={drag ? MODULE_BY_ID[drag.id]?.name[lang as Lang] : undefined}
                onRemove={requestRemove}
                onToggleOption={toggleOption}
              />
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7.5rem)] lg:overflow-y-auto">
              <PriceRail
                cost={cost}
                effective={effective}
                options={options}
                autoAddedCount={autoAdded.length}
                students={students}
                onStudentsChange={setStudents}
                onQuote={requestQuote}
                onCopyLink={copyLink}
                copied={copied}
                onApplyPreset={applyPreset}
              />
            </aside>
          </div>
        </section>
      </main>

      {/* Mobile: sticky totals + bottom-sheet shelf */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-lg font-extrabold leading-none text-primary">
              {formatTHB(cost.setupTHB)}
            </p>
            <p className="text-[11.5px] text-slate-500">
              {cost.isCustom
                ? t("build.contactForPricing")
                : `${formatTHB(cost.monthlyTHB)}${t("build.perMonthShort")}`}
              {` · ${effective.length} ${t("build.modulesWord")}`}
            </p>
          </div>
          <Button
            onClick={() => setSheetOpen(true)}
            variant="contained"
            startIcon={<TuneIcon />}
            sx={{
              bgcolor: "#3b82f6",
              borderRadius: "9999px",
              textTransform: "none",
              fontWeight: 700,
              px: 2.5,
              whiteSpace: "nowrap",
              "&:hover": { bgcolor: "#2563eb" },
            }}
          >
            {t("build.addModules")}
          </Button>
        </div>
      </div>

      <Drawer
        anchor="bottom"
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        PaperProps={{ sx: { borderRadius: "18px 18px 0 0", maxHeight: "78vh" } }}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3">
          <span className="text-[14px] font-bold text-primary">{t("build.addModules")}</span>
          <IconButton size="small" onClick={() => setSheetOpen(false)}>
            <CloseIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </div>
        <div className="px-5 py-4">
          <p className="mb-3 text-[12px] text-slate-500">{t("build.tapToAdd")}</p>
          {shelf}
        </div>
      </Drawer>

      {/* Drag ghost */}
      {drag?.active && (
        <div
          className="pointer-events-none fixed z-[60] -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-accent bg-white px-3 py-2 shadow-xl"
          style={{ left: drag.x, top: drag.y, transform: "translate(-50%,-50%) rotate(-2deg)" }}
        >
          <span className="text-[12.5px] font-semibold text-primary">
            {MODULE_BY_ID[drag.id]?.name[lang as Lang]}
          </span>
          <span className="ml-2 text-[12px] font-bold text-accent">
            {formatTHB(MODULE_BY_ID[drag.id]?.setupTHB ?? 0)}
          </span>
        </div>
      )}

      <CascadeDialog
        pending={pending}
        onConfirm={confirmRemove}
        onCancel={() => setPending(null)}
      />

      <Snackbar
        open={!!undoSnapshot}
        autoHideDuration={6000}
        onClose={() => setUndoSnapshot(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        sx={{ bottom: { xs: 88, lg: 24 } }}
        message={t("build.removed")}
        action={
          <Button onClick={undo} size="small" sx={{ color: "#60a5fa", fontWeight: 700 }}>
            {t("build.undo")}
          </Button>
        }
      />

      <Snackbar
        open={!!notice}
        autoHideDuration={4000}
        onClose={() => setNotice(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ bottom: { xs: 88, lg: 24 } }}
      >
        <Alert severity="info" onClose={() => setNotice(null)} sx={{ width: "100%" }}>
          {notice}
        </Alert>
      </Snackbar>

      <Footer />
    </>
  );
}
