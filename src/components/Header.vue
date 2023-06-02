<script setup>
import MultiDevIcon from "@/assets/icons/MultiDevIcon.vue";
import HamburgerIcon from "@/assets/icons/header/HamburgerIcon.vue";
</script>

<template>
    <div class="w-full h-14 md:h-20 pl-4 md:pl-9 pr-5 flex justify-between items-center text-white bg-[#5A58AB]">
        <RouterLink to="/" >
            <MultiDevIcon />
        </RouterLink>
        <HamburgerIcon/>
    </div>
</template>