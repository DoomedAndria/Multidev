<script setup>
import ContactLayout from "@/layouts/ContactLayout.vue";
import TechAndProjsSection from "@/components/sections/TechAndProjsSection.vue";
import MultiButton from "@/components/MultiButton.vue";
</script>

<template>
    <ContactLayout>
        <div class="flex px-5 py-10 bg-[#6967CE] text-center md:text-start">
            <div class="w-full md:w-3/5  flex justify-center">
                <div class="max-w-2xl flex flex-col gap-7 items-center md:items-start">
                    <h1 class="text-white text-4xl md:text-6xl font-bold">
                        <span class="text-[#FFB902]">Custom</span> Websites
                    </h1>
                    <p class="text-base md:text-2xl text-[#BDC8DB]">
                        Whether you’re looking to build a custom marketing website or
                        the next Twitter we can help you build anything you’re envisioning.
                    </p>
                    <RouterLink to="/contactUs">
                        <MultiButton btype="light" arrow="false" class="px-8 py-4 rounded-full">Get In Touch</MultiButton>
                    </RouterLink>
                </div>
            </div>
            <div class="md:w-2/5">

            </div>

        </div>
        <div class=" flex flex-col md:flex-row px-5 md:px-0 pb-20">
            <div class=" w-full flex flex-col gap-7 mt-20 md:mt-36  items-start md:px-12">
                <h2 class="text-2xl md:text-4xl text-[#25344F] font-semibold text-center">
                    Custom Websites Set
                    You Apart
                </h2>
                <p class="text-lg text-[#52627A]">
                    In a world where attention spans are decreasing by the day you
                    need to stand out from the crowd. One way to do that is by creating
                    a custom website that is unique to you and your brand.
                </p>
                <p class="text-lg text-[#52627A]">
                    Having a custom website means you’re getting a fully
                    built website from scratch which includes a
                    design and development process from the ground up.
                </p>
                <p class="text-lg text-[#52627A]">
                    This comes with many benefits including:
                </p>
                <ul class="text-lg text-[#52627A] list-disc list-inside">
                    <li>Unique Design</li>
                    <li>Structured Around Your Content</li>
                    <li>More Credibility</li>
                    <li>Faster Page Speeds</li>
                </ul>
                <RouterLink to="/contactUs">
                    <MultiButton class="py-4 px-7 rounded-full" arrow="true">Work With Us</MultiButton>
                </RouterLink>
            </div>
            <div class="w-full mt-20 md:mt-0">
                <img alt="ll" src="src/assets/images/CustomSites/img.png" class="w-full h-full object-cover">
            </div>
        </div>

        <TechAndProjsSection/>
    </ContactLayout>
</template>