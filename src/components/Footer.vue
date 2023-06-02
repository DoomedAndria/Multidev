<script setup>
import MultiDevIcon from "@/assets/icons/MultiDevIcon.vue";
import FacebookIcon from "@/assets/icons/Footer/FacebookIcon.vue";
import InstagramIcon from "@/assets/icons/Footer/InstagramIcon.vue";
import TwitterIcon from "@/assets/icons/Footer/TwitterIcon.vue";

const links = [
    "Learn More",
    "Locations",
    "Home",
    "Dallas Web Design",
    "Custom Websites",
    "Plano Web Design",
    "Search Engine Optimization",
    "Frisco Web Design",
    "Our Work",
    "Fort Worth Web Design",
    "Blog",
    "Allen Web Design",
    "Contact",
    "McKinney Web Design",
    "Grapevine Web Design",
]

</script>

<template>
    <div class="w-full px-5 text-white flex flex-col bg-[#0B0B0B]">

        <div class="w-full flex flex-col">
            <div>
                <RouterLink to="/" class="my-12 inline-block">
                    <MultiDevIcon />
                </RouterLink>
            </div>
            <p class="text-sm leading-6 w-80 mb-2">
                We help businesses generate more revenue
                through strategic web design and SEO
                services.
            </p>
            <h5 class="my-6">Follow Us</h5>
            <div class="flex gap-6">
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
            </div>
            <div class="w-full flex justify-end flex-wrap mt-8">
                <div v-for="link in links" class="w-1/2 mb-4 pr-4  flex items-center text-sm">
                    <RouterLink to="#">{{ link }}</RouterLink>
                </div>
            </div>
        </div>

    </div>
</template>