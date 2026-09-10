import { useRef, useCallback } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

/**
 * MagneticButton — Awwwards-level magnetic CTA component.
 * Uses GSAP quickTo for 60fps GPU-accelerated magnetic pull effect.
 * Includes a gold shimmer sweep on hover via CSS.
 */
export default function MagneticButton({
  children,
  href = '#contact',
  className = '',
  as = 'a',
  type,
  strength = 0.35,
  ...props
}) {
  const btnRef = useRef(null)
  const xTo = useRef(null)
  const yTo = useRef(null)

  useGSAP(() => {
    if (!btnRef.current) return

    // quickTo creates a reusable tween that is incredibly fast —
    // no new tween object is created on each mousemove
    xTo.current = gsap.quickTo(btnRef.current, 'x', {
      duration: 0.4,
      ease: 'power3.out',
    })
    yTo.current = gsap.quickTo(btnRef.current, 'y', {
      duration: 0.4,
      ease: 'power3.out',
    })
  }, { scope: btnRef })

  const handleMouseMove = useCallback((e) => {
    if (!btnRef.current || !xTo.current || !yTo.current) return
    const rect = btnRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    xTo.current(deltaX)
    yTo.current(deltaY)
  }, [strength])

  const handleMouseLeave = useCallback(() => {
    if (!xTo.current || !yTo.current) return
    xTo.current(0)
    yTo.current(0)
  }, [])

  const Tag = as

  return (
    <Tag
      ref={btnRef}
      href={as === 'a' ? href : undefined}
      type={as === 'button' ? (type || 'submit') : undefined}
      className={`btn-gold inline-flex items-center justify-center gap-2.5 font-bold uppercase tracking-wider text-white will-change-transform ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-flex' }}
      {...props}
    >
      {children}
    </Tag>
  )
}
