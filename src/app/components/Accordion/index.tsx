'use client';

import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { RxChevronDown } from "react-icons/rx";
import './styles.css';

export function Accordion(props: ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root {...props} className='w-full mb-4' />;
}

export function AccordionItem(props: ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      {...props}
      className='text-dark bg-white border border-sand focus-within:relative focus-within:z-10 last:mb-0'
    />
  );
}

export function AccordionTrigger(props: ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        {...props}
        className={twMerge(
          'accordionTrigger flex items-center justify-between gap-4 flex-1 text-primary-700 text-left p-4',
          'font-roboto font-bold text-base'
        )}
      >
        {props.children}
        <RxChevronDown size={22} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

export function AccordionContent({
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content {...props} className="accordionContent overflow-hidden">
      <div className={twMerge('p-4', props.className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}
