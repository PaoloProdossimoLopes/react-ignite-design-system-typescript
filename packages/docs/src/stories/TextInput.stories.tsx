import { Box, Text, TextInput, TextInputProps } from '@prols-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  args: {
    placeholder: 'Placeholder',
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
  },
}

export const WithDisable: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
