import { Box, Text, TextArea, TextAreaProps } from '@prols-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Placeholder',
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const WithDisable: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
