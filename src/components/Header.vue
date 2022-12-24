<template>
  <div class="">
    <div
      id="header"
      class="sticky-top d-inline-flex w-100 justify-content-between px-4 py-2"
    >
      <div class="brand d-flex justify-content-center align-items-center">
        <img src="../assets/imgs/hyLogo.png" class="h-75" alt="" />
      </div>
      <div class="right">
        <div
          @click="toggleBars"
          class="bars d-flex flex-column justify-content-center align-items-center mt-2"
        >
          <span class="first" :class="{ firstBar: toggle }"></span
          ><span class="second" :class="{ secondBar: toggle }"></span
          ><span class="third" :class="{ thirdBar: toggle }"></span>
        </div>
        <ul class="lg-links list-unstyled d-inline-flex mb-0">
          <router-link
            tag="li"
            class="text-decoration-none"
            to="/"
            active-class="active"
            ><a class="nav-link text-dark text-decoration-none fs-6 py-2">
              <span style="color: #0f0">01. </span>Home
              <span class="d-none span-sm" style="color: #0f0"> .01</span></a
            >
          </router-link>
          <router-link
            tag="li"
            class="text-decoration-none"
            to="/about"
            active-class="active"
            ><a class="nav-link text-dark text-decoration-none fs-6 py-2">
              <span style="color: #0f0">02. </span>About
              <span class="d-none span-sm" style="color: #0f0"> .02</span></a
            >
          </router-link>
          <router-link
            tag="li"
            class="text-decoration-none"
            to="/project"
            active-class="active"
            ><a class="nav-link text-dark text-decoration-none fs-6 py-2">
              <span style="color: #0f0">03. </span>Projects
              <span class="d-none span-sm" style="color: #0f0"> .03</span></a
            >
          </router-link>
          <router-link
            tag="li"
            class="text-decoration-none"
            to="/contact"
            active-class="active"
            ><a class="nav-link text-dark text-decoration-none fs-6 py-2">
              <span style="color: #0f0">04. </span>Contact
              <span class="d-none span-sm" style="color: #0f0"> .04</span></a
            >
          </router-link>
          <li>
            <button class="btn btn-outline-success resume py-1">
              <a
                href="../assets/FemmyHY.pdf"
                class="text-decoration-none text-success"
                >Resume</a
              >
            </button>
          </li>
        </ul>
      </div>
    </div>
    <ul :class="{ sideBar: toggle }" class="links list-unstyled mb-0">
      <!-- <li class="list-unstyled navbar-nav my-auto mx-4">
          <a href="femi.html" class="text-decoration-none"
            ><span style="color: #0f0">01.</span> Home</a
          >
        </li> -->
      <router-link
        tag="li"
        class="text-decoration-none"
        to="/"
        active-class="active"
        ><a class="nav-link text-dark text-decoration-none fs-6 py-2">
          <span style="color: #0f0">01. </span>Home</a
        >
      </router-link>
      <router-link
        tag="li"
        class="text-decoration-none"
        to="/about"
        active-class="active"
        ><a class="nav-link text-dark text-decoration-none fs-6 py-2">
          <span style="color: #0f0">02. </span>About</a
        >
      </router-link>
      <router-link
        tag="li"
        class="text-decoration-none"
        to="/project"
        active-class="active"
        ><a class="nav-link text-dark text-decoration-none fs-6 py-2">
          <span style="color: #0f0">03. </span>Projects</a
        >
      </router-link>
      <router-link
        tag="li"
        class="text-decoration-none"
        to="/contact"
        active-class="active"
        ><a class="nav-link text-dark text-decoration-none fs-6 py-2">
          <span style="color: #0f0">04. </span>Contact</a
        >
      </router-link>
      <li>
        <button class="btn btn-outline-success rounded-0 py-1">
          <a
            href="../assets/FemmyHY.pdf"
            class="text-decoration-none text-success"
            >Resume</a
          >
        </button>
      </li>
    </ul>
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
  .lg-links {
    .resume {
      color: #000;
      border-top-right-radius: 50%;
      border-bottom-left-radius: 50%;
    }
  }
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
.links {
  display: none;
}

@media (min-width: 500px) and (max-width: 767px) {
  #header {
    .right {
      .lg-links {
        display: none !important;
      }
      .links {
        display: none;
        position: fixed;
        right: -270px;
        width: 270px;
        height: 100%;
        box-shadow: 20px, 20px, 50px rgba(0, 0, 0, 0.5);
        background: rgba(135, 134, 134, 0.1);
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

@media (min-width: 250px) and (max-width: 450px) {
  .lg-links {
    display: none !important;
    .span-sm {
      display: block !important;
    }
  }
  .links {
    display: flex !important;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    right: 0;
    width: 280px;
    height: 96.5vh;
    box-shadow: 20px, 20px, 50px rgba(0, 0, 0, 0.5);
    background-color: rgb(121, 120, 120);
    // background-color: rgb(130, 130, 130);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    backdrop-filter: blur(5px);
    z-index: 11111 !important;
    transition: all 0.5s ease;
    // margin-top: 50px;
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

  // #header .bars.is-active span:nth-child(2) {
  //   opacity: 0;
  // }

  // #header .bars.is-active span:nth-child(1) {
  //   transform: translateY(8px) rotate(45deg);
  // }

  // #header .bars.is-active span:nth-child(3) {
  //   transform: translateY(-8px) rotate(-45deg);
  // }

  #header .bars {
    span {
      width: 30px;
      height: 3px;
      background-color: #000;
      z-index: 111111;
      margin: 3px 0px;
      border-radius: 2px;
      cursor: pointer;
      transition: 200ms ease-in-out;
    }
  }

  .firstBar {
    transform: translateY(8px) rotate(45deg);
  }
  .secondBar {
    visibility: hidden;
    // display: none;
  }
  .thirdBar {
    transform: translateY(-9px) rotate(-45deg);
  }
}
</style>
