<template>
  <div>
    <MessagePopoverVue />

    <div id="contact-heros">
      <div class="contact-home">
        <!-- <img class="position-absolute h-50 w-100" src="imgs/TechnologyDesign.png" alt=""> -->
        <div class="px-5 text-center">
          <h1 data-aos="fade-right" class="">Contact me</h1>
          <div data-aos="fade-up" class="d-flex justify-content-center">
            <span class="text-center"
              ><router-link class="mx-3 text-decoration-none text-dark" to="/"
                >Home</router-link
              ><i class="fas fa-arrow-right"></i
              ><span class="mx-3">Contact</span></span
            >
          </div>
        </div>
      </div>
    </div>
    <div id="contact" class="row mx-auto d-flex justify-content-center">
      <div class="col-lg-5">
        <div class="reach-outs">
          <img src="/imgs/hyLogo.png" class="w-5" alt="" />
          <p class="my-3">
            Well I'm looking for any opportunities that can offer me well and as
            well gain more experience as a software engineer, and I promise to
            give my possible best as always. My inbox is wildly open, whether
            you want to say "Hi", or need web designs for your business so I can
            make them for you, I will try my possible best to reply as soon as
            possible. Thank you.
          </p>
        </div>
        <div data-aos="flip-right" class="d-flex">
          <i class="fas fa-map-pin fa-1x"></i>
          <p class="ms-3">Yaba Colledge of Technology, Lagos Nigeria.</p>
        </div>
        <div data-aos="flip-right" class="d-flex">
          <i class="fas fa-phone fa-1x"></i>
          <p class="ms-3">+234 9016290149</p>
        </div>
        <div data-aos="flip-right" class="d-flex">
          <i class="fas fa-mail-bulk fa-1x"></i>
          <p class="ms-3">femmyblaq@gmail.com / phemmyhy@gmail.com</p>
        </div>
        <ul class="social-media list-unstyled mb-0 d-flex">
          <li
            data-aos="flip-right"
            class="d-flex justify-content-center shadow-sm align-items-center github"
          >
            <a href="" class="text-dark"><i class="fab fa-1x fa-github"></i></a>
          </li>
          <li
            data-aos="flip-right"
            class="ms-3 d-flex justify-content-center align-items-center shadow-sm linked-in"
          >
            <a href="" class="text-dark"
              ><i class="fab fa-1x fa-linkedin-in"></i
            ></a>
          </li>
          <li
            data-aos="flip-right"
            class="ms-3 d-flex justify-content-center align-items-center shadow-sm instagram"
          >
            <a href="" class="text-dark"
              ><i class="fab fa-1x fa-instagram"></i
            ></a>
          </li>
          <li
            data-aos="flip-right"
            class="ms-3 d-flex justify-content-center align-items-center shadow-sm facebook"
          >
            <a href="" class="text-dark"
              ><i class="fab fa-1x fa-facebook"></i
            ></a>
          </li>
          <li
            data-aos="flip-right"
            class="ms-3 d-flex justify-content-center align-items-center shadow-sm twitter"
          >
            <a href="" class="text-dark"
              ><i class="fab fa-1x fa-twitter"></i
            ></a>
          </li>
          <li
            data-aos="flip-right"
            class="ms-3 d-flex justify-content-center align-items-center shadow-sm whatsapp"
          >
            <a href="" class="text-dark"
              ><i class="fab fa-1x fa-whatsapp"></i
            ></a>
          </li>
          <!-- <li
            class="ms-3 d-flex justify-content-center align-items-center shadow"
          >
            <a href="" class="text-dark"><i class="fas-facebook fa-1x"></i></a>
          </li> -->
        </ul>
      </div>
      <div class="col-lg-1" style="border-right: 4px dotted #023020"></div>
      <div class="col-lg-5 snd-col">
        <div class="top-content text-center">
          <!-- <p style="color: #023020; font-family: 'Roboto Mono'; font-size: 1rem;" class="m-0"><span>04.
                    </span>What's
                    Next?</p> -->
          <h2 data-aos="fade-up" class="fw-bold" style="color: #023020">
            Say Hello!
          </h2>
        </div>
        <div class="box w-100">
          <DynamicFormVue />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DynamicFormVue from "../components/DynamicForm.vue";
import MessagePopoverVue from "../components/MessagePopover.vue";
// import { mapMutations } from "vuex";
export default {
  components: {
    MessagePopoverVue,
    DynamicFormVue,
  },
  methods: {},
  computed: {
    modalMessage() {
      return this.$store.getters.getState;
    },
  },
};
</script>

<style lang="scss" scoped>
#contact-heros {
  align-items: center;
  height: 50vh;
  /* margin-top: 70px !important; */
  width: 100%;
  background: url("../assets/imgs/contact_design.png") no-repeat;

  .contact-home {
    height: 60vh;
    display: grid;
    align-items: center;
    // margin-top: -50px;
    justify-content: flex-start;
  }

  h1 {
    font-size: 5rem;
    font-family: "Ubuntu";
    font-weight: bold;
    background-color: #023020;
    background-image: linear-gradient(to top, #0f0 0%, #023020 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    margin: auto 0;
  }
}

#contact {
  margin: 100px;
  .social-media {
    li {
      width: 45px;
      height: 40px;
      // border: 2px solid #ddd;
      border-radius: 8px;
      cursor: pointer;

      a i {
        transition: all 0.5s ease-in-out;
      }
    }
    .github:hover {
      background-color: #000 !important;
      a {
        color: #fff !important;
      }
    }
    .linked-in:hover,
    .twitter:hover {
      background-color: rgb(60, 148, 243) !important;
      a {
        color: #fff !important;
      }
    }
    .whatsapp:hover {
      background-color: #25d366 !important;
      a {
        color: #fff !important;
      }
    }
    .facebook:hover {
      background-color: rgb(4, 102, 207) !important;
      a {
        color: #fff !important;
      }
    }
    .instagram:hover {
      .instagram {
        background: radial-gradient(
            circle farthest-corner at 35% 90%,
            #fec564,
            transparent 50%
          ),
          radial-gradient(
            circle farthest-corner at 0 140%,
            #fec564,
            transparent 50%
          ),
          radial-gradient(
            ellipse farthest-corner at 0 -25%,
            #5258cf,
            transparent 50%
          ),
          radial-gradient(
            ellipse farthest-corner at 20% -50%,
            #5258cf,
            transparent 50%
          ),
          radial-gradient(
            ellipse farthest-corner at 100% 0,
            #893dc2,
            transparent 50%
          ),
          radial-gradient(
            ellipse farthest-corner at 60% -20%,
            #893dc2,
            transparent 50%
          ),
          radial-gradient(
            ellipse farthest-corner at 100% 100%,
            #d9317a,
            transparent
          ),
          linear-gradient(
            #6559ca,
            #bc318f 30%,
            #e33f5f 50%,
            #f77638 70%,
            #fec66d 100%
          );
      }
      a {
        color: #fff !important;
      }
    }
  }
  .box {
    height: auto;
    width: 60%;
    text-align: center;
    /* display: grid; */
    justify-content: center;
    align-items: center;
    padding: 30px;
    margin: auto;
    border-radius: 0.5rem;
  }
}
@media (min-width: 250px) and (max-width: 450px) {
  #contact-heros {
    width: 100%;
    height: 60%;
    background: url("../assets/imgs/contact-design-mobile.png") no-repeat center;
    background-size: contain;
    .contact-home {
      // height: 60vh;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      // margin-top: -50px;
    }

    h1 {
      font-size: 2.5rem;
    }
  }
  #contact {
    padding: 0 20px;
    .snd-col {
      margin-top: 100px;
    }
    .box {
      padding: 20px 0;
    }
  }
}
@media (min-width: 750px) and (max-width: 1180px) {
  #contact-heros {
    width: 100%;
    // height: 100vh;
    justify-content: center;
    background: url("../assets/imgs/pad-cont-design.png") no-repeat center;
    background-size: contain;

    .contact-home {
      // height: 60vh;
      display: grid;
      align-items: center;
      justify-content: center;
      .px-5 {
        margin-top: -140px;
      }
    }

    h1 {
      font-size: 4rem;
    }
  }
  #contact {
    margin-top: 80px !important;
    padding: 20px 70px;

    .col-lg-5 {
      padding-top: 70px;
    }
  }
}

@media (min-width: 500px) and (max-width: 749px) {
  #contact-heros {
    width: 100%;
    // height: 60%;
    justify-content: center;
    background: url("../assets/imgs/contact-design-mobile.png") no-repeat center;
    background-size: contain;
  }
  #contact {
    padding: 20px 40px;

    .col-lg-5 {
      padding-top: 70px;
    }
  }
}
</style>
