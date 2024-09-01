import type { Meta, StoryObj } from '@storybook/react';
import HomePaGamePlayingPagege from 'pages/GamePlayingPage';

const meta = {
  component: HomePaGamePlayingPagege,
} satisfies Meta<typeof HomePaGamePlayingPagege>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};