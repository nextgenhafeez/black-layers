import SiteLogo from "./site-logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <SiteLogo />

        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium">
            Contact
          </Link>
          <Link href="/admin/logo">
            <Button variant="outline" size="sm">
              Manage Logo
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
