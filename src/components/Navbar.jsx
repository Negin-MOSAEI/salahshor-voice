import { useState, useCallback } from 'react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMenu = useCallback(() => setMobileOpen(prev => !prev), [])
  const closeMenu = useCallback(() => setMobileOpen(false), [])

  const navLinks = [
    { label: 'HOME', href: '#', active: true },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'FOR IELTS/TOEFL', href: '#services' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'CONTACT', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Brand */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-10 h-10 rounded-lg bg-gradient-to-tr from-gold-600 via-gold-500 to-gold-400 p-[1.5px] shadow-sm transition-transform duration-200 group-hover:scale-105">
            <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center overflow-hidden">
              <img src="/logo.png" alt="Salahshour Voice Emblem" className="w-7 h-7 object-contain" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg lg:text-xl tracking-wider text-black group-hover:text-gold-600 transition-colors">SALAHSHOUR VOICE</span>
            <span className="text-[9px] uppercase tracking-[0.25em] text-gold-700 font-bold leading-none">Executive Coaching</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs font-bold uppercase tracking-wider text-slate-800">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? 'text-gold-700 border-b-2 border-gold-500 pb-0.5 transition-colors'
                  : 'hover:text-gold-700 transition-colors'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="#contact"
            className="btn-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm border border-gold-500/40 inline-flex items-center gap-2"
          >
            <span>BOOK A CONSULTATION</span>
            <span className="material-symbols-outlined text-[16px]">north_east</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          className="lg:hidden text-black hover:text-gold-700 p-2 focus:outline-none"
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className={`block text-sm font-bold uppercase tracking-wider py-1 ${
                link.active ? 'text-gold-700' : 'text-slate-900 hover:text-gold-700'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-200">
            <a
              href="#contact"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-black shadow-md"
            >
              <span>BOOK A CONSULTATION</span>
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
