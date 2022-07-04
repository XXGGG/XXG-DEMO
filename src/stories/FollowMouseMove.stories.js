import FollowMouseMove from '../components/FollowMouseMove.vue';

export default {
  title: '鼠标拖拽物体',
  component: FollowMouseMove,
};

export const XXG_FollowMouseMove = () => ({
  components: { FollowMouseMove },
  setup() {
  },
  template: '<FollowMouseMove />',
});
XXG_FollowMouseMove.storyName = '鼠标拖拽物体'
