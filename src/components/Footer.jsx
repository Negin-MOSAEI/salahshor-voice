export default function Footer() {
  const links = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="w-full bg-white border-t border-slate-300 py-12 text-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gold-100 flex items-center justify-center border border-gold-500/50">
              <img src="/logo.png" alt="Emblem" className="w-5 h-5 object-contain" />
            </div>
            <div>
              <span className="font-serif font-bold text-black tracking-wider text-sm">SALAHSHOUR VOICE</span>
              <span className="block text-[10px] text-gold-700 uppercase tracking-widest font-extrabold">Executive Communication</span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-gold-700 transition-colors uppercase tracking-wider font-bold"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-slate-700 font-semibold text-[11px]">
          <p>© 2025 SALAHSHOUR VOICE. All rights reserved. Confidential &amp; Sovereign Advisory.</p>
          <p>Founded by Abbas Salahshour • MA in TEFL • La Trobe Law School Alumnus</p>
        </div>

      </div>
    </footer>
  )
}
