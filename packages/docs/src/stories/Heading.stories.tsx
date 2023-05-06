import { Heading, HeadingProps } from '@prols-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Example text',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const Strongest: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 text',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrao o heading sempre sera um `h2`, mas é possivel trocar utilziando o `as?: ...`',
      },
    },
  },
}
