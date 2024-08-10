import type { Meta, StoryObj } from '@storybook/react';
import IconBody from 'components/modules/IconBody/IconBody';
import Crouch from '../assets/Crouch.png'

const meta = {
  component: IconBody,
  args: {
    
  }
} satisfies Meta<typeof IconBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 100,
    height: 100,
    IconUrl: Crouch
  }
};