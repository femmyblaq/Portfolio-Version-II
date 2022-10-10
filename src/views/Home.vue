<template>
  <div class="home">
    <!-- <Header msg="Welcome to Your Vue.js App" /> -->
    <div id="heros" class="position-relative">
      <!-- <img src="imgs/portfolio-v2-design.png" class="w-100 h-100" alt=""> -->
      <div class="socials ms-5 my-auto position-fixed bottom-0">
        <ul class="list-unstyled mb-0">
          <li>
            <a href="" class="text-dark"
              ><i class="fab fa-github-square"></i
            ></a>
          </li>
          <li>
            <a href="" class="text-dark"><i class="fab fa-linkedin-in"></i></a>
          </li>
          <li>
            <a href="" class="text-dark"
              ><i class="fab fa-instagram-square"></i
            ></a>
          </li>
          <li>
            <a href="" class="text-dark"
              ><i class="fab fa-facebook-square"></i
            ></a>
          </li>
          <li>
            <a href="" class="text-dark"
              ><i class="fab fa-twitter-square"></i
            ></a>
          </li>
          <li>
            <a href="" class="text-dark"><i class="fas-facebook"></i></a>
          </li>
          <div class="mt-auto">
            <a
              href=""
              class="mt-2 me-0 text-decoration-none text-dark fw-normal"
              style="
                writing-mode: vertical-lr;
                transform: rotate(180deg);
                margin-left: -5px;
              "
              >Femmyblaq@gmail.com</a
            >
          </div>
        </ul>
      </div>
      <div class="row mx-0 p-0 position-absolute top-50">
        <div class="col-lg-6 col-md-6 col-sm-12" style="margin-left: 150px">
          <div class="intro my-auto">
            <div class="w-25 text-white">
              <p class="hi bg-dark p-1 m-0 text-center fw-bold">
                Hi, my name is
              </p>
            </div>
            <h1 class="fw-bolder">Femmy HY.</h1>
            <h2 class="fw-bolder">
              I create and build designs for
              <span
                class="txt-type"
                data-wait="3000"
                data-words='[" Web.", " UI/UX.", " Mobile."]'
              ></span>
            </h2>
            <p class="my-3 pb-4 brief">
              I'm a frontend developer/engineer, I design for web and everything
              between. I like to craft innovative and scalable frontend product
              with great user experiences and effectiveness.
            </p>

            <a href=""><span>Get In Touch</span><i></i></a>
          </div>
        </div>
        <div class="col-lg-3 ms-auto sm d-none d-lg-block">
          <img src="../assets/imgs/FemmyCartooned.png" class="w-100" alt="" />
        </div>
      </div>
      <div class="nav">
        <ul class="nav-items list-unstyled">
          <li class="nav-item active">
            <a href="#heros" class="nav-link text-decoration-none"></a>
          </li>
          <li class="nav-item">
            <a href="#About" class="nav-link text-decoration-none"></a>
          </li>
          <li class="nav-item">
            <a href="#Skills" class="nav-link text-decoration-none"></a>
          </li>
          <li class="nav-item">
            <a href="#other-projects" class="nav-link text-decoration-none"></a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link text-decoration-none"></a>
          </li>
        </ul>
        <div></div>
      </div>
    </div>
    <div id="About" class="vh-75">
      <div class="row m-0">
        <div class="col-lg-7 mx-auto">
          <div class="about-top d-inline-flex mb-3">
            <h2 class="fw-bold">
              <span
                class="fw-normal"
                style="
                  color: #0f0;
                  font-family: 'Roboto Mono';
                  font-size: 0.8rem;
                "
                >01</span
              >
              About me
            </h2>
            <div></div>
          </div>
          <p>
            Hi, I'm Femmy I'm a creative and innovative web developer based on
            Lagos city, Nigeria. <br />
            Since the world is moving toward technology! I decided to join the
            technicians in order to make the word a better place, make complex
            things look easy and cool.
          </p>
          <p>
            I'm literally a quick learner in any kind of complex activities and
            can adapt to the team and surroundings quickly, my goal is to become
            a Full stack Engineer, been able to build app for both frontend and
            backend as well as cloud computing.
            <br />
            <br />
            Shortly after getting employed on my first role as software
            engineer, I'm looking forward on working on a wide variety of
            interesting projects on a daily basis.
          </p>

          <p></p>
          <p>Here are some few technologies have been working with lately.</p>
          <div class="technologies d-flex justify-content-between">
            <ul class="list-unstyled">
              <li class="">
                <i class="fas fa-angle-right mx-2 mt-0"></i>JavaScript (Es6)
              </li>
              <li class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Vue (Nuxt) js
              </li>
              <li class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Node (Express)
              </li>
              <li class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Git (Github)
              </li>
            </ul>
            <ul class="list-unstyled">
              <li class="">
                <i class="fas fa-angle-right mx-2"></i>Html S(CSS)
              </li>
              <li class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Bootstrap (Tailwind)
              </li>
              <li class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Jquery
              </li>
              <li class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Firebase
              </li>
            </ul>
            <ul class="list-unstyled">
              <li class=""><i class="fas fa-angle-right mx-2"></i>Wordpress</li>
              <li class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Adobe XD (Figma)
              </li>
              <li class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Adobe PS (Corel Draw)
              </li>
              <li class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Mail chimp
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="m-auto w-100 sm">
        <img
          src="../assets/imgs/FemmyCartooned-tab.png"
          class="w-100 d-none"
          alt=""
        />
      </div>
    </div>
    <div id="Skills" class="py-5">
      <div class="row m-0 p-0 w-75 mx-auto">
        <div class="col-lg-6">
          <h1>Designs</h1>
          <span
            style="color: #0f0; font-family: 'Roboto Mono'; font-size: 0.8rem"
            >Frontend Development.</span
          >
          <p class="mt-2">
            I'm typically not the best designer in the world, but at least I am
            best of me, With the idea gotten from
            <span style="color: #0f0">Graphics design</span> I was able to apply
            them on the web which sharpens my skill and makes design looks more
            cool on the web. I was able to manipulate typography, buttons and
            some other complex components on the web.
          </p>
        </div>
        <div class="col-lg-6 mid mt-auto text-end">
          <ul class="list-unstyled d-inline-flex">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div class="col-lg-6 mid">
          <ul class="list-unstyled d-inline-flex">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="col-lg-6 mt-auto text-end">
          <h1>Engineering</h1>
          <span
            style="color: #0f0; font-family: 'Roboto Mono'; font-size: 0.8rem"
            >Connecting to Backend</span
          >
          <p class="mt-2">
            Well, with the help of some effective database tools, which allows
            me to be able to store data and as well retrieve them, e.g
            <span style="color: #0f0">Firebase</span> has been so helpful in my
            development career, it allows me create some dynamic applicaions
            with zero hassle. Another is
            <span style="color: #0f0">Mail Chimp</span>.
          </p>
        </div>
        <div class="col-lg-6">
          <h1>Responsiveness</h1>
          <span
            style="color: #0f0; font-family: 'Roboto Mono'; font-size: 0.8rem"
            >Media Query.</span
          >
          <p class="mt-2">
            Responsive Web design is the approach that suggests that design and
            development should respond to the user’s behavior and environment
            based on screen size,
            <span style="color: #0f0">platform and orientation. </span> I was In
            other words, the website should have the technology to automatically
            respond to the user’s preferences. I'm able to focus my attention on
            responsive designs.
          </p>
        </div>
        <div class="col-lg-6 mid mt-auto text-end">
          <ul class="list-unstyled d-inline-flex">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    <Project />
    <Projects />

    <div id="contact" class="w-75 mx-auto py-5">
      <div class="top-content text-center">
        <p
          style="color: #023020; font-family: 'Roboto Mono'; font-size: 1rem"
          class="m-0"
        >
          <span>04. </span>What's Next?
        </p>
        <h2 class="fw-bold" style="color: #023020">Get In Touch</h2>
        <p class="px-5 my-3">
          Well I'm looking for any opportunities that can offer me well and as
          well gain more experience as a software engineer, and I promise to
          give my possible best as always. My inbox is wildly open, whether you
          want to say "Hi", or need web designs for your business so I can make
          them for you, I will try my possible best to reply as soon as
          possible. Thank you.
        </p>
      </div>
      <div class="box">
        <form action="" class="form">
          <div class="row m-0">
            <div class="col-lg-6 pe-2">
              <div class="form-div">
                <input
                  type="text"
                  name=""
                  id="fname"
                  class="form__input"
                  autocomplete="off"
                  placeholder=" "
                />
                <label for="email" class="form__label">First Name</label>
              </div>
            </div>
            <div class="col-lg-6 ps-2">
              <div class="form-div">
                <input
                  type="text"
                  name=""
                  id="lname"
                  class="form__input"
                  autocomplete="off"
                  placeholder=" "
                />
                <label for="email" class="form__label">Last Name</label>
              </div>
            </div>
          </div>
          <div class="col-lg-12 px-2">
            <div class="form-div">
              <input
                type="email"
                name=""
                id="email"
                class="form__input"
                autocomplete="off"
                placeholder=" "
              />
              <label for="message" class="form__label">Message</label>
            </div>
          </div>

          <button class="btn btn-outline-success btn-lg px-4 py-3 rounded-0">
            Send Message! <i class="fas fa-location-arrow"></i>
          </button>
        </form>
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Project from "../components/Project.vue";
import Projects from "../components/Projects.vue";
// @ is an alias to /src
// import Header from "@/components/Header.vue";
// import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: { Project, Projects },
};
</script>

<style lang="scss" scoped>
#heros {
  height: 90.6vh;
  width: 100%;
  box-shadow: 20px, 20px, 50px rgba(0, 0, 0, 0.5);
  /* background: rgba(255, 255, 255, 0.1); */
  /* border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 1px solid rgba(255, 255, 255, 0.1); */
  /* overflow: hidden; */
  /* backdrop-filter: blur(50px); */
  font-family: "Ubuntu";
  z-index: 10;
  background: url("../assets/imgs/portfolio-v2-design.png") no-repeat center;
  .socials ul {
    div a:hover {
      color: #0f0 !important;
    }
    li {
      /* display: none; */
      /* color: #0f0 !important; */
      transition: 200ms ease;
      cursor: pointer;
      &__:hover a {
        /* margin-bottom: 4px; */
        color: #0f0 !important;
        transform: translateY(-5px);
      }

      a {
        transition: 0.5s;
        color: #f0f;
        cursor: pointer;
        /* display: none; */
      }
    }
  }
  .row {
    transform: translateY(-50%);
    width: 80% !important;
    z-index: -1;

    .col-lg-3 {
      margin-left: 100px !important;

      img {
        margin-top: -85px;
        margin-left: 50px;
      }
    }

    .intro {
      a {
        color: #000;
        position: relative;
        background-color: #444;
        text-decoration: none;
        padding: 18px 30px;
        font-weight: 400;
        letter-spacing: 0.1em;
        margin-top: 50px;
        background: rgba(255, 255, 255, 0.7);
        transition: 0.5s;
        border: 1px solid #0f0;
        &__:hover {
          letter-spacing: 0.25em;
          box-shadow: 0 0 5px #023020;
          color: #0f0;
          background: rgba(255, 255, 255, 0.9);
        }
        &__:before {
          content: "";
          position: absolute;
          inset: 2px;
        }

        span {
          position: relative;
          z-index: 1;
        }

        i {
          position: absolute;
          inset: 0;
          display: block;

          &__::before {
            content: "";
            position: absolute;
            width: 10px;
            top: -1px;
            left: 98%;
            transform: translateY(-50%);
            height: 10px;
            background: #27282c;
            border: 2px solid #023020;
            transition: 0.5s;
          }
        }
        &__:hover i::before {
          left: 0;
          transform: translateX(-50%) rotate(45deg);
          top: -6px;
          box-shadow: 40px 39px #0f0;
        }
      }
      .hi {
        font-size: 0.8rem;
      }
      h1 {
        font-size: 4rem;
        background-color: #023020;
        background-image: linear-gradient(to top, #0f0 0%, #023020 100%);
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
      }
      h2 {
        font-size: 2.5rem;
        background-color: #ff8177;
        background-image: linear-gradient(
          to top,
          rgb(23, 43, 23) 0%,
          #023020 100%
        );
        background-size: 100%;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-text-fill-color: transparent;
      }
    }
  }
}
.txt-type > .txt {
  border-right: 0.2rem solid #000;
}
.nav {
  width: 10px;
  position: fixed;
  bottom: 120px;
  display: flex;
  flex-direction: column;
  left: auto;
  right: 40px;
  height: 500px;
  /* transform: translateY(-50%); */
  /* top: 50%; */
}

.nav ul {
  margin-top: -130px;
  margin-left: -15px;
}

.nav-items li a {
  width: 10px;
  height: 10px;
  border: 2px solid #000;
  transform: rotate(45deg);
  padding: 0 !important;
  margin: 10px;
}
.nav-items li.active a {
  background-color: #0f0;
  transform: rotate(0);
  // width: 15px;
  // height: 15px;
  // border: 1px solid #000;
}
.nav-items li a:hover {
  background-color: #000;
  /* border: 2px solid #ff0000; */
  /* box-shadow: 40px 10px #f00; */
}

.nav-items li a:is(:link, :active, :visited).active {
  border: 2px solid #0f0;
  background-color: #000;
}

.nav:last-child {
  width: 2px;
  background-color: #000;
  height: 100px;
  position: fixed;
  bottom: 0;
}

#About {
  margin: 120px 0;
  .about-top {
    h2 {
      color: #023020;
      font-family: "Ubuntu";
      margin-left: 5px;

      span {
        color: #023020;
        font-family: "Roboto Mono" !important;
      }
    }
    div {
      width: 400px;
      height: 2px;
      background-color: #023020;
      margin: auto 20px;
    }
  }
  ul {
    font-size: 0.8rem;
    font-family: "Roboto Mono";
    li i {
      color: #0f0;
    }
  }
}

#Skills ul li {
  width: 20px;
  height: 20px;
  border: 2px solid #023020;
  border-radius: 50%;
  margin: 10px;
}

#Skills .row h1,
#other-projects h1 {
  font-weight: bold;
  color: #023020;
}

#contact {
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
  .form {
    width: 100%;
    position: relative;
  }
  .form-div {
    position: relative;
    margin-bottom: 2rem;
    height: 48px;
  }

  .form__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 100%; */
    border: 2px solid #8c8984;
    font-family: inherit;
    font-size: inherit;
    color: #000;
    outline: none;
    background: none;
    padding: 0.6rem 1.25rem;
    border-radius: 0.5rem;

    &__:hover {
      border-color: #0f0;
    }
    &__:focus {
      border-color: #8c8984;
    }
    &__:active {
      background: none;
    }

    &__:focus ~ .form__label,
    &__:not(:placeholder-shown).form__input:not(:focus) {
      top: -0.5rem;
      font-size: 0.8rem;
      left: 0.8rem;
    }
  }
  .form__label {
    position: absolute;
    left: 1rem;
    top: 0.8rem;
    padding: 0 0.5rem;
    color: #000;
    cursor: text;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
    background: #fff;
  }
}

@media (min-width: 768px) and (max-width: 1180px) {
  #Skills .row .mid {
    height: 100px !important;
  }
  #contact .box {
    width: 90%;
  }
}

@media (min-width: 414px) and (max-width: 450px) {
  #Skills .row {
    height: 100% !important;
  }
}
</style>
