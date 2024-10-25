import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { StoryFn } from '@storybook/react';
import { z } from 'zod';

import { Button, Input } from '@/ui';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './index.tsx';

export default {
  title: 'ui',
  component: 'Form',
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
  args: {},
};

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

export const FormExample: StoryFn<typeof Form> = (args) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...args} {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
