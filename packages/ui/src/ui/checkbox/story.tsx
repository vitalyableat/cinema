import { StoryFn } from '@storybook/react';

import { Checkbox } from './index.tsx';

export default {
  title: 'ui',
  component: 'Checkbox',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
};

export const checkbox: StoryFn<typeof Checkbox> = (args) => (
  <div className="flex space-x-2">
    <Checkbox id="terms1" {...args} />
    <div className="grid gap-1.5 leading-none">
      <label
        htmlFor="terms1"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Accept terms and conditions
      </label>
      <p className="text-sm text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
    </div>
  </div>
);
