export default function SectionHeader({ eyebrow, title, subtitle, delay = 0, className = 'mb-16' }) {
  return (
    <div className={`text-center ${className}`} data-aos="fade-up" data-aos-delay={delay}>
      {eyebrow && (
        <span className="text-brand-yellow text-xs font-bold uppercase tracking-widest mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-brand-navy text-4xl font-extrabold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="w-16 h-1 bg-brand-yellow mx-auto mt-6" />
    </div>
  )
}
