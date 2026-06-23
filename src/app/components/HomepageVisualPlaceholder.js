const variantClasses = {
  project:
    'bg-primary text-white [--line-color:rgba(247,235,212,0.18)] [--accent-color:#d59f0f]',
  capability:
    'bg-menu text-white [--line-color:rgba(247,235,212,0.16)] [--accent-color:#7b4f2a]',
};

export default function HomepageVisualPlaceholder({
  eyebrow,
  title,
  variant = 'project',
}) {
  const variantClass = variantClasses[variant] || variantClasses.project;

  return (
    <div
      className={`relative isolate flex aspect-[16/9] min-h-[13rem] max-w-full overflow-hidden rounded border border-neutral p-6 shadow-sm ${variantClass}`}
      aria-label={`${eyebrow}: ${title}`}
    >
      <div
        className="absolute inset-0 opacity-70"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(var(--line-color) 1px, transparent 1px), linear-gradient(90deg, var(--line-color) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[var(--line-color)]" aria-hidden="true" />
      <div className="absolute bottom-8 right-8 h-20 w-32 border border-[var(--line-color)]" aria-hidden="true" />
      <div className="absolute bottom-12 left-8 h-px w-28 bg-[var(--accent-color)]" aria-hidden="true" />

      <svg
        className="absolute right-8 top-8 h-20 w-20 text-white/25"
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M18 64H78M24 54H72M32 44H64M40 34H56"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M24 70L48 22L72 70"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative z-10 mt-auto max-w-[22rem] min-w-0">
        <p className="body text-sm font-semibold uppercase tracking-[0.12em] text-accent">
          {eyebrow}
        </p>
        <h3 className="mt-3 break-words text-xl font-semibold leading-tight text-white md:text-2xl">
          {title}
        </h3>
      </div>
    </div>
  );
}
