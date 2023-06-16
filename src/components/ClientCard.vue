<script setup>
const props = defineProps({
    data: Object
})
</script>

<template>
    <div class="w-full max-w-xl px-8 pb-12 pt-8 flex flex-col items-center rounded-3xl bg-white">
        <div class="w-20 h-20 rounded-full mb-7">
            <img :src="data.image" class="w-full h-full rounded-full object-cover" alt="as">
        </div>
        <h3 class="mb-2 text-lg text-[#25344F]">{{props.data.name}}</h3>
        <h3 class="mb-3 text-[#23A6F0]">{{props.data.company}}</h3>

        <p class="text-[#52627A]">
            {{props.data.content}}
        </p>
    </div>
</template>

<style scoped>

</style>