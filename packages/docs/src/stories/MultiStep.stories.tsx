import { Box, MultiStep, MultiStepProps, Text } from '@prols-ignite-ui/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    currentStep: 2,
    size: 4,
  },
  decorators: [
    (Story) => {
      return (
        <Box>
          <Text size="sm">Steps</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}
