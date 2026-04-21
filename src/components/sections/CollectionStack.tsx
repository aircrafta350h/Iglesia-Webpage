import type { CollectionResource } from '@/lib/coleccionData';

// ─── Stack depth constants ────────────────────────────────────────────────────
//
// Each card's LEFT EDGE sits PEEK[i] px to the LEFT of the main card's left edge.
// transform-origin: left center keeps that edge fixed while the card scales inward.
// z-index layering ensures each card is covered by the one in front of it.
//
// Visual result (left → right):
//   [i=2 ~16px visible][i=1 ~20px visible][i=0 ~24px visible][MAIN CARD][PANEL]
//
export const STACK_W = 156;
export const STACK_H = 244;
const PEEK      = [24, 44, 60];
const SCALES    = [0.96, 0.91, 0.85];
const OPACITIES = [0.82, 0.58, 0.34];
const DARKEN    = [0.06, 0.16, 0.26];
const TRANSITION = 'transform 420ms cubic-bezier(0.22,1,0.36,1), opacity 380ms ease';

interface Props {
  /** Up to 3 items — index 0 is the closest to the main card */
  items: CollectionResource[];
  /** Half-width of the main unit (card + panel), measured after mount */
  mainHalfW: number;
  /** False until the first DOM measurement is available (prevents position flash) */
  ready: boolean;
}

export default function CollectionStack({ items, mainHalfW, ready }: Props) {
  return (
    <>
      {items.map((item, i) => (
        <div
          key={item.id}
          className="absolute hidden md:block pointer-events-none"
          style={{
            left: '50%',
            top: '50%',
            width: STACK_W,
            height: STACK_H,
            // left:50% puts the left edge at stage center.
            // translateX shifts it so the left edge is mainHalfW+PEEK[i] px to the left of center,
            // which places it PEEK[i] px to the LEFT of the main card's left edge.
            transform: `translateX(${-(mainHalfW + PEEK[i])}px) translateY(-50%) scale(${SCALES[i]})`,
            transformOrigin: 'left center',
            zIndex: 22 - i * 3,
            opacity: ready ? OPACITIES[i] : 0,
            borderRadius: '0.7rem',
            overflow: 'hidden',
            transition: ready ? TRANSITION : 'none',
          }}
        >
          <img
            src={item.coverImage.src}
            alt={item.coverImage.alt}
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* Progressive dark overlay for depth */}
          <div
            className="absolute inset-0"
            style={{ background: `rgba(0,65,84,${DARKEN[i]})` }}
          />
        </div>
      ))}
    </>
  );
}
