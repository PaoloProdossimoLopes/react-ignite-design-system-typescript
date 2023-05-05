import { Button, ButtonProps } from '@prols-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Primray',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
