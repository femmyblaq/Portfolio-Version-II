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
            <span class="text-success" v-show="meta.valid && meta.touched"
              >Field is valid</span
            >
            <span>{{ errorMessage }}</span>
            <input
              type="text"
              v-model="name"
              v-bind="field"
              placeholder="Username"
              class="form__input"
              :class="{ inputss: toggleLight, err: !meta.valid }"
            />
          </Field>
          <!-- <label class="form-label" for="email" :class="{ label: toggleLight }"
            >username</label
          > -->
        </div>
      </div>
      <div class="col-lg-6 mid-input ps-2 my-4">
        <div class="form-div">
          <Field
            name="email"
            :rules="rules"
            v-slot="{ field, errorMessage, meta }"
          >
            <span class="text-success" v-show="meta.valid && meta.touched"
              >Field is valid</span
            >
            <span>{{ errorMessage }}</span>
            <input
              type="email"
              v-model="email"
              v-bind="field"
              placeholder="Email"
              class="form__input"
              :class="{ inputss: toggleLight, err: !meta.valid }"
            />
          </Field>
          <!-- <label class="form-label" for="email" :class="{ label: toggleLight }"
            >Email</label
          > -->
        </div>
      </div>
      <div class="col-lg-12 px-2 mb-4">
        <div class="form-div">
          <Field
            name="message"
            :rules="rules"
            v-slot="{ field, errorMessage, meta }"
          >
            <span class="text-success" v-show="meta.valid && meta.touched"
              >Field is valid</span
            >
            <span>{{ errorMessage }}</span>
            <input
              type="text"
              v-model="message"
              v-bind="field"
              placeholder="Message"
              class="form__input"
              :class="{ inputss: toggleLight, err: !meta.valid }"
            />
          </Field>
          <!-- <label class="form-label" for="email" :class="{ label: toggleLight }"
            >Message</label
          > -->
        </div>
      </div>
    </div>
    <span>
      <button
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
import axios from "axios";
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
      name: "",
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
        name: this.name,
        email: this.email,
        message: this.message,
      };

      console.log(formData);
      let data = {
        members: [
          {
            email_address: this.email,
            status: "subscribed",
            merge_fields: {
              FNAME: this.name,
            },
          },
        ],
      };
      const dataJson = JSON.stringify(data);
      const options = {
        method: "POST",
        headers: {
          Authorization: "habeeb e94053372137fcaf7cecdc89af0921e1-us10",
        },
        body: dataJson,
      };
      axios
        .post("https://us10.api.mailchimp.com/3.0/lists/1ab03b2e4e", options)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            console("Working all perfectly");
          }
        })
        .catch((err) => console.log(err));
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

.form {
  width: 100%;
  .form-div .err {
    border-color: red;
  }
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
      .mid-input {
        margin-top: 0 !important;
      }
      .col-lg-6,
      .col-lg-12 {
        // margin: 0 !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .form-label {
        display: flex;
        font-family: "Roboto";
      }
    }
  }
}
</style>
