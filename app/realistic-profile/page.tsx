import RealisticAvatar from "@/components/realistic-avatar"

export default function RealisticProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Realistisches Portfolio Avatar
          </h1>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            Ein modernes, interaktives Avatar-Design mit realistischen Details und sanften Animationen
          </p>
        </div>

        <div className="mt-12 p-8 bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl">
          <RealisticAvatar />

          <div className="mt-8 text-center space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Ihr Name</h2>
            <p className="text-gray-600">Full Stack Developer & UI/UX Designer</p>

            <div className="flex justify-center space-x-4 mt-6">
              <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</div>
              <div className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js</div>
              <div className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">TypeScript</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">Hover über das Avatar für interaktive Effekte</p>
        </div>
      </div>
    </div>
  )
}
