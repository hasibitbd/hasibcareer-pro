import { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { roleCategories } from "../data/jobData";

export default function RoleCategories() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="roles" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-amber-50 text-amber-600 text-sm font-medium border border-amber-100">
            <Briefcase className="w-4 h-4" />
            Career Guide
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Network Engineering Role Categories</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Explore the different career paths in network engineering and find the right fit for your skills and ambitions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roleCategories.map((role) => {
            const isExpanded = expandedId === role.title;
            return (
              <div
                key={role.title}
                className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all overflow-hidden group"
              >
                <div className="p-5">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${role.color} text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    {role.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{role.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{role.description}</p>

                  <button
                    onClick={() => setExpandedId(isExpanded ? null : role.title)}
                    className="mt-3 flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                  >
                    {isExpanded ? "Hide" : "Show"} Sample Titles
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50 px-5 py-4">
                    <ul className="space-y-1.5">
                      {role.sampleTitles.map((title) => (
                        <li key={title} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          {title}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
