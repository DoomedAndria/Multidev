<script setup>
import FigmaIcon from "@/assets/icons/TechAndProjs/FigmaIcon.vue";
import WordpressIcon from "@/assets/icons/TechAndProjs/WordpressIcon.vue";
import WoocomerceIcon from "@/assets/icons/TechAndProjs/WoocomerceIcon.vue";
import ShopifyIcon from "@/assets/icons/TechAndProjs/ShopifyIcon.vue";
import VueIcon from "@/assets/icons/TechAndProjs/VueIcon.vue";
import LaravelIcon from "@/assets/icons/TechAndProjs/LaravelIcon.vue";

import '@splidejs/vue-splide/css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import ClientCard from "@/components/ClientCard.vue";
import MultiButton from "@/components/MultiButton.vue";

const options = {
    rewind : true,
    perPage: 3.2,
    gap    : '1.25rem',
    focus: 'center',
    breakpoints: {
        1400:{
            perPage: 2
        },
        618:{
            perPage: 1
        }
    }
};
const clients = [
    {
        name: "Jeff Rasansky",
        company: "JR Law Firm",
        content: "The guys at Icepick do an amazing job, and have helped us with\n" +
            "more than one website. Always professional, quick to respond,\n" +
            "great eye for design, and more than willing to help if anything\n" +
            "comes up!"
    },
    {
        name: "Sondra Heffernan",
        company: "Infowerks",
        content: "Icepick recently updated our company website. Our company is\n" +
            "beyond happy with our new design, the delivery, and their\n" +
            "professionalism in working with multiple decision makers. Looking\n" +
            "forward to working with Icepick on future projects."
    },
    {
        name: "Jennifer Hall",
        company: "AegisLiving",
        content: "Icepick was able to help us get a very difficult web redesign\n" +
            "project across the finish line and continues to manage a large list\n" +
            "of projects to help improve user experience and SEO. The team is\n" +
            "knowledgeable, highly skilled and very responsive."
    },
    {
        name: "Jennifer Hall",
        company: "AegisLiving",
        content: "Icepick was able to help us get a very difficult web redesign\n" +
            "project across the finish line and continues to manage a large list\n" +
            "of projects to help improve user experience and SEO. The team is\n" +
            "knowledgeable, highly skilled and very responsive."
    },
    {
        name: "Jennifer Hall",
        company: "AegisLiving",
        content: "Icepick was able to help us get a very difficult web redesign\n" +
            "project across the finish line and continues to manage a large list\n" +
            "of projects to help improve user experience and SEO. The team is\n" +
            "knowledgeable, highly skilled and very responsive."
    },
]
</script>

<template>
    <section class="flex flex-col items-center">

        <h2 class="text-2xl md:text-4xl font-semibold text-[#25344F]">Technologies We Use</h2>
        <div class="overflow-scroll md:overflow-hidden w-full md:justify-center flex gap-20 p-12 mb-12">
            <FigmaIcon/>
            <WordpressIcon/>
            <WoocomerceIcon/>
            <ShopifyIcon/>
            <VueIcon/>
            <LaravelIcon/>
        </div>
        <div class="w-full px-5 md:py-20 py-8 bg-[#EEF2F6] flex flex-col items-center">
            <h2 class="mb-7 md:mb-12 text-2xl md:text-4xl font-medium text-[#25344F]">Hear It From Our Clients</h2>

            <Splide class="w-full" :options="options" >
                <SplideSlide v-for="client in clients">
                    <ClientCard :data="client" class="h-full"/>
                </SplideSlide>
            </Splide>
        </div>
        <div class="w-full px-5 flex flex-col items-center bg-[#6967CE]">
            <h2 class="font-medium text-white text-2xl md:text-4xl my-10 md:my-16">Recent Projects</h2>
            <div class=" grid grid-cols-1 md:grid-cols-2 gap-8 ">

                <div class="w-full max-w-xl aspect-square">
                    <img alt="imag" src="@/assets/images/TechAndProjs/proj1.png" class="w-full h-full object-cover rounded-2xl">
                </div>
                <div class="w-full max-w-xl aspect-square">
                    <img alt="imag" src="@/assets/images/TechAndProjs/proj2.png" class="w-full h-full object-cover rounded-2xl">
                </div>
                <div class="w-full max-w-xl aspect-square">
                    <img alt="imag" src="@/assets/images/TechAndProjs/proj3.png" class="w-full h-full object-cover rounded-2xl">
                </div>
                <div class="w-full max-w-xl aspect-square">
                    <img alt="imag" src="@/assets/images/TechAndProjs/proj4.png" class="w-full h-full object-cover rounded-2xl">
                </div>
            </div>

            <MultiButton type="light" arrow="true" class="px-8 py-3 rounded-3xl flex items-center my-14">
                View All Projects
            </MultiButton>
        </div>
    </section>

</template>

