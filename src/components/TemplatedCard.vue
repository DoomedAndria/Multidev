<script setup>
const props = defineProps({
    data: Object
})
</script>

<template>
    <div class="flex flex-col gap-5 max-w-md px-7 pt-7 pb-12 rounded-3xl bg-[#FFFFFF]">
        <Component :is="data.icon"/>
        <h2 class="text-3xl font-normal text-[#25344F]">
            {{data.title}}
        </h2>
        <p class="text-base text-[#515D72]">
            {{data.content}}
        </p>
    </div>
</template>
