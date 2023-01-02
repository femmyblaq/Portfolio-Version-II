<template>
  <div id="footer" class="bg-light px-4">
    <div class="row m-0 footer-top py-5 w-75 mx-auto">
      <div
        data-aos="flip-left"
        class="col-lg-3 col-md-6"
        style="border-right: 3px dotted #ccc"
      >
        <img
          src="../assets/imgs/hyLogo.png"
          style="width: 50px"
          class="ms-5"
          alt=""
        />
        <p>Passion for design.</p>
      </div>
      <div class="col-lg-3 col-md-6" style="border-right: 3px dotted #ccc">
        <h5 data-aos="flip-up" class="fw-bold mb-4">Links</h5>
        <ul class="links list-unstyled">
          <li data-aos="fade-right" class="my-auto">
            <a
              style="font-family: 'Fira Sans'"
              href="femi.html"
              class="text-decoration-none text-dark text-dark text-dark"
              ><i class="fas fa-angle-right mx-2" style="color: #0f0"></i>
              Home</a
            >
          </li>
          <li data-aos="fade-left" class="my-auto">
            <a
              style="font-family: 'Fira Sans'"
              href="/about.html"
              class="text-decoration-none text-dark text-dark text-dark"
              ><i class="fas fa-angle-right mx-2" style="color: #0f0"></i>
              About</a
            >
          </li>
          <li data-aos="fade-right" class="my-auto">
            <a
              style="font-family: 'Fira Sans'"
              href=""
              class="text-decoration-none text-dark text-dark text-dark"
              ><i class="fas fa-angle-right mx-2" style="color: #0f0"></i>
              Project</a
            >
          </li>
          <li data-aos="fade-left" class="my-auto">
            <a
              style="font-family: 'Fira Sans'"
              href="/contact.html"
              class="text-decoration-none text-dark text-dark text-dark"
              ><i class="fas fa-angle-right mx-2" style="color: #0f0"></i>
              Contact</a
            >
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6" style="border-right: 3px dotted #ccc">
        <h5 data-aos="fade-up" class="fw-bold mb-4">Contact info</h5>
        <div data-aos="fade-right" class="d-flex">
          <!-- <i class="fas fa-map-pin fa-1x mt-2"></i> -->
          <span class="material-symbols-outlined"> home_pin </span>

          <p class="ms-3" style="font-family: 'Fira Sans'">
            Yaba Colledge of Technology, Lagos Nigeria.
          </p>
        </div>
        <div data-aos="fade-left" class="d-flex">
          <i class="fas fa-phone fa-1x"></i>
          <p class="ms-3" style="font-family: 'Fira Sans'">+234 9016290149</p>
        </div>
        <div data-aos="fade-right" class="d-flex">
          <!-- <i class="fas fa-mail-bulk fa-1x"></i> -->
          <span class="material-symbols-outlined"> mail </span>

          <p class="ms-3" style="font-family: 'Fira Sans'">
            femmyblaq@gmail.com
          </p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 socials">
        <h5 data-aos="flip-up" class="fw-bold mb-4">Social media</h5>
        <ul class="list-unstyled d-flex">
          <li
            data-aos="flip-right"
            class="d-flex justify-content-center shadow align-items-center github"
          >
            <a href="" class="text-white"
              ><i class="fab fa-1x fa-github"></i
            ></a>
          </li>
          <li
            data-aos="flip-right"
            class="ms-3 d-flex justify-content-center shadow align-items-center linked-in"
          >
            <a href="" class="text-white"
              ><i class="fab fa-1x fa-linkedin-in"></i
            ></a>
          </li>
          <li
            data-aos="flip-right"
            class="ms-3 d-flex justify-content-center shadow align-items-center instagram"
          >
            <a href="" class="text-white"
              ><i class="fab fa-1x fa-instagram"></i
            ></a>
          </li>
        </ul>
        <ul class="list-unstyled d-flex">
          <li
            data-aos="flip-right"
            class="d-flex justify-content-center shadow align-items-center facebook"
          >
            <a href="" class="text-white"
              ><i class="fab fa-1x fa-facebook"></i
            ></a>
          </li>
          <li
            data-aos="flip-right"
            class="ms-3 d-flex justify-content-center shadow align-items-center twitter"
          >
            <a href="https://twitter.com/FemmyHy" class="text-white"
              ><i class="fab fa-1x fa-twitter"></i
            ></a>
          </li>
          <li
            data-aos="flip-right"
            class="ms-3 d-flex justify-content-center shadow align-items-center whatsapp"
          >
            <a href="" class="text-white"
              ><i class="fab fa-1x fa-whatsapp"></i
            ></a>
          </li>
          <!-- <li class="ms-3">
            <a href="" class="text-dark"><i class="fas-facebook fa-1x"></i></a>
          </li> -->
        </ul>
      </div>
    </div>
    <div data-aos="fade-right" class="row footer-bottom">
      <div class="col-lg-12 m-auto text-center">
        <p class="" style="font-family: 'Fira Sans'">
          &copy; 2022 All right reserved by Femmy HY
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#footer {
  margin-top: 50px;

  .footer-top {
    width: 90% !important;
  }
  .socials ul li {
    width: 45px;
    height: 40px;
    // border: 1px solid #023020;
    border-radius: 8px;
    i {
      font-weight: 600;
    }
  }
  .github {
    background-color: #000;
  }
  .linked-in,
  .twitter {
    background-color: rgb(60, 148, 243);
  }
  .whatsapp {
    background-color: #03b56b;
  }
  .facebook {
    background-color: rgb(4, 102, 207);
  }
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
}
@media (min-width: 250px) and (max-width: 440px) {
  #footer {
    padding: 10px !important;

    .col-lg-3 {
      margin: 30px 0;
      img {
        margin-left: 0 !important;
      }
    }
  }
}
</style>
