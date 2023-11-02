import { useCallback, useState } from 'react';
import { toBlob } from 'html-to-image';

import askWritePermission from '../lib/askWritePermission';

export default function useCopyElementImage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const copyElementImage = useCallback(async (element: HTMLElement | null) => {
    if (element === null) return;

    setLoading(true);
    const granted = await askWritePermission();
    if (!granted) return;

    const parent = element.parentElement!;
    const clone = element.cloneNode(true) as HTMLDivElement;
    parent.appendChild(clone);
    parent.classList.add('relative');
    clone.classList.add('absolute', 'inset-0', '-z-10', 'px-6');
    const hiddenElements = clone.querySelectorAll('[data-only-download="true"]');
    hiddenElements.forEach((el) => el.classList.remove('hidden'));

    try {
      const blob = await toBlob(clone, { cacheBust: true });
      if (blob) navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
      parent.removeChild(clone);
      parent.classList.remove('relative');
      setLoading(false);
    }
  }, []);

  return [copyElementImage, { loading, error }] as const;
}
