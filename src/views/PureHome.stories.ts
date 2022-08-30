import { app } from '@storybook/vue3';

import { createStore } from 'vuex';

import PureHome from './PureHome.vue';

import { Meta, Story } from '@storybook/vue3'

import { action } from '@storybook/addon-actions';

import * as PurePostListStories from '../components/PurePostList.stories'

 const store = createStore({
   state: {
     posts: PurePostListStories.Default.args.posts,
   },
   actions: {
     deletePost(context, id) {
      action("delete-post")(id);
     }
   },
 });

app.use(store);


export default {
  component: PureHome,
  title: 'PureHome'
} as Meta;

interface HomeProps {
  error?: boolean
}

const Template: Story<HomeProps> = args => ({
  components: { PureHome },
  setup() {
    return {
      args
    };
  },
  template: '<PureHome v-bind="args"/>',
});

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = { error: true };