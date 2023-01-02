<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 m-auto">
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="project-content text-left"
        >
          <p
            class="text-start mb-0 p"
            style="color: #0f0; font-family: 'Roboto Mono'"
          >
            Feature Project
          </p>
          <h3 class="text-start fw-bold" style="color: #023020">LibraryTUT</h3>
          <div class="">
            <p style="font-family: 'Fira Sans'" class="">
              LibraryTUT is a platform where students registers their details to
              gain access to
              <span style="color: #0f0; font-family: 'Roboto Mono'"
                >courses of their choice and animated tutorials</span
              >
              on complex courses. Students can be able to save their favourite
              books for future reference.
            </p>
            <ul class="list-inline text-start">
              <li class="list-inline-item">Html</li>
              <li class="list-inline-item">Font-awesome</li>
              <li class="list-inline-item">Css</li>
              <li class="list-inline-item">Vue js</li>
              <li class="list-inline-item">Firebase Api</li>
            </ul>
            <div class="links mt-2">
              <ul
                class="list-unstyled d-flex justify-content-start text-start mb-0"
              >
                <a href="" class="text-dark text-decoration-none"
                  ><i class="fab fa-github pe-2 fs-5" aria-hidden="true"></i
                ></a>
                <a href="" class="text-dark text-decoration-none"
                  ><i class="fas fa-external-link-alt ps-2 pe-0 fs-5"></i
                ></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 d-flex justify-content-center m-auto">
        <img
          draggable="false"
          data-aos="zoom-in"
          data-aos-duration="3000"
          src="../assets/imgs/lptop-onlineLib.png"
          class="position-relative ms-4 laptop"
          style="width: 500px"
          alt=""
        />
        <img
          draggable="false"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src="../assets/imgs/ipadScreen-onlineLib.png"
          class="position-absolute ipad"
          style="width: 150px; right: 390px; bottom: 60px"
          alt=""
        />
        <img
          draggable="false"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src="../assets/imgs/mobileScreen-onlineLib.png"
          class="position-absolute bottom mobile"
          style="width: 100px; right: 60px; bottom: 60px"
          alt=""
        />
      </div>
      <div class="col-lg-6 d-flex justify-content-center m-auto">
        <img
          draggable="false"
          data-aos="zoom-in"
          data-aos-duration="3000"
          src="../assets/imgs/lptop.png"
          class="position-relative ms-4 laptop"
          style="width: 500px"
          alt=""
        />
        <img
          draggable="false"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src="../assets/imgs/ipadScreen.png"
          class="position-absolute ipad"
          style="width: 150px; right: 390px; bottom: 60px"
          alt=""
        />
        <img
          draggable="false"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          src="../assets/imgs/mobileScreen.png"
          class="position-absolute mobile bottom"
          style="width: 100px; right: 60px; bottom: 60px"
          alt=""
        />
      </div>
      <div class="col-lg-6 m-auto">
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="project-content text-right"
        >
          <p
            class="text-end mb-0 p"
            style="color: #0f0; font-family: 'Roboto Mono'"
          >
            Feature Project
          </p>
          <h3 class="text-end fw-bold" style="color: #023020">
            Ewallet System
          </h3>
          <div class="">
            <p style="font-family: 'Fira Sans'" class="">
              E-wallet app is a dynamic web application where users can bank
              with there phone, an app where user can Fund thier account and
              Transfer.
            </p>
            <ul class="list-inline text-end">
              <li class="list-inline-item" style="font-family: 'Roboto Mono'">
                Html
              </li>
              <li class="list-inline-item" style="font-family: 'Roboto Mono'">
                Font-awesome
              </li>
              <li class="list-inline-item" style="font-family: 'Roboto Mono'">
                Css
              </li>
              <li class="list-inline-item" style="font-family: 'Roboto Mono'">
                Vue js
              </li>
              <li class="list-inline-item" style="font-family: 'Roboto Mono'">
                Firebase Api
              </li>
            </ul>
            <div class="links mt-2">
              <ul
                class="list-unstyled d-flex justify-content-end text-end mb-0"
              >
                <a href="" class="text-dark text-decoration-none"
                  ><i class="fab fa-github pe-2 fs-5" aria-hidden="true"></i
                ></a>
                <a href="" class="text-dark text-decoration-none"
                  ><i class="fas fa-external-link-alt ps-2 pe-0 fs-5"></i
                ></a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@media (min-width: 360px) and (max-width: 567px) {
  .container {
    .row {
      .col-lg-6 {
        margin: 30px 0 !important;
        .laptop {
          width: 300px !important;
          margin-left: 40px !important;
        }
        .ipad {
          width: 100px !important;
          z-index: 11;
          bottom: 36px !important;
          right: 70% !important;
        }
        .mobile {
          width: 80px !important;
          z-index: 11;
          bottom: 36px !important;
          right: 5% !important;
        }
      }
    }
  }
}
</style>
