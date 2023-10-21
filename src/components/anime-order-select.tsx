import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimeOrderBy } from "../services/jikan-api/types";

export interface AnimeOrderSelectProps {
  value?: AnimeOrderBy;
  onChange?: (value: AnimeOrderBy) => void;
}

export function AnimeOrderSelect({ value, onChange }: AnimeOrderSelectProps) {
  return (
    <Select value={value || ""} onValueChange={onChange} required={false}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Order by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {[
            AnimeOrderBy.title,
            AnimeOrderBy.start_date,
            AnimeOrderBy.end_date,
            AnimeOrderBy.episodes,
            AnimeOrderBy.score,
            AnimeOrderBy.scored_by,
            AnimeOrderBy.rank,
            AnimeOrderBy.popularity,
            AnimeOrderBy.members,
            AnimeOrderBy.favorites,
          ].map((key) => (
            <SelectItem key={key} value={key}>
              {key}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
