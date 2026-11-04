export const AUTHOR_NAME = "Dr. Gilberto Riccio";

export const authorSchema = {
  "@type": "Person",
  "name": "Gilberto Riccio",
  "jobTitle": "Advogado",
  "identifier": "OAB/BA 46.638",
  "worksFor": {
    "@type": "LegalService",
    "name": "Riccio Advocacia",
  },
};

const AuthorBox = () => (
  <aside
    aria-label="Sobre o autor"
    className="flex items-start gap-4 rounded-xl border border-border bg-muted/30 p-5 my-8"
  >
    <div
      aria-hidden="true"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold"
    >
      GR
    </div>
    <div>
      <p className="font-semibold text-foreground">
        Dr. Gilberto Riccio — Advogado, OAB/BA 46.638 · Riccio Advocacia
      </p>
      <p className="text-sm text-muted-foreground mt-1">
        Atua em Salvador e região metropolitana nas áreas criminal, previdenciária, trabalhista e de família.
      </p>
    </div>
  </aside>
);

export default AuthorBox;
