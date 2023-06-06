<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import MultiButton from "@/components/MultiButton.vue";
</script>

<template>
    <MainLayout>
        <slot/>
        <div class="px-5 pt-16 pb-32 flex justify-center md:py-11">
            <div class="contact-container">
                <h4 class=" text-[#6967CE]">READY TO GET STARTED?</h4>
                <h3 class="text-2xl md:text-4xl font-medium text-[#25344F]">Let’s Grow Together.</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-4 w-full text-xl text-[#25344F]">

                    <input type="text" placeholder="Name*"
                           class="contact-input-style">
                    <input type="email" placeholder="Email*"
                           class="contact-input-style">
                    <input type="text" placeholder="Company Name"
                           class="contact-input-style">
                    <input type="text" placeholder="Website URL"
                           class="contact-input-style">

                </div>

                <textarea class="resize-none h-52 w-full rounded-xl p-5 outline-0 text-xl text-[#25344F] bg-[#F4F8FB]"></textarea>

                <MultiButton class="py-4 text-sm w-full justify-center">Submit</MultiButton>
            </div>
        </div>
    </MainLayout>
</template>

<style scoped>
.contact-input-style {
    @apply
    h-14 w-full rounded-xl p-5 outline-0 bg-[#F4F8FB]
}

.contact-container {
    @apply
    w-full max-w-4xl px-5 pb-10 pt-8 flex flex-col items-center gap-5 rounded-3xl
    shadow-[0px_4px_40px_rgba(161,184,211,0.25)]
    md:p-20 md:items-start
    md:shadow-[0px_4px_40px_rgba(161,184,211,0.13),0px_12px_160px_rgba(196,208,219,0.4)]
}
</style>