"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { MODULE_BY_ID } from "@/lib/configurator/catalog";
import { formatTHB } from "@/lib/configurator/price";
import type { Lang, ModuleId } from "@/lib/configurator/types";
import { useLang } from "@/providers/LangProvider";

export type PendingRemoval = {
  id: ModuleId;
  alsoRemoved: ModuleId[];
  setupDropTHB: number;
  monthlyDropTHB: number;
};

type Props = {
  pending: PendingRemoval | null;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function CascadeDialog({ pending, onConfirm, onCancel }: Props) {
  const { lang, t } = useLang();
  if (!pending) return null;

  const target = MODULE_BY_ID[pending.id];

  return (
    <Dialog open onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1, fontWeight: 700, pb: 1 }}>
        <WarningAmberIcon sx={{ color: "#f59e0b" }} />
        <span className="text-[16px]">
          {t("build.removeTitle")} “{target.name[lang as Lang]}”?
        </span>
      </DialogTitle>
      <DialogContent>
        <p className="text-[13px] text-slate-600">{t("build.removeBody")}</p>
        <ul className="mt-2 space-y-1">
          {pending.alsoRemoved.map((id) => (
            <li key={id} className="flex justify-between gap-3 text-[13px]">
              <span className="text-primary">{MODULE_BY_ID[id].name[lang as Lang]}</span>
              <span className="shrink-0 text-slate-400">
                −{formatTHB(MODULE_BY_ID[id].setupTHB)}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-[13px] font-bold text-amber-800">
          {t("build.priceDrops")} −{formatTHB(pending.setupDropTHB)}
          {pending.monthlyDropTHB > 0 && (
            <> · −{formatTHB(pending.monthlyDropTHB)}{t("build.perMonthShort")}</>
          )}
        </p>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5 }}>
        <Button onClick={onCancel} sx={{ textTransform: "none", color: "#64748b", fontWeight: 600 }}>
          {t("build.cancel")}
        </Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          sx={{
            textTransform: "none",
            fontWeight: 700,
            bgcolor: "#f59e0b",
            color: "#1e293b",
            borderRadius: "9999px",
            px: 2.5,
            "&:hover": { bgcolor: "#d97706" },
          }}
        >
          {t("build.removeAll")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
