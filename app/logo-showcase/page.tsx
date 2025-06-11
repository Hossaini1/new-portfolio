import type React from "react"
import { Logo, LogoTechMinimal, LogoAngularTech, LogoGeometricInitials, LogoUltraTech } from "@/components/logo"

export default function LogoShowcasePage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Logo Varianten</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <LogoCard title="Standard Logo" description="Hexagonales Tech-Design">
            <Logo size="lg" />
          </LogoCard>

          <LogoCard title="Tech Minimal" description="Vereinfachtes geometrisches Design">
            <LogoTechMinimal size="lg" />
          </LogoCard>

          <LogoCard title="Angular Tech" description="Eckiges Tech-Design">
            <LogoAngularTech size="lg" />
          </LogoCard>

          <LogoCard title="Geometric Initials" description="Initialen im Hexagon">
            <LogoGeometricInitials size="lg" />
          </LogoCard>

          <LogoCard title="Ultra Tech" description="Modernes Tech-Logo">
            <LogoUltraTech size="lg" />
          </LogoCard>
        </div>
      </div>
    </div>
  )
}

function LogoCard({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="border rounded-lg p-6 flex flex-col items-center space-y-4 bg-card">
      <div className="p-6 bg-muted/50 rounded-lg flex items-center justify-center">{children}</div>
      <div className="text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
