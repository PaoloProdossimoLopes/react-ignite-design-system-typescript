import { Button, ButtonProps } from '@prols-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Title',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const SmallButton: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const DisabledButton: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
