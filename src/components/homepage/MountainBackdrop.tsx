'use client';

export default function MountainBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 w-full z-[-1] pointer-events-none opacity-40"
    >
      <img
        src="/images/mountain.jpg" // 👈 use the snow-fog Pexels image, optimized
        alt="Mountain backdrop"
        className="w-full h-auto object-cover object-bottom"
        loading="eager"
      />
    </div>
  );
}
