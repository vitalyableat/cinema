import { StoryFn } from '@storybook/react';

import { Label } from '@/ui';

import { Switch } from './index.tsx';

export default {
  title: 'ui',
  component: 'Switch',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
};

const SwitchExample: StoryFn<typeof Switch> = () => (
  <div className="flex items-center space-x-2">
    <Switch id="airplane-mode" />
    <Label htmlFor="airplane-mode">Airplane Mode</Label>
  </div>
);

export { SwitchExample as Switch };
