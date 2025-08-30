import { useParams, Link, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { RechargeDialog } from "@/components/wallet/RechargeDialog";
import { mentors } from "@/data/mentors";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Stars } from "@/components/Stars";
import { BadgeCheck } from "lucide-react";

export default function MentorProfile() {
  const { id } = useParams();
  const [params] = useSearchParams();
  const m = useMemo(() => mentors.find((x) => x.id === id), [id]);
  const teaserChat = params.get("chat") === "teaser";
  const [promptOpen, setPromptOpen] = useState(false);
  const [intent, setIntent] = useState<"chat" | "call" | null>(null);
  const openChat = () => {
    setIntent("chat");
    setPromptOpen(true);
  };
  const openCall = () => {
    setIntent("call");
    setPromptOpen(true);
  };

  if (!m)
    return (
      <section className="container mx-auto max-w-[96%] md:max-w-[80%] py-16">
        <p>Mentor not found.</p>
      </section>
    );

  return (
    <section className="container mx-auto max-w-[96%] md:max-w-[80%] py-10 md:py-16 grid gap-8 lg:grid-cols-[1fr_360px]">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {m.name}
          </h1>
          <Badge className="inline-flex items-center gap-1">
            <BadgeCheck className="size-3" /> Verified
          </Badge>
        </div>
        <p className="text-muted-foreground">
          {m.role}
          {m.company ? ` @ ${m.company}` : ""} • {m.years} yrs •{" "}
          <span className="inline-flex items-center gap-1">
            <Stars value={m.rating} />
            {m.rating.toFixed(1)}
          </span>
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {m.tags.map((t) => (
            <Badge key={t} variant="secondary" className="rounded-full">
              {t}
            </Badge>
          ))}
        </div>

        <Tabs defaultValue="overview" className="mt-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="availability">Availability</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">{m.bio}</p>
                <Separator className="my-4" />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold mb-2">Specialties</h3>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      {m.specialties.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Outcomes</h3>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      {m.outcomes.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Sample questions</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {m.sampleQuestions.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="availability">
            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground">
                  Calendar integration coming soon. For now, book via Contact
                  page or mentor-provided Calendly after chat.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-lg bg-success/10 p-3">Weekdays</div>
                  <div className="rounded-lg bg-primary/10 p-3">Evenings</div>
                  <div className="rounded-lg bg-warning/10 p-3">
                    Weekend slots
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            {m.reviews.map((r, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Stars value={r.rating} />{" "}
                    <span className="text-sm font-medium">{r.name}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="policies">
            <Card>
              <CardContent className="p-6">
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {m.policies.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <aside className="space-y-4">
        <Card>
          <CardContent className="p-6 space-y-3">
            <div className="text-2xl font-semibold">
              ₹{m.price}{" "}
              <span className="text-sm text-muted-foreground">/ 30m</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Languages: {m.languages.join(", ")}
            </div>
            <div className="flex gap-2 pt-2">
              <Button className="flex-1" onClick={openCall}>
                Book 30m Call
              </Button>
              <Button variant="secondary" className="flex-1" onClick={openCall}>
                Book 60m
              </Button>
            </div>
            <Button variant="ghost" className="w-full" onClick={openChat}>
              {teaserChat
                ? "Unlock full chat by booking"
                : "Start Chat (teaser)"}
            </Button>
            <RechargeDialog
              open={promptOpen}
              onOpenChange={setPromptOpen}
              intent={intent}
            />
            <Separator />
            <div className="text-xs text-muted-foreground">
              Mentor verified by Guided
            </div>
          </CardContent>
        </Card>
      </aside>
    </section>
  );
}
