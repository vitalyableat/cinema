import { StoryFn } from '@storybook/react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '.';

export default {
  title: 'ui',
  component: 'Select',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
};

export const select: StoryFn<typeof Select> = (args) => (
  <Select {...args}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
);
