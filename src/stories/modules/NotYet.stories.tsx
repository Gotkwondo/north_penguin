import type { Meta, StoryObj } from '@storybook/react';
import HomeContent from 'components/modules/Home/HomeContent';
import NotYet from 'components/modules/NotYet/NotYet'

const meta = {
  component: NotYet,
} satisfies Meta<typeof HomeContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};