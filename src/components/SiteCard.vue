<script setup>
import MultiButton from "@/components/MultiButton.vue";

const props = defineProps({
    data: Object
})
</script>

<template>
    <div class="px-4 md:pl-0 md:p-0 pt-4 flex flex-col md:flex-row max-w-6xl rounded-3xl bg-gradient-to-r from-[#4B7786] to-[#2F505E]">
        <div class="w-full md:pt-16">
            <img alt="asd" class="w-full object-cover rounded-2xl md:rounded-none" :src="data.image">
        </div>
        <div class="w-full flex justify-center items-center py-7 ">
            <div class="flex flex-col items-start gap-7 md:max-w-xs">
                <h3 class="text-2xl text-white font-normal">
                    {{data.title}}
                </h3>
                <p class="text-lg text-[#EEF8FF]">
                    {{data.content}}
                </p>
                <MultiButton btype="light" class="bg-white text-[#2E4F5B]">
                    Visit Site
                </MultiButton>
            </div>
        </div>
    </div>
</template>
