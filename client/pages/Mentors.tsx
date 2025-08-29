import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mentors as DATA, Mentor } from "@/data/mentors";
import { MentorCard } from "@/components/mentors/MentorCard";

export default function Mentors() {
  const [q, setQ] = useState("");
  const [maxPrice, setMaxPrice] = useState(100);
  const [minYears, setMinYears] = useState(0);
  const [availability, setAvailability] = useState<"any" | "online">("any");
  const [language, setLanguage] = useState("any");
  const [gender, setGender] = useState("any");
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState("top");

  const clear = () => {
    setQ("");
    setMaxPrice(100);
    setMinYears(0);
    setAvailability("any");
    setLanguage("any");
    setGender("any");
    setMinRating(0);
  };

  const filtered = useMemo(() => {
    return DATA.filter((m) => {
      const hay = `${m.name} ${m.role} ${m.company ?? ""} ${m.tags.join(" ")}`.toLowerCase();
      if (q && !hay.includes(q.toLowerCase())) return false;
      if (m.price > maxPrice) return false;
      if (m.years < minYears) return false;
      if (availability === "online" && !m.online) return false;
      if (language !== "any" && !m.languages.includes(language)) return false;
      if (gender !== "any" && m.gender !== gender) return false;
      if (m.rating < minRating) return false;
      return true;
    });
  }, [q, maxPrice, minYears, availability, language, gender, minRating]);

  return (
    <section className="container py-10 md:py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Find a Flight Attendant Mentor</h1>
          <p className="text-muted-foreground">Filters apply to the cabin-crew category only.</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <Badge onClick={() => setAvailability("online")} className="cursor-pointer">Available now</Badge>
            <Badge onClick={() => setMinRating(4.5)} className="cursor-pointer">4.5★+</Badge>
            <Badge onClick={() => setMaxPrice(50)} className="cursor-pointer">Budget ₹≤50</Badge>
            <Badge variant="secondary" className="cursor-pointer" onClick={() => { setAvailability("any"); setMinRating(0); setMaxPrice(100); }}>Reset</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort</span>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="top">Top rated</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="exp-desc">Experience: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-xl border p-4 space-y-4 h-fit">
          <Input placeholder="Search by name, airline, skill" value={q} onChange={(e) => setQ(e.target.value)} />

          <div>
            <p className="text-sm font-medium">Price (max ₹/30m)</p>
            <div className="pt-2">
              <Slider min={0} max={100} step={1} value={[maxPrice]} onValueChange={(v) => setMaxPrice(v[0])} />
              <div className="mt-1 text-xs text-muted-foreground">Up to ₹{maxPrice}</div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Experience (min years)</p>
            <div className="pt-2">
              <Slider min={0} max={20} step={1} value={[minYears]} onValueChange={(v) => setMinYears(v[0])} />
              <div className="mt-1 text-xs text-muted-foreground">{minYears}+ years</div>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium">Availability</p>
            <Select value={availability} onValueChange={(v) => setAvailability(v as any)}>
              <SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="online">Online now</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-sm font-medium">Language</p>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Hindi">Hindi</SelectItem>
                <SelectItem value="Arabic">Arabic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-sm font-medium">Gender</p>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger><SelectValue placeholder="Any" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="text-sm font-medium">Rating (min)</p>
            <div className="pt-2">
              <Slider min={0} max={5} step={0.5} value={[minRating]} onValueChange={(v) => setMinRating(v[0])} />
              <div className="mt-1 text-xs text-muted-foreground">{minRating}+</div>
            </div>
          </div>

          <div className="pt-2 flex gap-2">
            <Button variant="secondary" onClick={clear} className="flex-1">Clear filters</Button>
          </div>
        </div>

        <div className="md:col-span-3">
          {filtered.length === 0 ? (
            <div className="rounded-xl border p-10 text-center text-sm text-muted-foreground">
              <div className="mx-auto mb-3 size-12 rounded-full bg-primary/10 grid place-items-center">✈️</div>
              No mentors match your filters. <Button variant="link" onClick={clear}>Clear filters</Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((m) => (
                <MentorCard key={m.id} m={m} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
