export interface ArticleExpansion {
  sections: { title: string; paragraphs: string[] }[];
  faq?: { question: string; answer: string }[];
  updatedAt?: string;
}
