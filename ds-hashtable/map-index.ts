export type Document = {
  title: string;
  content: string;
};

export type DocumentIndex = Map<string, Set<Document>>;

/**
 * Builds a DocumentIndex from a list of Documents.
 * The index's keys are the words in all the documents,
 * and the values are the documents the word appears in.
 */
export function buildIndex(docs: Document[]): DocumentIndex {
  const DocumentIndex = new Map<string, Set<Document>>();

  for (let i = 0; i < docs.length; i++) {
    const contentWords = docs[i].content.toLowerCase().match(/\b(\w+)\b/g);
    if (contentWords) {
      for (let n = 0; n < contentWords.length; n++) {
        const contentWord = contentWords[n];
        if (DocumentIndex.get(contentWord)) {
          DocumentIndex.get(contentWord)?.add(docs[i]);
        } else DocumentIndex.set(contentWord, new Set([docs[i]]));
      }
    }
  }

  return DocumentIndex;
}

// const docSet = DocumentIndex.get(contentWords[n]);
// if (docSet) docSet.add(docs[i]);
// else {
//   const s = new Set(); // You must construct the set with no arguments
//   s.add(docs[i]);
//   DocumentIndex.set(contentWords[n], s);
// }
