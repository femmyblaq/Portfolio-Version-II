<template>
  <div>
    <div id="about-heros">
      <div class="about-home">
        <!-- <img class="position-absolute h-50 w-100" src="imgs/TechnologyDesign.png" alt=""> -->
        <div class="px-5 text-center">
          <h1 data-aos="fade-right" class="">About me</h1>
          <div data-aos="fade-up" class="d-flex justify-content-center">
            <span class="text-center"
              ><router-link class="mx-3 text-decoration-none text-dark" to="/"
                >Home</router-link
              ><i class="fas fa-arrow-right"></i
              ><span class="mx-3">About</span></span
            >
          </div>
        </div>
      </div>
    </div>
    <div id="my-pics-spot">
      <div class="row mx-auto w-75">
        <div
          data-aos="zoom-in-up"
          class="col-lg-4 col-12 d-flex justify-content-center"
        >
          <div class="overlay-container">
            <img class="my_img" src="../assets/imgs/femmyHY-Profile.png" />
            <div class="overlay"></div>
            <div class="box"></div>
          </div>
        </div>
        <div class="col-lg-2">
          <img src="" draggable="false" alt="" />
        </div>
        <div data-aos="flip-right" class="col-lg-6 theWorld">
          <h1 class="fw-bolder">The world revolving around technologies!</h1>
          <p>
            with the world involving around technology, it would be better an
            individual to evolve in it, if there's passion for it. So it has
            always been my passion to operate computers and to know how it
            works, then i decided to start with Graphics designs before I
            explore to become a Web developer. My dream is to become an Software
            Engineer and to be very good at it.
          </p>
        </div>
        <div class="col-12 theWorld text-end">
          <ul class="list-unstyled d-inline-flex">
            <li data-aos="fade-right"></li>
            <li data-aos="fade-up"></li>
            <li data-aos="fade-up"></li>
            <li data-aos="fade-left"></li>
          </ul>
        </div>
      </div>
    </div>
    <div id="About" class="vh-75">
      <div class="row m-0">
        <div class="col-lg-7 mx-auto">
          <div class="about-top d-inline-flex mb-3">
            <h2 data-aos="fade-up" class="fw-bolder">
              <span
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
          <p data-aos="fade-up">
            Hi, I'm Femmy I'm a creative and innovative web developer based on
            Lagos city, Nigeria. <br />
            Since the world is moving toward technology! I decided to join the
            technicians in order to make the word a better place, make complex
            things look easy and cool.
          </p>
          <p data-aos="fade-up">
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
          <p data-aos="fade-up">
            Here are some few technologies have been working with lately.
          </p>
          <div class="technologies d-flex justify-content-between">
            <ul class="list-unstyled">
              <li data-aos="flip-left" class="">
                <i class="fas fa-angle-right mx-2 mt-0"></i
                ><i class="fas fa-js-square"></i>
              </li>
              <li data-aos="flip-left" class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Vue (Nuxt) js
              </li>
              <li data-aos="flip-left" class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Node (Express)
              </li>
              <li data-aos="flip-left" class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Git (Github)
              </li>
            </ul>
            <ul class="list-unstyled">
              <li data-aos="flip-left" class="">
                <i class="fas fa-angle-right mx-2"></i>Html S(CSS)
              </li>
              <li data-aos="flip-left" class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Bootstrap (Tailwind)
              </li>
              <li data-aos="flip-left" class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Jquery
              </li>
              <li data-aos="flip-left" class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Firebase
              </li>
            </ul>
            <ul class="list-unstyled">
              <li data-aos="flip-left" class="">
                <i class="fas fa-angle-right mx-2"></i>Wordpress
              </li>
              <li data-aos="flip-left" class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Adobe XD (Figma)
              </li>
              <li data-aos="flip-left" class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Adobe PS (Corel Draw)
              </li>
              <li data-aos="flip-left" class="my-2">
                <i class="fas fa-angle-right mx-2"></i>Mail chimp
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="d-lg-none m-auto w-100 sm">
        <img src="/imgs/FemmyCartooned-tab.png" class="w-100" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#about-heros {
  // align-items: center;
  height: 60vh;
  /* margin-top: 70px !important; */
  width: 100%;
  background: url("../assets/imgs/TechnologyDesign.png") no-repeat;

  .about-home {
    height: 60vh;
    display: grid;
    align-items: center;
    justify-content: flex-start;
    // margin-top: -50px;
  }
}

#about-heros h1 {
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
#my-pics-spot {
  height: auto;
  /* background-color: #0f0; */
  margin: 60px 0;
  padding: 50px 10px;
}

#my-pics-spot h2 {
  font-size: 2rem;
  color: #023020;
}

#my-pics-spot .col-lg-4 .overlay-container {
  width: 350px;
  height: 400px;
  position: relative;
  border-radius: 3%;
}

#my-pics-spot .col-lg-4 img {
  width: 100%;
  height: 100%;
  border-radius: 3%;
  display: block;
}

#my-pics-spot .col-lg-4 .overlay-container .overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 50%;
  transition: 0.5s ease;
  background-color: #0f0;
  border-radius: 3%;
}

#my-pics-spot .col-lg-4 .overlay-container .overlay:hover {
  opacity: 0;
}

#my-pics-spot .box {
  border: 3px solid #0f0;
  top: 0%;
  width: 350px;
  height: 400px;
  margin: 20px 0 0 20px;
  border-radius: 2%;
  z-index: -1;
  position: absolute;
  transition: 0.5s ease;
}

#my-pics-spot .col-lg-4 .overlay-container:hover .box {
  margin: 15px 0 0 15px;
  transition: 0.5s ease;
}

#my-pics-spot ul li {
  width: 20px;
  height: 20px;
  border: 2px solid #023020;
  border-radius: 50%;
  margin: 10px;
}

@media (min-width: 250px) and (max-width: 413px) {
  #about-heros {
    // align-items: center;
    justify-content: center;
    background: url("../assets/imgs/mobileTechDesigns.png") no-repeat center;
    width: 100%;
    // height: 60%;
    background-size: contain;
    // margin: auto;
    .about-home {
      // height: 60vh;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      // margin-top: -50px;
    }

    h1 {
      font-size: 3rem;
    }
  }

  #my-pics-spot .row {
    width: 100% !important;

    .col-lg-4 {
      width: 95% !important;
      margin-bottom: 50px;
    }
    .col-lg-4 .overlay-container {
      width: 250px;
      height: 350px;
    }
    .col-lg-2 {
      width: 5% !important;
      display: none;
    }
    .box {
      width: 250px;
      height: 350px;
    }
  }
}
@media (min-width: 414px) and (max-width: 490px) {
  #about-heros {
    // align-items: center;
    justify-content: center;
    background: url("../assets/imgs/mobileTechDesigns.png") no-repeat center;
    width: 100%;
    height: 55vh;
    background-size: contain;
    // margin: auto;
    .about-home {
      // height: 60vh;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      // margin-top: -50px;
    }

    h1 {
      font-size: 3rem;
    }
  }

  #my-pics-spot .row {
    width: 100% !important;

    .col-lg-4 {
      width: 95% !important;
      margin-bottom: 50px;
    }
    .col-lg-4 .overlay-container {
      width: 250px;
      height: 350px;
    }
    .col-lg-2 {
      width: 5% !important;
      display: none;
    }
    .box {
      width: 250px;
      height: 350px;
    }
  }
}

@media (min-width: 768px) and (max-width: 1180px) {
  #about-heros {
    // align-items: center;
    justify-content: center;
    background: url("../assets/imgs/pad-design.png") no-repeat center;
    width: 100%;
    // height: 60%;
    background-size: contain;
    // margin: auto;
    .about-home {
      // height: 60vh;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      // margin-top: -50px;
    }

    h1 {
      font-size: 5rem;
    }
  }

  #my-pics-spot .row {
    width: 100% !important;

    .col-lg-4 {
      width: 95% !important;
      margin-bottom: 50px;
    }
    .col-lg-4 .overlay-container {
      width: 450px;
      height: 550px;
    }
    .col-lg-2 {
      width: 5% !important;
      display: none;
    }
    .box {
      width: 450px;
      height: 550px;
    }
    .theWorld {
      width: 75%;
      margin: 30px auto 0;
    }
  }
  #About {
    width: 75%;
    margin: auto;
  }
}
</style>
