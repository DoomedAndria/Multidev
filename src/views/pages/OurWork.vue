<script setup>
import BannerLayout from "@/layouts/BannerLayout.vue";
import SiteCard from "@/components/SiteCard.vue";
import {useOurWork} from "@/composables/useOurWork";

const {siteData} = useOurWork()

</script>

<template>
    <BannerLayout>
        <div class="flex flex-col gap-7 items-center text-center py-10 md:py-20 px-5 bg-[#6967CE]">
            <h1 class="text-4xl md:text-6xl text-white font-bold">
                Our Work
            </h1>
            <p class="text-base md:text-xl text-[#BDC8DB] max-w-2xl">
                We take pride in the work we do and
                love helping businesses succeed online.
            </p>
        </div>
        <div class="flex flex-col items-center gap-7 py-16 px-5">
            <SiteCard v-for="data in siteData" :data="data"/>
        </div>
    </BannerLayout>
</template>