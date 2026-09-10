import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useForm, ValidationError } from '@formspree/react'
import MagneticButton from './MagneticButton'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const [state, handleSubmit] = useForm('mrpgowdg')

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-card',
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: '.contact-card', start: 'top 85%', once: true },
          clearProps: 'all',
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, { scope: sectionRef })

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="contact-card relative rounded-3xl bg-white border-2 border-gold-500/50 p-8 sm:p-12 lg:p-16 shadow-editorial-hover overflow-hidden will-change-transform">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* ── Left Info Column ─────────────────────────────────────────── */}
            <div className="lg:col-span-6 flex flex-col space-y-6">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 border border-gold-500/50 text-gold-800 text-xs font-bold tracking-widest uppercase w-max">
                <span className="material-symbols-outlined text-[16px]">lock</span>
                <span>TAKE COMMAND OF YOUR VOICE</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-tight">
                Ready to Transform Your Communication?
              </h2>

              <p className="text-base sm:text-lg text-slate-900 font-normal leading-relaxed">
                Book a free discovery call and take the first step toward speaking English with confidence and authority.
              </p>

              {/* Direct Email */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-gold-700 border border-slate-300">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-950">Direct Inquiries</div>
                  <a
                    href="mailto:salahshourabbas@gmail.com"
                    className="text-base sm:text-lg font-bold text-gold-700 hover:text-black transition-colors underline decoration-gold-500/60 underline-offset-4"
                  >
                    salahshourabbas@gmail.com
                  </a>
                </div>
              </div>

              {/* Trust Markers */}
              <div className="pt-4 flex flex-col gap-2 text-xs text-slate-950 font-bold">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gold-600 text-[18px]">check_circle</span>
                  <span>Confidential 30-min evaluation • No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-gold-600 text-[18px]">check_circle</span>
                  <span>Private 1-on-1 Diagnostic &amp; Action Plan</span>
                </div>
              </div>

            </div>

            {/* ── Right: Formspree React Form ─────────────────────────────── */}
            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-300 shadow-sm">

              {state.succeeded ? (
                /* ── Success State ───────────────────────────────────────── */
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-5">
                  <div className="w-20 h-20 rounded-full bg-gold-100 flex items-center justify-center border-2 border-gold-500/50">
                    <span className="material-symbols-outlined text-gold-600 text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-black">
                    Message Received.
                  </h3>
                  <p className="text-slate-900 text-base max-w-sm leading-relaxed">
                    Thank you for reaching out. Abbas will personally review your inquiry and respond within 24 hours.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 border border-gold-500/40 text-gold-700 text-xs font-bold tracking-widest uppercase">
                    <span className="material-symbols-outlined text-[14px]">schedule</span>
                    <span>Response within 24h</span>
                  </div>
                </div>
              ) : (
                /* ── Form State ──────────────────────────────────────────── */
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-black mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g., Jonathan Vance"
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-300 text-black placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-gold-600 shadow-sm transition-colors"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={state.errors}
                      className="text-red-600 text-xs font-semibold mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-black mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="executive@firm.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-300 text-black placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-gold-600 shadow-sm transition-colors"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-600 text-xs font-semibold mt-1"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-black mb-2">Message &amp; Coaching Goals</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      placeholder="Briefly describe your high-stakes communication goals or current challenges..."
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-300 text-black placeholder-slate-500 font-medium text-sm focus:outline-none focus:border-gold-600 shadow-sm transition-colors"
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-red-600 text-xs font-semibold mt-1"
                    />
                  </div>

                  <MagneticButton
                    as="button"
                    type="submit"
                    className={`w-full px-8 py-4 rounded-xl text-sm shadow-gold-glow mt-2 ${
                      state.submitting ? 'opacity-70 cursor-wait' : ''
                    }`}
                  >
                    {state.submitting ? (
                      <>
                        <span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <span>BOOK YOUR FREE CALL</span>
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </>
                    )}
                  </MagneticButton>

                </form>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
