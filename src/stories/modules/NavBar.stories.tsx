import type { Meta, StoryObj } from '@storybook/react';
import NavBar from 'components/modules/Header/NavBar';


const meta = {
  component: NavBar,
  args: {
    text: "test text"
  }
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};