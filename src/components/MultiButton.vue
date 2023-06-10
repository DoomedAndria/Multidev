<script setup>
import RightArrowIcon from "@/assets/icons/Header/RightArrowIcon.vue";

const props = defineProps({
    type: String,
    arrow: {
        type: String,
        default: 'false'
    }
})

const isDark = !props.type || props.type !== "light"
const style = () =>{
    if (isDark){
        return 'text-black bg-[#FFB902] hover:bg-[#f0ae02]'
    } else {
        return 'text-white bg-transparent border border-white border-opacity-30 hover:bg-[rgba(255,255,255,0.3)]'
    }
}
</script>

<template>
    <button :class="style()" class="px-5 py-2.5 rounded-3xl flex items-center">
        <slot/>
        <RightArrowIcon v-if="props.arrow" :fill="isDark?'black':'white'" class="ml-1.5"/>
    </button>
</template>
