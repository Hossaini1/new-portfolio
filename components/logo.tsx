"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <Link href="/" className="flex items-center space-x-3 group">
      {/* Tech Geometric Logo - Very similar to reference */}
      <div
        className={cn(
          "relative flex items-center justify-center transition-all duration-300 group-hover:scale-105",
          sizeClasses[size],
          className,
        )}
      >
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <g fill="currentColor" className="text-foreground transition-all duration-300 group-hover:text-primary">
            {/* Hexagonal outer shape */}
            <path d="M20 5 L32 12 L32 28 L20 35 L8 28 L8 12 Z" />

            {/* Inner cutout - creates negative space */}
            <path
              d="M20 10 L28 14.5 L28 25.5 L20 30 L12 25.5 L12 14.5 Z"
              fill="white"
              className="dark:fill-background"
            />

            {/* Left diagonal line */}
            <path d="M12 14.5 L20 20 L20 30" />

            {/* Right diagonal line */}
            <path d="M28 14.5 L20 20" />
          </g>
        </svg>
      </div>

      {/* Logo Text */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-bold tracking-tight text-foreground transition-all duration-300 group-hover:text-primary",
              textSizeClasses[size],
            )}
          >
            Ihr Name
          </span>
          <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Developer</span>
        </div>
      )}
    </Link>
  )
}

// Modern Tech Logo - Simplified geometric
export function LogoTechMinimal({ className, showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <div
        className={cn(
          "relative flex items-center justify-center transition-all duration-300 group-hover:scale-105",
          sizeClasses[size],
          className,
        )}
      >
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <g className="text-foreground transition-all duration-300 group-hover:text-primary">
            {/* Outer shape */}
            <path d="M8 8 L32 8 L32 32 L8 32 Z" fill="currentColor" />

            {/* Inner cutout */}
            <path d="M14 14 L26 14 L26 26 L14 26 Z" fill="white" className="dark:fill-background" />

            {/* Diagonal line */}
            <path d="M8 8 L26 26" stroke="currentColor" strokeWidth="4" fill="none" />

            {/* Horizontal line */}
            <path d="M14 20 L32 20" stroke="currentColor" strokeWidth="4" fill="none" />
          </g>
        </svg>
      </div>

      {showText && (
        <span className="text-xl font-bold text-foreground tracking-tight transition-all duration-300 group-hover:text-primary">
          Ihr Name
        </span>
      )}
    </Link>
  )
}

// Angular Tech Logo - Very close to reference
export function LogoAngularTech({ className, showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <div
        className={cn(
          "relative flex items-center justify-center transition-all duration-300 group-hover:scale-105",
          sizeClasses[size],
          className,
        )}
      >
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <g fill="currentColor" className="text-foreground transition-all duration-300 group-hover:text-primary">
            {/* Main shape */}
            <path d="M8 8 L32 8 L32 16 L24 16 L24 24 L16 24 L16 32 L8 32 Z" />

            {/* Inner element */}
            <path d="M16 16 L32 16 L32 32 L24 32 L24 24 L16 24 Z" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-foreground tracking-tight transition-all duration-300 group-hover:text-primary">
            Ihr Name
          </span>
          <span className="text-xs text-muted-foreground font-medium tracking-wider">DEVELOPER</span>
        </div>
      )}
    </Link>
  )
}

// Geometric Initials - Very similar to reference
export function LogoGeometricInitials({ className, showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <div
        className={cn(
          "relative flex items-center justify-center transition-all duration-300 group-hover:scale-105",
          sizeClasses[size],
          className,
        )}
      >
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <g fill="currentColor" className="text-foreground transition-all duration-300 group-hover:text-primary">
            {/* Hexagonal container */}
            <path d="M20 5 L32 12 L32 28 L20 35 L8 28 L8 12 Z" />

            {/* Letter cutouts - customize with your initials */}
            <path d="M15 12 L15 28 L18 28 L18 12 Z" fill="white" className="dark:fill-background" />
            <path d="M22 12 L22 28 L25 28 L25 12 Z" fill="white" className="dark:fill-background" />
            <path d="M15 19 L25 19 L25 22 L15 22 Z" fill="white" className="dark:fill-background" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-foreground tracking-tight transition-all duration-300 group-hover:text-primary">
            Ihr Name
          </span>
          <span className="text-xs text-muted-foreground font-medium tracking-wider">PORTFOLIO</span>
        </div>
      )}
    </Link>
  )
}

// Ultra Modern Tech Logo - Closest to reference
export function LogoUltraTech({ className, showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <Link href="/" className="flex items-center space-x-3 group">
      <div
        className={cn(
          "relative flex items-center justify-center transition-all duration-300 group-hover:scale-105",
          sizeClasses[size],
          className,
        )}
      >
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <g fill="currentColor" className="text-foreground transition-all duration-300 group-hover:text-primary">
            {/* Top bar */}
            <path d="M10 10 L30 10 L26 14 L14 14 Z" />

            {/* Left vertical */}
            <path d="M10 10 L14 14 L14 26 L10 30 Z" />

            {/* Bottom right */}
            <path d="M14 26 L26 26 L30 30 L10 30 Z" />

            {/* Inner shape */}
            <path d="M18 18 L26 18 L26 26 L22 26 L22 22 L18 22 Z" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="text-xl font-bold text-foreground tracking-tight transition-all duration-300 group-hover:text-primary">
            Ihr Name
          </span>
          <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Developer</span>
        </div>
      )}
    </Link>
  )
}
