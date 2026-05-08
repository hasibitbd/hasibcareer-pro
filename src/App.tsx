import Header from "./components/Header";
import PromptBuilder from "./components/PromptBuilder";
import PromptTemplates from "./components/PromptTemplates";
import RoleCategories from "./components/RoleCategories";
import SearchTips from "./components/SearchTips";
import PlatformLinks from "./components/PlatformLinks";
import Footer from "./components/Footer";

export default function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header onScrollTo={scrollTo} />
      <PromptBuilder />
      <PromptTemplates />
      <RoleCategories />
      <PlatformLinks />
      <SearchTips />
      <Footer />
    </div>
  );
}
