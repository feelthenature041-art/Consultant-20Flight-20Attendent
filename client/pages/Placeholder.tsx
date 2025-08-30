import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Placeholder({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="container mx-auto max-w-[80%] py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-muted-foreground">
          {description ??
            "This page is coming next. Tell me to generate it when you’re ready and I’ll build it to spec."}
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button asChild>
            <Link to="/mentors">Browse Mentors</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link to="/">Back Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
