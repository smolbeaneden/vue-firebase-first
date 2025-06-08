<template>
  <form @submit.prevent="handleSubmit" name="contact-form" method="post" action="https://script.google.com/macros/s/AKfycbxuXSdSsm7fxiDj3Kxq1AC80w26FlnaBaFNefTBASDyUw0UNiyqJHbWdNJLSy-M7iCV-g/exec" class="form flex flex-col gap-4 w-full" data-netlify="true">
    <!-- Your form fields here -->
    <div>
      <div  class="textContainer">
        <label class="formHeader" for="name">שם מלא</label>
      </div>

      <input class="prompt text-right" type="text" id="name" name="Name" v-model="formData.name" required>
    </div>

    <div>
      <div  class="textContainer">
        <label class="formHeader" for="email">מייל</label>
      </div>

      <input class="prompt" type="email" id="email" name="Email" v-model="formData.email" required>
    </div>

    <div>
      <div  class="textContainer">
       <label class="formHeader" for="phoneNumber">מספר טלפון</label>
      </div>

      <input class="prompt" type="tel" id="phoneNumber" name="Phone Number" v-model="formData.phoneNumber" required />
    </div>
    <button class="submit" type="submit" id="submit" value="submit" >{{isSubmitting}}</button>
  </form>
</template>

<script setup lang="ts">
  import { ref, toRaw } from 'vue'
  import { collection, doc, setDoc , addDoc} from 'firebase/firestore'
  import { db } from '@/firebase.ts'
  import moment from "moment";
  const isSubmitting = ref("Submit");

  const formData = ref({
      name: '',
      email: '',
      phoneNumber: '',
    })

  const isSubmitted = ref(false)
  console.log(formData);

  async function handleSubmit() {
    try {
      isSubmitting.value = "submitting...";
      if(formData.value.phoneNumber.length != 10 || typeof Number(formData.value.phoneNumber) != "number") {
          alert("Please enter a valid phone number!");
          return;
      }

          const docRef = await addDoc(collection(db, "submitted"),{
              name: formData.value.name,
              email: formData.value.email,
              phoneNumber: formData.value.phoneNumber,
              timeStamp: moment().format("MMMM Do YYYY, HH:mm:ss"),
          })


          alert("תודה רבה! ניצור אתכם קשר בימים הקרובים:)");

          isSubmitted.value = true
          formData.value =({
              name: '',
              email: '',
              phoneNumber: '',
          })



    } catch (error) {

      console.log("Error occurred", { error });
      alert("נכשלה שליחת הטופס");
    }
    isSubmitting.value = "Submit";
  }


</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

.form {
  background-color: rgba(255, 255, 255, 0.47);
  padding: 2em;
  border-radius: 1em;
  font-family: 'Poppins', sans-serif;
  border-color: rgba(100, 108, 255, 0.51);
  color: rgba(255, 255, 255, 0.73);
  border-width: 0.2em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-shadow: rgba(100, 108, 255, 0.51) 1px 0 5px ;
}

.textContainer {
  width: 100%;
  margin: 0;
  text-align: right;

}
.formHeader {
  font-size: 1.5em;
  margin-top: 1em;
  margin-bottom: 1em;
  text-shadow: rgba(100, 108, 255, 0.51) 1px 0 5px ;
  font-weight: bold;
  text-align: right; /* Align text to the right */
  direction: rtl; /* Set text direction to right-to-left */
  width: 100%;

}
.prompt {
  background-color: rgba(41, 48, 57, 0.32);
  border-radius: 0.5em;
  padding: 0.4em;
  font-weight: bold;
  margin: 0;
  overflow: hidden;
  width: 100%;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-shadow: rgba(100, 108, 255, 0.51) 1px 0 5px ;
  cursor: pointer;
  transition: border-color 0.25s;
}

.prompt:hover {
  border-color: #646cff;
}

.prompt:focus,
.prompt:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
.prompt label {
   background-color: rgba(120, 110, 110, 0.82);
 }

.submit {
  padding: 0.4em;
  border-radius: 0.5em;
  margin-top: 1em;
  background-color: rgba(29, 29, 29, 0.37);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-shadow: rgba(100, 108, 255, 0.51) 1px 0 5px ;
}
</style>
