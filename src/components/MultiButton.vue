<script setup>
import RightArrowIcon from "@/assets/icons/Header/RightArrowIcon.vue";

const props = defineProps({
    btype: {
        type: String,
        default: 'orange'
    },
    arrow: {
        type: String,
        default: 'false'
    }
})

const style = () => {
    if (props.btype === "orange") {
        return 'text-black bg-[#FFB902] hover:bg-[#f0ae02]'
    } else if (props.btype === "light") {
        return 'text-white bg-transparent border border-white border-opacity-30 hover:border-opacity-100'
    } else if (props.btype === "normal") {
        return 'text-[#25344F] bg-transparent border border-black border-opacity-30 hover:border-opacity-100'
    }
}
</script>

<template>
    <button :class="style()" class="group px-5 py-2.5 rounded-3xl flex items-center transition-all duration-200">
        <slot/>
        <RightArrowIcon v-if="props.arrow==='true'" :fill="btype==='orange'?'black':btype==='light'?'white':'#25344F'"
                        class="ml-1.5 transform group-hover:translate-x-1 transition-all duration-200"/>
    </button>
</template>
