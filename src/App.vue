<template>
  <div>
    <div id="rocket-container" v-if="!loads" class="preloader" ref="rocketC">
      <img
        src="../src/assets/imgs/icons8-rocket-64.png"
        alt="rocket"
        ref="rocket"
        id="rocket"
      />
      <img src="../src/assets/imgs/icons8-cloud-96.png" class="cloudI" alt="" />
      <img src="../src/assets/imgs/icons8-cloud-96.png" class="cloud2" alt="" />
      <img src="../src/assets/imgs/icons8-cloud-96.png" class="cloud3" alt="" />
    </div>

    <div id="app">
      <SecondVue />
      <!-- <HeaderVue /> -->
      <router-view />
      <FooterVue />
    </div>
  </div>
</template>
<script>
// import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
import SecondVue from "./components/SecondHome.vue";

export default {
  data() {
    return {
      loads: false,
      xPos: 0,
      yPos: 0,
      speed: 2,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      this.loads = true;
      // Set an interval to update the position of the rocket
      // setInterval(() => {
      // Update the x and y position of the rocket
      // this.xPos += this.speed;
      // this.yPos += this.speed;
      // Move the rocket to the new position
      // this.$refs.rocket.style.left = this.xPos + "px";
      // this.$refs.rocket.style.top = this.yPos + "px";
      // }, 200);
      // this.$refs.rocketC.style.classList("rokky");
    });
  },
  components: {
    FooterVue,
    // HeaderVue,
    SecondVue,
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: 0.5s ease all;
}
.rokky {
  display: none;
}
#rocket-container {
  position: fixed;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  background: #ccc;
  z-index: 11111111;
  display: flex;
  transition: 0.5s ease all;
  // place-items: center;
  justify-content: center;
  align-items: center;
}
.preloader {
  /* Preloader styles here */
  transition: opacity 0.3s linear;
}

#rocket {
  position: absolute;
  width: 100px;
  z-index: 1;
  // left: 50%;
  // top: 50%;
  bottom: 10px;
  animation: rocket 0.01s ease infinite alternate;
  // transform: translate(-50%, -50%);
}
.cloudI,
.cloud2,
.cloud3 {
  position: absolute;
  z-index: -1;
  top: 100%;
}
.cloudI {
  right: 45%;
  animation: clouds 1.5s linear infinite 1s;
}
.cloud2 {
  left: 50%;
  animation: clouds 1.5s linear infinite 1s;
}
.cloud3 {
  animation: clouds 1.5s linear infinite;
}

@keyframes clouds {
  from {
    top: -100%;
  }
  to {
    top: 100%;
  }
}
@keyframes rocket {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(4px);
  }
}

#app {
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
