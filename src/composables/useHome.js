import {ref} from "vue";
import AegisLivingIcon from "@/assets/icons/Home/AegisLivingIcon.vue";
import KojimaProductionIcon from "@/assets/icons/Home/KojimaProductionIcon.vue";
import DoctorButtersIcon from "@/assets/icons/Home/DoctorButtersIcon.vue";
import IrisTelehealthIcon from "@/assets/icons/Home/IrisTelehealthIcon.vue";
import UnitedWayIcon from "@/assets/icons/Home/UnitedWayIcon.vue";

import post1 from "@/assets/images/Home/post1.png"
import post2 from "@/assets/images/Home/post2.png"
import post3 from "@/assets/images/Home/post3.png"


export function useHome() {
    const posts = ref([
        {
            image: post1,
            title: "Custom WordPress Development: A Comprehensive Guide"
        },
        {
            image: post2,
            title: "10 Simple Ways to Improve Your Website Copy for Higher Conversions"
        },
        {
            image: post3,
            title: "10 Landing Page Do’s and Don’ts"
        },
    ])

    const icons = ref([
        AegisLivingIcon,
        KojimaProductionIcon,
        DoctorButtersIcon,
        IrisTelehealthIcon,
        UnitedWayIcon,
    ])

    return {
        posts,
        icons
    }

}