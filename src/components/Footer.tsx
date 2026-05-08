import { Network, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
              <Network className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Hasib<span className="text-blue-400">Career</span> Pro
            </span>
          </div>

          <p className="text-sm text-slate-500 flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for IT Professionals everywhere
          </p>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} HasibCareer Pro
          </div>
        </div>

        {/* Role coverage */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <p className="text-xs text-slate-600 text-center mb-4">Covering all IT roles including:</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {[
              "Network Engineer",
              "SOC Analyst",
              "Penetration Tester",
              "Security Engineer",
              "Systems Administrator",
              "Cloud Engineer",
              "DevOps Engineer",
              "IT Support",
              "Data Center Admin",
              "IT Manager",
              "DBA",
              "IAM Engineer",
              "GRC Analyst",
              "SRE",
              "IT Director",
            ].map((role) => (
              <span key={role} className="px-2 py-0.5 rounded text-xs text-slate-600 bg-slate-800/50">
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            This tool generates boolean search prompts to help IT professionals find relevant job postings more efficiently. 
            Results may vary by platform. Always customize prompts to match your specific experience and qualifications.
          </p>
        </div>
      </div>
    </footer>
  );
}
