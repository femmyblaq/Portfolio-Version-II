<template>
  <div>
    <div
      data-aos="zoom-in-right"
      class="container px-5 ftc my-5 position-relative"
    >
      <div class="container-fluid m-auto p-0">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators d-none">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="lg-img" src="../assets/imgs/libHome.png" alt="" />
              <img
                src="../assets/imgs/MobileLibHome.png"
                class="sm-img d-none"
                alt=""
              />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/imgs/libHome.png"
                class="sm-img d-none"
                alt=""
              />
              <img src="../assets/imgs/libLogin.png" class="lg-img" alt="" />
            </div>
            <div class="carousel-item">
              <img
                src="../assets/imgs/MobileLibHome.png"
                class="sm-img d-none"
                alt=""
              />
              <img src="../assets/imgs/studies.png" class="lg-img" alt="" />
            </div>
          </div>
          <button
            class="carousel-control-prev d-none"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next d-none"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div class="overlay w-100 h-100 bg-success"></div>
      </div>
      <!-- <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="project-content ft mt-lg-5 px-5 text-right w-50 end-0 bottom-0 position-absolute"
      >
        <p
          class="text-end text-right mb-0 p"
          style="color: #0f0; font-family: 'Roboto Mono'"
        >
          Feature Project
        </p>
        <h3 class="text-end text-right fw-bold" style="color: #023020">
          LibraryTUT
        </h3>
        <div
          class="shadow box text-white p-3"
          style="background-color: #023020"
        >
          <p style="" class="text-right">
            LibraryTUT is a platform where students registers their details to
            gain access to
            <span style="color: #0f0; font-family: 'Roboto Mono'"
              >courses of their choice and animated tutorials</span
            >
            on complex courses. Students can be able to save their favourite
            books for future reference.
          </p>
          <ul class="list-inline text-end text-white">
            <li class="list-inline-item">Html</li>
            <li class="list-inline-item">Font-awesome</li>
            <li class="list-inline-item">Css</li>
            <li class="list-inline-item">Vue js</li>
            <li class="list-inline-item">Firebase Api</li>
          </ul>
          <div class="links mt-2 text-white">
            <ul class="list-unstyled d-flex justify-content-end text-end mb-0">
              <a href="" class="text-white text-decoration-none"
                ><i class="fab fa-github pe-2 fs-5" aria-hidden="true"></i
              ></a>
              <a href="" class="text-white text-decoration-none"
                ><i class="fas fa-external-link-alt ps-2 pe-0 fs-5"></i
              ></a>
            </ul>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 40px 0;

  .project-content {
    .list-inline .list-inline-item {
      font-family: "Roboto Mono";
    }

    .links .list-unstyled a:hover {
      color: #0f0 !important;
    }
    .box:hover .overlay {
      opacity: 0;
    }
  }
}

.tp {
  padding: 100px !important;
}

.container-fluid {
  width: 750px;
  height: 452px;
  position: relative;
  transition: 200ms ease-in-out;
  &:hover .overlay {
    opacity: 0;
  }
  .carousel-inner {
    .carousel-item {
      img {
        border-radius: 20px;
      }
    }
  }

  .overlay {
    background-color: #023020;
    position: absolute;
    border-radius: 20px;
    opacity: 70%;
    height: 100%;
    top: 0;
    transition: 200ms ease-in-out;
  }
}
@media (min-width: 414px) and (max-width: 513px) {
  .container {
    padding: 20px !important;
  }
  .container-fluid {
    width: 350px;
    height: 252px;
    .carousel-inner {
      .carousel-item {
        img {
          width: 350px;
          height: 252px;
          border-radius: 20px;
        }
      }
    }
  }
}

@media (min-width: 250px) and (max-width: 359px) {
  .project-top {
    margin-left: 20px !important;
    div {
      width: 150px !important;
    }
  }
  #projects .ftc {
    margin-top: 10px !important;
  }
  .container {
    display: none;
    margin: 0 !important;
    padding: 0 !important;
    .ft {
      right: 10px !important;
      margin-right: 3px !important;
    }
  }
  .container-fluid {
    display: none;
    width: 350px !important;
    height: 352px;
    margin: 0 auto !important;
    .overlay {
      height: 352px !important;
    }
    .carousel-inner {
      .lg-img {
        display: none !important;
      }
      .sm-img {
        display: block !important;
      }
    }
  }
  .project-content {
    width: 95% !important;
    bottom: -128px !important;
    padding: 10px !important;

    h3 {
      color: #fff !important;
    }
  }
}
@media (min-width: 360px) and (max-width: 413px) {
  #projects {
    // padding: 100px 0 0;
    margin: 0 !important;
  }
  .project-top {
    width: 100% !important;
    padding: 0 !important;
    margin-left: 20px !important;
    div {
      width: 120px !important;
      margin-left: 10px !important;
    }
  }

  #projects .ftc {
    margin-top: 10px !important;
  }
  .container {
    margin: 80px 0 !important;
    padding: 0 !important;
    .ft {
      right: 10px !important;
      margin-right: 3px !important;
    }
  }
  .container-fluid {
    width: 330px !important;
    display: none;
    height: 352px;
    margin: 0 auto !important;
    .carousel-inner {
      .carousel-item {
        .lg-img {
          // width: 550px;
          display: none !important;
        }
      }
    }
    .overlay {
      height: 352px !important;
    }
    .carousel-inner {
      .lg-img {
        display: none !important;
      }
      .sm-img {
        display: block !important;
      }
    }
  }
  .project-content {
    width: 90% !important;
    bottom: -128px !important;
    padding: 10px !important;

    h3 {
      color: #fff !important;
    }
  }
}
</style>
