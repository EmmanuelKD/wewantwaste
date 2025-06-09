"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import type { SkipOption } from "@/types/index";


type Props = {
  skip: SkipOption;
  selected: boolean;
  onSelect: (id: number) => void;
};

export default function SkipCard({ skip, selected, onSelect }: Props) {
  const priceWithVat = (skip.price_before_vat + skip.vat).toFixed(2);

  return (
    <div
      className={cn(
        "cursor-pointer rounded-xl border p-4 shadow-card bg-white relative transition hover:shadow-md",
        selected ? "border-accent ring-2 ring-accent" : "border-border"
      )}
    >
      {/* Image */}
      <div className="w-full h-full max-h-44 md:h-50 relative mb-4">
        {/* Size Badge */}
        <div className="absolute bg-waste-accent bottom-2 left-2  text-white text-xs px-2 py-1 rounded-full z-10">
          {skip.size} Yards
        </div>
        {}
        <img
          src={`/skip-images/${skip.size}-yarder-skip.jpg`} // Placeholder image path, replace with actual image source
          alt={`${skip.size} yard skip`}
          className="object-cover rounded-md w-full h-full shadow-sm"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/400x200.png?text=No+Image+Available";
          }}
        />
      </div>

      {/* Title & Price */}
      <div className="flex row flex-nowrap items-center justify-between ">
        <h3 className="text-lg font-semibold mb-1">{skip.size} Yard Skip</h3>
        {!skip.allowed_on_road && (
          <span className="text-xs text-red-500 bg-red-100 px-2 py-1 rounded-full">
            Not allowed on road
          </span>
        )}
      </div>

      <p className="text-sm text-label mb-3">
        {skip.hire_period_days}-day hire period
      </p>
      <p className="text-xl font-bold text-price mb-4">£{priceWithVat}</p>

      {/* Select Button */}
      <Button
        variant={selected ? "default" : "outline"}
        className={cn(
          "w-full",
          selected
            ? "bg-waste-accent hover:bg-waste-accent-700 border-waste-accent"
            : "border-[.2px] border-waste-accent text-waste-accent hover:bg-waste-accent hover:text-white"
        )}
        onClick={() => onSelect(skip.id)}
      >
        {selected ? (
          <>
            <CheckCircle className="w-4 h-4 mr-2" />
            Selected
          </>
        ) : (
          "Select This Skip"
        )}
      </Button>
    </div>
  );
}
