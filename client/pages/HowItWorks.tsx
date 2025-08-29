import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

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
          <h3 className="font-semibold">Book & Pay</h3>
          <p className="text-sm text-muted-foreground">Secure checkout. Instant confirmation.</p>
        </CardContent></Card>
        <Card><CardContent className="p-6 text-center space-y-2">
          <div className="mx-auto size-10 rounded-lg bg-warning/10 grid place-items-center">3</div>
          <h3 className="font-semibold">Get Guidance + Roadmap</h3>
          <p className="text-sm text-muted-foreground">Leave with a step-by-step plan.</p>
        </CardContent></Card>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Pricing</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Starter</h3>
              <p className="text-3xl font-bold mt-2">₹499<span className="text-sm text-muted-foreground"> / 30m</span></p>
              <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                <li>Chat teaser unlock</li>
                <li>Roadmap highlights</li>
                <li>Follow-up tips</li>
              </ul>
              <Button asChild className="mt-6 w-full"><Link to="/mentors">Find a mentor</Link></Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">Pro</h3>
              <p className="text-3xl font-bold mt-2">₹899<span className="text-sm text-muted-foreground"> / 60m</span></p>
              <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                <li>Full chat unlock</li>
                <li>Detailed roadmap PDF</li>
                <li>Mock interview</li>
              </ul>
              <Button asChild className="mt-6 w-full"><Link to="/mentors">Book a mentor</Link></Button>
            </CardContent>
          </Card>
        </div>
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
