import { Lightbulb } from "lucide-react";
import { searchTips } from "../data/jobData";

export default function SearchTips() {
  return (
    <section id="tips" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium border border-emerald-100">
            <Lightbulb className="w-4 h-4" />
            Pro Tips
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Job Search Tips for Network Engineers</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Maximize your job search effectiveness with these proven strategies and best practices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {searchTips.map((tip, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-lg hover:border-slate-300 transition-all group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{tip.icon}</div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{tip.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
