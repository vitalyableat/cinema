import { StoryFn } from '@storybook/react';

import { Skeleton } from './index.tsx';

export default {
  title: 'ui',
  component: 'Skeleton',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
};

export const skeleton: StoryFn<typeof Skeleton> = () => (
  <div className="flex flex-col space-y-3">
    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);
