# Coleta sugestões reais da busca do Google (autocompletar) para montar a pauta de artigos.
# Uso: python scripts/pauta/sugestoes.py > scripts/pauta/sugestoes.json
# Poucas requisições, com pausa entre elas; só lê as sugestões públicas do campo de busca.
import json
import time
import urllib.parse
import urllib.request

SEMENTES = {
    "trabalhista": [
        "advogado trabalhista salvador", "rescisão indireta", "demissão sem justa causa", "justa causa",
        "processo trabalhista", "seguro desemprego 2026", "horas extras", "fgts", "acordo trabalhista",
        "trabalhei sem carteira assinada", "assédio moral no trabalho", "pedido de demissão",
        "como entrar na justiça do trabalho", "quanto tempo demora", "tenho direito",
    ],
    "previdenciario": [
        "advogado previdenciário salvador", "aposentadoria 2026", "inss negou", "bpc loas", "auxílio doença",
        "pensão por morte", "perícia inss", "revisão da aposentadoria", "aposentadoria especial",
        "auxílio acidente", "salário maternidade", "como pedir aposentadoria", "inss bahia",
    ],
    "familia": [
        "advogado de família salvador", "divórcio", "pensão alimentícia", "guarda compartilhada",
        "inventário", "união estável", "pensão alimentícia atrasada", "divórcio online",
        "partilha de bens", "reconhecimento de paternidade",
    ],
    "consumidor": [
        "nome sujo indevidamente", "cobrança indevida", "golpe do pix", "voo cancelado",
        "plano de saúde negou", "procon bahia", "produto com defeito", "banco descontou",
        "empréstimo consignado não autorizado", "conta de luz alta coelba", "embasa conta alta",
    ],
    "criminal": [
        "advogado criminal salvador", "audiência de custódia", "prisão em flagrante", "medida protetiva",
        "boletim de ocorrência", "inquérito policial", "liberdade provisória", "fiança",
        "crime de ameaça", "lesão corporal",
    ],
    "civil": [
        "usucapião", "ação de despejo", "contrato de aluguel", "danos morais", "acidente de trânsito",
        "cobrança de dívida", "juizado especial salvador", "pequenas causas bahia",
    ],
}

def sugerir(q: str) -> list[str]:
    url = "https://suggestqueries.google.com/complete/search?" + urllib.parse.urlencode(
        {"client": "firefox", "hl": "pt-BR", "gl": "br", "q": q}
    )
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=10) as r:
        data = json.loads(r.read().decode("utf-8", "replace"))
    return data[1] if len(data) > 1 else []

saida = {}
for area, sementes in SEMENTES.items():
    saida[area] = {}
    for s in sementes:
        try:
            saida[area][s] = sugerir(s)
        except Exception as e:  # rede instável: segue com o resto
            saida[area][s] = [f"ERRO: {e}"]
        time.sleep(0.4)

print(json.dumps(saida, ensure_ascii=False, indent=1))
