function FloatingPixel({
  size = 14,
  variant = 0,
  duration = 8,
  delay = 0,
  drift = 12,
  opacity = 0.5,
  className = "",
}: {
  size?: number;
  variant?: 0 | 1 | 2;
  duration?: number;
  delay?: number;
  drift?: number;
  opacity?: number;
  className?: string;
}) {
  return (
    <div aria-hidden className={className}>
      <span
        className="block rounded-md bg-term-green"
        style={{
          width: size,
          height: size,
          opacity,
          animation: `pixel-float-${variant} ${duration}s ease-in-out ${delay}s infinite`,
          // @ts-expect-error custom property consumed by the keyframes in FloatingPixels
          "--drift": `${drift}px`,
        }}
      />

      <style>{`
        @keyframes pixel-float-0 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(calc(var(--drift) * 0.4), var(--drift)); }
        }
        @keyframes pixel-float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(calc(var(--drift) * -0.5), calc(var(--drift) * -1)); }
        }
        @keyframes pixel-float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(var(--drift), calc(var(--drift) * -0.3)); }
        }
      `}</style>
    </div>
  );
}

export default FloatingPixel;
