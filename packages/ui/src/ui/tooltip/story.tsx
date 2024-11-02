import { StoryFn } from '@storybook/react';

import { Button } from '@/ui';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '.';

export default {
  title: 'ui',
  component: 'Tooltip',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultOpen: {
      control: 'boolean',
    },
    disableHoverableContent: {
      control: 'boolean',
    },
  },
  args: {
    delayDuration: 700,
    skipDelayDuration: 300,
  },
};

export const tooltip: StoryFn<typeof Tooltip> = (args) => (
  <TooltipProvider {...args}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
