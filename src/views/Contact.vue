<template>
  <div>
    <div id="contact-heros">
      <!-- <img class="position-absolute h-50 w-100" src="imgs/TechnologyDesign.png" alt=""> -->
      <h1 class="mx-5">Contact me</h1>
      <i class="fas fa-arrow-right"></i>
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
        <div class="d-flex">
          <i class="fas fa-map-pin fa-1x"></i>
          <p class="ms-3">Yaba Colledge of Technology, Lagos Nigeria.</p>
        </div>
        <div class="d-flex">
          <i class="fas fa-phone fa-1x"></i>
          <p class="ms-3">+234 9016290149</p>
        </div>
        <div class="d-flex">
          <i class="fas fa-mail-bulk fa-1x"></i>
          <p class="ms-3">femmyblaq@gmail.com / phemmyhy@gmail.com</p>
        </div>
        <ul class="social-media list-unstyled mb-0 d-flex">
          <li
            class="d-flex justify-content-center shadow-sm align-items-center github"
          >
            <a href="" class="text-dark"><i class="fab fa-1x fa-github"></i></a>
          </li>
          <li
            class="ms-3 d-flex justify-content-center align-items-center shadow-sm linked-in"
          >
            <a href="" class="text-dark"
              ><i class="fab fa-1x fa-linkedin-in"></i
            ></a>
          </li>
          <li
            class="ms-3 d-flex justify-content-center align-items-center shadow-sm instagram"
          >
            <a href="" class="text-dark"
              ><i class="fab fa-1x fa-instagram"></i
            ></a>
          </li>
          <li
            class="ms-3 d-flex justify-content-center align-items-center shadow-sm facebook"
          >
            <a href="" class="text-dark"
              ><i class="fab fa-1x fa-facebook"></i
            ></a>
          </li>
          <li
            class="ms-3 d-flex justify-content-center align-items-center shadow-sm twitter"
          >
            <a href="" class="text-dark"
              ><i class="fab fa-1x fa-twitter"></i
            ></a>
          </li>
          <li
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
      <div class="col-lg-5">
        <div class="top-content text-center">
          <!-- <p style="color: #023020; font-family: 'Roboto Mono'; font-size: 1rem;" class="m-0"><span>04.
                    </span>What's
                    Next?</p> -->
          <h2 class="fw-bold" style="color: #023020">Say Hello!</h2>
        </div>
        <div class="box w-100">
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

            <button class="btn btn-outline-success btn-lg rounded-0">
              Send Message! <i class="fas fa-location-arrow"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#contact-heros {
  display: flex;
  align-items: center;
  height: 50vh;
  /* margin-top: 70px !important; */
  width: 100%;
  background: url("../assets/imgs/contact_design.png") no-repeat;

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
}

#contact {
  margin: 100px;
  .social-media {
    li {
      width: 45px;
      height: 40px;
      border: 3px solid #ddd;
      border-radius: 8px;
      cursor: pointer;
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
      background-color: rgb(248, 18, 114) !important;
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
@media (min-width: 250px) and (max-width: 450px) {
  #contact-heros {
    width: 100%;
    height: 60%;
    background: url("../assets/imgs/contact-design-mobile.png") no-repeat center;
    background-size: contain;
  }
}
@media (min-width: 750px) and (max-width: 1180px) {
  #contact-heros {
    width: 100%;
    // height: 60%;
    justify-content: center;
    background: url("../assets/imgs/contact-design-mobile.png") no-repeat center;
    background-size: contain;
  }
  #contact {
    padding: 20px 70px;

    .col-lg-5 {
      padding-top: 70px;
    }
  }
}

@media (min-width: 500px) and (max-width: 767px) {
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
