import { fn } from '@storybook/test';

import { Button } from '.';

export default {
  title: 'ui',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: ['primary', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      control: { type: 'select' },
    },
    size: {
      options: ['md', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
    },
    asChild: {
      control: 'boolean',
    },
  },
  args: {
    onClick: fn(),
  },
};

export const button = {
  args: {
    children: <a>Click Me</a>,
  },
};
