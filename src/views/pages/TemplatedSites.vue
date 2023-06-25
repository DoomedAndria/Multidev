<script setup>
import ContactLayout from "@/layouts/ContactLayout.vue";
import MultiButton from "@/components/MultiButton.vue";
</script>

<template>
    <ContactLayout>
        <div class="flex justify-center pt-10 pb-24 md:py-20 px-5 bg-[#6967CE]">
            <div class="flex flex-col items-start gap-6 max-w-2xl text-center md:text-start">
                <h1 class="text-white text-4xl md:text-5xl font-bold">
                    Templated Websites for
                    <span class="text-[#FFB902]">Small Businesses</span>
                </h1>
                <p class="text-base md:text-xl text-[#BDC8DB]">
                    If your business doesn’t need a custom website you can utilize our
                    templates and get it up and running in 2-3 weeks!
                </p>
                <RouterLink to="/contactUs">
                    <MultiButton class="hidden md:block py-4 rounded-full" btype="light">Get in Touch</MultiButton>
                </RouterLink>
            </div>
        </div>
        <div class="">

        </div>
    </ContactLayout>
</template>