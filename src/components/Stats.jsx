import { useRef, useEffect, useCallback } from 'react'

export default function Stats() {
  const sectionRef = useRef(null)
  const startedRef = useRef(false)

  const animateCounters = useCallback(() => {
    if (startedRef.current) return
    startedRef.current = true

    const counters = sectionRef.current?.querySelectorAll('.stat-counter')
    if (!counters) return

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target')
      const duration = 1500
      const stepTime = Math.max(Math.floor(duration / (target || 1)), 20)
      let current = 0
      const increment = Math.max(1, Math.ceil(target / (duration / stepTime)))

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          counter.textContent = target
          clearInterval(timer)
        } else {
          counter.textContent = current
        }
      }, stepTime)
    })
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) animateCounters()
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [animateCounters])

  return (
    <section ref={sectionRef} className="w-full bg-slate-50 border-y border-slate-200 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-300">

          {/* 9+ Years */}
          <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
            <div className="flex items-baseline font-serif font-extrabold text-4xl lg:text-5xl text-black">
              <span className="stat-counter" data-target="9">0</span>
              <span className="text-gold-600">+</span>
            </div>
            <span className="w-8 h-1 bg-gold-500 my-2.5 rounded-full" />
            <span className="text-xs uppercase tracking-widest text-slate-950 font-bold">Years of Experience</span>
          </div>

          {/* 7 Countries */}
          <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
            <div className="flex items-baseline font-serif font-extrabold text-4xl lg:text-5xl text-gold-600">
              <span className="stat-counter" data-target="7">0</span>
            </div>
            <span className="w-8 h-1 bg-gold-500 my-2.5 rounded-full" />
            <span className="text-xs uppercase tracking-widest text-slate-950 font-bold">Countries Represented</span>
          </div>

          {/* 500+ Clients */}
          <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
            <div className="flex items-baseline font-serif font-extrabold text-4xl lg:text-5xl text-black">
              <span className="stat-counter" data-target="500">0</span>
              <span className="text-gold-600">+</span>
            </div>
            <span className="w-8 h-1 bg-gold-500 my-2.5 rounded-full" />
            <span className="text-xs uppercase tracking-widest text-slate-950 font-bold">Clients Coached</span>
          </div>

          {/* Global Reach */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 pt-4 md:pt-0 col-span-2 md:col-span-1">
            <div className="inline-flex items-center gap-1.5 text-gold-700 mb-1">
              <span className="material-symbols-outlined text-[18px]">public</span>
              <span className="text-[10px] font-bold uppercase tracking-widest">Global Reach</span>
            </div>
            <p className="text-sm text-slate-950 font-bold leading-snug">
              Executives, Lawyers, Academics &amp; Ambitious Professionals Worldwide
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
