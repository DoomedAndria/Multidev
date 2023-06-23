<script setup>
import BannerLayout from "@/layouts/BannerLayout.vue";
import BlogCard from "@/components/BlogCard.vue";

const posts = [
    {
        image: 'src/assets/images/Blog/p1.png',
        title: 'Custom WordPress Development: A Comprehensive Guide',
        author: 'Nick Meagher',
        date: 'May 11, 2023',
        content: 'Should you use a WordPress Theme or go with Custom WordPress\n' +
            'Development from scratch? It all depends on your\n' +
            'business goals.'
    },
    {
        image: 'src/assets/images/Blog/p1.png',
        title: 'Custom WordPress Development: A Comprehensive Guide',
        author: 'Nick Meagher',
        date: 'May 11, 2023',
        content: 'Should you use a WordPress Theme or go with Custom WordPress\n' +
            'Development from scratch? It all depends on your\n' +
            'business goals.'
    },
    {
        image: 'src/assets/images/Blog/p1.png',
        title: 'Custom WordPress Development: A Comprehensive Guide',
        author: 'Nick Meagher',
        date: 'May 11, 2023',
        content: 'Should you use a WordPress Theme or go with Custom WordPress\n' +
            'Development from scratch? It all depends on your\n' +
            'business goals.'
    },
    {
        image: 'src/assets/images/Blog/p1.png',
        title: 'Custom WordPress Development: A Comprehensive Guide',
        author: 'Nick Meagher',
        date: 'May 11, 2023',
        content: 'Should you use a WordPress Theme or go with Custom WordPress\n' +
            'Development from scratch? It all depends on your\n' +
            'business goals.'
    },
]
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