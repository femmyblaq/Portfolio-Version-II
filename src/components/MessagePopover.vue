<template>
  <div id="message-popover">
    <div class="message-box shadow-lg">
      <img src="../assets/imgs/icons8-broken-robot-100.png" alt="" />
      <h4>oops!</h4>
      <p>Message not deliver! This system is still under construction.</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getState"]),
  },
};
</script>

<style lang="scss" scoped>
#message-popover {
  position: fixed;
  z-index: 1111;
  width: 100%;
  height: 100vh;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  .message-box {
    // position: absolute;
    // left: 50%;
    // top: 50%;
    // transform: translateX(80%);
    width: 500px;
    text-align: center;
    border-radius: 30px;
    height: 250px;
    background: rgb(250, 246, 246);
    margin: 40px;
    padding: 20px;
    border: 2px solid #000;
    p {
      font-size: 20px;
    }
  }
}
</style>
