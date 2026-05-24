/**
 * Ilustrações vetoriais SVG inline para a área /prev.
 *
 * Vantagens de SVG inline:
 *  - Carregamento instantâneo (vai no bundle)
 *  - Cores controladas via CSS/Tailwind
 *  - Acessibilidade nativa
 *  - Zero dependência externa
 *
 * Estilo: traço fino, geométrico-humano, paleta navy/gold/sálvia.
 * Inspirado em ilustrações editoriais modernas (NYT, Stripe, Linear).
 */

interface IllustrationProps {
  className?: string;
}

// ===== Idoso em casa (poltrona, livro) =====
export const IllustrationSeniorReading = ({ className }: IllustrationProps) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Fundo circular */}
    <circle cx="200" cy="200" r="180" fill="#F5F1EA" />

    {/* Poltrona */}
    <path
      d="M120 260 Q120 220 160 220 L240 220 Q280 220 280 260 L280 320 L120 320 Z"
      fill="#7A9583"
      opacity="0.25"
    />
    <path
      d="M120 260 Q120 220 160 220 L240 220 Q280 220 280 260 L280 320"
      stroke="#0B1B2B"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Corpo / camisa */}
    <path
      d="M170 200 Q170 170 200 170 Q230 170 230 200 L230 250 L170 250 Z"
      fill="#C9A961"
      opacity="0.3"
    />
    <path
      d="M170 200 Q170 170 200 170 Q230 170 230 200 L230 250"
      stroke="#0B1B2B"
      strokeWidth="3"
      strokeLinecap="round"
    />

    {/* Cabeça */}
    <circle cx="200" cy="150" r="28" fill="#F5F1EA" stroke="#0B1B2B" strokeWidth="3" />

    {/* Cabelo (grisalho) */}
    <path
      d="M175 138 Q175 122 200 122 Q225 122 225 138"
      stroke="#0B1B2B"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M178 130 L182 138 M188 126 L190 134 M210 126 L208 134 M218 130 L214 138" stroke="#0B1B2B" strokeWidth="1.5" />

    {/* Óculos */}
    <circle cx="192" cy="152" r="5" stroke="#0B1B2B" strokeWidth="2" fill="none" />
    <circle cx="208" cy="152" r="5" stroke="#0B1B2B" strokeWidth="2" fill="none" />
    <line x1="197" y1="152" x2="203" y2="152" stroke="#0B1B2B" strokeWidth="2" />

    {/* Sorriso */}
    <path d="M192 165 Q200 170 208 165" stroke="#0B1B2B" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Livro nas mãos */}
    <rect x="180" y="225" width="40" height="28" rx="2" fill="#C9A961" stroke="#0B1B2B" strokeWidth="2" />
    <line x1="200" y1="225" x2="200" y2="253" stroke="#0B1B2B" strokeWidth="2" />

    {/* Plantinha (canto) */}
    <path d="M320 290 Q320 270 330 260 Q340 270 340 290" fill="#7A9583" opacity="0.6" />
    <rect x="318" y="290" width="24" height="20" fill="#0B1B2B" />
  </svg>
);

// ===== Família multigeracional =====
export const IllustrationFamily = ({ className }: IllustrationProps) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="200" cy="200" r="180" fill="#F5F1EA" />

    {/* Pessoa idosa (esq) */}
    <circle cx="135" cy="160" r="25" fill="#F5F1EA" stroke="#0B1B2B" strokeWidth="3" />
    <path d="M115 152 Q115 138 135 138 Q155 138 155 152" stroke="#0B1B2B" strokeWidth="3" fill="none" />
    <path d="M115 240 Q115 195 135 195 Q155 195 155 240" stroke="#0B1B2B" strokeWidth="3" fill="#7A9583" opacity="0.3" />
    <circle cx="128" cy="160" r="3" fill="#0B1B2B" />
    <circle cx="142" cy="160" r="3" fill="#0B1B2B" />
    <path d="M128 170 Q135 174 142 170" stroke="#0B1B2B" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Adulto (centro) */}
    <circle cx="200" cy="155" r="28" fill="#F5F1EA" stroke="#0B1B2B" strokeWidth="3" />
    <path d="M178 245 Q178 195 200 195 Q222 195 222 245" stroke="#0B1B2B" strokeWidth="3" fill="#C9A961" opacity="0.3" />
    <circle cx="192" cy="155" r="3" fill="#0B1B2B" />
    <circle cx="208" cy="155" r="3" fill="#0B1B2B" />
    <path d="M192 168 Q200 172 208 168" stroke="#0B1B2B" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Criança (dir) */}
    <circle cx="270" cy="185" r="20" fill="#F5F1EA" stroke="#0B1B2B" strokeWidth="3" />
    <path d="M250 255 Q250 220 270 220 Q290 220 290 255" stroke="#0B1B2B" strokeWidth="3" fill="#7A9583" opacity="0.3" />
    <circle cx="265" cy="185" r="2.5" fill="#0B1B2B" />
    <circle cx="275" cy="185" r="2.5" fill="#0B1B2B" />
    <path d="M265 193 Q270 196 275 193" stroke="#0B1B2B" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Linha de chão */}
    <line x1="80" y1="295" x2="320" y2="295" stroke="#0B1B2B" strokeWidth="2" strokeLinecap="round" />

    {/* Coração entre eles (decorativo) */}
    <path
      d="M195 100 C195 95 200 92 203 95 C206 92 211 95 211 100 C211 105 203 110 203 110 C203 110 195 105 195 100 Z"
      fill="#C9A961"
    />
  </svg>
);

// ===== Pessoa com deficiência (cadeira de rodas) =====
export const IllustrationAccessibility = ({ className }: IllustrationProps) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="200" cy="200" r="180" fill="#F5F1EA" />

    {/* Cadeira de rodas - estrutura */}
    {/* Roda grande */}
    <circle cx="170" cy="270" r="40" stroke="#0B1B2B" strokeWidth="3" fill="none" />
    <circle cx="170" cy="270" r="8" fill="#0B1B2B" />
    {/* Raios */}
    <line x1="170" y1="230" x2="170" y2="310" stroke="#0B1B2B" strokeWidth="2" />
    <line x1="130" y1="270" x2="210" y2="270" stroke="#0B1B2B" strokeWidth="2" />
    <line x1="142" y1="242" x2="198" y2="298" stroke="#0B1B2B" strokeWidth="2" />
    <line x1="142" y1="298" x2="198" y2="242" stroke="#0B1B2B" strokeWidth="2" />

    {/* Rodinha pequena */}
    <circle cx="250" cy="290" r="15" stroke="#0B1B2B" strokeWidth="3" fill="none" />
    <circle cx="250" cy="290" r="3" fill="#0B1B2B" />

    {/* Assento e encosto */}
    <path
      d="M150 240 L235 240 L235 200 L210 200 L210 240"
      stroke="#0B1B2B"
      strokeWidth="3"
      fill="#C9A961"
      fillOpacity="0.3"
      strokeLinejoin="round"
    />

    {/* Pessoa - corpo */}
    <path
      d="M180 200 Q180 180 200 180 Q220 180 220 200 L220 235 L180 235 Z"
      fill="#7A9583"
      fillOpacity="0.4"
      stroke="#0B1B2B"
      strokeWidth="3"
    />

    {/* Cabeça */}
    <circle cx="200" cy="155" r="22" fill="#F5F1EA" stroke="#0B1B2B" strokeWidth="3" />

    {/* Rosto */}
    <circle cx="193" cy="155" r="2.5" fill="#0B1B2B" />
    <circle cx="207" cy="155" r="2.5" fill="#0B1B2B" />
    <path d="M193 165 Q200 169 207 165" stroke="#0B1B2B" strokeWidth="2" strokeLinecap="round" fill="none" />

    {/* Braço apoiado */}
    <path d="M180 215 L155 235" stroke="#0B1B2B" strokeWidth="3" strokeLinecap="round" />

    {/* Sol decorativo */}
    <circle cx="320" cy="80" r="20" fill="#C9A961" opacity="0.5" />
    <g stroke="#C9A961" strokeWidth="2" strokeLinecap="round">
      <line x1="320" y1="50" x2="320" y2="58" />
      <line x1="320" y1="102" x2="320" y2="110" />
      <line x1="290" y1="80" x2="298" y2="80" />
      <line x1="342" y1="80" x2="350" y2="80" />
    </g>
  </svg>
);

// ===== Análise de documentos (CNIS, papéis) =====
export const IllustrationDocuments = ({ className }: IllustrationProps) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="200" cy="200" r="180" fill="#F5F1EA" />

    {/* Papéis empilhados */}
    <rect x="120" y="220" width="160" height="100" rx="3" fill="#C9A961" fillOpacity="0.2" stroke="#0B1B2B" strokeWidth="2.5" transform="rotate(-3 200 270)" />
    <rect x="130" y="200" width="160" height="100" rx="3" fill="white" stroke="#0B1B2B" strokeWidth="2.5" transform="rotate(2 210 250)" />
    <rect x="120" y="180" width="160" height="100" rx="3" fill="white" stroke="#0B1B2B" strokeWidth="2.5" />

    {/* Linhas no papel de cima */}
    <line x1="135" y1="200" x2="265" y2="200" stroke="#0B1B2B" strokeWidth="1.5" />
    <line x1="135" y1="215" x2="245" y2="215" stroke="#0B1B2B" strokeWidth="1.5" opacity="0.5" />
    <line x1="135" y1="230" x2="255" y2="230" stroke="#0B1B2B" strokeWidth="1.5" opacity="0.5" />
    <line x1="135" y1="245" x2="235" y2="245" stroke="#0B1B2B" strokeWidth="1.5" opacity="0.5" />
    <line x1="135" y1="260" x2="255" y2="260" stroke="#0B1B2B" strokeWidth="1.5" opacity="0.5" />

    {/* Lupa */}
    <circle cx="240" cy="140" r="40" stroke="#0B1B2B" strokeWidth="3.5" fill="white" fillOpacity="0.9" />
    <circle cx="240" cy="140" r="32" stroke="#C9A961" strokeWidth="1.5" fill="none" opacity="0.5" />
    <line x1="270" y1="170" x2="295" y2="195" stroke="#0B1B2B" strokeWidth="5" strokeLinecap="round" />

    {/* Check mark dentro da lupa */}
    <path d="M225 140 L235 150 L255 130" stroke="#7A9583" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

// ===== Coração / Cuidado (BPC, assistência) =====
export const IllustrationCare = ({ className }: IllustrationProps) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="200" cy="200" r="180" fill="#F5F1EA" />

    {/* Mãos abertas */}
    {/* Mão esquerda */}
    <path
      d="M120 240 Q110 210 120 195 L135 200 L145 185 L160 195 L170 185 L185 195 L195 240"
      stroke="#0B1B2B"
      strokeWidth="3"
      fill="#C9A961"
      fillOpacity="0.3"
      strokeLinejoin="round"
      strokeLinecap="round"
    />

    {/* Mão direita */}
    <path
      d="M280 240 Q290 210 280 195 L265 200 L255 185 L240 195 L230 185 L215 195 L205 240"
      stroke="#0B1B2B"
      strokeWidth="3"
      fill="#C9A961"
      fillOpacity="0.3"
      strokeLinejoin="round"
      strokeLinecap="round"
    />

    {/* Coração no meio */}
    <path
      d="M200 130 C188 110 158 110 158 145 C158 175 200 200 200 200 C200 200 242 175 242 145 C242 110 212 110 200 130 Z"
      fill="#7A9583"
      stroke="#0B1B2B"
      strokeWidth="3"
      strokeLinejoin="round"
    />

    {/* Brilho do coração */}
    <ellipse cx="180" cy="140" rx="8" ry="12" fill="white" opacity="0.5" transform="rotate(-30 180 140)" />
  </svg>
);

// ===== Calendário / Tempo (Aposentadoria por tempo) =====
export const IllustrationCalendar = ({ className }: IllustrationProps) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="200" cy="200" r="180" fill="#F5F1EA" />

    {/* Calendário */}
    <rect x="120" y="130" width="160" height="160" rx="8" fill="white" stroke="#0B1B2B" strokeWidth="3" />

    {/* Header colorido */}
    <path d="M120 130 L280 130 L280 160 L120 160 Z" fill="#0B1B2B" />

    {/* Anel furos */}
    <circle cx="155" cy="120" r="6" fill="#C9A961" stroke="#0B1B2B" strokeWidth="2" />
    <circle cx="245" cy="120" r="6" fill="#C9A961" stroke="#0B1B2B" strokeWidth="2" />

    {/* Grade do calendário */}
    <g stroke="#0B1B2B" strokeWidth="1.5" opacity="0.3">
      <line x1="143" y1="175" x2="257" y2="175" />
      <line x1="143" y1="210" x2="257" y2="210" />
      <line x1="143" y1="245" x2="257" y2="245" />
      <line x1="166" y1="170" x2="166" y2="280" />
      <line x1="200" y1="170" x2="200" y2="280" />
      <line x1="234" y1="170" x2="234" y2="280" />
    </g>

    {/* Dia destacado (futuro - aposentadoria) */}
    <circle cx="217" cy="227" r="14" fill="#C9A961" />
    <text x="217" y="232" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0B1B2B">★</text>

    {/* Ponteiro / seta apontando */}
    <path
      d="M295 200 Q310 200 320 210 L320 230 Q310 240 295 240"
      stroke="#7A9583"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ===== WhatsApp / Conversa =====
export const IllustrationChat = ({ className }: IllustrationProps) => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="200" cy="200" r="180" fill="#F5F1EA" />

    {/* Balão recebido */}
    <path
      d="M100 150 L200 150 Q220 150 220 170 L220 200 Q220 220 200 220 L120 220 L100 240 Z"
      fill="white"
      stroke="#0B1B2B"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <line x1="115" y1="175" x2="195" y2="175" stroke="#0B1B2B" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
    <line x1="115" y1="190" x2="180" y2="190" stroke="#0B1B2B" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
    <line x1="115" y1="205" x2="170" y2="205" stroke="#0B1B2B" strokeWidth="2" opacity="0.4" strokeLinecap="round" />

    {/* Balão enviado */}
    <path
      d="M300 250 L200 250 Q180 250 180 270 L180 300 Q180 320 200 320 L280 320 L300 340 Z"
      fill="#7A9583"
      fillOpacity="0.3"
      stroke="#0B1B2B"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <line x1="200" y1="275" x2="285" y2="275" stroke="#0B1B2B" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
    <line x1="200" y1="290" x2="270" y2="290" stroke="#0B1B2B" strokeWidth="2" opacity="0.5" strokeLinecap="round" />
    <line x1="200" y1="305" x2="280" y2="305" stroke="#0B1B2B" strokeWidth="2" opacity="0.5" strokeLinecap="round" />

    {/* Pequenos pontinhos de "digitando" */}
    <circle cx="60" cy="280" r="4" fill="#C9A961" />
    <circle cx="78" cy="280" r="4" fill="#C9A961" opacity="0.7" />
    <circle cx="96" cy="280" r="4" fill="#C9A961" opacity="0.4" />
  </svg>
);
