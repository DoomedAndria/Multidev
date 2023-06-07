<script setup>
import {ref} from "vue";
import BottomArrowIcon from "@/assets/icons/Header/BottomArrowIcon.vue";

const props = defineProps(
    {
        name: String,
        children: Array
    }
)
const isOpen = ref(false);

function toggle() {
    isOpen.value = !isOpen.value
}

function open() {
    isOpen.value = true;
}

function close() {
    isOpen.value = false;
}
</script>

<template>
    <div class="relative" @mouseover="open" @mouseout="close">
        <button @click="toggle"
                class="text-white text-opacity-60  rounded-lg text-base text-center inline-flex items-center">
            {{ props.name }}
            <BottomArrowIcon/>
        </button>
        <div :class="isOpen?'':'pointer-events-none opacity-0' "
             class="transition-opacity duration-200 ease-in-out z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-36">
            <ul class="py-2  text-sm text-gray-700 ">
                <li v-for="child in children">
                    <RouterLink :to="child.href" class="block px-4 py-2 hover:bg-[#FFB902] ">{{ child.name }}
                    </RouterLink>
                </li>

            </ul>
        </div>
    </div>
</template>
