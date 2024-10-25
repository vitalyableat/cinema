import { StoryFn } from '@storybook/react';

import { Card, CardContent } from '@/ui/card';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './index.tsx';
export default {
  title: 'ui',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
  },
  args: {},
};

export const carousel: StoryFn<typeof Carousel> = (args) => (
  <Carousel {...args}>
    <CarouselPrevious />
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <div className="p-1">
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselNext />
  </Carousel>
);
