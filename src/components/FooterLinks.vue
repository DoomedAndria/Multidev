<script setup>
const links = [
    {
        name: "Search Engine Optimization",
        to: "#",
    },
    {
        name: "Locations",
        to: "#",
    },
    {
        name: "Home",
        to: "/",
    },
    {
        name: "Learn More",
        to: "#",
    },
    {
        name: "Dallas Web Design",
        to: "#",
    },
    {
        name: "Custom Websites",
        to: "/customSites",
    },
    {
        name: "Plano Web Design",
        to: "#",
    },
    {
        name: "Frisco Web Design",
        to: "#",
    },
    {
        name: "Our Work",
        to: "/ourWork",
    },
    {
        name: "Fort Worth Web Design",
        to: "#",
    },
    {
        name: "Blog",
        to: "/blog",
    },
    {
        name: "Allen Web Design",
        to: "#",
    },
    {
        name: "Contact",
        to: "/contactUs",
    },
    {
        name: "McKinney Web Design",
        to: "#",
    },
    {
        name: "Grapevine Web Design",
        to: "#",
    }
]
</script>

<template>
    <div class="w-full md:w-96 flex justify-end flex-wrap mt-8">
        <div v-for="link in links" class="w-1/2 mb-4 pr-4  flex items-center text-sm md:text-base">
            <RouterLink :to="link.to">{{ link.name }}</RouterLink>
        </div>
    </div>
</template>
