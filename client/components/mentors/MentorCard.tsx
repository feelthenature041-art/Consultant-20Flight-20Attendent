import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Stars } from "@/components/Stars";
import { Mentor } from "@/data/mentors";
import { BadgeCheck } from "lucide-react";
import { RechargeDialog } from "@/components/wallet/RechargeDialog";

export function MentorCard({ m }: { m: Mentor }) {
  const [promptOpen, setPromptOpen] = useState(false);
  const [intent, setIntent] = useState<"chat" | "call" | null>(null);
  const onChat = () => {
    setIntent("chat");
    setPromptOpen(true);
  };
  const onCall = () => {
    setIntent("call");
    setPromptOpen(true);
  };
  return (
    <div className="group relative transition-transform duration-200 hover:-translate-y-0.5 h-full">
      <Card className="overflow-hidden h-full flex flex-col">
        <CardContent className="p-5 flex-1">
          <div className="flex items-start gap-3">
            <div className="flex items-center gap-3">
              <Avatar className="size-10 ring-2 ring-white">
                {m.img && <AvatarImage src={m.img} alt={m.name} />}
                <AvatarFallback>
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-semibold truncate flex items-center gap-2">
                  <span className="truncate">{m.name}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] sm:text-xs shrink-0">
                    <BadgeCheck className="size-3 text-success" />
                    Verified
                  </span>
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {m.role} {m.company ? `@ ${m.company}` : ""}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <Stars value={m.rating} />
              <span className="text-muted-foreground">
                {m.rating.toFixed(1)}
              </span>
            </div>
            <div
              className={
                "flex items-center gap-2 " +
                (m.online ? "text-success" : "text-muted-foreground")
              }
            >
              ● <span>{m.online ? "Online" : "Offline"}</span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {m.tags.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-full">
                {t}
              </Badge>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm">
              <span className="font-semibold">₹{m.price}</span> / 30m
            </p>
            <p className="text-xs text-muted-foreground">{m.years} yrs exp</p>
          </div>
        </CardContent>
        <CardFooter className="bg-card p-4 border-t">
          <div className="w-full grid grid-cols-2 gap-2">
            <Button size="sm" className="w-full" onClick={onChat}>
              Chat Now
            </Button>
            <Button size="sm" className="w-full" onClick={onCall}>
              Call
            </Button>
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="w-full col-span-2"
            >
              <Link to={`/mentor/${m.id}`}>View Profile</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <RechargeDialog
        open={promptOpen}
        onOpenChange={setPromptOpen}
        intent={intent}
      />
    </div>
  );
}
