/**
 * Calculate reading time based on word count
 * Average reading speed: 200 words per minute
 */
export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes);
};

/**
 * Get reading time for a blog article
 */
export const getArticleReadingTime = (content: {
  intro: string;
  whatIs: string;
  whenYouHaveRight: string[];
  documents: string[];
  deadlines: string;
  faq: { question: string; answer: string }[];
}): number => {
  const allText = [
    content.intro,
    content.whatIs,
    ...content.whenYouHaveRight,
    ...content.documents,
    content.deadlines,
    ...content.faq.flatMap((f) => [f.question, f.answer]),
  ].join(" ");

  return calculateReadingTime(allText);
};

/**
 * Decode HTML entities in text
 */
export const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};
