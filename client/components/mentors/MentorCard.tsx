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
        <CardContent className="p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="size-10 ring-2 ring-white">
                {m.img && <AvatarImage src={m.img} alt={m.name} />}
                <AvatarFallback>{m.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-semibold truncate">{m.name}</p>
                <p className="text-xs text-muted-foreground truncate">{m.role} {m.company ? `@ ${m.company}` : ""}</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-1 text-xs whitespace-nowrap self-start sm:self-auto shrink-0">
              <BadgeCheck className="size-3 text-success" /> Verified
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2"><Stars value={m.rating} /><span className="text-muted-foreground">{m.rating.toFixed(1)}</span></div>
            <div className={"flex items-center gap-2 " + (m.online ? "text-success" : "text-muted-foreground")}>● <span>{m.online ? "Online" : "Offline"}</span></div>
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
