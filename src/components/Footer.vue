<template>
  <div id="footer" class="bg-light px-4">
    <div class="row m-0 footer-top py-5 w-75 mx-auto">
      <div class="col-lg-3 col-md-6" style="border-right: 3px dotted #ccc">
        <img
          src="../assets/imgs/hyLogo.png"
          style="width: 50px"
          class="ms-5"
          alt=""
        />
        <p>Passion for design.</p>
      </div>
      <div class="col-lg-3 col-md-6" style="border-right: 3px dotted #ccc">
        <h5 class="fw-bold mb-4">Links</h5>
        <ul class="links list-unstyled">
          <li class="my-auto">
            <a
              href="femi.html"
              class="text-decoration-none text-dark text-dark text-dark"
              ><i class="fas fa-angle-right mx-2" style="color: #0f0"></i>
              Home</a
            >
          </li>
          <li class="my-auto">
            <a
              href="/about.html"
              class="text-decoration-none text-dark text-dark text-dark"
              ><i class="fas fa-angle-right mx-2" style="color: #0f0"></i>
              About</a
            >
          </li>
          <li class="my-auto">
            <a
              href=""
              class="text-decoration-none text-dark text-dark text-dark"
              ><i class="fas fa-angle-right mx-2" style="color: #0f0"></i>
              Project</a
            >
          </li>
          <li class="my-auto">
            <a
              href="/contact.html"
              class="text-decoration-none text-dark text-dark text-dark"
              ><i class="fas fa-angle-right mx-2" style="color: #0f0"></i>
              Contact</a
            >
          </li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6" style="border-right: 3px dotted #ccc">
        <h5 class="fw-bold mb-4">Contact info</h5>
        <div class="d-flex">
          <i class="fas fa-map-pin fa-1x mt-2"></i>
          <p class="ms-3">Yaba Colledge of Technology, Lagos Nigeria.</p>
        </div>
        <div class="d-flex">
          <i class="fas fa-phone fa-1x"></i>
          <p class="ms-3">+234 9016290149</p>
        </div>
        <div class="d-flex">
          <i class="fas fa-mail-bulk fa-1x"></i>
          <p class="ms-3">femmyblaq@gmail.com</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 socials">
        <h5 class="fw-bold mb-4">Social media</h5>
        <ul class="list-unstyled d-flex">
          <li
            class="d-flex justify-content-center shadow align-items-center github"
          >
            <a href="" class="text-white"
              ><i class="fab fa-1x fa-github"></i
            ></a>
          </li>
          <li
            class="ms-3 d-flex justify-content-center shadow align-items-center linked-in"
          >
            <a href="" class="text-white"
              ><i class="fab fa-1x fa-linkedin-in"></i
            ></a>
          </li>
          <li
            class="ms-3 d-flex justify-content-center shadow align-items-center instagram"
          >
            <a href="" class="text-white"
              ><i class="fab fa-1x fa-instagram"></i
            ></a>
          </li>
        </ul>
        <ul class="list-unstyled d-flex">
          <li
            class="d-flex justify-content-center shadow align-items-center facebook"
          >
            <a href="" class="text-white"
              ><i class="fab fa-1x fa-facebook"></i
            ></a>
          </li>
          <li
            class="ms-3 d-flex justify-content-center shadow align-items-center twitter"
          >
            <a href="" class="text-white"
              ><i class="fab fa-1x fa-twitter"></i
            ></a>
          </li>
          <li
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
    <div class="row footer-bottom">
      <div class="col-lg-12 m-auto text-center">
        <p class="mb-0">&copy; 2022 All right reserved by Femmy HY</p>
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
  }
  .github {
    background-color: #000;
  }
  .linked-in,
  .twitter {
    background-color: rgb(60, 148, 243);
  }
  .whatsapp {
    background-color: #25d366;
    // background: linear-gradient(, #25d366) 14% 84%/16% 16% no-repeat,
    //   radial-gradient(#25d366 60%, transparent 0);
  }
  .facebook {
    background-color: rgb(4, 102, 207);
  }
  .instagram {
    background-color: rgb(248, 18, 114);
  }
}
</style>
