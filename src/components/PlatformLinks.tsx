import { useState } from "react";
import { ExternalLink, Globe, Briefcase, Shield, Home, Users, Code, MapPin, Building, Heart } from "lucide-react";
import { platforms } from "../data/jobData";

const categoryConfig: Record<string, { icon: React.ReactNode; color: string; gradient: string }> = {
  General: { icon: <Briefcase className="w-4 h-4" />, color: "text-blue-600", gradient: "from-blue-500 to-indigo-600" },
  Tech: { icon: <Code className="w-4 h-4" />, color: "text-purple-600", gradient: "from-purple-500 to-violet-600" },
  Security: { icon: <Shield className="w-4 h-4" />, color: "text-red-600", gradient: "from-red-500 to-rose-600" },
  Government: { icon: <Building className="w-4 h-4" />, color: "text-slate-600", gradient: "from-slate-500 to-gray-600" },
  Remote: { icon: <Home className="w-4 h-4" />, color: "text-green-600", gradient: "from-green-500 to-emerald-600" },
  Freelance: { icon: <Users className="w-4 h-4" />, color: "text-amber-600", gradient: "from-amber-500 to-orange-600" },
  DevOps: { icon: <Code className="w-4 h-4" />, color: "text-cyan-600", gradient: "from-cyan-500 to-blue-600" },
  International: { icon: <MapPin className="w-4 h-4" />, color: "text-teal-600", gradient: "from-teal-500 to-cyan-600" },
  Direct: { icon: <Building className="w-4 h-4" />, color: "text-indigo-600", gradient: "from-indigo-500 to-purple-600" },
  Diversity: { icon: <Heart className="w-4 h-4" />, color: "text-pink-600", gradient: "from-pink-500 to-rose-600" },
};

// Group platforms by category
function groupByCategory() {
  const groups: Record<string, typeof platforms> = {};
  platforms.forEach((p) => {
    if (!groups[p.category]) groups[p.category] = [];
    groups[p.category].push(p);
  });
  return groups;
}

export default function PlatformLinks() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const grouped = groupByCategory();
  const categories = ["All", ...Object.keys(grouped)];

  const displayPlatforms = activeCategory === "All" 
    ? platforms 
    : grouped[activeCategory] || [];

  return (
    <section id="platforms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-sky-50 text-sky-600 text-sm font-medium border border-sky-100">
            <Globe className="w-4 h-4" />
            {platforms.length}+ Job Boards
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Where to Search</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Paste your generated prompts into these job boards. We've curated the best platforms including remote-first and international sites.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => {
            const config = categoryConfig[cat];
            const count = cat === "All" ? platforms.length : grouped[cat]?.length || 0;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {config?.icon}
                {cat}
                <span className={`ml-1 text-xs ${activeCategory === cat ? "text-slate-300" : "text-slate-400"}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {displayPlatforms.map((platform) => {
            const config = categoryConfig[platform.category] || categoryConfig.General;
            return (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white text-xs font-bold shadow-sm group-hover:scale-110 transition-transform`}>
                    {platform.label.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-slate-800 truncate">{platform.label}</div>
                  </div>
                </div>
                {platform.description && (
                  <p className="text-xs text-slate-500 line-clamp-2 mb-2">{platform.description}</p>
                )}
                <div className="mt-auto flex items-center gap-1 text-xs text-blue-500 group-hover:text-blue-600">
                  Visit <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-4 p-6 bg-slate-50 rounded-2xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">{grouped.Remote?.length || 0}</div>
            <div className="text-xs text-slate-500">Remote Job Sites</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">{grouped.Tech?.length || 0}</div>
            <div className="text-xs text-slate-500">Tech-Focused</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">{grouped.Security?.length || 0}</div>
            <div className="text-xs text-slate-500">Security-Specific</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">{grouped.International?.length || 0}</div>
            <div className="text-xs text-slate-500">International</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900">{grouped.Freelance?.length || 0}</div>
            <div className="text-xs text-slate-500">Freelance</div>
          </div>
        </div>
      </div>
    </section>
  );
}
