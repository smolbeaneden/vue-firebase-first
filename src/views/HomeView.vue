<script setup lang="ts">

import ContactForm from "@/components/ContactForm.vue";
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
    <div class="home-view">
        <PageHeader header="Welcome" secondHeader="Proffesional Photographing" />
        <ContactForm/>
    </div>

</template>

<style scoped>
.home-view {
    display: grid;
    grid-column: 1/ 1;
}
</style>
