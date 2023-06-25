<script setup>
import {useNavigation} from "@/composables/useNavigation";

const {footerLinks} = useNavigation()
</script>

<template>
    <div class="w-full md:w-96 flex justify-end flex-wrap mt-8">
        <div v-for="link in footerLinks" class="w-1/2 mb-4 pr-4  flex items-center text-sm md:text-base">
            <RouterLink :to="link.to">{{ link.name }}</RouterLink>
        </div>
    </div>
</template>
