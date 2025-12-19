import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { m, useReducedMotion } from "framer-motion";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  variant?: "default" | "light";
  className?: string;
  showHomeIcon?: boolean;
}

export const BreadcrumbNav = ({ 
  items, 
  variant = "default", 
  className,
  showHomeIcon = true 
}: BreadcrumbNavProps) => {
  const shouldReduceMotion = useReducedMotion();
  
  const baseTextClass = variant === "light" 
    ? "text-primary-foreground/70 hover:text-primary-foreground" 
    : "text-muted-foreground hover:text-foreground";
  
  const activeTextClass = variant === "light"
    ? "text-primary-foreground font-medium"
    : "text-foreground font-medium";

  const separatorClass = variant === "light"
    ? "text-primary-foreground/40"
    : "text-muted-foreground/50";

  // Generate JSON-LD Schema
  const schemaItems = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.label,
    ...(item.href && { "item": `https://advogadoonline.com.br${item.href}` })
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaItems
  };

  return (
    <>
      {/* JSON-LD Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <nav 
        aria-label="Breadcrumb" 
        className={cn("animate-fade-in", className)}
      >
        <ol className="flex items-center gap-1.5 text-sm overflow-x-auto scrollbar-none py-1">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;

            return (
              <m.li 
                key={item.label}
                initial={shouldReduceMotion ? false : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.2 }}
                className="flex items-center gap-1.5 shrink-0"
              >
                {/* Separator */}
                {index > 0 && (
                  <ChevronRight 
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      separatorClass
                    )} 
                  />
                )}
                
                {/* Item */}
                {isLast ? (
                  <span 
                    className={cn(
                      activeTextClass,
                      "truncate max-w-[200px]"
                    )}
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    to={item.href || "/"}
                    className={cn(
                      "inline-flex items-center gap-1 transition-colors duration-200 hover:underline underline-offset-4",
                      baseTextClass
                    )}
                  >
                    {isFirst && showHomeIcon && (
                      <Home className="w-3.5 h-3.5" />
                    )}
                    {item.icon && !isFirst && item.icon}
                    <span>{item.label}</span>
                  </Link>
                )}
              </m.li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default BreadcrumbNav;