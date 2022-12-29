<template>
  <div id="rocket-container" ref="rocketC">
    <img
      src="../assets/imgs/icons8-rocket-64.png"
      alt="rocket"
      ref="rocket"
      id="rocket"
    />
    <img src="../assets/imgs/icons8-cloud-96.png" class="cloudI" alt="" />
    <img src="../assets/imgs/icons8-cloud-96.png" class="cloud2" alt="" />
    <img src="../assets/imgs/icons8-cloud-96.png" class="cloud3" alt="" />
  </div>
</template>

<style lang="scss" scoped>
#rocket-container {
  position: absolute;
  width: 100%;
  overflow: hidden !important;
  height: 100vh;
  background: #ccc;
  z-index: 11111111;
  display: flex;
  transition: 0.5s ease all;
  /* // place-items: center; */
  justify-content: center;
  align-items: center;
}
.preloader {
  /* Preloader styles here */
  display: none;
  transition: display 0.8s linear;
}

#rocket {
  position: absolute;
  width: 100px;
  z-index: 1;
  /* // left: 50%; */
  /* // top: 50%; */
  bottom: 10px;
  animation: rocket 0.01s ease infinite alternate;
  /* // transform: translate(-50%, -50%); */
}
.cloudI,
.cloud2,
.cloud3 {
  position: absolute;
  z-index: -1;
  top: 100%;
}
.cloudI {
  right: 45%;
  animation: clouds 1.5s linear infinite 1s;
}
.cloud2 {
  left: 50%;
  animation: clouds 1.5s linear infinite 1s;
}
.cloud3 {
  animation: clouds 1.5s linear infinite;
}

@keyframes clouds {
  from {
    top: -100%;
  }
  to {
    top: 100%;
  }
}
@keyframes rocket {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(4px);
  }
}
</style>
