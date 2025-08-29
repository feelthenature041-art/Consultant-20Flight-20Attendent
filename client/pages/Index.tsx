import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star as StarIcon, BadgeCheck, Wallet, Route, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Stars } from "@/components/Stars";
import { DemoResponse } from "@shared/api";

const mentors = [
  {
    name: "Meera Iyer",
    role: "Senior Cabin Crew @ Emirates",
    tags: ["Cabin Crew", "Interview", "Grooming"],
    price: 39,
    rating: 4.8,
    years: 6,
    online: true,
    img: "/placeholder.svg",
  },
  {
    name: "Arjun Malhotra",
    role: "Cabin Crew Trainer @ IndiGo",
    tags: ["Interview Prep", "Service Excellence", "Resume"],
    price: 49,
    rating: 4.9,
    years: 9,
    online: true,
    img: undefined,
  },
  {
    name: "Sara Khan",
    role: "Flight Attendant @ Air India",
    tags: ["Cabin Crew", "International Routes", "English Skills"],
    price: 29,
    rating: 4.7,
    years: 4,
    online: false,
    img: undefined,
  },
  {
    name: "Daniel Lee",
    role: "Purser @ Singapore Airlines",
    tags: ["Leadership", "Cabin Safety", "Career Roadmap"],
    price: 69,
    rating: 4.9,
    years: 11,
    online: true,
    img: undefined,
  },
];

const testimonials = [
  {
    quote:
      "Booked a 30-min session and walked away with a clear 3-month roadmap. Best ₹499 I've spent.",
    name: "Sanya, Career Switcher",
    rating: 5,
  },
  {
    quote:
      "The chat teaser helped me ask quick questions before booking. Zero friction.",
    name: "Arjun, College Grad",
    rating: 5,
  },
  {
    quote:
      "My mentor shared a step-by-step plan and mock interview tips. Got the offer!",
    name: "Karthik, SDE",
    rating: 5,
  },
];


export default function Index() {
  const [exampleFromServer, setExampleFromServer] = useState("");
  useEffect(() => {
    const fetchDemo = async () => {
      try {
        const response = await fetch("/api/demo");
        const data = (await response.json()) as DemoResponse;
        setExampleFromServer(data.message);
      } catch {
        /* no-op */
      }
    };
    fetchDemo();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(74,144,226,0.25),transparent_60%)]" />
        <div className="container grid gap-10 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary text-xs font-medium">
              <BadgeCheck className="size-3.5" /> Mentors verified by Guided
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Talk to professionals. Get your roadmap.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-prose">
              Real professionals. Real guidance. Real careers. Chat with flight attendant mentors, book paid 1:1 calls, and leave with an actionable plan.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" data-analytics="cta_hero_browse">
                <Link to="/mentors">Browse Mentors</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" data-analytics="cta_hero_book">
                <Link to="/contact">Book a Session</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Stars value={5} /> <span>Trusted by 1,000+ seekers</span></div>
              <div className="hidden md:block">•</div>
              <div className="hidden md:flex items-center gap-2"><Badge variant="secondary">Refunds</Badge> <span>Policy-backed</span></div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border bg-white p-4  shadow-[0_10px_30px_-10px_rgba(74,144,226,0.35)]">
              <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-primary/15 via-white to-primary/10 grid place-items-center">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">MVP call flow</p>
                  <p className="font-semibold">Calendly → Zoom/Meet</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-success/10 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Step 1</p>
                  <p className="font-medium">Choose Mentor</p>
                </div>
                <div className="rounded-lg bg-primary/10 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Step 2</p>
                  <p className="font-medium">Book & Pay</p>
                </div>
                <div className="rounded-lg bg-warning/10 p-3 text-center">
                  <p className="text-xs text-muted-foreground">Step 3</p>
                  <p className="font-medium">Get Roadmap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it works */}
      <section className="container py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 hover:shadow-md transition-shadow">
            <CardContent className="p-0 flex items-start gap-4">
              <div className="rounded-lg bg-primary/10 p-2 text-primary"><BadgeCheck className="size-5" /></div>
              <div>
                <h3 className="font-semibold text-lg">Verified Mentors</h3>
                <p className="text-muted-foreground text-sm">ID checked, work history verified by Guided.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-md transition-shadow">
            <CardContent className="p-0 flex items-start gap-4">
              <div className="rounded-lg bg-success/10 p-2 text-success"><Wallet className="size-5" /></div>
              <div>
                <h3 className="font-semibold text-lg">Affordable 1:1</h3>
                <p className="text-muted-foreground text-sm">Starter pricing from ₹499 for 30 minutes.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="p-6 hover:shadow-md transition-shadow">
            <CardContent className="p-0 flex items-start gap-4">
              <div className="rounded-lg bg-warning/10 p-2 text-warning"><Route className="size-5" /></div>
              <div>
                <h3 className="font-semibold text-lg">Actionable Roadmaps</h3>
                <p className="text-muted-foreground text-sm">Leave each session with a concrete next-steps PDF.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Mentors */}
      <section className="bg-gradient-to-b from-white to-primary/5 py-16 md:py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Featured Flight Attendant Mentors</h2>
              <p className="text-muted-foreground">Handpicked experts ready to help.</p>
            </div>
            <Button asChild variant="ghost" className="hidden md:inline-flex">
              <Link to="/mentors">View all <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.slice(0, 4).map((m) => (
              <div key={m.name} className="group relative">
                <Card className="overflow-hidden">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <Avatar className="size-12">
                        {m.img && <AvatarImage src={m.img} alt={m.name} />}
                        <AvatarFallback>{m.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="font-semibold truncate">{m.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{m.role}</p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2"><Stars value={m.rating} /><span className="text-muted-foreground">{m.rating.toFixed(1)}</span></div>
                      <div className={cn("flex items-center gap-2", m.online ? "text-success" : "text-muted-foreground")}>● <span>{m.online ? "Online" : "Offline"}</span></div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {m.tags.map((t) => (
                        <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-sm"><span className="font-semibold">₹{m.price}</span> / 30m</p>
                      <p className="text-xs text-muted-foreground">{m.years} yrs exp</p>
                    </div>
                  </CardContent>
                </Card>
                <div className="pointer-events-none absolute inset-0 flex items-end justify-center gap-2 bg-black/0 p-4 opacity-0 transition-all group-hover:pointer-events-auto group-hover:bg-black/40 group-hover:opacity-100">
                  <Button asChild size="sm" variant="secondary" className="pointer-events-auto">
                    <Link to="/mentors">View Profile</Link>
                  </Button>
                  <Button asChild size="sm" className="pointer-events-auto">
                    <Link to="/mentors">Chat</Link>
                  </Button>
                  <Button asChild size="sm" className="pointer-events-auto">
                    <Link to="/contact">Book Call</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">What seekers say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center gap-2 text-warning">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <StarIcon key={j} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">“{t.quote}”</p>
              <p className="mt-3 text-sm font-medium">{t.name}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Closing banner */}
      <section className="py-14">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground shadow-lg">
            <div className="absolute -right-16 -top-16 size-64 rounded-full bg-white/10 blur-2xl" />
            <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h3 className="text-2xl font-bold">Ready to get guidance?</h3>
                <p className="text-primary-foreground/90">Find a mentor you trust and book a 1:1 call today.</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  <Badge className="bg-white text-foreground hover:bg-white">Mentors verified</Badge>
                  <Badge className="bg-white text-foreground hover:bg-white">Secure payments</Badge>
                  <Badge className="bg-white text-foreground hover:bg-white">Refund policy</Badge>
                </div>
              </div>
              <div className="flex gap-3">
                <Button asChild size="lg" variant="secondary" className="text-primary">
                  <Link to="/mentors">Find a mentor</Link>
                </Button>
                <Button asChild size="lg">
                  <Link to="/contact">Book a 30-min Call</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <p className="sr-only">{exampleFromServer}</p>
    </div>
  );
}
