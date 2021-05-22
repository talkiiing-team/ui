import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import BasicComponent, { BasicComponentProps } from '../BasicComponent'

export default {
  title: 'BasicComponent',
  component: BasicComponent,
} as Meta

const Template: Story<BasicComponentProps> = (args) => <BasicComponent {...args} />

export const Binding = Template.bind({})
Binding.args = {
  name: 'Talkiiing',
}
