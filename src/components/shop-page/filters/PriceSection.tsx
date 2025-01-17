import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import { Slider } from "@radix-ui/react-slider";

const PriceSection = () => {
  return (
    <Accordion type="single" collapsible defaultValue="filter-price">
      <AccordionItem value="filter-price" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Price
        </AccordionTrigger>
        <AccordionContent className="pt-4 overflow-visible">
          <label>$</label>
          <Slider
            defaultValue={[50, 200]}
            min={0}
            max={250}
            step={1}
          />
          <div className="mb-3" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PriceSection;