import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Stars } from "@/components/Stars";
import { Mentor } from "@/data/mentors";
import { BadgeCheck } from "lucide-react";

export function MentorCard({ m }: { m: Mentor }) {
  return (
    <div className="group relative transition-transform duration-200 hover:-translate-y-0.5">
      <Card className="overflow-hidden">
        {/* Cover */}
        <div className="relative aspect-[3/2] w-full overflow-hidden">
          {m.cover ? (
            <img src={m.cover} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white to-primary/10" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/85 px-2 py-1 text-xs shadow">
            <BadgeCheck className="size-3 text-success" /> Verified
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-white/85 px-2 py-1 text-xs shadow">₹{m.price}/30m</div>
          <div className="absolute -bottom-6 left-4 flex items-center gap-3">
            <Avatar className="size-12 ring-2 ring-white">
              {m.img && <AvatarImage src={m.img} alt={m.name} />}
              <AvatarFallback>{m.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
            </Avatar>
            <div className="text-white drop-shadow">
              <p className="font-semibold leading-none">{m.name}</p>
              <p className="mt-0.5 text-[11px] opacity-90">{m.role} {m.company ? `@ ${m.company}` : ""}</p>
            </div>
          </div>
        </div>

        <CardContent className="p-5 pt-8">
          <div className="mt-2 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2"><Stars value={m.rating} /><span className="text-muted-foreground">{m.rating.toFixed(1)}</span></div>
            <div className={"flex items-center gap-2 " + (m.online ? "text-success" : "text-muted-foreground")}>● <span>{m.online ? "Online" : "Offline"}</span></div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {m.tags.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-full">{t}</Badge>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
            <span>Languages: {m.languages.join(", ")}</span>
            <span>{m.years} yrs exp</span>
          </div>
        </CardContent>
      </Card>
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center gap-2 bg-black/0 p-4 opacity-0 transition-all group-hover:pointer-events-auto group-hover:bg-black/40 group-hover:opacity-100">
        <Button asChild size="sm" variant="secondary" className="pointer-events-auto">
          <Link to={`/mentor/${m.id}`}>View Profile</Link>
        </Button>
        <Button asChild size="sm" className="pointer-events-auto">
          <Link to={`/mentor/${m.id}?chat=teaser`}>Chat</Link>
        </Button>
        <Button asChild size="sm" className="pointer-events-auto">
          <Link to={`/contact?mentor=${m.id}&duration=30`}>Book Call</Link>
        </Button>
      </div>
    </div>
  );
}
