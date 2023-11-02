import { SVGAttributes } from 'react';

import { cn } from '../lib/utils';

export default function Spinner({ className, ...props }: SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="-1 -1 18 18"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn('h-6 w-6 animate-spin duration-500', className)}
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path
        d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
        opacity=".2"
      />

      <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z" />
    </svg>
  );
}
