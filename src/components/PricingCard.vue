<script setup>
    const props = defineProps({
        btype:{
            type:String,
            default:'light',
        }
    })
    const [bg,text] = (props.btype === 'light')?
            [
                'bg-white',
                'text-[#25344F]',
            ]
            :(props.btype === 'dark')?
            [
                'bg-[#25344F]',
                'text-white'
            ]:''
</script>

<template>
    <div class="shadow-lg  max-w-sm rounded-3xl p-10 text-[#515D72]" :class="bg">
        <h4 :class="text">BASIC</h4>
        <h4 class="mb-5 text-[#25344F]" :class="text"><span class="text-2xl  font-normal">$199</span> per month</h4>
        <ul class="flex flex-col gap-2 list-disc text-[#5CE5DE]" :class="text">
            <li><p :class="text">Up to 5 Pages </p></li>
            <li><p :class="text">Hosting Included</p></li>
            <li><p :class="text">SEO Friendly</p> </li>
            <li><p :class="text">Lifetime Updates</p></li>
            <li><p :class="text">Google Analytics Setup</p></li>
            <li><p :class="text">Google Business Profile Setup</p></li>
            <li><p :class="text">24-month Service Minimum</p></li>
        </ul>
    </div>
</template>
