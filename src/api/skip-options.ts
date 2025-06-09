import type { SkipOption } from "@/types/index";

export async function fetchSkipOptions(
  postcode: string,
  area: string
): Promise<SkipOption[]> {
 
  const url = `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${encodeURIComponent(
    postcode
  )}&area=${encodeURIComponent(area)}`;


  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch skip options: ${response.statusText}`);
  }

  return await response.json();
}
