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
    <div class="w-full text-white flex justify-center bg-[#0B0B0B]">
        <div class="w-full md:w-7/12  flex flex-col">

            <div class="w-full px-5 flex flex-col pb-6">
                <div>
                    <RouterLink to="/" class="my-12 inline-block">
                        <MultiDevIcon/>
                    </RouterLink>
                </div>
                <div class="text-sm leading-6 max-w-xs flex mb-2">
                    We help businesses generate more revenue
                    through strategic web design and SEO
                    services.
                </div>
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

            <hr class="opacity-30 border-[#D9D9D9]">

            <div class="w-full px-5 py-10 flex flex-wrap text-[#EEF8FF] text-opacity-80">
                <div class="w-1/2 mb-7 pr-4  flex items-center text-sm">
                    Privacy Policy
                </div>
                <div class="w-1/2 mb-7 pr-4  flex items-center text-sm">
                    Sitemap
                </div>

                <div class="w-full flex items-center text-sm">
                    © 2023 - Icepick Development, LLC
                </div>
            </div>

        </div>
    </div>
</template>