import { StoryFn } from '@storybook/react';

import { Popover, PopoverContent, PopoverTrigger } from './index.tsx';

export default {
  title: 'ui',
  component: 'Popover',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
};

export const popover: StoryFn<typeof Popover> = (args) => (
  <Popover {...args}>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>Place content for the popover here.</PopoverContent>
  </Popover>
);
