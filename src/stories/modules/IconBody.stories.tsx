import type { Meta, StoryObj } from '@storybook/react';
import IconBody from 'components/modules/IconBody';
import Crouch from '../assets/Crouch.png'

const meta = {
  component: IconBody,
  args: {
    width: 100,
    height: 100,
    IconUrl: Crouch
  }
} satisfies Meta<typeof IconBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Big: Story = {
  args: {
    width: 300,
    height: 300,
    IconUrl: Crouch
  }
};