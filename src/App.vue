<template>
  <div id="app">
    <HeaderVue />
    <router-view />
    <FooterVue />
  </div>
</template>
<script>
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
export default {
  components: {
    FooterVue,
    HeaderVue,
  },
};
</script>
<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

  // #header .bars.is-active span:nth-child(2) {
  //   opacity: 0;
  // }

  // #header .bars.is-active span:nth-child(1) {
  //   transform: translateY(8px) rotate(45deg);
  // }

  // #header .bars.is-active span:nth-child(3) {
  //   transform: translateY(-8px) rotate(-45deg);
  // }

  #header .bars span {
    width: 30px;
    height: 3px;
    background-color: #000;
    z-index: 111111;
    margin: 3px 0px;
    border-radius: 2px;
    cursor: pointer;
    transition: 200ms ease-in-out;
  }

  #heros {
    height: 60vh;
    overflow: visible;
    // border-bottom: 1px solid #444;

    .row .col-lg-6 {
      margin-left: 30px !important;
      h2,
      p {
        width: 100%;
      }
    }

    .nav,
    .sm,
    .socials {
      display: none !important;
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
  #heros {
    height: 60vh;
    overflow: visible;
    border-bottom: 1px solid #444;

    .row {
      width: 100% !important;
      .col-lg-6 {
        margin-left: 80px !important;
        width: 70% !important;
        h2,
        p {
          width: 100% !important;
        }
      }
      .col-lg-3 {
        img {
          display: none !important;
        }
      }
    }
  }

  #About {
    width: 75vw;
    margin: 0 auto !important;
    padding: 100px 20px;
    .about-top div {
      width: 300px;
      margin: auto 20px;
    }
    .sm img {
      width: 300px !important;
      margin-left: 100px;
    }
  }

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

@media (min-width: 250px) and (max-width: 450px) {
  #header .right .links {
    display: none;
    position: fixed;
    right: -270px;
    width: 270px;
    height: 100%;
    box-shadow: 20px, 20px, 50px rgba(0, 0, 0, 0.5);
    background: rgba(71, 69, 69, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    backdrop-filter: blur(5px);
    z-index: 11111;
    display: flex;
    flex-direction: column;
    place-items: center;
    transition: all 0.5s ease;
    margin-top: 50px;
  }

  #header .right .links.active {
    display: block !important;
    right: 0;
    transition: all 0.5s ease;
  }

  #header .right .links li {
    width: 100%;
    text-align: center;
    margin: 10px 0 !important;
    padding: 10px 0 !important;
  }

  #header .right .links li:hover {
    background-color: aliceblue;
  }

  #header .bars.is-active span:nth-child(2) {
    opacity: 0;
  }

  #header .bars.is-active span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  #header .bars.is-active span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  #header .bars span {
    width: 35px;
    height: 3px;
    background-color: #000;
    z-index: 111111;
    margin: 3px 0px;
    border-radius: 2px;
    cursor: pointer;
  }

  #heros {
    /* height: 90%; */
    width: 100%;
    z-index: 11111;
    background: url("./assets/imgs/Mobile-design-back.png") no-repeat center !important;
  }

  #heros .row {
    width: 100% !important;
    display: block !important;
  }

  #heros .row .col-lg-6 {
    margin-left: 10px !important;
  }

  #heros .row .col-lg-6 .intro {
    width: 100%;
  }

  #heros .row .col-lg-6 .intro .w-25 {
    width: 30% !important;
  }

  #heros .row .col-lg-6 p {
    width: 100%;
  }

  #heros .row .col-lg-6 h1 {
    font-size: 3rem;
  }

  #heros .row .col-lg-6 h2 {
    font-size: 1.7rem;
    font-weight: 900 !important;
  }

  #heros .nav,
  #heros .sm,
  #heros .socials {
    display: none !important;
  }

  #About {
    width: 100vw;
    margin: 0 auto !important;
    padding: 70px 10px;
  }

  #About .about-top div {
    width: 150px !important;
    margin: auto 10px;
  }

  #About .sm img {
    width: 300px !important;
    margin-left: 50px;
    display: block !important;
  }

  #Skills .row {
    display: block !important;
    width: 100% !important;
    height: 100vh !important;
    padding: 10px !important;
  }

  #Skills .col-lg-6 {
    /* height: 50vh; */
    width: 100% !important;
  }

  #Skills .mt-auto {
    /* margin-top: 0 !important; */
  }

  #other-projects {
    width: 100% !important;
    padding: 10px;
  }

  #contact {
    width: 100% !important;
  }

  #contact p {
    padding: 0 20px !important;
  }

  #contact .w-75 {
    width: 90% !important;
  }

  .box {
    width: 100% !important;
    margin: 20px 0;
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
</style>
