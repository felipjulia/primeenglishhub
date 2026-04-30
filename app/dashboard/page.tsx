import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

const sections = [
  { title: "Use of English", desc: "Open Cloze · Word Formation · Key Word Transformations", parts: "4 parts", color: "bg-blue-50", text: "text-blue-600", border: "border-blue-100", href: "/dashboard/use-of-english" },
  { title: "Reading", desc: "Multiple Choice · Gapped Text · Multiple Matching", parts: "4 parts", color: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", href: "/dashboard/reading" },
  { title: "Writing", desc: "Essay · Report · Letter · Article · Review · Proposal", parts: "6 types", color: "bg-green-50", text: "text-green-600", border: "border-green-100", href: "/dashboard/writing" },
  { title: "Listening", desc: "Multiple Choice · Sentence Completion · Multiple Matching", parts: "4 parts", color: "bg-red-50", text: "text-red-600", border: "border-red-100", href: "/dashboard/listening" },
  { title: "Speaking", desc: "Interview · Long Turn · Collaborative Task · Discussion", parts: "4 parts", color: "bg-amber-50", text: "text-amber-600", border: "border-amber-100", href: "/dashboard/speaking" },
  { title: "Mock Exams", desc: "Full simulated exams with all sections and audio", parts: "Coming soon", color: "bg-gray-50", text: "text-gray-500", border: "border-gray-100", href: "#" },
]

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="font-medium text-gray-900">PrimeEnglishHub</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">{user.email}</span>
          <a href="/logout" className="text-sm text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg">
            Log out
          </a>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900">Welcome back 👋</h1>
          <p className="text-gray-500 text-sm mt-1">Choose a section to start practising</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sections.map((s) => (
            <a key={s.title} href={s.href} className={"bg-white border " + s.border + " rounded-xl p-5 block hover:shadow-sm"}>
              <div className={"w-10 h-10 " + s.color + " rounded-lg mb-3"}></div>
              <div className="flex items-center justify-between mb-1">
                <h2 className={"font-medium " + s.text}>{s.title}</h2>
                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">{s.parts}</span>
              </div>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}