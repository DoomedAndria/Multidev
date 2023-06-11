<script setup>

import RightArrowIcon from "@/assets/icons/Header/RightArrowIcon.vue";
</script>

<template>
    <div class="max-w-sm">
        <div class="w-full h-44">
            <img alt="a" class="w-full h-full object-cover rounded-2xl" src="@/assets/images/Home/post.png">
        </div>
        <h3 class="font-medium text-lg mt-5 mb-2.5 text-[#25344F]">
            10 Simple Ways to Improve Your
            Website Copy for Higher Conversions
        </h3>
        <RouterLink to="#">
            <h5 class="flex items-center text-base text-[#23A6F0]">
                Read more
                <RightArrowIcon class="ml-1.5 " fill="#23A6F0"/>
            </h5>
        </RouterLink>
    </div>
</template>
