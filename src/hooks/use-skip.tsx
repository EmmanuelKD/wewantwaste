import { fetchSkipOptions } from "@/api/skip-options";
import { useQuery } from "@tanstack/react-query";
import type { SkipOption } from "@/types/index";

type UseSkipOptionsParams = {
  postcode: string;
  area: string;
};

 
export function useSkipOptions({ postcode, area }: UseSkipOptionsParams) {
  return useQuery<SkipOption[], Error>({
    queryKey: ["skipOption", postcode, area],
    queryFn: async () => {
      return await fetchSkipOptions(postcode, area);;
    },
    // keepPreviousData: true,
  });
}