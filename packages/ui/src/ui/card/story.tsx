import { StoryFn } from '@storybook/react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './index.tsx';

export default {
  title: 'ui',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
};

export const card: StoryFn<typeof Card> = (args) => (
  <Card {...args}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);
