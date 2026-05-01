"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { FaqItem } from "@/lib/types";

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => (
        <div key={item.question} className="rounded-md border border-white/10 bg-white/[0.045]">
          <button
            onClick={() => setOpen(open === index ? -1 : index)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-white"
          >
            {item.question}
            <ChevronDown className={`shrink-0 transition ${open === index ? "rotate-180" : ""}`} size={18} />
          </button>
          {open === index ? <p className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-400">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
