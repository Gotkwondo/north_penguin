import type { Meta, StoryObj } from '@storybook/react';
import GamePlayingPage from 'components/Game/GamePlaying';
import { useClientWidthHeight } from 'hooks/useClientWidthHeight';
import { RefObject, useRef } from 'react';

const meta = {
  component: GamePlayingPage,
} satisfies Meta<typeof GamePlayingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    canvasWidth: 1000,
    canvasHeight: 500
  }
};