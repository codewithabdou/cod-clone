"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { TbChevronDown } from "react-icons/tb";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b mb-4", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <AccordionPrimitive.Header className="flex border hover:bg-[#f3f4f6] px-4 rounded-lg  [&[data-state=open]]:border-red-500 [&[data-state=open]]:border-b-gray-300 [&[data-state=open]]:rounded-b-none border-gray-400 text-black text-base font-bold hover:text-[#FF0303] ">
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            "flex flex-1 gap-2  items-center hover:translate-y-0 justify-between [&[data-state=open]>svg]:rotate-180 py-4  transition-all  ",
            className
          )}
          {...props}
        >
          {children}
          <TbChevronDown
            size={22}
            className=" p-1 bg-gray-50 rounded-full  shrink-0  transition-transform   duration-200 "
          />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden px-4  border-b border-l  border-r mb-4 rounded-lg data-[state=open]:border-t-gray-300  data-[state=open]:rounded-t-none data-[state=open]:border-red-500 s data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pl-4 py-4 text-gray-700 text-base ">{children}</div>
    </AccordionPrimitive.Content>
  )
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
