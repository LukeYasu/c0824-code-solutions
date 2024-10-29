import { Document, DocumentIndex } from './map-index';

/**
 * Queries a DocumentIndex and returns all the Documents that contain
 * any of the words in the query, as a Set.
 */
export function queryIndex(index: DocumentIndex, query: string): Set<Document> {
  const result = new Set<Document>();
  const contentWords = query.toLowerCase().match(/\b(\w+)\b/g);
  contentWords?.forEach((word) => {
    const docSet = index.get(word);
    if (docSet) {
      docSet.forEach((doc) => result.add(doc));
    }
  });
  return result;
}
