export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="font-medium text-gray-900">PrimeEnglishHub</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Exams</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Practice</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">AI Tutor</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Log in</a>
          <a href="#" className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Start free
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
          AI-powered Cambridge exam preparation
        </div>
        <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight mb-4">
          Pass your Cambridge exam <br />
          <span className="text-blue-600">with AI by your side</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8 leading-relaxed">
          Practice every section, get instant AI feedback on your writing and speaking,
          and follow a personalised study plan tailored to your exam date.
        </p>
        <div className="flex items-center justify-center gap-3 mb-8">
          <a href="#" className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700">
            Start for free
          </a>
          <a href="#" className="border border-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50">
            See how it works
          </a>
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-sm font-medium text-blue-500 border border-blue-200 px-4 py-1.5 rounded-full">B2 First</span>
          <span className="text-sm font-medium text-purple-500 border border-purple-200 px-4 py-1.5 rounded-full">C1 Advanced</span>
          <span className="text-sm font-medium text-green-600 border border-green-200 px-4 py-1.5 rounded-full">C2 Proficiency</span>
        </div>
      </section>

      {/* EXAM SECTIONS */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">Full exam coverage</p>
          <h2 className="text-2xl font-medium text-gray-900 mb-2">Every section. Every part.</h2>
          <p className="text-gray-500 mb-8">Complete preparation for all Cambridge exam sections.</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {[
              { name: "Use of English", parts: "4 parts" },
              { name: "Reading", parts: "4 parts" },
              { name: "Writing", parts: "6 types" },
              { name: "Listening", parts: "4 parts" },
              { name: "Speaking", parts: "4 parts" },
            ].map((s) => (
              <div key={s.name} className="bg-white border border-gray-100 rounded-xl p-3 text-center">
                <p className="text-sm font-medium text-gray-800">{s.name}</p>
                <p className="text-xs text-gray-400 mt-1">{s.parts}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">AI features</p>
          <h2 className="text-2xl font-medium text-gray-900 mb-2">Your personal Cambridge tutor</h2>
          <p className="text-gray-500 mb-8">Powered by AI trained specifically on Cambridge exams.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Writing correction",
                desc: "Submit any essay, report or letter and get instant feedback based on official Cambridge criteria.",
                color: "bg-blue-50",
                text: "text-blue-600",
              },
              {
                title: "Speaking correction",
                desc: "Record your response. The AI transcribes it, scores it and suggests better vocabulary.",
                color: "bg-purple-50",
                text: "text-purple-600",
              },
              {
                title: "AI Tutor",
                desc: "Ask anything about grammar, vocabulary or exam strategy. Answers in your language.",
                color: "bg-green-50",
                text: "text-green-600",
              },
              {
                title: "Study plan",
                desc: "Tell us your exam date and daily time. We build a personalised roadmap that adapts as you progress.",
                color: "bg-amber-50",
                text: "text-amber-600",
              },
              {
                title: "Mock exams",
                desc: "Full simulated exams with real audio for listening and model answers for speaking.",
                color: "bg-red-50",
                text: "text-red-600",
              },
              {
                title: "Progress tracking",
                desc: "See exactly which grammar structures and vocabulary areas need more work.",
                color: "bg-teal-50",
                text: "text-teal-600",
              },
            ].map((f) => (
              <div key={f.title} className="border border-gray-100 rounded-xl p-5">
                <div className={`w-8 h-8 ${f.color} rounded-lg mb-3`}></div>
                <h3 className={`text-sm font-medium ${f.text} mb-1`}>{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-widest mb-2">Pricing</p>
          <h2 className="text-2xl font-medium text-gray-900 mb-2">Less than one hour with a tutor</h2>
          <p className="text-gray-500 mb-8">Everything you need to pass your Cambridge exam.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <div className="bg-white border border-gray-100 rounded-xl p-6">
              <p className="text-sm font-medium text-gray-500">Free</p>
              <p className="text-3xl font-medium text-gray-900 mt-2 mb-1">€0</p>
              <p className="text-sm text-gray-400 mb-6">forever</p>
              {["20% of all content", "1 full mock exam", "5 tutor questions/day", "Score calculator", "Exam dates"].map((i) => (
                <p key={i} className="text-sm text-gray-500 py-1 border-b border-gray-50">· {i}</p>
              ))}
            </div>
            <div className="bg-white border-2 border-blue-500 rounded-xl p-6">
              <span className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full">Most popular</span>
              <p className="text-sm font-medium text-gray-500 mt-3">Premium</p>
              <p className="text-3xl font-medium text-gray-900 mt-2 mb-1">€39</p>
              <p className="text-sm text-gray-400 mb-6">per year · or €4.99/month</p>
              {[
                "All content unlocked",
                "Personalised AI study plan",
                "Unlimited AI tutor",
                "Unlimited writing correction",
                "Unlimited speaking correction",
                "Full mock exams",
                "Advanced progress tracking",
              ].map((i) => (
                <p key={i} className="text-sm text-blue-600 font-medium py-1 border-b border-blue-50">★ {i}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 border-t border-gray-100 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">PrimeEnglishHub</span>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-gray-400 hover:text-gray-600">Privacy</a>
          <a href="#" className="text-sm text-gray-400 hover:text-gray-600">Terms</a>
          <a href="#" className="text-sm text-gray-400 hover:text-gray-600">Contact</a>
        </div>
      </footer>

    </main>
  )
}