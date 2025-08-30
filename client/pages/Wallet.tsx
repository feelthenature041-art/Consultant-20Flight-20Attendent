import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useWallet } from "@/hooks/use-wallet";
import { Wallet as WalletIcon, PlusCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

function WalletSection() {
  const { balance, addFunds } = useWallet();
  const [custom, setCustom] = useState(499);
  const add = (amt: number) => () => addFunds(amt);
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <Card>
        <CardContent className="p-6 space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
              <WalletIcon className="size-5" />
            </span>
            <h3 className="text-xl font-semibold">Your Wallet</h3>
          </div>
          <p className="text-4xl font-extrabold tracking-tight">₹{balance}</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="rounded-full">
              Instant booking
            </Badge>
            <Badge variant="secondary" className="rounded-full">
              No hidden fees
            </Badge>
            <Badge
              variant="secondary"
              className="rounded-full flex items-center gap-1"
            >
              <ShieldCheck className="size-3" /> Secure
            </Badge>
          </div>
          <Button asChild className="mt-2 w-full">
            <Link to="/mentors">Browse mentors</Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-9 items-center justify-center rounded-full bg-success/10 text-success">
              <PlusCircle className="size-5" />
            </span>
            <h3 className="text-xl font-semibold">Recharge</h3>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[199, 499, 999].map((v) => (
              <Button
                key={v}
                variant="secondary"
                onClick={add(v)}
                aria-label={`Add rupees ${v}`}
              >
                + ₹{v}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                ₹
              </span>
              <Input
                aria-label="Custom amount"
                type="number"
                min={1}
                value={custom}
                onChange={(e) => setCustom(Number(e.target.value))}
                className="pl-6 [appearance:textfield]"
              />
            </div>
            <Button onClick={() => addFunds(custom)}>Add Funds</Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Money stays in your wallet for future sessions.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Wallet() {
  return (
    <section className="container mx-auto max-w-[90%] md:max-w-[80%] py-12 md:py-16 space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Wallet & Recharge
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Recharge once, then book mentors instantly without repeated checkout.
        </p>
      </div>
      <WalletSection />
    </section>
  );
}
