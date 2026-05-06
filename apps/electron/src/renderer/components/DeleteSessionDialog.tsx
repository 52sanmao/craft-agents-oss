import { useTranslation } from "react-i18next"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { useRegisterModal } from "@/context/ModalContext"

interface DeleteSessionDialogProps {
  open: boolean
  sessionName: string
  onConfirm: () => void
  onCancel: () => void
}

export function DeleteSessionDialog({
  open,
  sessionName,
  onConfirm,
  onCancel,
}: DeleteSessionDialogProps) {
  const { t } = useTranslation()

  useRegisterModal(open, onCancel)

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onCancel()}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Trash2 className="h-5 w-5 text-destructive" />
            {t("dialog.deleteSession.title")}
          </DialogTitle>
          <DialogDescription className="text-left pt-2">
            {t("dialog.deleteSession.description", { name: sessionName })}
          </DialogDescription>
        </DialogHeader>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-md p-3 text-sm">
          <p className="text-muted-foreground">
            {t("dialog.deleteSession.cannotUndo")}
          </p>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={onCancel}>
            {t("common.cancel")}
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            {t("dialog.deleteSession.confirm")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
