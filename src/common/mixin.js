/**
 * 回到顶部minxin封装
 */
import BackTop from "components/content/backTop/BackTop.vue";
export const backTopMinxin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowTop: false
    };
  },
  methods: {
    backTopClick() {
      this.$refs.scroller.scrollTo(0, 0);
    }
  }
};
