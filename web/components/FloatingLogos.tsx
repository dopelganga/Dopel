// FloatingLogos.tsx
import Image from 'next/image';

const logoCount = 8;
const logos = Array.from({ length: logoCount });

export default function FloatingLogos() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {logos.map((_, i) => (
        <Image
          key={i}
          src="/logo.svg"
          alt="Dopelganga Logo"
          width={60}
          height={60}
          className={`floating-logo absolute animate-float${i % 4 + 1}`}
          style={{
            left: `${10 + (i * 12)}vw`,
            top: `${5 + (i * 10) % 80}vh`,
            opacity: 0.13 + (i % 3) * 0.07,
          }}
        />
      ))}
    </div>
  );
}
