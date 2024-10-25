import { StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import { Label } from '@/ui';

import { RadioGroup, RadioGroupItem } from './index.tsx';

const MOCKED_VALUES: { value: string; label: string }[] = [
  { value: 'default', label: 'Default' },
  { value: 'comfortable', label: 'Comfortable' },
  { value: 'compact', label: 'Compact' },
];

export default {
  title: 'ui',
  component: 'RadioGroup',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultValue: {
      options: MOCKED_VALUES.map(({ value }) => value),
      control: { type: 'select' },
    },
    onValueChange: fn(),
  },
  args: {},
};

export const radioGroup: StoryFn<typeof RadioGroup> = (args) => (
  <RadioGroup defaultValue="comfortable" {...args}>
    {MOCKED_VALUES.map(({ value, label }) => (
      <div className="flex items-center space-x-2" key={value}>
        <RadioGroupItem value={value} id={value} />
        <Label htmlFor={value}>{label}</Label>
      </div>
    ))}
  </RadioGroup>
);
