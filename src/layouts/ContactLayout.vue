<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
</script>

<template>
    <MainLayout>
        <slot/>
        <ContactSection/>
    </MainLayout>
</template>
