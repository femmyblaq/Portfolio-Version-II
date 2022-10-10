<template>
  <div
    id="header"
    class="sticky-top d-inline-flex w-100 justify-content-between px-4 py-2"
  >
    <div class="brand d-flex justify-content-center align-items-center">
      <img src="../assets/imgs/hyLogo.png" class="h-75" alt="" />
    </div>
    <div class="right">
      <ul
        :class="{ sideBar: toggle }"
        class="links list-unstyled mb-0 d-inline-flex"
      >
        <!-- <li class="list-unstyled navbar-nav my-auto mx-4">
          <a href="femi.html" class="text-decoration-none"
            ><span style="color: #0f0">01.</span> Home</a
          >
        </li> -->
        <router-link tag="li" to="/" active-class="active"
          ><a class="nav-link text-decoration-none fs-6 py-2">
            <span style="color: #0f0">01.</span>Home</a
          >
        </router-link>
        <router-link tag="li" to="/about" active-class="active"
          ><a class="nav-link text-decoration-none fs-6 py-2">
            <span style="color: #0f0">02.</span>About</a
          >
        </router-link>
        <router-link tag="li" to="/project" active-class="active"
          ><a class="nav-link text-decoration-none fs-6 py-2">
            <span style="color: #0f0">03.</span>Projects</a
          >
        </router-link>
        <router-link tag="li" to="/contact" active-class="active"
          ><a class="nav-link text-decoration-none fs-6 py-2">
            <span style="color: #0f0">04.</span>Contact</a
          >
        </router-link>
        <li>
          <button class="btn btn-outline-success rounded-0 py-1">
            <a href="" class="text-decoration-none">Resume</a>
          </button>
        </li>
      </ul>
      <div
        @click="toggleBars"
        class="bars d-flex flex-column justify-content-center align-items-center mt-2"
      >
        <span class="first" :class="{ firstBar: toggle }"></span
        ><span class="second" :class="{ secondBar: toggle }"></span
        ><span class="third" :class="{ thirdBar: toggle }"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleBars() {
      this.toggle = !this.toggle;
      console.log("I got toggled.....", this.toggle);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#header {
  width: 100%;
  box-shadow: 20px, 20px, 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  backdrop-filter: blur(5px);
  z-index: 111111;
  height: 60px;

  .right .links {
    li.active {
      font-weight: 500;
      background-color: aqua;
      // color: #0f0 !important;
    }
    a {
      font-size: 16px;
      color: #000;
      font-weight: 500;
      transition: all 0.5s ease;
      text-decoration: none;
      /* font-family: "Open Sans"; */
      font-family: "Roboto Mono" !important;
      &:hover {
        color: #0f0;
      }
    }
  }
}

@media (min-width: 500px) and (max-width: 767px) {
  #header {
    .right {
      .links {
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
      .firstBar {
        transform: translateY(8px) rotate(45deg);
        transition: 200ms ease-in-out;
      }
      .secondBar {
        visibility: hidden;
        // display: none;
      }
      .thirdBar {
        transition: 200ms ease-in-out;
        transform: translateY(-8px) rotate(-45deg);
      }

      .sideBar {
        display: block !important;
        right: 0;
        transition: all 0.5s ease;
        z-index: 1 !important;
      }
    }
  }
}

// #sidebar .sidebar-content ul #sidebar .sidebar-content ul li.active a {
//   color: #fff;
// }
</style>
