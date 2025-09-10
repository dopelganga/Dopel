export default function Terms() {
  return (
    <div className="mx-auto mb-28 flex flex-col items-center gap-16">
      <h1
        className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-50 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
      >
        Dopelganga Terms of Service
      </h1>
      <div className="text-zinc-50 text-lg max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-4 mt-8 text-white">How Dopelganga Wallet Works</h2>
        <p className="mb-4">
          Dopelganga is a non-custodial crypto wallet and hub for digital assets, NFTs, and dApps. Your private keys are encrypted and stored securely on your device, never shared with Dopelganga or any third party. You can create, import, and manage multiple wallets, interact with decentralized applications, and sign transactions directly from the extension or mobile app.
        </p>
        <ul className="list-disc list-inside mb-4 text-left mx-auto max-w-xl">
          <li><b>Non-custodial:</b> Only you control your keys and funds.</li>
          <li><b>Multi-chain:</b> Supports major blockchains and tokens.</li>
          <li><b>Secure:</b> Private keys are encrypted and never leave your device.</li>
          <li><b>Easy Recovery:</b> Backup and restore with a secure recovery phrase.</li>
          <li><b>Integrated dApps:</b> Access DeFi, NFTs, and more directly in the wallet.</li>
        </ul>
        <p>
          For more details, visit our <a href="https://dopelganga.com/docs" className="text-teal-400 underline" target="_blank" rel="noopener noreferrer">documentation</a>.
        </p>
      </div>
    </div>
  );
}
