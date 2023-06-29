<script setup>
import ContactLayout from "@/layouts/ContactLayout.vue";
import MultiButton from "@/components/MultiButton.vue";
import TimeIcon from "@/assets/icons/TemplatedSites/TimeIcon.vue";
import MoneyIcon from "@/assets/icons/TemplatedSites/MoneyIcon.vue";
import TemplatedCard from "@/components/TemplatedCard.vue";
import {useTemplatedSites} from "@/composables/useTemplatedSites";
import PricingCard from "@/components/PricingCard.vue";

const {cardData,tempSites,questions} = useTemplatedSites()
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
        <div class="flex flex-col gap-7 md:gap-10 items-center px-5 py-7 md:py-24">
            <div class="max-w-lg flex flex-col gap-10">
                <h2 class="text-2xl md:text-5xl text-center font-semibold text-[#25344F]">
                    Why Use
                    <span class="text-[#6967CE]">Templates?</span>
                </h2>
                <p class="text-lg text-[#52627A] text-center">
                    We’re glad you asked! There’s two main
                    benefits to going with templates
                    versus a custom website:
                </p>
            </div>
            <div class="flex flex-col md:flex-row gap-7 items-center">
                <div class="flex flex-col gap-5 max-w-md px-7 pt-7 pb-12 rounded-3xl bg-[#FFF8EB]">
                    <TimeIcon/>
                    <h2 class="text-3xl font-normal text-[#25344F]">
                        Time
                    </h2>
                    <p class="text-base text-[#515D72]">
                        Since we have a starting point we’re able
                        to build quickly and efficiently.
                    </p>
                </div>
                <div class="flex flex-col  gap-5 max-w-md px-7 pt-7 pb-12 rounded-3xl bg-[#EBFEFE]">
                    <MoneyIcon/>
                    <h2 class="text-3xl font-normal text-[#25344F]">
                        Money
                    </h2>
                    <p class="text-base text-[#515D72]">
                        Our base templates are already built and we
                        just need to reskin it to match your brand.
                    </p>
                </div>
            </div>
            <p class="max-w-lg text-center text-lg text-[#52627A]">
                If your company doesn’t need a flashy or
                totally unique website this is usually
                the best way to go.
            </p>
            <img alt="123" src="/src/assets/images/TemplatedSites/preview.png">
        </div>

        <div class="flex flex-col items-center gap-5 px-5 py-10 md:py-20 bg-[#EEF8FF]">
            <h2 class="text-2xl md:text-5xl font-normal text-center text-[#25344F]">
                Built for
                <span class="text-[#6967CE]"> Speed and SEO</span>
            </h2>
            <p class="text-center text-[#25344F]">
                Everything you would expect with a
                website comes standard with us.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-7">
                <TemplatedCard v-for="data in cardData" :data="data"/>
            </div>
        </div>

        <div class="flex flex-col gap-5 items-center px-5 pt-10 md:pt-24 pb-20">
            <h2 class="text-2xl md:text-5xl text-center text-[#25344F]">
                Simple and <span class="text-[#6967CE]">Affordable</span> Pricing
            </h2>
            <p class="text-lg text-center text-[#25344F]">
                We can get your website up and running for as little as $500.
            </p>
            <div class="flex flex-col md:flex-row gap-7">
                <PricingCard/>
                <PricingCard btype="dark"/>
                <PricingCard/>
            </div>
        </div>

        <div class="px-5 py-10 md:py-24 flex flex-col items-center gap-7 md:gap-14 bg-[#EEF8FF]">
            <h2 class="text-2xl md:text-5xl font-normal text-[#25344F] text-center">
                A Few of Our
                <span class="text-[#6967CE]">Template Projects</span>
            </h2>

            <div class="flex flex-col gap-7 md:flex-row">

                <div v-for="site in tempSites" class="flex flex-col">
                    <img alt="123" :src="site">
                    <div class="flex justify-between px-7 py-5 bg-white rounded-b-3xl">
                        <p>ATM supports</p>
                        <RouterLink to="#" class="text-[#23A6F0]">View Website</RouterLink>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-5 items-center py-20 px-5">
            <h2 class="text-4xl text-[#25344F]">FAQs</h2>

            <div class="flex flex-col max-w-3xl">
                <div v-for="question in questions" class="py-6 text-[#25344F] text-xl border-b border-[#E6E9EA]">
                    {{question.question}}
                </div>
            </div>
        </div>
    </ContactLayout>
</template>