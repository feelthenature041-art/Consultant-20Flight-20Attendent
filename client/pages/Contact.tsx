import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [params] = useSearchParams();
  const prefill = useMemo(
    () => ({
      mentor: params.get("mentor") ?? "",
      duration: params.get("duration") ?? "30",
    }),
    [params],
  );

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We’ll get back with scheduling details.");
  };

  return (
    <section className="container mx-auto max-w-[90%] md:max-w-[80%] py-12 md:py-16 grid gap-8 md:grid-cols-2">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Contact / Book
        </h1>
        <p className="text-muted-foreground">
          Tell us your goal. We’ll connect you with a verified flight attendant
          mentor.
        </p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="interest">Interest</Label>
            <Input
              id="interest"
              name="interest"
              placeholder="Cabin crew interview, grooming, etc."
              defaultValue={prefill.mentor ? `Mentor: ${prefill.mentor}` : ""}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Share a bit about your background and goals"
            />
          </div>
          <div className="flex gap-3">
            <Button type="submit">Submit</Button>
            <Button type="button" variant="secondary">
              WhatsApp
            </Button>
          </div>
        </form>
      </div>
      <div>
        <div className="rounded-xl border p-4">
          <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-primary/15 via-white to-primary/10 grid place-items-center text-sm text-muted-foreground">
            Calendly embed placeholder — add your link and we’ll integrate.
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Payment flow: Book via Calendly → Zoom/Meet link sent by email.
          </p>
        </div>
      </div>
    </section>
  );
}
