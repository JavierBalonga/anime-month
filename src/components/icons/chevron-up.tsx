import { SVGAttributes } from 'react';

import { cn } from '../../lib/utils';

const ChevronUpIcon = ({ className, ...props }: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn('h-6 w-6', className)}
      {...props}
    >
      <svg>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </svg>
  );
};

export default ChevronUpIcon;
