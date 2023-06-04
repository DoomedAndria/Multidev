<script setup>
import MultiDevIcon from "@/assets/icons/MultiDevIcon.vue";
import FacebookIcon from "@/assets/icons/Footer/FacebookIcon.vue";
import InstagramIcon from "@/assets/icons/Footer/InstagramIcon.vue";
import TwitterIcon from "@/assets/icons/Footer/TwitterIcon.vue";
import FooterLinks from "@/components/FooterLinks.vue";
</script>

<template>
    <div class="w-full text-white flex justify-center bg-[#0B0B0B]">
        <div class="w-full lg:w-7/12 md:w-10/12 flex flex-col">

            <div class="w-full px-5 md:pt-12 md:pb-20 md:px-0 flex flex-col md:flex-row md:justify-between pb-6">
                <div class="flex flex-col">
                    <div>
                        <RouterLink to="/" class="my-12 inline-block">
                            <MultiDevIcon/>
                        </RouterLink>
                    </div>
                    <div class="text-sm leading-6 max-w-xs md:w-64 flex mb-2">
                        We help businesses generate more revenue
                        through strategic web design and SEO
                        services.
                    </div>
                    <h5 class="my-6">Follow Us</h5>
                    <div class="flex gap-6">
                        <RouterLink to="#"><FacebookIcon/></RouterLink>
                        <RouterLink to="#"><InstagramIcon/></RouterLink>
                        <RouterLink to="#"><TwitterIcon/></RouterLink>
                    </div>
                </div>

                <FooterLinks/>

            </div>

            <hr class="opacity-30 border-[#D9D9D9]">

            <div
                class="w-full px-5 md:px-0 py-10 md:py-7 flex flex-col md:flex-row-reverse md:justify-between text-sm md:text-xs text-[#EEF8FF] text-opacity-80">
                <div class="w-full  flex justify-end gap-7">
                    <div class="w-full md:w-auto mb-7 md:mb-0 pr-4 md:pr-0  flex items-center ">
                        <RouterLink to="#">Privacy Policy</RouterLink>
                    </div>
                    <div class="w-full md:w-auto mb-7 md:mb-0 pr-4 md:pr-0  flex items-center ">
                        <RouterLink to="#">Sitemap</RouterLink>
                    </div>
                </div>
                <div class="w-full flex items-center ">
                    © 2023 - Icepick Development, LLC
                </div>
            </div>

        </div>
    </div>
</template>