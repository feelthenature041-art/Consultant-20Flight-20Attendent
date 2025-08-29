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
import { mentors as DATA } from "@/data/mentors";
import { MentorCard } from "@/components/mentors/MentorCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

/* homepage local sample mentors kept earlier is no longer needed */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
          </div>
          <div className="relative">
            <div className="rounded-2xl border overflow-hidden shadow-[0_10px_30px_-10px_rgba(74,144,226,0.35)]">
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5778230/pexels-photo-5778230.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Female flight attendant in uniform inside airplane cabin"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/20 to-primary/20" />
                <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/40 blur-3xl opacity-40 [animation:float_8s_ease-in-out_infinite]" />
                <div className="pointer-events-none absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-warning/50 blur-3xl opacity-40 [animation:float_10s_ease-in-out_infinite]" style={{animationDelay: '1s'}} />
                <svg aria-hidden className="absolute inset-0 m-auto size-[140%] -translate-x-[20%] text-white/40 mix-blend-overlay [animation:rotate-slow_40s_linear_infinite]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.4">
                  <circle cx="100" cy="100" r="30" />
                  <circle cx="100" cy="100" r="60" />
                  <circle cx="100" cy="100" r="90" />
                  <line x1="0" y1="100" x2="200" y2="100" />
                  <line x1="100" y1="0" x2="100" y2="200" />
                </svg>
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid place-items-center rounded-full border bg-white/70 p-6 shadow-sm backdrop-blur">
                    <div className="text-3xl">✈️</div>
                    <p className="mt-2 text-xs text-muted-foreground [animation:pulse-soft_3s_ease-in-out_infinite]">Career GPS for cabin crew</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-success/10 p-4 text-center">
            <p className="text-xs text-muted-foreground">Step 1</p>
            <p className="font-medium">Choose Mentor</p>
          </div>
          <div className="rounded-lg bg-primary/10 p-4 text-center">
            <p className="text-xs text-muted-foreground">Step 2</p>
            <p className="font-medium">Book & Pay</p>
          </div>
          <div className="rounded-lg bg-warning/10 p-4 text-center">
            <p className="text-xs text-muted-foreground">Step 3</p>
            <p className="font-medium">Get Roadmap</p>
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
          <Carousel opts={{ align: "start" }}>
            <CarouselContent>
              {DATA.map((m) => (
                <CarouselItem key={m.id} className="md:basis-1/2 lg:basis-1/3">
                  <MentorCard m={m} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
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
