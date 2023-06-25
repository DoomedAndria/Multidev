<script setup>
import MiniDropdown from "@/components/MiniDropdown.vue";
import {useRoute} from "vue-router";
import {useNavigation} from "@/composables/useNavigation"

const {navbarLinks} = useNavigation()

const route = useRoute()
</script>

<template>
    <div class="z-50 absolute md:static w-full md:w-auto top-14 left-0 flex flex-col items-center md:flex-row gap-10 py-16 md:py-0 border-t border-white md:border-0 bg-[#5A58AB]">
        <div v-for="link in navbarLinks" >
            <MiniDropdown v-if="link.children" :name="link.name" :children="link.children"/>
            <RouterLink v-else :to="link.href" :class="route.path===link.href?'text-opacity-100':'text-opacity-60'"
                        class="text-white hover:text-opacity-100">{{ link.name }}
            </RouterLink>
        </div>
    </div>
</template>
