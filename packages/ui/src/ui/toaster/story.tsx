import { StoryFn } from '@storybook/react';
import { toast } from 'sonner';

import { Button } from '@/ui';

import { Toaster } from '.';

export default {
  title: 'ui',
  component: 'Toaster',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
};

export const toaster: StoryFn<typeof Toaster> = () => (
  <>
    <Toaster />
    <Button
      variant="outline"
      onClick={() =>
        toast('Event has been created', {
          description: 'Sunday, December 03, 2023 at 9:00 AM',
          action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
          },
        })
      }>
      Show Toast
    </Button>
  </>
);
