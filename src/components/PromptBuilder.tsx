import { useState, useMemo } from "react";
import { Copy, Check, RotateCcw, Sparkles, ChevronDown, ChevronUp, Filter, X } from "lucide-react";
import {
  experienceLevels,
  specializations,
  certifications,
  workArrangements,
  vendors,
} from "../data/jobData";

interface ChipProps {
  label: string;
  icon?: string;
  selected: boolean;
  onClick: () => void;
}

function Chip({ label, icon, selected, onClick }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all cursor-pointer
        ${
          selected
            ? "bg-blue-50 border-blue-300 text-blue-700 shadow-sm shadow-blue-100"
            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
        }
      `}
    >
      {icon && <span className="text-base">{icon}</span>}
      <span className="truncate max-w-[150px]">{label}</span>
    </button>
  );
}

function SectionHeader({ title, subtitle, emoji, count }: { title: string; subtitle: string; emoji: string; count?: number }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <div>
        <h3 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
          <span>{emoji}</span> {title}
          {count !== undefined && count > 0 && (
            <span className="ml-2 px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
              {count} selected
            </span>
          )}
        </h3>
        <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
      </div>
    </div>
  );
}

// Group items by category
function groupByCategory<T extends { category?: string }>(items: T[]): Record<string, T[]> {
  return items.reduce((acc, item) => {
    const cat = item.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

export default function PromptBuilder() {
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([]);
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);
  const [selectedArrangements, setSelectedArrangements] = useState<string[]>([]);
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [excludeKeywords, setExcludeKeywords] = useState("");
  const [copied, setCopied] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeSpecCategory, setActiveSpecCategory] = useState<string>("All");
  const [activeVendorCategory, setActiveVendorCategory] = useState<string>("All");
  const [activeCertCategory, setActiveCertCategory] = useState<string>("All");

  const toggleMulti = (id: string, list: string[], setter: (v: string[]) => void) => {
    setter(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);
  };

  const clearAll = (setter: (v: string[]) => void) => setter([]);

  // Group data by category
  const specsByCategory = groupByCategory(specializations);
  const vendorsByCategory = groupByCategory(vendors);
  const certsByCategory = groupByCategory(certifications);
  
  const specCategories = ["All", ...Object.keys(specsByCategory)];
  const vendorCategories = ["All", ...Object.keys(vendorsByCategory)];
  const certCategories = ["All", ...Object.keys(certsByCategory)];

  const filteredSpecs = activeSpecCategory === "All" 
    ? specializations 
    : specsByCategory[activeSpecCategory] || [];
  
  const filteredVendors = activeVendorCategory === "All"
    ? vendors
    : vendorsByCategory[activeVendorCategory] || [];
    
  const filteredCerts = activeCertCategory === "All"
    ? certifications
    : certsByCategory[activeCertCategory] || [];

  const generatedPrompt = useMemo(() => {
    const parts: string[] = [];
    const titles: string[] = [];
    
    // Build job titles based on selected specializations
    selectedSpecs.forEach((specId) => {
      const spec = specializations.find((s) => s.id === specId);
      if (spec) {
        // Add the main label as a search term
        titles.push(`"${spec.label}"`);
        
        // Add common variations based on category
        if (spec.category === "SysAdmin") {
          if (specId === "sysadmin") titles.push('"System Administrator"', '"SysAdmin"');
          if (specId === "windows_admin") titles.push('"Windows Engineer"', '"Windows Server Admin"');
          if (specId === "linux_admin") titles.push('"Linux Engineer"', '"Linux SysAdmin"');
        }
        if (spec.category === "Networking") {
          if (specId === "network_engineer") titles.push('"Network Administrator"', '"Infrastructure Engineer"');
        }
        if (spec.category === "Security") {
          if (specId === "soc_analyst") titles.push('"Security Analyst"', '"Threat Analyst"', '"Security Operations"');
          if (specId === "penetration_testing") titles.push('"Ethical Hacker"', '"Red Team"', '"Offensive Security"');
          if (specId === "cybersecurity") titles.push('"Security Engineer"', '"InfoSec Engineer"');
        }
        if (spec.category === "Cloud") {
          if (specId === "cloud_engineer") titles.push('"Cloud Architect"', '"Cloud Infrastructure Engineer"');
          if (specId === "aws") titles.push('"AWS Engineer"', '"AWS Architect"');
          if (specId === "azure") titles.push('"Azure Engineer"', '"Azure Administrator"');
        }
        if (spec.category === "DevOps") {
          if (specId === "devops") titles.push('"DevOps Specialist"', '"Platform Engineer"');
          if (specId === "sre") titles.push('"Site Reliability Engineer"', '"Production Engineer"');
        }
        if (spec.category === "Containers") {
          if (specId === "kubernetes") titles.push('"K8s Engineer"', '"Container Engineer"');
        }
        if (spec.category === "Support") {
          if (specId === "it_support") titles.push('"Help Desk"', '"Technical Support"');
          if (specId === "helpdesk") titles.push('"IT Support"', '"Service Desk"');
        }
        if (spec.category === "Management") {
          if (specId === "it_manager") titles.push('"Infrastructure Manager"', '"Technology Manager"');
          if (specId === "cio" || specId === "it_executive") titles.push('"CIO"', '"CTO"', '"VP of IT"');
        }
      }
    });

    // Default if nothing selected
    if (titles.length === 0) {
      titles.push('"IT Professional"', '"Systems Administrator"', '"Network Engineer"', '"Cloud Engineer"');
    }

    // Add seniority modifiers
    if (selectedLevel === "intern") {
      titles.push('"Intern"', '"Trainee"');
    } else if (selectedLevel === "entry") {
      titles.push('"Junior"', '"Associate"', '"Entry Level"');
    } else if (selectedLevel === "senior") {
      titles.push('"Senior"', '"Sr."');
    } else if (selectedLevel === "lead" || selectedLevel === "staff") {
      titles.push('"Principal"', '"Lead"', '"Staff"');
    } else if (selectedLevel === "management") {
      titles.push('"Manager"', '"Director"');
    } else if (selectedLevel === "executive") {
      titles.push('"VP"', '"Chief"', '"Executive"', '"C-Level"');
    }

    const uniqueTitles = [...new Set(titles)];
    parts.push("(" + uniqueTitles.slice(0, 15).join(" OR ") + ")"); // Limit to prevent overly long queries

    // Vendors
    if (selectedVendors.length > 0) {
      const vendorLabels = selectedVendors.slice(0, 8).map((v) => {
        const vendor = vendors.find((x) => x.id === v);
        return vendor ? `"${vendor.label}"` : "";
      }).filter(Boolean);
      if (vendorLabels.length > 0) {
        parts.push("AND (" + vendorLabels.join(" OR ") + ")");
      }
    }

    // Certifications
    if (selectedCerts.length > 0) {
      const certLabels = selectedCerts.slice(0, 6).map((c) => {
        const cert = certifications.find((x) => x.id === c);
        return cert ? cert.label : "";
      }).filter(Boolean);
      if (certLabels.length > 0) {
        parts.push("AND (" + certLabels.join(" OR ") + ")");
      }
    }

    // Work arrangement
    if (selectedArrangements.length > 0) {
      const arrLabels = selectedArrangements.map((a) => {
        const arr = workArrangements.find((x) => x.id === a);
        return arr ? `"${arr.label}"` : "";
      }).filter(Boolean);
      if (arrLabels.length > 0) {
        parts.push("AND (" + arrLabels.join(" OR ") + ")");
      }
    }

    // Location
    if (location.trim()) {
      parts.push(`AND ("${location.trim()}")`);
    }

    // Exclusions
    const defaultExclusions = ["-recruiter", "-staffing"];
    if (excludeKeywords.trim()) {
      const customExclusions = excludeKeywords.split(",").map((k) => `-${k.trim()}`).filter((k) => k !== "-");
      defaultExclusions.push(...customExclusions);
    }

    // Level-based exclusions
    if (selectedLevel === "intern" || selectedLevel === "entry") {
      defaultExclusions.push('-senior', '-lead', '-principal', '-"5+ years"', '-"7+ years"');
    } else if (["senior", "lead", "staff", "management", "executive"].includes(selectedLevel)) {
      defaultExclusions.push("-junior", "-entry", "-intern", "-associate");
    }

    parts.push(defaultExclusions.join(" "));

    return parts.join(" ");
  }, [selectedLevel, selectedSpecs, selectedCerts, selectedArrangements, selectedVendors, location, excludeKeywords]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSelectedLevel("");
    setSelectedSpecs([]);
    setSelectedCerts([]);
    setSelectedArrangements([]);
    setSelectedVendors([]);
    setLocation("");
    setExcludeKeywords("");
  };

  const hasSelections =
    selectedLevel || selectedSpecs.length || selectedCerts.length || selectedArrangements.length || selectedVendors.length || location || excludeKeywords;

  const totalSelections = selectedSpecs.length + selectedVendors.length + selectedCerts.length + selectedArrangements.length + (selectedLevel ? 1 : 0);

  return (
    <section id="builder" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-blue-50 text-blue-600 text-sm font-medium border border-blue-100">
            <Sparkles className="w-4 h-4" />
            Interactive Builder
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Build Your Search Prompt</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">
            Select your preferences below and we'll generate an optimized boolean search query for any job board.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="p-6 sm:p-8 space-y-8">
            {/* Experience Level */}
            <div>
              <SectionHeader title="Experience Level" subtitle="Select your career stage" emoji="📊" />
              <div className="flex flex-wrap gap-2">
                {experienceLevels.map((level) => (
                  <Chip
                    key={level.id}
                    label={level.label}
                    selected={selectedLevel === level.id}
                    onClick={() => setSelectedLevel(selectedLevel === level.id ? "" : level.id)}
                  />
                ))}
              </div>
            </div>

            {/* Specialization with Category Tabs */}
            <div>
              <SectionHeader 
                title="Specialization" 
                subtitle="Choose your focus areas (select multiple)" 
                emoji="🎯" 
                count={selectedSpecs.length}
              />
              
              {/* Category tabs */}
              <div className="flex flex-wrap gap-1.5 mb-3 pb-3 border-b border-slate-100">
                {specCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveSpecCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      activeSpecCategory === cat
                        ? "bg-slate-800 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat} {cat !== "All" && `(${specsByCategory[cat]?.length || 0})`}
                  </button>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2 max-h-56 overflow-y-auto pr-2 pb-2">
                {filteredSpecs.map((spec) => (
                  <Chip
                    key={spec.id}
                    label={spec.label}
                    icon={spec.icon}
                    selected={selectedSpecs.includes(spec.id)}
                    onClick={() => toggleMulti(spec.id, selectedSpecs, setSelectedSpecs)}
                  />
                ))}
              </div>
              
              {selectedSpecs.length > 0 && (
                <button
                  onClick={() => clearAll(setSelectedSpecs)}
                  className="mt-2 text-xs text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                >
                  <X className="w-3 h-3" /> Clear all specializations
                </button>
              )}
            </div>

            {/* Work Arrangement */}
            <div>
              <SectionHeader title="Work Arrangement" subtitle="Filter by work type" emoji="🏠" />
              <div className="flex flex-wrap gap-2">
                {workArrangements.map((arr) => (
                  <Chip
                    key={arr.id}
                    label={arr.label}
                    selected={selectedArrangements.includes(arr.id)}
                    onClick={() => toggleMulti(arr.id, selectedArrangements, setSelectedArrangements)}
                  />
                ))}
              </div>
            </div>

            {/* Advanced toggle */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
            >
              <Filter className="w-4 h-4" />
              {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              {showAdvanced ? "Hide" : "Show"} Advanced Filters (Vendors, Certifications, Location)
            </button>

            {showAdvanced && (
              <div className="space-y-8 pt-4 border-t border-slate-100">
                {/* Vendors with Category Tabs */}
                <div>
                  <SectionHeader 
                    title="Vendors & Technologies" 
                    subtitle="Target specific platforms and tools" 
                    emoji="🔧"
                    count={selectedVendors.length}
                  />
                  
                  <div className="flex flex-wrap gap-1.5 mb-3 pb-3 border-b border-slate-100">
                    {vendorCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveVendorCategory(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          activeVendorCategory === cat
                            ? "bg-slate-800 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2 pb-2">
                    {filteredVendors.map((v) => (
                      <Chip
                        key={v.id}
                        label={v.label}
                        selected={selectedVendors.includes(v.id)}
                        onClick={() => toggleMulti(v.id, selectedVendors, setSelectedVendors)}
                      />
                    ))}
                  </div>
                  
                  {selectedVendors.length > 0 && (
                    <button
                      onClick={() => clearAll(setSelectedVendors)}
                      className="mt-2 text-xs text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                    >
                      <X className="w-3 h-3" /> Clear all vendors
                    </button>
                  )}
                </div>

                {/* Certifications with Category Tabs */}
                <div>
                  <SectionHeader 
                    title="Certifications" 
                    subtitle="Include certification requirements" 
                    emoji="📜"
                    count={selectedCerts.length}
                  />
                  
                  <div className="flex flex-wrap gap-1.5 mb-3 pb-3 border-b border-slate-100">
                    {certCategories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCertCategory(cat)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          activeCertCategory === cat
                            ? "bg-slate-800 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-2 pb-2">
                    {filteredCerts.map((cert) => (
                      <Chip
                        key={cert.id}
                        label={cert.label}
                        selected={selectedCerts.includes(cert.id)}
                        onClick={() => toggleMulti(cert.id, selectedCerts, setSelectedCerts)}
                      />
                    ))}
                  </div>
                  
                  {selectedCerts.length > 0 && (
                    <button
                      onClick={() => clearAll(setSelectedCerts)}
                      className="mt-2 text-xs text-red-500 hover:text-red-700 flex items-center gap-1 cursor-pointer"
                    >
                      <X className="w-3 h-3" /> Clear all certifications
                    </button>
                  )}
                </div>

                {/* Location */}
                <div>
                  <SectionHeader title="Location" subtitle='Enter city, state, country, or "remote"' emoji="📍" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='e.g., "San Francisco, CA" or "remote" or "United States"'
                    className="w-full max-w-md px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Exclude keywords */}
                <div>
                  <SectionHeader title="Exclude Keywords" subtitle="Comma-separated words to exclude from results" emoji="🚫" />
                  <input
                    type="text"
                    value={excludeKeywords}
                    onChange={(e) => setExcludeKeywords(e.target.value)}
                    placeholder="e.g., sales, manager, director, contract"
                    className="w-full max-w-md px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Generated prompt output */}
          <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <h3 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                Generated Search Prompt
                {totalSelections > 0 && (
                  <span className="text-xs text-slate-500 font-normal">
                    ({totalSelections} filter{totalSelections !== 1 ? 's' : ''} applied)
                  </span>
                )}
              </h3>
              <div className="flex gap-2">
                {hasSelections && (
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset All
                  </button>
                )}
                <button
                  onClick={handleCopy}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    copied
                      ? "bg-green-500 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copied!" : "Copy Prompt"}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-4 min-h-[100px] max-h-[200px] overflow-y-auto">
              <code className="text-sm text-slate-700 leading-relaxed break-all whitespace-pre-wrap">
                {generatedPrompt}
              </code>
            </div>

            <p className="text-xs text-slate-500 mt-3">
              💡 Paste this prompt into the search bar of LinkedIn, Indeed, Dice, Glassdoor, or any other job board for optimized results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
