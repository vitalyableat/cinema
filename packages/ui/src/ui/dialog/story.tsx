import { StoryFn } from '@storybook/react';
import { fn } from '@storybook/test';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './index.tsx';

export default {
  title: 'ui',
  component: 'Dialog',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultOpen: {
      control: 'boolean',
    },
    open: {
      control: 'boolean',
    },
    modal: {
      control: 'boolean',
    },
    onOpenChange: fn(),
  },
  args: {},
};

export const dialog: StoryFn<typeof Dialog> = (args) => (
  <Dialog {...args}>
    <DialogTrigger>Open</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);
