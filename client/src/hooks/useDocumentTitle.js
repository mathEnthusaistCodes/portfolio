import { useEffect } from 'react';

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | Kaushik Nagarajan`
      : 'Kaushik Nagarajan | Portfolio';
  }, [title]);
}
