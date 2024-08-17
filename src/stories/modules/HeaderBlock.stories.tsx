import type { Meta, StoryObj } from '@storybook/react';
import HeaderBlock from 'components/modules/Header/HeaderBlock';


const meta = {
  component: HeaderBlock,
  args: {
    text: "test text"
  }
} satisfies Meta<typeof HeaderBlock>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};