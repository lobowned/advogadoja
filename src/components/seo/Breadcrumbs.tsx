import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { breadcrumbSchema, type BreadcrumbItem } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/** Trilha discreta + JSON-LD BreadcrumbList. O último item é a página atual. */
const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  if (!items.length) return null;
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(items))}</script>
      </Helmet>
      <nav aria-label="Trilha de navegação" className={cn("text-xs text-muted-foreground", className)}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((it, i) => {
            const last = i === items.length - 1;
            return (
              <li key={`${it.name}-${i}`} className="flex items-center gap-1.5">
                {it.href && !last ? (
                  <Link to={it.href} className="hover:text-foreground hover:underline underline-offset-2">
                    {it.name}
                  </Link>
                ) : (
                  <span aria-current={last ? "page" : undefined} className={last ? "text-foreground/80" : undefined}>
                    {it.name}
                  </span>
                )}
                {!last && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
