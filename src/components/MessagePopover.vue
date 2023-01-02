<template>
  <div id="message-popover" @click="removeBg">
    <div class="message-box shadow-lg">
      <img src="../assets/imgs/icons8-broken-robot-100.png" alt="" />
      <h4>oops!</h4>
      <p>Message not deliver! This system is still under construction.</p>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["toggleModal"]),
    removeBg() {
      this.toggleModal();
      console.log("RemoveBg got clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
#message-popover {
  // background-color: aqua;
  cursor: pointer;
  position: fixed;
  z-index: 1111;
  width: 100%;
  height: 100vh;
  display: flex;
  margin: auto;
  overflow: hidden;
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
      font-family: "Fira Sans";
    }
  }
}
</style>
