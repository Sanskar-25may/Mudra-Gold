"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
  allowMultiple?: boolean;
}

export function Accordion({ items, className, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-navy-100 border-y border-navy-100", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="py-4">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded py-1 transition-colors"
            >
              <span className="text-base sm:text-lg font-medium text-navy-950 hover:text-navy-800 pr-4">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-gold-600 shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180 text-gold-600"
                )}
              />
            </button>
            {isOpen && (
              <div className="mt-3 text-sm sm:text-base text-navy-800/85 leading-relaxed pr-6">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
