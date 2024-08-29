import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './';

const meta = {
   title: 'Components/Input',
   component: Input,
   tags: ['autodocs'],
   argTypes: {
      variant: {
         options: ['default', 'password', 'search'],
      },
   },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
      variant: 'default',
      children: 'default Input',
      disabled: false,
   },
};

export const Password: Story = {
   args: {
      variant: 'password',
      children: 'password Input',
      disabled: false,
   },
};

export const Search: Story = {
   args: {
      variant: 'search',
      children: 'search Input',
      disabled: false,
   },
};
