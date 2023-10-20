import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimeStatus } from "@/services/jikan-api/types";

export interface StatusSelectProps {
  value?: AnimeStatus | "";
  onChange?: (value: AnimeStatus | "") => void;
}

export function StatusSelect({ value, onChange }: StatusSelectProps) {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.values(AnimeStatus).map((status) => (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
