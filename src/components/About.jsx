import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from './MagneticButton'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {

      // ── PARALLAX on about.jpg ─────────────────────────────────────────
      // Image moves at ~60% speed of the scroll → smooth parallax
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        )
      }

      // ── Image container reveal ────────────────────────────────────────
      gsap.fromTo('.about-image-wrap',
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.about-image-wrap', start: 'top 85%', once: true },
          clearProps: 'all',
        }
      )

      // ── Text content reveal ───────────────────────────────────────────
      const textEls = gsap.utils.toArray('.about-reveal')
      gsap.fromTo(textEls,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.about-content', start: 'top 85%', once: true },
          clearProps: 'all',
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, { scope: sectionRef })

  return (
    <section id="about" ref={sectionRef} className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* ── Left: Image with Gold Frame + Parallax ───────────────────── */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="about-image-wrap relative group">

              {/* Gold Offset Border */}
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-gold-500/50 bg-gold-100/60 -z-10" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-300 shadow-editorial">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    ref={imageRef}
                    src="/about.jpg"
                    alt="Executive Coaching Session"
                    className="w-full h-full object-cover object-center will-change-transform scale-110"
                  />
                </div>

                {/* Scrim */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                {/* Session Tag */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold-500/50 text-[10px] font-bold tracking-wider text-gold-700 uppercase shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-gold-600" />
                  <span>1-on-1 Master Laboratory</span>
                </div>

                {/* Waveform Overlay */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-300 shadow-sm">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-gold-700 font-bold uppercase tracking-wider text-[10px]">Acoustic Formant Oscillation</span>
                    <span className="text-black font-mono text-[11px] font-bold">Resonance 99.4%</span>
                  </div>
                  <div className="w-full h-8 flex items-end justify-between gap-[3px]">
                    {['wave-1','wave-2','wave-3','wave-4','wave-5','wave-2','wave-4','wave-1'].map((cls, i) => (
                      <span key={i} className={`flex-1 h-full ${i % 2 === 0 ? 'bg-gold-600' : 'bg-gold-500'} rounded-full wave-bar ${cls}`} />
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── Right: Content ───────────────────────────────────────────── */}
          <div className="about-content lg:col-span-7 order-1 lg:order-2 flex flex-col items-start space-y-6">

            <div className="about-reveal inline-flex items-center gap-2 text-gold-700 text-xs font-bold uppercase tracking-widest">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
              <span>ABOUT SALAHSHOUR VOICE</span>
            </div>

            <h2 className="about-reveal font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-black tracking-tight leading-tight">
              Helping High-Achieving Professionals Communicate at Their Highest Level
            </h2>

            <div className="about-reveal space-y-4 text-base sm:text-lg text-slate-900 font-normal leading-relaxed">
              <p className="border-l-4 border-gold-500 pl-4 py-1.5 text-black font-semibold text-lg bg-gold-50/50 rounded-r-lg">
                With over 9 years of experience coaching 500+ clients across 7 countries, I help executives, lawyers, academics, and ambitious professionals eliminate the accent and hesitation that quietly holds them back.
              </p>
              <p className="text-slate-900 text-base leading-relaxed">
                Holding an <strong className="text-black font-extrabold underline decoration-gold-500 decoration-2">MA in TEFL</strong>, having taught <strong className="text-black font-extrabold underline decoration-gold-500 decoration-2">Legal English and Communication at La Trobe Law School</strong>, and currently hosting the <strong className="text-black font-extrabold underline decoration-gold-500 decoration-2">LinguaFox Podcast</strong>, Abbas merges rigorous linguistic science with real-world boardroom dynamics. Every engagement is private, custom-tailored, and focused on rapid behavioral transformation.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="about-reveal grid grid-cols-1 sm:grid-cols-3 gap-4 py-2 w-full">
              {['Cognitive Phonetics', 'Cadence Architecture', 'Executive Gravitas'].map(pillar => (
                <div key={pillar} className="flex items-center gap-2 text-black">
                  <span className="material-symbols-outlined text-gold-600 text-[22px]">done_all</span>
                  <span className="text-xs font-extrabold uppercase tracking-wider">{pillar}</span>
                </div>
              ))}
            </div>

            <div className="about-reveal pt-2">
              <MagneticButton
                href="#contact"
                className="px-8 py-4 rounded-xl text-xs shadow-gold-glow border border-gold-500/40"
              >
                <span>MORE ABOUT ME</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </MagneticButton>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
