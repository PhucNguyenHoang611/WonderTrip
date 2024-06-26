<script setup lang="ts">
import { ref } from "vue";
import { useToast } from "vue-toast-notification";
import { RouterLink, useRouter } from "vue-router";
import SignUpImage from "/SignUpImage.jpg";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { usersRef, googleAuthProvider } from "@/config/firebase";
import { useFirebaseAuth, useCollection } from "vuefire";

const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", `Timor L"Este`, "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

const auth = useFirebaseAuth()!;
const router = useRouter();
const $toast = useToast();
const emailRegex = /^[a-z0-9_\.]{1,32}@[a-z0-9]{2,10}(\.[a-z0-9]{2,10}){1,}$/;

const isLoading = ref(false);
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const country = ref(null);
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const emailErrorMessage = ref("");

const usersCollection = useCollection(usersRef);

const inputRules: any = {
  firstNameRequired: (value: string) => !!value || "First name is required",
  lastNameRequired: (value: string) => !!value || "Last name is required",
  emailRequired: (value: string) => !!value || "Email is required",
  emailFormat: (value: string) => emailRegex.test(value) || "Invalid email format",
  passwordRequired: (value: string) => !!value || "Password is required",
  confirmPasswordCheck: (value: string) => value === password.value || "Invalid confirm password",
  passwordLength: (value: string) => value.length >= 8 || "Password must be at least 8 characters long",
  countryRequired: (value: string) => !!value || "Country is required"
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
  isLoading.value = true;

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (userCredential) => {
      try {
        await addDoc(usersRef, {
          id: userCredential.user.uid,
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          country: country.value,
          provider: "Default"
        });
        
        await sendEmailVerification(userCredential.user)
          .then(() => {
            showToast("success", "We have sent an email with a confirmation link to your email address !");
            router.push("/sign-in");
          });
      } catch (e) {
        console.error("Error adding user: ", e);
      }
    })
    .catch((error) => {
      console.log(error.message);

      if (error.code === "auth/email-already-in-use")
        emailErrorMessage.value = "This email is already in use !";
    });
  }

  isLoading.value = false;
};

const handleSignUpWithGoogle = () => {
  emailErrorMessage.value = "";

  signInWithPopup(auth, googleAuthProvider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log("Token: ", token);

      try {
        if (!checkEmailIfExists(result.user.email)) {
          const docRef = await addDoc(usersRef, {
            id: result.user.uid,
            firstName: result.user.displayName,
            lastName: "",
            email: result.user.email,
            country: "Vietnam",
            provider: "Google"
          });
          
          console.log("User written with ID: ", docRef.id);
        }

        console.log("Signed in user: ", result.user);
        showToast("success", "Sign in successfully !");
        router.push("/");
      } catch (e) {
        console.error("Error adding user: ", e);
      }
    })
    .catch((error) => {
      console.log(error.message);
      // const email = error.customData.email;
      // console.log("Email: ", email);
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // console.log("Credential: ", credential);
    });
};

const checkEmailIfExists = (email: string | null) => {
  const user = usersCollection.value.find((user: any) => user.email === email);

  if (user)
    return true;
  return false;
};

const showToast = (errorType: string, message = "") => {
  $toast.open({
    message: message,
    type: errorType,
    position: "bottom-right"
  });
};
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
            variant="underlined"
            :error-messages="emailErrorMessage">
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

          <v-autocomplete
            :items="countries"
            label="Your Country"
            v-model="country"
            :rules="[inputRules.countryRequired]"
            placeholder="Select..."
            variant="underlined">
          </v-autocomplete>
          
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
            variant="outlined"
            @click="handleSignUpWithGoogle">
            Continue with Google
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>