import SinglePost from './SinglePost.vue';
import { Meta, Story } from '@storybook/vue3'
import { action } from '@storybook/addon-actions';

export default {
  component: SinglePost,
   //👇 Our exports that end in "Data" are not stories.
   excludeStories: /.*Data$/,
   title: 'SinglePost',
   argTypes: {
     onDeletePost: {}
   }
} as Meta;

export const actionsData = {
  onDeletePost: action('delete-post')
}

interface SinglePostProps {
  post?: any;
}

const Template: Story<SinglePostProps> = args => ({
  components: { SinglePost },
  setup() {
    return { args, ...actionsData };
  },
  template: '<SinglePost v-bind="args"/>',
});

export const Default = Template.bind({});

Default.args = {
  post : {
    id: '1',
    title: 'test from storybook',
    body: 'Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capableaaaa of powering sophisticated Single-Page Applications when used in combination',
    tags: [
      "node",
      "vue",
      "html",
      "css",
      "javascript"
    ]
  }
}
