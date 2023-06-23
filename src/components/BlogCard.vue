<script setup>
import MultiButton from "@/components/MultiButton.vue";

const props = defineProps({
    data: Object
})
</script>

<template>
    <div class="max-w-xl">
        <div class="h-48 md:h-80 mb-5">
            <img alt="123" class="w-full h-full object-cover" :src="data.image">
        </div>
        <h3 class="font-normal text-xl md:text-2xl mb-4 text-[#6967CE]">
           {{data.title}}
        </h3>
        <p class="text-base text-[#407BEC] mb-4">
            {{data.author}} | {{data.date}}
        </p>
        <p class="text-lg text-[#556D9A] mb-5">
            {{data.content}}
        </p>
        <RouterLink to="/blog/123">
            <MultiButton class="py-4 rounded-full">Read Post</MultiButton>
        </RouterLink>

    </div>
</template>
