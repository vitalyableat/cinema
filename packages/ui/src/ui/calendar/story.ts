import { fn } from '@storybook/test';

import { Calendar } from './index.tsx';

export default {
  title: 'ui',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    autoFocus: {
      control: 'boolean',
    },
    mode: {
      options: ['default', 'single', 'multiple', 'range'],
      control: { type: 'select' },
    },
    fromDate: {
      control: 'date',
    },
    toDate: {
      control: 'date',
    },
    selected: {
      control: 'date',
    },
    onSelect: fn(),
  },
  args: {},
};

export const calendar = {
  args: {
    selected: new Date(),
  },
};
