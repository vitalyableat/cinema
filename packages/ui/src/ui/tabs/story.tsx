import { ReactNode } from 'react';

import { StoryFn } from '@storybook/react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './index.tsx';

const MOCKED_VALUES: { value: string; tab: string; content: ReactNode }[] = [
  {
    value: 'account',
    tab: 'Account',
    content: 'Make changes to your account here.',
  },
  { value: 'password', tab: 'Password', content: 'Change your password here.' },
];

export default {
  title: 'ui',
  component: 'Tabs',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultValue: {
      options: MOCKED_VALUES.map(({ value }) => value),
      control: { type: 'select' },
    },
  },
  args: {},
};

export const tabs: StoryFn<typeof Tabs> = (args) => (
  <Tabs className="w-[400px]" {...args} orientation="vertical">
    <TabsList>
      {MOCKED_VALUES.map(({ value, tab }) => (
        <TabsTrigger key={value} value={value}>
          {tab}
        </TabsTrigger>
      ))}
    </TabsList>
    {MOCKED_VALUES.map(({ value, content }) => (
      <TabsContent key={value} value={value}>
        {content}
      </TabsContent>
    ))}
  </Tabs>
);
