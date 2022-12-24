<template>
  <div>
    <div id="project-heros">
      <div class="project-home">
        <div class="px-5 text-center">
          <h1 data-aos="fade-right" class="">Projects</h1>
          <div data-aos="fade-up" class="d-flex justify-content-center">
            <span class="text-center"
              ><router-link class="mx-3 text-decoration-none text-dark" to="/"
                >Home</router-link
              ><i class="fas fa-arrow-right"></i
              ><span class="mx-3">Projects</span></span
            >
          </div>
        </div>
      </div>
    </div>
    <ProjectVue />
    <SecondProjectVue />
    <ProjectsVue />
  </div>
</template>
<script>
import ProjectVue from "../components/Data.vue";
import ProjectsVue from "../components/Projects.vue";
import SecondProjectVue from "../components/SecondDt.vue";
export default {
  components: {
    ProjectVue,
    ProjectsVue,
    SecondProjectVue,
  },
};
</script>
<style lang="scss" scoped>
#project-heros {
  // align-items: center;
  height: 60vh;
  /* margin-top: 70px !important; */
  width: 100%;
  background: url("../assets/imgs/TechnologyDesign.png") no-repeat;

  .project-home {
    height: 60vh;
    display: grid;
    align-items: center;
    justify-content: flex-start;
    // margin-top: -50px;
  }
}

#project-heros h1 {
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

@media (min-width: 250px) and (max-width: 413px) {
  #project-heros {
    // align-items: center;
    justify-content: center;
    background: url("../assets/imgs/mobileTechDesigns.png") no-repeat center;
    width: 100%;
    // height: 60%;
    background-size: contain;
    // margin: auto;
    .project-home {
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
}
@media (min-width: 414px) and (max-width: 490px) {
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

    h1 {
      font-size: 5rem;
    }
  }
}
</style>
