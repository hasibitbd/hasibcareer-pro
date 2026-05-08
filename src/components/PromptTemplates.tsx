import { useState } from "react";
import { Copy, Check, Search } from "lucide-react";
import { promptTemplates } from "../data/jobData";

export default function PromptTemplates() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(promptTemplates.map((t) => t.category))];

  const filtered =
    activeCategory === "All"
      ? promptTemplates
      : promptTemplates.filter((t) => t.category === activeCategory);

  const handleCopy = async (id: string, prompt: string) => {
    await navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="templates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-purple-50 text-purple-600 text-sm font-medium border border-purple-100">
            <Search className="w-4 h-4" />
            Ready-to-Use
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Search Prompt Templates</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Pre-built boolean search prompts for common network engineering roles. Copy and paste directly into your favorite job board.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Template grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((template) => (
            <div
              key={template.id}
              className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all p-5 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{template.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-slate-900 truncate">{template.title}</h3>
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-500">
                    {template.category}
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-500 mb-4 flex-shrink-0">{template.description}</p>
              <div className="bg-slate-50 rounded-lg p-3 mb-4 flex-1 overflow-hidden">
                <code className="text-xs text-slate-600 leading-relaxed line-clamp-4 break-all">
                  {template.prompt}
                </code>
              </div>
              <button
                onClick={() => handleCopy(template.id, template.prompt)}
                className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  copiedId === template.id
                    ? "bg-green-500 text-white"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                {copiedId === template.id ? (
                  <>
                    <Check className="w-4 h-4" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copy Prompt
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
