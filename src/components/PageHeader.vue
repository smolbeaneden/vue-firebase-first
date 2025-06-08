<script setup lang="ts">
import NavBar from "@/components/NavBar.vue"
import {RouterLink} from "vue-router";
    const props = defineProps({
        header: String,
        secondHeader: String
    })
</script>

<template>
    <body>

        <div class="background-container">
            <NavBar/>
            <div class="header-container">
                <header class="page-header">{{ header }}</header>
                <header class="second-page-header">{{ secondHeader }}</header>
            </div>

        </div>

    </body>


</template>

<style scoped>
body {
    margin: 0;
    /* Keep body minimal for better control over the background container */
}

.background-container {
    position: relative; /* Essential for absolute positioning of headers */
    width: 100%;
    height: 100%;
    background-image:linear-gradient(0deg, rgba(0, 0, 0, 1) 15%, rgba(255, 255, 255, 0) 100%),
    url('@/assets/photographer.jpg');
    background-size: cover; /* Use cover to ensure the background covers the container */
    background-repeat: no-repeat;
    background-position: top center; /* Or adjust as needed */
}

.header-container {
    display:grid;
    grid-template-columns: 1fr;
    position: absolute; /* Position absolutely within the container */
    top: 20%; /* Adjust percentage based on desired vertical position */
    left: 15%;
}
.page-header {
     /* Adjust percentage based on desired horizontal position */
    font-size: 6vw; /* Keep vw for scaling with viewport width */
    font-weight: bold;
    color: white; /* Add color for visibility against the background */
}

.second-page-header {
    font-size: 2vw; /* Keep vw for scaling with viewport width */
    color: white; /* Add color for visibility against the background */
    margin-top: 0
}


</style>