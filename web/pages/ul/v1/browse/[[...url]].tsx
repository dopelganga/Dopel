import { useRouter } from 'next/router';
import { useEffect } from 'react';

declare global {
  interface Window {
  dopelganga?: { isDopelganga?: boolean };
  }
}

export default function Browse() {
  const router = useRouter();

  useEffect(() => {
    let timer;

  if (window.dopelganga?.isDopelganga) {
  // Dopelganga is installed, redirect user to the destination URL
      try {
        const [, , escapedUrl] = router.asPath.match(/\/ul(\/v1)?\/browse\/([^?]+)/);
        const { protocol, href } = new URL(decodeURIComponent(escapedUrl));
        if (!['http:', 'https:'].includes(protocol)) {
          throw new Error('Only http & https protocols supported');
        }
        window.location.assign(href);
      } catch (err) {
        // not a valid escaped URL
      }
    }

  // Dopelganga not installed or invalid URL, redirect to downloads
    timer = setTimeout(() => {
      router.replace('/downloads');
    }, 5000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [router]);

  return (
    <div className="text-center text-zinc-400">
      <p>Opening link...</p>
    </div>
  );
}
