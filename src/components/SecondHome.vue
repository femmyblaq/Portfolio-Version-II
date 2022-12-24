<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light">
      <router-link class="navbar-brand" to="/"
        ><img src="../assets/imgs/hyLogo.png" class="w-50" alt=""
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div
          @click="toggleBars"
          class="bars d-flex flex-column justify-content-center align-items-end mt-2"
        >
          <span class="first" :class="{ firstBar: toggle }"></span
          ><span class="second" :class="{ secondBar: toggle }"></span
          ><span class="third" :class="{ thirdBar: toggle }"></span>
        </div>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav w-50 justify-content-evenly ml-auto">
          <router-link to="/" custom v-slot="{ href, isActive }">
            <li :class="{ active: isActive }">
              <a :href="href">
                <span class="span-lg" style="color: #0f0">01. </span
                ><span
                  >Home<span class="d-none span-sm" style="color: #0f0">
                    .01</span
                  ></span
                >
              </a>
            </li>
          </router-link>
          <router-link to="/about" custom v-slot="{ href, isActive }">
            <li :class="{ active: isActive }">
              <a :href="href">
                <span class="span-lg" style="color: #0f0">02. </span
                ><span
                  >About<span class="d-none span-sm" style="color: #0f0">
                    .02</span
                  ></span
                >
              </a>
            </li>
          </router-link>
          <router-link to="/project" custom v-slot="{ href, isActive }">
            <li :class="{ active: isActive }">
              <a :href="href">
                <span class="span-lg" style="color: #0f0">03. </span
                ><span
                  >Project<span class="d-none span-sm" style="color: #0f0">
                    .03</span
                  ></span
                >
              </a>
            </li>
          </router-link>
          <router-link to="/contact" custom v-slot="{ href, isActive }">
            <li :class="{ active: isActive }">
              <a :href="href">
                <span class="span-lg" style="color: #0f0">04. </span
                ><span
                  >Contact<span class="d-none span-sm" style="color: #0f0"
                    >.04</span
                  ></span
                >
              </a>
            </li>
          </router-link>
          <div>
            <button class="btn btn-outline-success resume py-1">
              <a href="../assets/FemmyHY.pdf" class="text-decoration-none"
                >Resume</a
              >
            </button>
          </div>
        </ul>
      </div>
    </nav>
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

<style lang="scss" scoped>
.navbar {
  width: 100%;
  box-shadow: 20px, 20px, 50px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  backdrop-filter: blur(5px);
}
.navbar-collapse {
  ul li.active a {
    color: #0f0;
  }
  ul li.active {
    font-weight: 500;
    color: #fff;
  }
  .navbar-nav {
    .resume {
      border-top-right-radius: 15px;
      border-bottom-left-radius: 15px;
      border-top-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      font-family: "Roboto Mono" !important;
      a {
        color: #000;
      }
    }
    .resume:hover {
      background-color: #0f0;
      a {
        color: #fff;
      }
    }
    li a {
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
@media (min-width: 200px) and (max-width: 499px) {
  .navbar-collapse .navbar-nav {
    width: 75% !important;
    li {
      text-align: right;
      padding: 20px 0;
      width: 100% !important;
      margin-right: 20px;
      .span-sm {
        display: block !important;
      }
      .span-lg {
        display: none !important;
      }
    }
  }
  .navbar-collapse .navbar-nav div {
    display: flex;
    justify-content: end;
    padding-top: 9px;
  }
  .navbar {
    padding: 10px 20px;
  }
  .navbar-toggler {
    padding: 0 !important;
  }
  .navbar-toggler:focus {
    box-shadow: none !important;
  }
  .bars {
    margin-top: 0 !important;
    .first {
      width: 35px;
    }
    .second {
      width: 30px;
    }
    .third {
      width: 25px;
    }
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
    width: 25px !important;
    transform: translateY(9px) rotate(45deg);
  }
  .secondBar {
    visibility: hidden;
    // display: none;
  }
  .thirdBar {
    width: 25px !important;
    transform: translateY(-9px) rotate(-45deg);
  }
}
@media (min-width: 500px) and (max-width: 980px) {
  // .navbar-toggler {
  //   display: none;
  // }
  // .collapse {
  //   display: none;
  // }

  .navbar-nav {
    flex-direction: row;
    width: 85% !important;
  }
}
</style>
