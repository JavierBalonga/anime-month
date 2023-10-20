import { Button } from "./button";

export interface PaginationProps {
  page?: number;
  totalPages?: number;
  onChange?: (page: number) => void;
}

const Pagination = ({
  page = 1,
  totalPages = 1,
  onChange,
}: PaginationProps) => {
  return (
    <div className="overflow-hidden relative h-10">
      {Array.from({ length: totalPages }, (_, i) => {
        const number = i + 1;
        const diff = number - page;
        return (
          <Button
            key={number}
            variant={page === number ? "destructive" : "default"}
            onClick={() => page !== number && onChange?.(number)}
            className="w-10 absolute left-1/2 transition-transform"
            style={{
              transform: `translateX(calc(${diff * 100 - 50}% + ${
                diff * 8
              }px))`,
            }}
          >
            {number}
          </Button>
        );
      })}
    </div>
  );
};
Pagination.displayName = "Pagination";

export { Pagination };
