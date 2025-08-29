import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-10 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-primary text-primary-foreground grid place-items-center font-bold shadow-sm">G</div>
            <span className="font-semibold text-lg tracking-tight">Guided</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">Real professionals. Real guidance. Real careers.</p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/how-it-works" className="hover:text-foreground">How it Works</Link></li>
            <li><Link to="/pricing" className="hover:text-foreground">Wallet</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/terms" className="hover:text-foreground">Terms</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy</Link></li>
            <li><Link to="/refunds" className="hover:text-foreground">Refunds</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground">Help Center</a></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><a href="#" className="hover:text-foreground" aria-label="Guided on Twitter">Social</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 flex items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Guided. All rights reserved.</p>
          <p>Mentors verified.</p>
        </div>
      </div>
    </footer>
  );
}
