import { Link } from "react-router-dom";
import { AUTHOR_PATH, authorSchema } from "@/data/author";

export const AUTHOR_NAME = "Dr. Gilberto Riccio";

export { authorSchema };

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
        <Link to={AUTHOR_PATH} className="hover:underline underline-offset-4">
          Dr. Gilberto Riccio
        </Link>{" "}
        — Advogado, OAB/BA 46.638 · Riccio Advocacia
      </p>
      <p className="text-sm text-muted-foreground mt-1">
        Atua em Salvador e região metropolitana nas áreas criminal, previdenciária, trabalhista e de família.{" "}
        <Link to={AUTHOR_PATH} className="text-primary hover:underline underline-offset-4">
          Sobre o advogado
        </Link>
      </p>
    </div>
  </aside>
);

export default AuthorBox;
