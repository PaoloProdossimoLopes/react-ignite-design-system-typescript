import { Box, BoxProps } from '@prols-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Box',
  component: Box,
  args: {
    children: (
      <>
        <p style={{ color: '#fff' }}>Testando o box</p>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
