import FloatingLogos from '../components/FloatingLogos';
// import { lazy } from 'react';

export default function Home() {
  return (
    <>
      <FloatingLogos />
      <div className="mb-20 flex flex-col gap-10 items-center relative z-10">
      <h1
        className="mt-12 mb-2 text-4xl md:text-5xl font-black text-center text-white tracking-tight drop-shadow-lg font-sans"
        style={{ letterSpacing: '-0.01em', textShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
      >
        Your Wallet, Hub &amp; Twin.<br />The Hot Spot
      </h1>
      <p className="mb-6 text-center text-gray-400 text-base md:text-lg max-w-xl">
        the Hot Spot for a Crypto Wallet
      </p>
      <div className="flex flex-col md:flex-row gap-3 mt-8">
        <a
          href="https://apps.apple.com/us/app/dopelganga-crypto-wallet/id6445964121"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-5 py-2 rounded-md bg-zinc-800 text-gray-100 font-semibold text-base shadow hover:bg-zinc-700 transition min-w-[180px]"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-.03 0-.06 0-.09-.01-.02-.03-.03-.07-.03-.11 0-1.13.92-2.05 2.05-2.05.04 0 .08.01.11.03.01.03.03.06.03.09zm2.13 2.19c-1.16-.07-2.14.66-2.7.66-.57 0-1.44-.64-2.37-.62-.97.02-1.87.57-2.37 1.45-1.01 1.75-.26 4.34.72 5.76.48.7 1.05 1.48 1.8 1.45.72-.03.99-.47 1.86-.47.87 0 1.11.47 1.87.45.77-.02 1.26-.71 1.73-1.41.55-.8.77-1.58.78-1.62-.02-.01-1.5-.58-1.52-2.3-.01-1.44 1.18-2.1 1.23-2.13-.67-.98-1.71-1.09-2.08-1.11zm-2.18 6.13c-.04-.01-.08-.01-.12-.01-.36 0-.7.14-.96.14-.25 0-.59-.13-.97-.13-.5 0-.97.22-1.32.6-.56.6-.73 1.73-.3 2.66.27.6.77 1.32 1.34 1.3.53-.02.73-.34 1.37-.34.64 0 .81.34 1.36.33.57-.01 1.01-.66 1.28-1.26.18-.37.25-.72.25-.74-.01 0-.97-.38-.98-1.5-.01-.94.77-1.37.8-1.39zm-2.13 6.13c-.01 0-.02 0-.03 0-.29 0-.57.11-.78.11-.2 0-.47-.1-.78-.1-.4 0-.77.18-1.05.48-.45.48-.59 1.38-.24 2.13.21.48.6 1.06 1.05 1.05.42-.01.58-.27 1.09-.27.51 0 .65.27 1.09.26.45-.01.8-.52 1.01-1 .14-.29.19-.56.19-.57-.01 0-.74-.29-.75-1.13-.01-.7.57-1.02.59-1.04z"/></svg>
          Apple
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.dopelganga.wallet"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-5 py-2 rounded-md bg-zinc-800 text-gray-100 font-semibold text-base shadow hover:bg-zinc-700 transition min-w-[180px]"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M3.654 2.978a1.5 1.5 0 0 1 2.122 0l12.728 12.728a1.5 1.5 0 0 1 0 2.122l-2.122 2.122a1.5 1.5 0 0 1-2.122 0L3.654 7.222a1.5 1.5 0 0 1 0-2.122l2.122-2.122zm1.415 1.415L4.95 4.95a.5.5 0 0 0 0 .707l12.728 12.728a.5.5 0 0 0 .707 0l.12-.12-13.436-13.436zm14.142 14.142l-1.415 1.415a.5.5 0 0 1-.707 0L3.95 4.95a.5.5 0 0 1 0-.707l1.415-1.415a.5.5 0 0 1 .707 0l12.728 12.728a.5.5 0 0 1 0 .707z"/></svg>
          Google Play
        </a>
        <a
          href="https://chrome.google.com/webstore/detail/dopelganga/aflkmfhebedbjioipglgcbcmnbpgliof"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-5 py-2 rounded-md bg-zinc-800 text-gray-100 font-semibold text-base shadow hover:bg-zinc-700 transition min-w-[180px]"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
          Chrome Extension
        </a>
      </div>
  {/* News articles removed as requested */}
      {/*
      <Suspense fallback={null}>
        <Partners />
      </Suspense>
		*/}
  {/* Newsletter (email subscribe) removed as requested */}
    </div>
  </>
  );
}
