import { Checkbox, CheckboxProps } from '@prols-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    children: 'Title',
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

export const Secondary: StoryObj<CheckboxProps> = {
  args: {
    variant: 'secondary',
  },
}

export const DisabledButton: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}
