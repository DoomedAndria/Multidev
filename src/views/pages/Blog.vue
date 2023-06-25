<script setup>
import BannerLayout from "@/layouts/BannerLayout.vue";
import BlogCard from "@/components/BlogCard.vue";
import {useBlog} from "@/composables/useBlog";

const {posts} = useBlog()
</script>

<template>
    <BannerLayout>
        <div class="px-5 py-10 md:py-24 bg-[#6967CE]">
            <h1 class="font-bold text-4xl md:text-6xl text-white text-center">
                Blog
            </h1>
        </div>
        <div class="flex flex-col items-center px-5 py-10">
            <div class="grid grid-cols-2 md:grid-cols-2 gap-5">
                <BlogCard v-for="post in posts" :data="post"/>
            </div>

        </div>
    </BannerLayout>
</template>