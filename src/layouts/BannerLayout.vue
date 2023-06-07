<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import BannerSection from "@/components/sections/BannerSection.vue";
</script>

<template>
    <MainLayout>
        <slot/>
        <BannerSection/>
    </MainLayout>
</template>
