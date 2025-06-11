import AnimatedAvatar from "@/components/animated-avatar"

export default function AnimatedProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-blue-50 p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">Animiertes Profil</h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
            Ein modernes, animiertes Avatar-Design mit sanften Bewegungen
          </p>
        </div>

        <div className="mt-10 p-6 bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl">
          <AnimatedAvatar />

          <div className="mt-8 text-center">
            <h2 className="text-xl font-medium text-gray-900">Ihr Name</h2>
            <p className="text-sm text-gray-500 mt-1">Web Developer & Designer</p>
          </div>
        </div>
      </div>
    </div>
  )
}
