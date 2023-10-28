import { SVGAttributes } from 'react';

import { cn } from '../../lib/utils';

const HalfStarIcon = ({ className, ...props }: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn('h-6 w-6', className)}
      {...props}
    >
      <path
        d="M11.4849 3.49882C11.5272 3.39565 11.5993 3.3074 11.6919 3.24528C11.7845 3.18317 11.8934 3.15 12.0049 3.15C12.0049 4.15 12.0049 17.15 12.0049 17.5716C11.9016 17.5716 11.8002 17.6 11.7119 17.6538L6.98694 20.5398C6.89219 20.5978 6.78239 20.6264 6.67139 20.6221C6.5604 20.6177 6.45319 20.5805 6.3633 20.5152C6.27342 20.45 6.2049 20.3595 6.16639 20.2553C6.12788 20.1511 6.12111 20.0379 6.14694 19.9298L7.43194 14.5438C7.45577 14.4432 7.45139 14.338 7.41928 14.2397C7.38717 14.1415 7.32857 14.0539 7.24994 13.9868L3.04594 10.3848C2.96175 10.3124 2.90085 10.2168 2.87089 10.1099C2.84092 10.0029 2.84324 9.88957 2.87755 9.78397C2.91186 9.67837 2.97662 9.58528 3.0637 9.51639C3.15078 9.44751 3.25628 9.40591 3.36694 9.39682L8.88494 8.95482C8.98819 8.94658 9.08716 8.91001 9.17096 8.84914C9.25477 8.78827 9.32016 8.70546 9.35994 8.60982L11.4849 3.49882Z"
        fill="currentColor"
      />
      <path
        d="M11.48 3.499C11.5223 3.39583 11.5943 3.30758 11.6869 3.24546C11.7795 3.18334 11.8885 3.15018 12 3.15018C12.1115 3.15018 12.2205 3.18334 12.3131 3.24546C12.4057 3.30758 12.4777 3.39583 12.52 3.499L14.645 8.61C14.6848 8.70564 14.7502 8.78844 14.834 8.84931C14.9178 8.91018 15.0168 8.94675 15.12 8.955L20.638 9.397C21.137 9.437 21.339 10.06 20.959 10.385L16.755 13.987C16.6765 14.0542 16.6179 14.1417 16.5858 14.24C16.5537 14.3382 16.5493 14.4434 16.573 14.544L17.858 19.929C17.8838 20.037 17.8771 20.1503 17.8385 20.2545C17.8 20.3587 17.7315 20.4491 17.6416 20.5144C17.5517 20.5797 17.4445 20.6169 17.3335 20.6212C17.2225 20.6256 17.1127 20.597 17.018 20.539L12.293 17.654C12.2047 17.6002 12.1034 17.5717 12 17.5717C11.8966 17.5717 11.7953 17.6002 11.707 17.654L6.982 20.54C6.88726 20.598 6.77745 20.6266 6.66646 20.6222C6.55546 20.6179 6.44825 20.5807 6.35837 20.5154C6.26849 20.4501 6.19996 20.3597 6.16145 20.2555C6.12294 20.1513 6.11617 20.038 6.142 19.93L7.427 14.544C7.45083 14.4434 7.44645 14.3382 7.41434 14.2399C7.38223 14.1416 7.32363 14.0541 7.245 13.987L3.041 10.385C2.95681 10.3126 2.89591 10.2169 2.86595 10.11C2.83599 10.0031 2.83831 9.88974 2.87262 9.78415C2.90692 9.67855 2.97169 9.58546 3.05877 9.51657C3.14584 9.44768 3.25134 9.40608 3.362 9.397L8.88 8.955C8.98325 8.94675 9.08222 8.91018 9.16603 8.84931C9.24983 8.78844 9.31522 8.70564 9.355 8.61L11.48 3.499Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HalfStarIcon;
