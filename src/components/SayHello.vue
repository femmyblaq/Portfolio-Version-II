<template>
  <div>
    <!-- <form action="" class="form"> -->
    <!-- <div class="row m-0">
 </form> -->
  </div>
</template>
<script>
export default {
  components: {},
  data: () => {
    return {};
  },
};
</script>
<style lang="scss">
.form {
  width: 100%;
  // position: relative;
}
.form-div {
  // position: relative;
  margin-bottom: 2rem;
  height: 48px;
}

.form__input {
  // position: absolute;
  // top: 0;
  // left: 0;
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
}
.form__input:hover {
  border-color: #0f0;
}
.form__input:focus {
  border-color: #8c8984;
}
.form__input:active {
  background: none;
}
</style>
