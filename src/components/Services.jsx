import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: 'record_voice_over',
    track: 'Track 01 • Phonetics',
    title: 'Standard American Accent Training',
    description: 'Reduce pronunciation interference, speak clearly, and sound natural in Standard American English.',
    cta: 'Explore Curriculum',
  },
  {
    icon: 'gavel',
    track: 'Track 02 • High-Stakes',
    title: 'Executive Communication Coaching',
    description: 'Communicate with influence, clarity, and confidence in meetings, presentations, negotiations, and interviews.',
    cta: 'Executive Protocol',
  },
  {
    icon: 'psychology',
    track: 'Track 03 • Gravitas',
    title: 'Speaking with Authority & Confidence',
    description: 'Overcome hesitation, improve delivery, and build a powerful presence that gets you respected and remembered.',
    cta: 'Presence Blueprint',
  },
  {
    icon: 'school',
    track: 'Track 04 • Examination',
    title: 'IELTS / TOEFL Coaching',
    description: 'Targeted, exam-specific strategies to help you achieve your desired score faster and with confidence.',
    cta: 'Score Roadmap',
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Section header reveal
      gsap.fromTo('.services-header',
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.services-header', start: 'top 88%', once: true },
          clearProps: 'all',
        }
      )

      // Staggered card reveal with upward translation
      gsap.fromTo('.service-card',
        { y: 50, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 85%',
            once: true,
          },
          clearProps: 'all',
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, { scope: sectionRef })

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="services-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-gold-700 text-xs font-bold uppercase tracking-widest mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
              <span>HOW I CAN HELP YOU</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
              Premium Coaching. Real Results.
            </h2>
          </div>
          <p className="text-slate-900 text-base max-w-md font-normal leading-relaxed">
            Structured diagnostic programs precision-engineered for non-native English speakers requiring supreme clarity, vocal resonance, and boardroom prestige.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="service-card group relative bg-white rounded-2xl p-8 border border-slate-300 hover:border-gold-500 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 will-change-transform"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-gold-700 group-hover:bg-gold-600 group-hover:text-white transition-colors duration-200 mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-[28px]">{svc.icon}</span>
                </div>
                <div className="text-[10px] uppercase font-bold tracking-widest text-gold-700 mb-2">{svc.track}</div>
                <h3 className="font-serif text-xl font-bold text-black group-hover:text-gold-700 transition-colors mb-3 leading-snug">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-900 font-normal leading-relaxed">
                  {svc.description}
                </p>
              </div>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-gold-700 font-bold text-xs tracking-wider uppercase group-hover:text-black transition-colors">
                <span>{svc.cta}</span>
                <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1.5">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
