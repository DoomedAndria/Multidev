<script setup>
import {onBeforeUnmount, onMounted, ref} from "vue";
import MultiDevIcon from "@/assets/icons/MultiDevIcon.vue";
import HamburgerIcon from "@/assets/icons/Header/HamburgerIcon.vue";
import NavbarLinks from "@/components/NavbarLinks.vue";
import MultiButton from "@/components/MultiButton.vue";
import CloseIcon from "@/assets/icons/Header/CloseIcon.vue";

const hamOpen = ref(false)
const width = ref(window.innerWidth)
const updateWindowWidth = () => {
    width.value = window.innerWidth;
};
onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
});
onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth);
});

function toggleHam(){
    hamOpen.value = !hamOpen.value
}

</script>

<template>
    <div class="w-full h-14 md:h-20 pl-4 md:pl-9 pr-5 md:pr-9 flex justify-between items-center text-white bg-[#5A58AB]">
        <RouterLink to="/">
            <MultiDevIcon/>
        </RouterLink>

        <NavbarLinks :class="width<768&&!hamOpen?'hidden':'flex'"/>

        <RouterLink to="/contactUs" class="hidden md:flex">
            <MultiButton >Let's Talk</MultiButton>
        </RouterLink>


        <div @click="toggleHam" class="md:hidden">
            <HamburgerIcon :class="hamOpen?'hidden':''"/>
            <CloseIcon :class="!hamOpen?'hidden':''" />
        </div>
    </div>
</template>