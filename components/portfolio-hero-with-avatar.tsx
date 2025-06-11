"use client"
import RealisticAvatar from "./realistic-avatar"
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"

export default function PortfolioHeroWithAvatar() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, ich bin{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ihr Name
                </span>
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl leading-relaxed">
                Full Stack Developer mit Leidenschaft für moderne Webtechnologien und benutzerfreundliche Designs. Ich
                erstelle digitale Erlebnisse, die sowohl funktional als auch visuell ansprechend sind.
              </p>
            </div>

            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button size="lg" className="px-8 py-3">
                <Mail className="mr-2 h-5 w-5" />
                Kontakt aufnehmen
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Download className="mr-2 h-5 w-5" />
                CV herunterladen
              </Button>
            </div>

            <div className="flex gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">3+</div>
                <div className="text-sm text-gray-600">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Kundenzufriedenheit</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <RealisticAvatar />
          </div>
        </div>
      </div>
    </section>
  )
}
