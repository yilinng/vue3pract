import Navbar from './Navbar.vue'

import { Meta, Story } from '@storybook/vue3'

export default {
  component: Navbar,
  title: 'Navbar'
} as Meta;

interface NavbarProps {
  args?: any
}

const Template: Story<NavbarProps> = args => ({
  components: { Navbar },
  setup(){
    return {
      args
    };
  },
  template: '<Navbar v-bind="args"/>',
});

export const Default = Template.bind({});