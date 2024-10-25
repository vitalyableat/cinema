import { StoryFn } from '@storybook/react';
import { Bold, Italic, Underline } from 'lucide-react';

import { ToggleGroup, ToggleGroupItem } from './index.tsx';

export default {
  title: 'ui',
  component: 'ToggleGroup',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      options: ['single', 'multiple'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'outline'],
      control: { type: 'select' },
    },
    size: {
      options: ['md', 'sm', 'lg'],
      control: { type: 'select' },
    },
  },
  args: {
    type: 'multiple',
  },
};

export const toggleGroup: StoryFn<typeof ToggleGroup> = (args) => (
  <ToggleGroup {...args}>
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <Underline className="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>
);
