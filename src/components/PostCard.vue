<script setup>
import RightArrowIcon from "@/assets/icons/Header/RightArrowIcon.vue";

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="max-w-sm">
        <div class="w-full h-44">
            <img alt="a" class="w-full h-full object-cover rounded-2xl" :src="data.image">
        </div>
        <h3 class="font-medium text-lg mt-5 mb-2.5 text-[#25344F]">
            {{ data.title }}
        </h3>
        <RouterLink to="#">
            <h5 class="flex items-center text-base text-[#23A6F0]">
                Read more
                <RightArrowIcon class="ml-1.5 " fill="#23A6F0"/>
            </h5>
        </RouterLink>
    </div>
</template>
