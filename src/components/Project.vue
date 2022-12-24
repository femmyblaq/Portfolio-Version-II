<template>
  <div id="projects" class="">
    <div class="project-top ms-auto d-inline-flex mb-3">
      <h2 class="fw-bold">
        <span
          class="fw-normal"
          style="color: #0f0; font-family: 'Roboto Mono'; font-size: 0.8rem"
          >02</span
        >
        Project built
      </h2>
      <div></div>
    </div>
    <!-- <div class="indi-project py-5">
      <DataVue />
      <div class="py-5">
        <SecondDt />
      </div>
    </div> -->
    <AnotherProjectVue />
    <!-- Second Container  -->
  </div>
</template>

<script>
import AnotherProjectVue from "./AnotherProject.vue";
export default {
  data() {
    return {};
  },
  components: {
    AnotherProjectVue,
  },
};
</script>

<style lang="scss" scoped>
#projects {
  margin: 100px 0;
  .project-top {
    width: 100% !important;
    padding-left: 148px;
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
  .snd {
    margin: 100px 0 !important;
  }
}

@media (min-width: 508px) and (max-width: 1180px) {
  #projects {
    margin: 100px 0;
    padding: 500px 0 0;
    .project-top {
      width: 80%;
      padding-left: 108px;
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
    .snd {
      margin: 100px 0 !important;
    }
  }
  .container-fluid {
    margin-left: 0 !important;
    width: 550px !important;
    height: 452px;
    margin: 0 auto !important;
  }
  .container {
    margin: 200px auto !important;
    width: 100% !important;
  }
  .project-content {
    width: 100% !important;
    left: 130px;
    h3 {
      color: #fff !important;
    }
  }

  .ftc {
    margin-top: 0 !important;
  }
}
@media (min-width: 414px) and (max-width: 507px) {
  #projects {
    margin: 100px 0;
    padding: 100px 0 0;
    .project-top {
      width: 100%;
      padding-left: 20px;
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
        width: 250px;
        height: 2px;
        background-color: #023020;
        margin: auto 20px;
      }
    }
    .snd {
      margin: 100px 0 !important;
    }

    .container-fluid {
      margin-left: 0 !important;
      width: 450px !important;
      height: 402px;
      margin: 0 auto !important;
    }
  }

  .container {
    margin: 200px auto !important;
    padding: 0 !important;
    width: 100% !important;
  }
  .project-content {
    width: 100% !important;
    left: 0;
    h3 {
      color: #fff !important;
    }
  }

  .ftc {
    margin-top: 0 !important;
  }
}
@media (min-width: 250px) and (max-width: 400px) {
  #projects {
    margin: 100px 0;
    padding: 10px 0 0;
    .project-top {
      width: 100%;
      padding-left: 10px;
      div {
        width: 150px;
      }
    }
  }
}
</style>
