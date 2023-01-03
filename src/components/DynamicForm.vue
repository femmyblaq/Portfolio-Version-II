<template>
  <Form @click.prevent="onSubmit" :validation-schema="schema" class="form">
    <div class="row m-0">
      <div class="col-lg-6 pe-2 my-4">
        <div class="form-div">
          <Field
            name="name"
            :rules="rules"
            v-slot="{ field, errorMessage, meta }"
          >
            <span class="text-success" v-if="meta.valid && meta.touched"
              >Field is valid</span
            >
            <span>{{ errorMessage }}</span>
            <input
              type="text"
              v-bind="field"
              class="form__input"
              :class="{ inputss: toggleLight, err: !meta.valid }"
            />
          </Field>
          <label class="form-label" for="email" :class="{ label: toggleLight }"
            >username</label
          >
        </div>
      </div>
      <div class="col-lg-6 ps-2 my-4">
        <div class="form-div">
          <Field
            name="email"
            :rules="rules"
            v-slot="{ field, errorMessage, meta }"
          >
            <span class="text-success" v-if="meta.valid && meta.touched"
              >Field is valid</span
            >
            <span>{{ errorMessage }}</span>
            <input
              type="email"
              v-bind="field"
              class="form__input"
              :class="{ inputss: toggleLight, err: !meta.valid }"
            />
          </Field>
          <label class="form-label" for="email" :class="{ label: toggleLight }"
            >Email</label
          >
        </div>
      </div>
      <div class="col-lg-12 px-2 mb-4">
        <div class="form-div">
          <Field
            name="message"
            :rules="rules"
            v-slot="{ field, errorMessage, meta }"
          >
            <span class="text-success" v-if="meta.valid && meta.touched"
              >Field is valid</span
            >
            <span>{{ errorMessage }}</span>
            <input
              type="text"
              v-bind="field"
              class="form__input"
              :class="{ inputss: toggleLight, err: !meta.valid }"
            />
          </Field>
          <label class="form-label" for="email" :class="{ label: toggleLight }"
            >Message</label
          >
        </div>
      </div>
    </div>
    <span>
      <button
        @click="messageModal"
        type="submit"
        style="font-family: 'Roboto Mono'"
        class="btn btn-outline-success btn-lg rounded-0"
      >
        Send Message! <i class="fas fa-location-arrow"></i>
      </button>
    </span>
  </Form>
</template>
<script>
import { Form, Field } from "vee-validate";
import * as yup from "yup";
// import firebase from "firebase/app";
import "firebase/database";
import { mapMutations } from "vuex";
export default {
  name: "DynamicForm",
  data() {
    return {
      firebaseConfig: {
        apiKey: "AIzaSyBbON-LdKmoPIVnRorp-mqSuuAvXVXh1DU",
        authDomain: "femmy-portofolio.firebaseapp.com",
        projectId: "femmy-portofolio",
        storageBucket: "femmy-portofolio.appspot.com",
        messagingSenderId: "124250609917",
        appId: "1:124250609917:web:e030de48296e2b7b464694",
        measurementId: "G-66B3FWHLMP",
      },
      username: "",
      email: "",
      message: "",
    };
  },
  mounted() {
    // firebase.initializeApp(this.firebaseConfig);
  },
  methods: {
    ...mapMutations(["toggleModal"]),
    messageModal() {
      this.toggleModal();
      console.log("from Dynmic pg");
    },
    onSubmit() {
      const formData = {
        name: this.username,
        email: this.email,
        message: this.message,
      };

      console.log(formData);
    },
  },
  computed: {
    schema() {
      return yup.object({
        email: yup.string().required().email(),
        name: yup.string().required().min(3),
        message: yup.string(),
      });
    },
  },
  components: {
    Field,
    Form,
  },

  created() {},
};
</script>

<style lang="scss" scoped>
form span {
  color: red;
  margin-top: auto;
}
</style>
<style lang="scss">
.form {
  width: 100%;
}

.form__input {
  // position: absolute;
  // top: 0;
  // left: 0;
  width: 100%;
  // height: 100%;
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
.form-label {
  text-align: left;
  font-family: "Roboto Mono" !important;
  display: flex;
}
@media (min-width: 260px) and (max-width: 567px) {
  .form {
    .row {
      margin-bottom: 20px !important;
      .col-lg-6,
      .col-lg-12 {
        margin: 0 !important;
      }
      .form-label {
        display: flex;
        font-family: "Roboto";
      }
    }
  }
}
</style>
