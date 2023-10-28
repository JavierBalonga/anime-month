import { StarIcon } from 'lucide-react';

import HalfStarIcon from './icons/half-star';

export interface RatingProps {
  value?: number;
  loading?: boolean;
}

export default function Rating({ value, loading }: RatingProps) {
  return (
    <div className="flex flex-row gap-1">
      {loading || value === undefined ? (
        Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} fill="currentColor" className="animate-pulse text-neutral-500" />
        ))
      ) : (
        <>
          {Array.from({ length: Math.floor(value) }).map((_, i) => (
            <StarIcon key={i} fill="currentColor" />
          ))}
          {value % 1 !== 0 && <HalfStarIcon />}
          {Array.from({ length: Math.floor(5 - value) }).map((_, i) => (
            <StarIcon key={i} />
          ))}
        </>
      )}
    </div>
  );
}
