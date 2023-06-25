<script setup>
import '@splidejs/vue-splide/css';
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import ClientCard from "@/components/ClientCard.vue";
import MultiButton from "@/components/MultiButton.vue";
import {useTechAndProjs} from "@/composables/useTechAndProjs";

const options = {
    rewind: true,
    perPage: 3.2,
    gap: '1.25rem',
    focus: 'center',
    breakpoints: {
        1400: {
            perPage: 2
        },
        618: {
            perPage: 1
        }
    }
};
const {clients, projects, icons} = useTechAndProjs()

</script>

<template>
    <section class="flex flex-col items-center">

        <h2 class="text-2xl md:text-4xl font-semibold text-[#25344F]">Technologies We Use</h2>
        <div class="overflow-scroll md:overflow-hidden w-full md:justify-center flex gap-20 p-12 mb-12">
            <Component v-for="icon in icons" :is="icon"/>
        </div>
        <div class="w-full px-5 md:py-20 py-8 bg-[#EEF2F6] flex flex-col items-center">
            <h2 class="mb-7 md:mb-12 text-2xl md:text-4xl font-medium text-[#25344F]">Hear It From Our Clients</h2>

            <Splide class="w-full" :options="options">
                <SplideSlide v-for="client in clients">
                    <ClientCard :data="client" class="h-full"/>
                </SplideSlide>
            </Splide>
        </div>
        <div class="w-full px-5 flex flex-col items-center bg-[#6967CE]">
            <h2 class="font-medium text-white text-2xl md:text-4xl my-10 md:my-16">Recent Projects</h2>
            <div class=" grid grid-cols-1 md:grid-cols-2 gap-8 ">

                <div v-for="proj in projects" class="w-full max-w-xl aspect-square">
                    <img alt="imag" :src="proj" class="w-full h-full object-cover rounded-2xl">
                </div>

            </div>

            <RouterLink to="/ourWork" class="my-14">
                <MultiButton btype="light" arrow="true" class="px-8 py-3 rounded-3xl flex items-center">
                    View All Projects
                </MultiButton>
            </RouterLink>
        </div>
    </section>

</template>

