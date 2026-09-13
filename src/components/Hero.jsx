import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // ── 1. MASK-UP TEXT REVEAL ─────────────────────────────────────────
      // Each .mask-line > span slides up from behind its parent overflow:hidden
      const maskLines = gsap.utils.toArray('.hero-mask-word')
      gsap.fromTo(maskLines,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.15,
          clearProps: 'all',
        }
      )

      // Subtitle fade up
      gsap.fromTo('.hero-subtitle',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.6, clearProps: 'all' }
      )

      // CTA buttons entrance
      gsap.fromTo('.hero-cta',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', delay: 0.8, clearProps: 'all' }
      )

      // Credential badges entrance
      gsap.fromTo('.hero-badges',
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 1.0, clearProps: 'all' }
      )

      // ── 2. IMAGE BREATH — slow continuous scale yoyo ───────────────────
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.04,
          duration: 10,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      }

      // ── 3. FLOATING DECORATIVE ORBS ────────────────────────────────────
      const orbs = gsap.utils.toArray('.hero-orb')
      orbs.forEach((orb, i) => {
        gsap.to(orb, {
          x: () => gsap.utils.random(-40, 40),
          y: () => gsap.utils.random(-30, 30),
          duration: gsap.utils.random(6, 12),
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: i * 1.5,
        })
      })

      // Image container entrance
      gsap.fromTo('.hero-image-container',
        { scale: 0.92, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.0, ease: 'power2.out', delay: 0.3, clearProps: 'opacity' }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center py-16 lg:py-24 overflow-hidden">

      {/* ── Floating Decorative Orbs ──────────────────────────────────────── */}
      <div className="hero-orb orb w-72 h-72 bg-gold-200/60 top-[10%] left-[-5%]" aria-hidden="true" />
      <div className="hero-orb orb w-96 h-96 bg-gold-100/50 bottom-[5%] right-[-8%]" aria-hidden="true" />
      <div className="hero-orb orb w-48 h-48 bg-amber-100/40 top-[60%] left-[30%]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left Content Column ───────────────────────────────────────── */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-10">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-gold-500/50 text-gold-700 text-xs font-bold tracking-widest uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold-600" />
              <span>SPEAK ENGLISH WITH AUTHORITY. BE HEARD. BE RESPECTED.</span>
            </div>

            {/* Headline with Mask-Up Reveal */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.85rem] font-bold text-black tracking-tight leading-[1.12]">
              <span className="mask-line">
                <span className="hero-mask-word">Speak Better English.</span>
              </span>
              <br />
              <span className="mask-line">
                <span className="hero-mask-word italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-gold-500 to-amber-600">
                  Communicate with Impact.
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-base sm:text-lg lg:text-xl text-slate-900 font-normal max-w-2xl leading-relaxed">
              Executive accent &amp; communication coaching for professionals who want their English to open doors, build trust, and command the room.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
              <MagneticButton
                href="#contact"
                className="px-8 py-4 rounded-xl text-sm shadow-gold-glow group"
              >
                <span>BOOK A CONSULTATION</span>
                <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
              </MagneticButton>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold tracking-wider text-black bg-white hover:bg-slate-50 border-2 border-slate-300 hover:border-gold-500 shadow-sm transition-all duration-200"
              >
                <span>EXPLORE SERVICES</span>
                <span className="material-symbols-outlined text-[18px]">south</span>
              </a>
            </div>

            {/* Credential Badges */}
            <div className="hero-badges pt-4 flex flex-wrap items-center gap-6 text-xs border-t border-slate-300 w-full">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-600 text-[18px]">verified</span>
                <span className="font-bold text-slate-950">Fortune 500 &amp; Law Leaders</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-600 text-[18px]">public</span>
                <span className="font-bold text-slate-950">Clients Across 7 Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gold-600 text-[18px]">lock</span>
                <span className="font-bold text-slate-950">100% Confidential Advisory</span>
              </div>
            </div>
          </div>

          {/* ── Right: Hero Portrait ─────────────────────────────────────── */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="hero-image-container relative w-full max-w-md lg:max-w-none group">

              {/* Gold Offset Frame */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-gold-500/50 bg-gradient-to-br from-gold-100/60 to-transparent -z-10" />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-300 shadow-editorial">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    ref={imageRef}
                    src="/hero.jpg"
                    alt="Abbas Salahshour"
                    className="w-full h-full object-cover object-top will-change-transform"
                  />
                </div>

                {/* Bottom Scrim */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                {/* Voice Resonance Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-500/50 shadow-sm">
                  <div className="flex items-end gap-[3px] h-3.5">
                    <span className="w-[2.5px] h-full bg-gold-600 rounded-full wave-bar wave-1" />
                    <span className="w-[2.5px] h-full bg-gold-600 rounded-full wave-bar wave-2" />
                    <span className="w-[2.5px] h-full bg-gold-500 rounded-full wave-bar wave-3" />
                    <span className="w-[2.5px] h-full bg-gold-600 rounded-full wave-bar wave-4" />
                    <span className="w-[2.5px] h-full bg-gold-500 rounded-full wave-bar wave-5" />
                  </div>
                  <span className="text-[10px] tracking-wider text-gold-700 uppercase font-bold">Resonance Active</span>
                </div>

                {/* Founder Info */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-300 shadow-sm flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-black">Abbas Salahshour</h3>
                    <p className="text-[10px] uppercase tracking-widest text-gold-700 font-bold">Executive Coach • Executive Communication Coach</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gold-100 flex items-center justify-center text-gold-700 border border-gold-500/40">
                    <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
