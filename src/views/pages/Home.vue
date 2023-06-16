<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import TechAndProjsSection from "@/components/sections/TechAndProjsSection.vue";
import UpCityRating from "@/components/UpCityRating.vue";
import MultiButton from "@/components/MultiButton.vue";
import AegisLivingIcon from "@/assets/icons/Home/AegisLivingIcon.vue";
import KojimaProductionIcon from "@/assets/icons/Home/KojimaProductionIcon.vue";
import DoctorButtersIcon from "@/assets/icons/Home/DoctorButtersIcon.vue";
import IrisTelehealthIcon from "@/assets/icons/Home/IrisTelehealthIcon.vue";
import UnitedWayIcon from "@/assets/icons/Home/UnitedWayIcon.vue";
import WebsiteIcon from "@/assets/icons/Home/WebsiteIcon.vue";
import SearchEngineIcon from "@/assets/icons/Home/SearchEngineIcon.vue";
import PostCard from "@/components/PostCard.vue";

const posts = [
    {
        image: "src/assets/images/Home/post1.png",
        title: "Custom WordPress Development: A Comprehensive Guide"
    },
    {
        image: "src/assets/images/Home/post3.png",
        title: "10 Simple Ways to Improve Your Website Copy for Higher Conversions"
    },
    {
        image: "src/assets/images/Home/post2.png",
        title: "10 Landing Page Do’s and Don’ts"
    },
]

</script>

<template>
    <MainLayout>
        <div class="w-full flex justify-center bg-[#6967CE]">
            <div class="w-full max-w-4xl flex flex-col items-center px-5 pb-14">
                <UpCityRating class="my-10 md:mt-20 md:mb-10"/>
                <h1 class="mb-8 font-bold text-4xl md:text-5xl text-white text-center">
                    We Design & Develop WebsitesThat Deliver Results
                </h1>
                <p class="md:max-w-2xl mb-12 text-center text-base md:text-2xl text-[#BDC8DB]">
                    Our goal is to develop simple and modern websites
                    that are optimized for both search engines and user
                    experience, ultimately driving more traffic and revenue
                    to your business.
                </p>
                <div class="w-full flex justify-center gap-5 mb-32">
                    <RouterLink to="/contactUs">
                        <MultiButton arrow="true" class="py-4 px-5 rounded-full">Book a Call</MultiButton>
                    </RouterLink>
                    <RouterLink to="/ourWork">
                        <MultiButton btype="light" arrow="true" class="py-4 px-5 rounded-full">Our Work</MultiButton>
                    </RouterLink>
                </div>
                <div class="w-full flex justify-center items-center mb-14">
                    <hr class="hidden md:block w-60 opacity-20">
                    <div class=" font-medium text-base text-white md:w-96 text-center">Trusted by Innovative Companies
                        Worldwide
                    </div>
                    <hr class="hidden md:block w-60 opacity-50">
                </div>

                <div class="overflow-scroll md:overflow-hidden w-full md:justify-center flex gap-11">
                    <AegisLivingIcon/>
                    <KojimaProductionIcon/>
                    <DoctorButtersIcon/>
                    <IrisTelehealthIcon/>
                    <UnitedWayIcon/>
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col items-center px-5  pt-10 md:pt-24 pb-20 md:pb-40">
            <h2 class="max-w-lg text-2xl md:text-4xl font-semibold text-center text-[#25344F]">
                Your Dedicated Web Design & Development Team
            </h2>
            <p class="max-w-lg mt-8 md:mt-5 mb-20 text-base text-center text-[#52627A]">
                We are small team of experts that have been building
                on the internet for over a decade. We are passionate
                about helping businesses thrive online and creating
                user-focused websites that drive real results.
            </p>
            <div class="max-w-6xl flex flex-col items-center px-5 md:p-20 py-8 rounded-3xl bg-[#6967CE]">

                <div class="flex flex-col md:flex-row gap-36 md:gap-16 items-center">
                    <div class="flex flex-col items-center">
                        <div class="p-9 rounded-full bg-[#8ac0ff1a]">
                            <WebsiteIcon/>
                        </div>
                        <h2 class="my-5 text-xl font-medium text-white text-center">
                            Custom Websites
                        </h2>
                        <p class="max-w-sm text-base font-normal text-white text-center mb-8">
                            Whether you’re looking to build a custom marketing
                            website or the next Twitter we can help you build it.
                        </p>
                        <RouterLink to="/customSites">
                            <MultiButton btype="light" arrow="true" class="py-4 rounded-full ">Learn More</MultiButton>
                        </RouterLink>
                    </div>

                    <div class="hidden md:block h-52 w-px bg-white opacity-20"></div>

                    <div class="flex flex-col items-center">
                        <div class="p-9 rounded-full bg-[#8ac0ff1a]">
                            <SearchEngineIcon/>
                        </div>
                        <h2 class="my-5 text-xl font-medium text-white text-center">
                            Search Engine Optimization
                        </h2>
                        <p class="max-w-sm text-base font-normal text-white text-center">
                            You’ve got yourself a beautiful website but now you need
                            your customers to find it, let us help you.
                        </p>
                        <MultiButton btype="light" arrow="true" class="py-4 rounded-full mt-8">Learn More</MultiButton>
                    </div>
                </div>
            </div>

        </div>

        <TechAndProjsSection/>

        <div class="w-full flex flex-col items-center px-5 pt-20 pb-28">
            <h2 class="text-2xl md:text-4xl font-medium text-[#25344F]">Recent Posts</h2>
            <div class="max-w-6xl flex flex-col md:flex-row gap-10 md:gap-6 mt-10 mb-10">
                <PostCard v-for="post in posts" :data="post"/>
            </div>
            <RouterLink to="/blog" class="mb-32">
                <MultiButton btype="normal" arrow="true" class="py-4 px-7 rounded-full">
                    View All Posts
                </MultiButton>
            </RouterLink>

            <div class="max-w-6xl w-full flex justify-center py-8 px-5 md:py-20 bg-[#6967CE] rounded-3xl">
                <div class="max-w-md flex flex-col items-center text-center gap-5">
                    <h3 class="text-xl md:text-4xl md:font-semibold text-white font-medium">
                        Want to see if Icepick is
                        the right fit for you?
                    </h3>
                    <p class="text-base md:text-lg text-white opacity-70 md:mb-5">
                        Give us a shout and let’s see if we’re the
                        right match for you and your business!
                    </p>
                    <RouterLink to="/contactUs">
                        <MultiButton arrow="true" class="py-4 rounded-full px-6">
                            Let's Talk
                        </MultiButton>
                    </RouterLink>
                </div>
            </div>
        </div>
    </MainLayout>
</template>