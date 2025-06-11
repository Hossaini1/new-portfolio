"use client"

import { cn } from "@/lib/utils"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
// Import the specific logo variant you want to use
import { LogoUltraTech as Logo } from "@/components/logo"
import {
  Html,
  Css3,
  Javascript,
  Typescript,
  ReactLogo,
  Nextdotjs,
  Tailwindcss,
  Bootstrap,
  Nodedotjs,
  Mongodb,
  Php,
  Laravel,
  Mysql,
} from "@/components/tech-icons"

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = React.useState(false)
  const [mobileTutorialsOpen, setMobileTutorialsOpen] = React.useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-medium")}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#about" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-medium")}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#skills" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-medium")}>
                      Skills
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#projects" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-medium")}>
                      Projects
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button
                    variant="ghost"
                    className="h-10 px-4 py-2 flex items-center font-medium"
                    onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                  >
                    Tutorials <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#contact" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "font-medium")}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="ml-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 flex flex-col">
                <SheetHeader>
                  <SheetTitle className="font-semibold">Navigation</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto">
                  <div className="flex flex-col space-y-2 mt-6 pb-6">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start h-12 font-medium">
                        Home
                      </Button>
                    </Link>
                    <Link href="#about" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start h-12 font-medium">
                        About
                      </Button>
                    </Link>
                    <Link href="#skills" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start h-12 font-medium">
                        Skills
                      </Button>
                    </Link>
                    <Link href="#projects" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start h-12 font-medium">
                        Projects
                      </Button>
                    </Link>

                    {/* Mobile Tutorials Dropdown */}
                    <div className="space-y-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-between h-12 font-medium"
                        onClick={() => setMobileTutorialsOpen(!mobileTutorialsOpen)}
                      >
                        <span>Tutorials</span>
                        {mobileTutorialsOpen ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>

                      {mobileTutorialsOpen && (
                        <div className="pl-4 space-y-1">
                          <div className="space-y-1">
                            <h4 className="text-sm font-medium text-muted-foreground px-3 py-2">Frontend Grundlagen</h4>
                            <MobileTechItem
                              icon={<Html className="h-4 w-4 text-orange-500" />}
                              name="HTML"
                              href="#tutorials/html"
                              description="Struktur für eine Webseite"
                              onClick={() => setIsOpen(false)}
                            />
                            <MobileTechItem
                              icon={<Css3 className="h-4 w-4 text-blue-500" />}
                              name="CSS"
                              href="#tutorials/css"
                              description="Styling für Webseiten"
                              onClick={() => setIsOpen(false)}
                            />
                            <MobileTechItem
                              icon={<Javascript className="h-4 w-4 text-yellow-500" />}
                              name="JavaScript"
                              href="#tutorials/javascript"
                              description="Interaktivität für Webseiten"
                              onClick={() => setIsOpen(false)}
                            />
                            <MobileTechItem
                              icon={<Typescript className="h-4 w-4 text-blue-600" />}
                              name="TypeScript"
                              href="#tutorials/typescript"
                              description="Typsicheres JavaScript"
                              onClick={() => setIsOpen(false)}
                            />
                          </div>

                          <div className="space-y-1 pt-2">
                            <h4 className="text-sm font-medium text-muted-foreground px-3 py-2">Frontend Frameworks</h4>
                            <MobileTechItem
                              icon={<ReactLogo className="h-4 w-4 text-cyan-500" />}
                              name="React"
                              href="#tutorials/react"
                              description="UI-Komponenten-Bibliothek"
                              onClick={() => setIsOpen(false)}
                            />
                            <MobileTechItem
                              icon={<Nextdotjs className="h-4 w-4 text-black dark:text-white" />}
                              name="Next.js"
                              href="#tutorials/nextjs"
                              description="React-Framework für Produktion"
                              onClick={() => setIsOpen(false)}
                            />
                            <MobileTechItem
                              icon={<Tailwindcss className="h-4 w-4 text-teal-500" />}
                              name="Tailwind CSS"
                              href="#tutorials/tailwindcss"
                              description="Utility-First CSS-Framework"
                              onClick={() => setIsOpen(false)}
                            />
                            <MobileTechItem
                              icon={<Bootstrap className="h-4 w-4 text-purple-600" />}
                              name="Bootstrap"
                              href="#tutorials/bootstrap"
                              description="Responsive Design-Framework"
                              onClick={() => setIsOpen(false)}
                            />
                          </div>

                          <div className="space-y-1 pt-2">
                            <h4 className="text-sm font-medium text-muted-foreground px-3 py-2">Backend</h4>
                            <MobileTechItem
                              icon={<Nodedotjs className="h-4 w-4 text-green-600" />}
                              name="Node.js"
                              href="#tutorials/nodejs"
                              description="JavaScript auf dem Server"
                              onClick={() => setIsOpen(false)}
                            />
                            <MobileTechItem
                              icon={<Php className="h-4 w-4 text-indigo-600" />}
                              name="PHP"
                              href="#tutorials/php"
                              description="Serverseitige Skriptsprache"
                              onClick={() => setIsOpen(false)}
                            />
                            <MobileTechItem
                              icon={<Laravel className="h-4 w-4 text-red-500" />}
                              name="Laravel"
                              href="#tutorials/laravel"
                              description="PHP-Framework für Webanwendungen"
                              onClick={() => setIsOpen(false)}
                            />
                          </div>

                          <div className="space-y-1 pt-2">
                            <h4 className="text-sm font-medium text-muted-foreground px-3 py-2">Datenbanken</h4>
                            <MobileTechItem
                              icon={<Mongodb className="h-4 w-4 text-green-500" />}
                              name="MongoDB"
                              href="#tutorials/mongodb"
                              description="NoSQL-Dokumentendatenbank"
                              onClick={() => setIsOpen(false)}
                            />
                            <MobileTechItem
                              icon={<Mysql className="h-4 w-4 text-blue-600" />}
                              name="MySQL"
                              href="#tutorials/mysql"
                              description="Relationale Datenbank"
                              onClick={() => setIsOpen(false)}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start h-12 font-medium">
                        Contact
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Megamenu Overlay */}
      {megaMenuOpen && <div className="fixed inset-0 z-30 bg-black/20" onClick={() => setMegaMenuOpen(false)} />}

      {/* Megamenu */}
      {megaMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-lg">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Frontend Grundlagen */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-primary border-b border-border/40 pb-2">
                  Frontend Grundlagen
                </h3>
                <div className="space-y-4">
                  <TechItem
                    icon={<Html className="h-8 w-8 text-orange-500" />}
                    name="HTML"
                    description="Struktur für eine Webseite"
                    href="#tutorials/html"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                  <TechItem
                    icon={<Css3 className="h-8 w-8 text-blue-500" />}
                    name="CSS"
                    description="Styling für Webseiten"
                    href="#tutorials/css"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                  <TechItem
                    icon={<Javascript className="h-8 w-8 text-yellow-500" />}
                    name="JavaScript"
                    description="Interaktivität für Webseiten"
                    href="#tutorials/javascript"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                  <TechItem
                    icon={<Typescript className="h-8 w-8 text-blue-600" />}
                    name="TypeScript"
                    description="Typsicheres JavaScript"
                    href="#tutorials/typescript"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                </div>
              </div>

              {/* Frontend Frameworks */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-primary border-b border-border/40 pb-2">
                  Frontend Frameworks
                </h3>
                <div className="space-y-4">
                  <TechItem
                    icon={<ReactLogo className="h-8 w-8 text-cyan-500" />}
                    name="React"
                    description="UI-Komponenten-Bibliothek"
                    href="#tutorials/react"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                  <TechItem
                    icon={<Nextdotjs className="h-8 w-8 text-black dark:text-white" />}
                    name="Next.js"
                    description="React-Framework für Produktion"
                    href="#tutorials/nextjs"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                  <TechItem
                    icon={<Tailwindcss className="h-8 w-8 text-teal-500" />}
                    name="Tailwind CSS"
                    description="Utility-First CSS-Framework"
                    href="#tutorials/tailwindcss"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                  <TechItem
                    icon={<Bootstrap className="h-8 w-8 text-purple-600" />}
                    name="Bootstrap"
                    description="Responsive Design-Framework"
                    href="#tutorials/bootstrap"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-primary border-b border-border/40 pb-2">Backend</h3>
                <div className="space-y-4">
                  <TechItem
                    icon={<Nodedotjs className="h-8 w-8 text-green-600" />}
                    name="Node.js"
                    description="JavaScript auf dem Server"
                    href="#tutorials/nodejs"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                  <TechItem
                    icon={<Php className="h-8 w-8 text-indigo-600" />}
                    name="PHP"
                    description="Serverseitige Skriptsprache"
                    href="#tutorials/php"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                  <TechItem
                    icon={<Laravel className="h-8 w-8 text-red-500" />}
                    name="Laravel"
                    description="PHP-Framework für Webanwendungen"
                    href="#tutorials/laravel"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                </div>
              </div>

              {/* Datenbanken */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-primary border-b border-border/40 pb-2">Datenbanken</h3>
                <div className="space-y-4">
                  <TechItem
                    icon={<Mongodb className="h-8 w-8 text-green-500" />}
                    name="MongoDB"
                    description="NoSQL-Dokumentendatenbank"
                    href="#tutorials/mongodb"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                  <TechItem
                    icon={<Mysql className="h-8 w-8 text-blue-600" />}
                    name="MySQL"
                    description="Relationale Datenbank"
                    href="#tutorials/mysql"
                    onClick={() => setMegaMenuOpen(false)}
                  />
                </div>
                <div className="pt-6">
                  <Button className="w-full font-medium" onClick={() => setMegaMenuOpen(false)}>
                    Alle Tutorials ansehen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function TechItem({
  icon,
  name,
  description,
  href,
  onClick,
}: {
  icon: React.ReactNode
  name: string
  description: string
  href: string
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
    >
      <div className="flex-shrink-0">{icon}</div>
      <div className="min-w-0 flex-1">
        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">{name}</h4>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </Link>
  )
}

function MobileTechItem({
  icon,
  name,
  description,
  href,
  onClick,
}: {
  icon: React.ReactNode
  name: string
  description: string
  href: string
  onClick: () => void
}) {
  return (
    <Link href={href} onClick={onClick}>
      <div className="flex items-center space-x-3 p-2 rounded-md hover:bg-muted/50 transition-all duration-300">
        <div className="flex-shrink-0">{icon}</div>
        <div className="min-w-0 flex-1">
          <div className="font-medium text-sm">{name}</div>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  )
}
