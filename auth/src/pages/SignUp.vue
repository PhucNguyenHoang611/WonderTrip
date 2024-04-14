<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toast-notification";
import { RouterLink } from "vue-router";
import SignUpImage from "/SignUpImage.jpg";

const $toast = useToast();
const emailRegex = /^[a-z0-9_\.]{1,32}@[a-z0-9]{2,10}(\.[a-z0-9]{2,10}){1,}$/;

const isLoading = ref(false);
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const country = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const inputRules: any = {
  firstNameRequired: (value: string) => !!value || "First name is required",
  lastNameRequired: (value: string) => !!value || "Last name is required",
  emailRequired: (value: string) => !!value || "Email is required",
  emailFormat: (value: string) => emailRegex.test(value) || "Invalid email format",
  passwordRequired: (value: string) => !!value || "Password is required",
  confirmPasswordCheck: (value: string) => value === password.value || "Invalid confirm password",
  passwordLength: (value: string) => value.length >= 8 || "Password must be at least 8 characters long",
  countryRequired: (value: string) => !!value || "Country is required",
};

const handleSignUp = () => {
  isLoading.value = true;
  
  if (
    firstName.value !== ""
    && lastName.value !== ""
    && email.value !== ""
    && emailRegex.test(email.value)
    && password.value !== ""
    && confirmPassword.value === password.value
    && password.value.length >= 8
    && country.value !== ""
  ) {
    showToast("success", "Sign Up Successfully !!!");
  }
  
  isLoading.value = false;
};

const showToast = (errorType: string, message = "") => {
  $toast.open({
    message: message,
    type: errorType,
    position: "bottom-right"
  });
}
</script>

<template>
  <div class="flex h-screen">
    <div class="hidden lg:block w-2/5">
      <img :src="SignUpImage" alt="WonderTripSignIn" class="object-cover w-full h-full">
    </div>

    <div class="w-full lg:w-3/5 flexbox-col p-6">
      <div class="w-full flexbox-col mb-2">
        <div class="flexbox-row">
          <p class="text-3xl mr-2 font-weight-bold">
            Welcome new Travelers
          </p>
          <v-icon icon="mdi-hand-wave" color="#FBD964" size="x-large"></v-icon>
        </div>
        <p class="text-md mt-2">
          Enter details to create your new account
        </p>
      </div>
      <div class="max-w-md w-full">
        <v-form @submit.prevent="handleSignUp" class="mt-4">
          <div class="flexbox-row mb-2">
            <v-text-field
              class="w-1/2"
              type="text"
              label="First Name"
              v-model="firstName"
              :rules="[inputRules.firstNameRequired]"
              variant="underlined">
            </v-text-field>

            <div class="mx-2"></div>

            <v-text-field
              class="w-1/2"
              type="text"
              label="Last Name"
              v-model="lastName"
              :rules="[inputRules.lastNameRequired]"
              variant="underlined">
            </v-text-field>
          </div>

          <v-text-field
            class="mb-2"
            type="email"
            :rules="[inputRules.emailRequired, inputRules.emailFormat]"
            label="Email Address"
            v-model="email"
            variant="underlined">
          </v-text-field>

          <v-text-field
            class="mb-2"
            :rules="[inputRules.passwordRequired, inputRules.passwordLength]"
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showPassword = !showPassword"
            label="Password"
            variant="underlined">
          </v-text-field>

          <v-text-field
            class="mb-2"
            :rules="[inputRules.confirmPasswordCheck]"
            v-model="confirmPassword"
            :type="showConfirmPassword ? 'text' : 'password'"
            :append-inner-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showConfirmPassword = !showConfirmPassword"
            label="Confirm Password"
            variant="underlined">
          </v-text-field>

          <v-text-field
            type="text"
            label="Your Country"
            v-model="country"
            :rules="[inputRules.countryRequired]"
            variant="underlined">
          </v-text-field>
          
          <v-btn
            block
            rounded
            :loading="isLoading"
            size="large"
            class="mt-4 text-white"
            color="rgb(var(--primary-1))"
            type="submit">
            SIGN UP
          </v-btn>
        </v-form>

        <div class="flexbox-row mt-2">
          <p class="mr-2 text-sm">
            Already have an account ?
          </p>
          <RouterLink to="/sign-in">
            <p class="font-weight-bold text-primary-1 text-sm">
              Sign in now
            </p>
          </RouterLink>
        </div>

        <div class="flexbox-row my-6">
          <v-divider :thickness="2" class="border-opacity-75"></v-divider>
          <p class="mx-2 text-gray-400">or</p>
          <v-divider :thickness="2" class="border-opacity-75"></v-divider>
        </div>

        <div class="flexbox-row">
          <v-btn
            rounded
            class="text-none w-full"
            size="large"
            prepend-icon="mdi-google"
            variant="outlined">
            Continue with Google
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>