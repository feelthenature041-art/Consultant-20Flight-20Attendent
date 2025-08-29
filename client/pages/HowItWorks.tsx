import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useWallet } from "@/hooks/use-wallet";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

function WalletSection() {
  const { balance, addFunds } = useWallet();
  const [custom, setCustom] = useState(499);
  const add = (amt: number) => () => addFunds(amt);
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold">Your Wallet</h3>
          <p className="text-3xl font-bold mt-2">₹{balance}</p>
          <p className="text-sm text-muted-foreground mt-2">Funds are used to book mentor calls. Session fees are deducted from your wallet.</p>
          <Button asChild className="mt-6 w-full"><Link to="/mentors">Browse mentors</Link></Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-semibold">Recharge</h3>
          <div className="grid grid-cols-3 gap-2">
            {[199, 499, 999].map((v) => (
              <Button key={v} variant="secondary" onClick={add(v)}>+ ₹{v}</Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Input type="number" min={1} value={custom} onChange={(e) => setCustom(Number(e.target.value))} className="[appearance:textfield]" />
            <Button onClick={() => addFunds(custom)}>Add Funds</Button>
          </div>
          <p className="text-xs text-muted-foreground">Tip: Recharge once, then book instantly without repeated checkout.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="container py-12 md:py-16 space-y-10">
      <div className="grid gap-6 md:grid-cols-3">
        <Card><CardContent className="p-6 text-center space-y-2">
          <div className="mx-auto size-10 rounded-lg bg-success/10 grid place-items-center">1</div>
          <h3 className="font-semibold">Choose Mentor</h3>
          <p className="text-sm text-muted-foreground">Browse verified flight attendant mentors.</p>
        </CardContent></Card>
        <Card><CardContent className="p-6 text-center space-y-2">
          <div className="mx-auto size-10 rounded-lg bg-primary/10 grid place-items-center">2</div>
          <h3 className="font-semibold">Recharge Wallet</h3>
          <p className="text-sm text-muted-foreground">Add funds, then book instantly.</p>
        </CardContent></Card>
        <Card><CardContent className="p-6 text-center space-y-2">
          <div className="mx-auto size-10 rounded-lg bg-warning/10 grid place-items-center">3</div>
          <h3 className="font-semibold">Get Guidance + Roadmap</h3>
          <p className="text-sm text-muted-foreground">Leave with a step-by-step plan.</p>
        </CardContent></Card>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Wallet & Recharge</h2>
        <WalletSection />
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">FAQ</h2>
        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="v1">
            <AccordionTrigger>How are mentors verified?</AccordionTrigger>
            <AccordionContent>ID check and work history verification.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="v2">
            <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
            <AccordionContent>Yes, see our refund policy. Mentor no-shows are fully refunded.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="v3">
            <AccordionTrigger>What do I receive after a call?</AccordionTrigger>
            <AccordionContent>Roadmap PDF or notes tailored to your goals.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="rounded-2xl border p-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h3 className="text-2xl font-bold">Ready to find your mentor?</h3>
            <p>Flight attendant experts are a click away.</p>
          </div>
          <Button asChild variant="secondary" className="text-primary"><Link to="/mentors">Find a mentor</Link></Button>
        </div>
      </div>
    </section>
  );
}
