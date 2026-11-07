# Cruza as sugestões do Google (sugestoes.json) com o que o site já publica
# (títulos de artigos, guias e perguntas) e lista o que ainda não tem página.
# Uso: python -X utf8 scripts/pauta/lacunas.py
import json
import re
import unicodedata
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
DADOS = RAIZ / "src" / "data"

PARADAS = set("""
a o as os de da do das dos e em no na nos nas um uma para por com sem que se como qual quais quanto quantos
quando onde ou ao aos à às é ser tem ter meu minha seu sua pelo pela pelos pelas mais menos sobre até após
2025 2026 vs x
""".split())

def norm(t: str) -> list[str]:
    t = unicodedata.normalize("NFKD", t.lower())
    t = "".join(c for c in t if not unicodedata.combining(c))
    t = re.sub(r"[^a-z0-9 ]+", " ", t)
    return [w for w in t.split() if w not in PARADAS and len(w) > 1]

# 1) O que já existe
existentes = []
for arq in list(DADOS.glob("*.ts")) + list(DADOS.glob("**/*.ts")):
    txt = arq.read_text(encoding="utf-8", errors="replace")
    for m in re.finditer(r'\b(title|metaTitle|question|q)\s*:\s*"((?:[^"\\]|\\.){8,200})"', txt):
        existentes.append((m.group(2), set(norm(m.group(2))), arq.name))
for m in re.finditer(r"<loc>https://riccioadvocacia\.online/([^<]+)</loc>", (RAIZ / "public" / "sitemap.xml").read_text(encoding="utf-8")):
    slug = m.group(1).replace("/", " ").replace("-", " ")
    existentes.append((m.group(1), set(norm(slug)), "sitemap"))

def cobertura(sug: str):
    toks = set(norm(sug))
    if not toks:
        return 1.0, ""
    melhor, ref = 0.0, ""
    for texto, ts, _ in existentes:
        if not ts:
            continue
        s = len(toks & ts) / len(toks)
        if s > melhor:
            melhor, ref = s, texto
    return melhor, ref

sug = json.loads((Path(__file__).parent / "sugestoes.json").read_text(encoding="utf-8"))
print(f"Itens já publicados considerados: {len(existentes)}")
for area, sementes in sug.items():
    vistos = set()
    faltam = []
    for semente, lista in sementes.items():
        for i, s in enumerate(lista):
            k = " ".join(sorted(norm(s)))
            if k in vistos:
                continue
            vistos.add(k)
            c, ref = cobertura(s)
            if c < 0.75:
                faltam.append((i, c, s, ref))
    faltam.sort(key=lambda x: (x[0], x[1]))
    print(f"\n== {area}: {len(faltam)} sugestões sem página parecida")
    for i, c, s, ref in faltam[:40]:
        print(f"  [{i}] {c:.2f} {s}   (mais perto: {ref[:60]})")
