import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin, ArrowRight, ExternalLink, Code, Palette, Server } from "lucide-react"
import RealisticAvatar from "@/components/realistic-avatar"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50 dark:from-slate-900 dark:via-blue-900 dark:to-amber-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, ich bin{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Ihr Name
                  </span>
                </h1>
                <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl leading-relaxed">
                  Full Stack Developer mit Leidenschaft für moderne Webtechnologien und benutzerfreundliche Designs. Ich
                  erstelle digitale Erlebnisse, die sowohl funktional als auch visuell ansprechend sind.
                </p>
              </div>

              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="#contact">
                  <Button size="lg" className="px-8 py-3">
                    <Mail className="mr-2 h-5 w-5" /> Kontakt aufnehmen
                  </Button>
                </Link>
                <Link href="#projects">
                  <Button variant="outline" size="lg" className="px-8 py-3">
                    <ArrowRight className="mr-2 h-5 w-5" /> Meine Projekte
                  </Button>
                </Link>
              </div>

              <div className="flex gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projekte</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">3+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Jahre Erfahrung</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Zufriedenheit</div>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:your.email@example.com">
                  <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <RealisticAvatar />

                {/* Decorative elements around avatar */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-amber-500/20 rounded-full animate-pulse delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I&apos;m a passionate developer with experience in building web applications using modern technologies.
                My journey in tech started when I was in college, and since then, I&apos;ve been constantly learning and
                improving my skills.
              </p>
            </div>
            <div className="w-full max-w-full space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Education</h3>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">University Name, 2018-2022</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Web Development Bootcamp</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Coding Academy, 2022</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Experience</h3>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-medium">Full Stack Developer</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Tech Company, 2022-Present</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Frontend Developer Intern</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Startup Inc., 2021-2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Here are some of the technologies and tools I work with
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8">
              <SkillCard name="JavaScript" />
              <SkillCard name="TypeScript" />
              <SkillCard name="React" />
              <SkillCard name="Next.js" />
              <SkillCard name="Node.js" />
              <SkillCard name="Express" />
              <SkillCard name="MongoDB" />
              <SkillCard name="PostgreSQL" />
              <SkillCard name="Tailwind CSS" />
              <SkillCard name="Git" />
              <SkillCard name="Docker" />
              <SkillCard name="AWS" />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Projects</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of my recent work
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce application with user authentication, product management, and payment processing."
                technologies={["Next.js", "MongoDB", "Stripe", "Tailwind CSS"]}
                githubUrl="https://github.com/yourusername/ecommerce"
                liveUrl="https://ecommerce-demo.vercel.app"
              />
              <ProjectCard
                title="Task Management App"
                description="A productivity application for managing tasks, projects, and deadlines with team collaboration features."
                technologies={["React", "Node.js", "Express", "PostgreSQL"]}
                githubUrl="https://github.com/yourusername/task-manager"
                liveUrl="https://task-manager-demo.vercel.app"
              />
              <ProjectCard
                title="Weather Dashboard"
                description="A weather application that provides real-time weather data and forecasts for locations worldwide."
                technologies={["JavaScript", "OpenWeather API", "Chart.js", "CSS"]}
                githubUrl="https://github.com/yourusername/weather-app"
                liveUrl="https://weather-app-demo.vercel.app"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section id="tutorials" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tutorials & Blogs</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Lerne moderne Webentwicklung mit meinen ausführlichen Tutorials und Guides
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 w-full">
              <TutorialCategory
                title="Frontend Grundlagen"
                description="Lerne die Basics der Webentwicklung"
                icon={<Code className="h-8 w-8" />}
                tutorials={[
                  { name: "HTML", description: "Strukturiere deine Webseiten", level: "Beginner" },
                  { name: "CSS", description: "Style deine Webseiten", level: "Beginner" },
                  { name: "JavaScript", description: "Bringe Leben in deine Seiten", level: "Intermediate" },
                  { name: "TypeScript", description: "JavaScript mit Typen", level: "Intermediate" },
                ]}
              />
              <TutorialCategory
                title="Modern Frameworks"
                description="Moderne Frontend-Entwicklung"
                icon={<Palette className="h-8 w-8" />}
                tutorials={[
                  { name: "React", description: "Komponentenbasierte UI", level: "Intermediate" },
                  { name: "Next.js", description: "Full-Stack React Framework", level: "Advanced" },
                  { name: "Tailwind CSS", description: "Utility-First CSS", level: "Beginner" },
                  { name: "Bootstrap", description: "CSS Framework", level: "Beginner" },
                ]}
              />
              <TutorialCategory
                title="Backend & Database"
                description="Server-seitige Entwicklung"
                icon={<Server className="h-8 w-8" />}
                tutorials={[
                  { name: "Node.js", description: "JavaScript auf dem Server", level: "Intermediate" },
                  { name: "PHP", description: "Server-seitige Programmierung", level: "Beginner" },
                  { name: "Laravel", description: "PHP Framework", level: "Advanced" },
                  { name: "MongoDB", description: "NoSQL Datenbank", level: "Intermediate" },
                  { name: "MySQL", description: "Relationale Datenbank", level: "Beginner" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Have a project in mind or want to chat? Feel free to reach out!
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="flex justify-center space-x-4">
                <Link href="mailto:your.email@example.com">
                  <Button className="px-4 py-2">
                    <Mail className="mr-2 h-4 w-4" /> Email Me
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="px-4 py-2">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex space-x-4">
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:your.email@example.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center space-y-2 border rounded-lg p-4">
      <div className="text-lg font-medium">{name}</div>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
}: {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}) {
  return (
    <div className="flex flex-col items-start border rounded-lg overflow-hidden bg-card">
      <div className="w-full h-48 bg-muted">
        <Image
          src="/placeholder.svg?height=200&width=400"
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" /> Code
            </Button>
          </Link>
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function TutorialCategory({
  title,
  description,
  icon,
  tutorials,
}: {
  title: string
  description: string
  icon: React.ReactNode
  tutorials: Array<{ name: string; description: string; level: string }>
}) {
  return (
    <div className="flex flex-col items-start border rounded-lg p-6 bg-card space-y-4">
      <div className="flex items-center space-x-3">
        <div className="text-primary">{icon}</div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </div>
      <div className="space-y-3 w-full">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial.name}
            className="flex items-center justify-between p-3 rounded-md bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
          >
            <div className="flex-1">
              <h4 className="font-medium">{tutorial.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{tutorial.description}</p>
            </div>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                tutorial.level === "Beginner"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : tutorial.level === "Intermediate"
                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              }`}
            >
              {tutorial.level}
            </span>
          </div>
        ))}
      </div>
      <Button className="w-full mt-4">Alle {title} Tutorials ansehen</Button>
    </div>
  )
}
