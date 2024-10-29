import type { Meta, StoryObj } from '@storybook/react';
import HomeContent from 'components/Home/HomeContent';

const meta = {
  component: HomeContent,
} satisfies Meta<typeof HomeContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};