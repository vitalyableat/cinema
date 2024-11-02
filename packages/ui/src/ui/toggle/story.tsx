import { fn } from '@storybook/test';
import { Italic } from 'lucide-react';

import { Toggle } from './index.tsx';

export default {
  title: 'ui',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
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
    onClick: fn(),
  },
};

export const toggle = {
  args: {
    children: <Italic className="size-4" />,
  },
};
