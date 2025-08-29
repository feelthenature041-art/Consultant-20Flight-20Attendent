import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export function RechargeDialog({
  open,
  onOpenChange,
  intent,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  intent: "chat" | "call" | null;
}) {
  const title =
    intent === "call" ? "Recharge to book a call" : "Recharge to start chat";
  const desc =
    intent === "call"
      ? "Add funds to your wallet to book a 1:1 mentor call instantly."
      : "Add funds to your wallet to unlock chat and continue the conversation.";

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {desc} Your balance is used across sessions; unused balance remains
            in your wallet.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Link to="/pricing">Go to Wallet</Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
