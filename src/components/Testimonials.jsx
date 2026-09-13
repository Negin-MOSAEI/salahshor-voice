import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: 'Abbas helped me transition from being constantly interrupted in boardrooms to setting the tone of the entire conversation. The precision of his feedback is unmatched.',
    org: 'JTI',
  },
  {
    quote: 'The accent coaching was surgically precise. Within 8 weeks, investor questions shifted entirely from clarification to deal terms. It directly altered my funding trajectory.',
    org: 'Google Malaysia',
  },
  {
    quote: 'His methodology goes far beyond pronunciation—it instills psychological vocal sovereignty. My keynote delivery at global symposiums commands absolute stillness.',
    org: 'La Trobe Law School',
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo('.testimonials-header',
        { y: 25, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.testimonials-header', start: 'top 88%', once: true },
          clearProps: 'all',
        }
      )

      // Staggered card reveal
      gsap.fromTo('.testimonial-card',
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0, opacity: 1, scale: 1,
          stagger: 0.12, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonials-grid', start: 'top 85%', once: true },
          clearProps: 'all',
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, { scope: sectionRef })

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="testimonials-header text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-gold-700 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-600" />
            <span>EXECUTIVE ENDORSEMENTS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
            Voices of Authority Worldwide
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="testimonial-card relative bg-slate-50 rounded-2xl p-8 border border-slate-300 hover:border-gold-500 transition-all duration-300 shadow-editorial flex flex-col justify-between will-change-transform"
            >
              <div>
                <div className="text-gold-600 font-serif text-4xl mb-3">&ldquo;</div>
                <p className="text-black text-base italic leading-relaxed font-medium">
                  {t.quote}
                </p>
              </div>
              <div className="border-t border-slate-200 mt-6 pt-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-700">{t.org}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
