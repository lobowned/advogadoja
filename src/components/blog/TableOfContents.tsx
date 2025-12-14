import { useState, useEffect } from "react";
import { List, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Desktop TOC */}
      <nav className="hidden lg:block sticky top-24 w-64 flex-shrink-0">
        <div className="bg-muted/30 rounded-lg p-4 border">
          <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
            <List className="w-4 h-4" />
            Índice do Artigo
          </h3>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-sm text-left w-full hover:text-primary transition-colors py-1 px-2 rounded",
                    activeSection === item.id
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile TOC */}
      <div className="lg:hidden sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="w-full justify-between"
          >
            <span className="flex items-center gap-2">
              <List className="w-4 h-4" />
              Índice
            </span>
            <ChevronDown className={cn("w-4 h-4 transition-transform", isMobileOpen && "rotate-180")} />
          </Button>
          
          {isMobileOpen && (
            <ul className="py-2 space-y-1 animate-fade-in">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-sm text-left w-full py-2 px-3 rounded transition-colors",
                      activeSection === item.id
                        ? "text-primary bg-primary/10 font-medium"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default TableOfContents;
