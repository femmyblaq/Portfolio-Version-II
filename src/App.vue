<template>
  <div id="app">
    <PreloaderVue v-show="!loads" :class="{ rokky: loads }" />
    <MessagePopoverVue v-show="showMessageModal" />

    <SecondVue />
    <!-- <HeaderVue /> -->
    <router-view />
    <FooterVue />
  </div>
</template>
<script>
import MessagePopoverVue from "./components/MessagePopover.vue";
// import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
import SecondVue from "./components/SecondHome.vue";
import PreloaderVue from "./components/Preloader.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      loads: false,
      xPos: 0,
      yPos: 0,
      speed: 2,
    };
  },
  computed: {
    ...mapState(["showMessageModal"]),
    // modalMessage() {
    //   return this.$store.state.showMessageModal;
    // },
  },
  mounted() {
    window.addEventListener("load", () => {
      this.loads = true;
    });
  },
  methods: {},
  components: {
    FooterVue,
    MessagePopoverVue,
    // HeaderVue,
    PreloaderVue,
    SecondVue,
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: 300ms ease all;
}
.rokky {
  display: none !important;
}

#app {
  overflow: hidden !important;
  // position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  p {
    font-family: "Titilium Web";
  }
}

@media (min-width: 500px) and (max-width: 767px) {
  #header .right .links {
    // display: none;
    position: fixed;
    // right: -270px;
    width: 270px;
    height: 100%;
    box-shadow: 20px, 20px, 50px rgba(0, 0, 0, 0.5);
    background-color: #023020;
    // background: rgba(71, 69, 69, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    backdrop-filter: blur(5px);
    z-index: 1;
    display: flex;
    flex-direction: column;
    place-items: center;
    transition: all 0.5s ease;
    margin-top: 50px;

    li {
      width: 100%;
      text-align: center;
      margin: 10px 0 !important;
      padding: 10px 0 !important;

      &:hover {
        background-color: aliceblue;
      }
    }
  }

  #About {
    margin: 120px 0;
    padding: 30px !important;
    .about-top {
      div {
        width: 250px !important;
      }
    }
  }
  #Skills .row {
    width: 100% !important;
    padding: 30px !important;
  }

  #contact {
    width: 100% !important;

    padding: 90px 30px !important;
    p {
      padding: 10px !important;
    }

    .box {
      width: 100% !important;
    }
  }

  #footer .footer-top {
    width: 100% !important;
    margin: 30px 15px;
  }

  #footer .footer-top .col-lg-3 {
    margin-top: 30px;
    border-right: none !important;
    border-bottom: 4px dotted #444;
  }
}

@media (min-width: 768px) and (max-width: 1180px) {
  #Skills .row {
    display: block !important;
    height: 50vh !important;
  }

  #Skills .col-lg-6 {
    height: 20vh;
  }

  #Skills .mt-auto {
    margin-top: 0 !important;
  }
}
</style>
