import { Network, Zap, ChevronDown } from "lucide-react";

interface HeaderProps {
  onScrollTo: (id: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.7s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Nav */}
        <nav className="flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25">
              <Network className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Hasib<span className="text-blue-400">Career</span> Pro
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <button onClick={() => onScrollTo("builder")} className="hover:text-white transition-colors cursor-pointer">
              Prompt Builder
            </button>
            <button onClick={() => onScrollTo("templates")} className="hover:text-white transition-colors cursor-pointer">
              Templates
            </button>
            <button onClick={() => onScrollTo("roles")} className="hover:text-white transition-colors cursor-pointer">
              Role Guide
            </button>
            <button onClick={() => onScrollTo("platforms")} className="hover:text-white transition-colors cursor-pointer">
              Job Boards
            </button>
            <button onClick={() => onScrollTo("tips")} className="hover:text-white transition-colors cursor-pointer">
              Tips
            </button>
          </div>
        </nav>

        {/* Hero */}
        <div className="flex flex-col items-center text-center pt-12 pb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur border border-white/10 text-sm text-blue-300">
            <Zap className="w-4 h-4" />
            <span>The Ultimate Job Search Tool for IT Professionals</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl">
            Land Your Next{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              IT Career
            </span>{" "}
            Role
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Generate powerful boolean search prompts for SysAdmins, Network Engineers, Cloud Architects, DevOps, SRE, Security Analysts, IT Support, and 150+ more IT specializations.
          </p>

          {/* Role badges - Row 1 */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 max-w-4xl">
            {[
              "🖥️ SysAdmin",
              "🔀 Network Engineer",
              "☁️ Cloud Engineer",
              "♾️ DevOps",
              "⚡ SRE",
              "☸️ Kubernetes",
              "👁️ SOC Analyst",
              "🎯 Pen Tester",
              "🔐 Security Engineer",
              "🗄️ DBA",
            ].map((role) => (
              <span
                key={role}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400"
              >
                {role}
              </span>
            ))}
          </div>
          
          {/* Role badges - Row 2 */}
          <div className="flex flex-wrap justify-center gap-2 mt-2 max-w-4xl">
            {[
              "🏢 Data Center",
              "📦 VMware",
              "💾 Storage Engineer",
              "🎧 IT Support",
              "Ⓜ️ Microsoft 365",
              "🐧 Linux Admin",
              "🪟 Windows Admin",
              "👔 IT Manager",
              "👑 CIO/CTO",
              "🚨 Incident Response",
            ].map((role) => (
              <span
                key={role}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <button
              onClick={() => onScrollTo("builder")}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all cursor-pointer"
            >
              Build Your Prompt
            </button>
            <button
              onClick={() => onScrollTo("templates")}
              className="px-8 py-3.5 rounded-xl bg-white/10 backdrop-blur border border-white/15 text-white font-semibold hover:bg-white/15 transition-all cursor-pointer"
            >
              Browse Templates
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/10 w-full max-w-3xl">
            <div>
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-xs text-slate-500 mt-1">Specializations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100+</div>
              <div className="text-xs text-slate-500 mt-1">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">120+</div>
              <div className="text-xs text-slate-500 mt-1">Vendors & Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">35+</div>
              <div className="text-xs text-slate-500 mt-1">Prompt Templates</div>
            </div>
          </div>

          <button
            onClick={() => onScrollTo("builder")}
            className="mt-12 text-slate-500 hover:text-white transition-colors animate-bounce cursor-pointer"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
