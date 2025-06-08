<script setup lang="ts">

import {RouterLink} from "vue-router";
</script>

<template>
 <nav>
     <div class="navComp">
         <RouterLink class="link" to="/gallery">
         Photo Gallery
         </RouterLink>
     </div>
        <div class="navComp"> | </div>
        <div class="navComp"> About </div>
        <div class="navComp"> | </div>
        <div class="navComp"> Add your work </div>
 </nav>
</template>

<style scoped>
nav{
    font-size: 20px;
    color: #ffffff;
    padding-top: 2%;
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
    display: grid;
    grid-template-columns: 4fr 1fr 4fr 1fr 4fr;
}
 .navComp {
     display: flex;
     justify-content: center;
     align-items: center;
 }
 .link{
     display: flex;
     justify-content: center;
     align-items: center;

     color: #ffffff;
     text-decoration: none;
 }
 .link:hover {
     text-shadow: rgba(26, 26, 26, 0.63) 1px 1px 1px;
     background-color: rgba(255, 255, 255, 0);
 }

@media (max-width: 840px) {
    nav{
        font-size: 15px;
    }
}

@media (max-width: 690px) {

}

</style>