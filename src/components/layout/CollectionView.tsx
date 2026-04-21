'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import type { Collection, CollectionResource } from '@/lib/coleccionData';
import CollectionStack from '@/components/sections/CollectionStack';
import MainResourceCard from '@/components/sections/MainResourceCard';
import ResourceDetailPanel from '@/components/sections/ResourceDetailPanel';

const mod = (n: number, m: number) => ((n % m) + m) % m;

const ANIM_MS = 220;

interface Props {
  collection: Collection;
}

/**
 * CollectionView — client wrapper that manages navigation state.
 *
 * Layout:
 *   [CollectionStack (absolute, left)] [MainResourceCard | ResourceDetailPanel]
 *
 * Navigation: arrow buttons · scroll/trackpad · swipe · keyboard ←→
 */
export default function CollectionView({ collection }: Props) {
  const { name, resources } = collection;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Measure the main unit so the stack can align with its left edge
  const mainUnitRef = useRef<HTMLDivElement>(null);
  const [mainHalfW, setMainHalfW] = useState(240);
  const [stackReady, setStackReady] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const wheelAccum = useRef(0);
  const wheelTimer = useRef<ReturnType<typeof setTimeout>>();
  const touchStartX = useRef(0);

  useEffect(() => {
    const measure = () => {
      if (mainUnitRef.current) {
        setMainHalfW(mainUnitRef.current.offsetWidth / 2);
        setStackReady(true);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // ── Navigation ───────────────────────────────────────────────────────────────

  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setSelectedIndex((i) => mod(i + dir, resources.length));
      setTimeout(() => setIsAnimating(false), ANIM_MS + 20);
    },
    [isAnimating, resources.length],
  );

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate]);

  // Wheel / trackpad
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      wheelAccum.current += delta;
      clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => { wheelAccum.current = 0; }, 150);
      if (wheelAccum.current > 60)  { wheelAccum.current = 0; navigate(1); }
      if (wheelAccum.current < -60) { wheelAccum.current = 0; navigate(-1); }
    },
    [navigate],
  );

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // Touch / swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(dx) < 40) return;
    navigate(dx > 0 ? 1 : -1);
  };

  // ── Derived data ──────────────────────────────────────────────────────────────

  const item: CollectionResource = resources[selectedIndex];

  // 3 stack items: index 0 = closest to main card
  const stackItems = [1, 2, 3].map((offset) =>
    resources[mod(selectedIndex - offset, resources.length)],
  );

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <main
      ref={stageRef}
      className="flex-grow flex items-center justify-center h-screen overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative flex items-center justify-center w-full h-full">

        {/* ── Stack ── */}
        <CollectionStack
          items={stackItems}
          mainHalfW={mainHalfW}
          ready={stackReady}
        />

        {/* ── Main unit: card + panel ── */}
        <div
          ref={mainUnitRef}
          className="flex z-30 rounded-xl overflow-hidden"
          style={{ boxShadow: '0 0 0 1px #dee1e5, 0 8px 24px rgba(0,0,0,0.06)' }}
        >
          {/* key forces remount → collection-enter animation */}
          <MainResourceCard key={item.id + '-card'} item={item} />
          <ResourceDetailPanel key={item.id + '-panel'} item={item} />
        </div>

        {/* ── Back link ── */}
        <Link
          href="/biblioteca"
          className="absolute top-6 left-6 z-40 flex items-center gap-1 text-[#6b6b6b] hover:text-[#1c1c1c] text-xs font-manrope font-medium transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          {name}
        </Link>

        {/* ── Arrow buttons ── */}
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 md:left-10 z-40 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 border border-[#dee1e5] text-[#6b6b6b] hover:text-[#1c1c1c] hover:bg-white transition-all"
          aria-label="Anterior"
        >
          <span className="material-symbols-outlined text-[20px]">chevron_left</span>
        </button>

        <button
          onClick={() => navigate(1)}
          className="absolute right-4 md:right-10 z-40 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 border border-[#dee1e5] text-[#6b6b6b] hover:text-[#1c1c1c] hover:bg-white transition-all"
          aria-label="Siguiente"
        >
          <span className="material-symbols-outlined text-[20px]">chevron_right</span>
        </button>

        {/* ── Dots ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
          {resources.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (isAnimating || i === selectedIndex) return;
                setIsAnimating(true);
                setSelectedIndex(i);
                setTimeout(() => setIsAnimating(false), ANIM_MS + 20);
              }}
              aria-label={`Ir a recurso ${i + 1}`}
              className={[
                'w-1.5 h-1.5 rounded-full transition-colors duration-300',
                i === selectedIndex ? 'bg-[#004154]' : 'bg-[#dee1e5] hover:bg-[#9a9fa8]',
              ].join(' ')}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
