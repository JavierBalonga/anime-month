"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useQuery } from "react-query";
import { getAnimeGenres } from "@/services/jikan-api";

export interface GenresComboboxProps {
  value?: number | "";
  onChange?: (value: number | "") => void;
}

export function GenresCombobox({
  value: propsValue,
  onChange,
}: GenresComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [localValue, setValue] = React.useState<number | "">("");

  const value = propsValue ?? localValue;

  const animeGenres = useQuery({
    queryKey: ["/genres/anime"],
    queryFn: () => getAnimeGenres(),
    retry: false,
    keepPreviousData: true,
  });

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? animeGenres.data?.data.find((genre) => genre.mal_id === value)
                ?.name
            : "Select Genre"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Genre..." />
          <CommandEmpty>No Genre found.</CommandEmpty>
          <CommandGroup className="max-h-[168px] overflow-y-auto">
            {animeGenres.data?.data.map((genre) => (
              <CommandItem
                key={genre.mal_id}
                value={String(genre.mal_id)}
                onSelect={(currentValue) => {
                  const number = Number(currentValue);
                  const newValue = number === value ? "" : number || "";
                  setValue(newValue);
                  onChange?.(newValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === genre.mal_id ? "opacity-100" : "opacity-0"
                  )}
                />
                {genre.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
