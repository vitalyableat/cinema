import { StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './index.tsx';

export default {
  title: 'ui',
  component: 'Collapsible',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: {
      control: 'boolean',
    },
    onOpenChange: fn(),
  },
  args: {},
};

export const collapsible: StoryFn<typeof Collapsible> = (args) => (
  <Collapsible {...args} className="max-w-96">
    <CollapsibleTrigger>Open / Close</CollapsibleTrigger>
    <CollapsibleContent>Collapsible content</CollapsibleContent>
  </Collapsible>
);
