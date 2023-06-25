import {ref} from "vue";
import AegisLivingIcon from "@/assets/icons/Home/AegisLivingIcon.vue";
import KojimaProductionIcon from "@/assets/icons/Home/KojimaProductionIcon.vue";
import DoctorButtersIcon from "@/assets/icons/Home/DoctorButtersIcon.vue";
import IrisTelehealthIcon from "@/assets/icons/Home/IrisTelehealthIcon.vue";
import UnitedWayIcon from "@/assets/icons/Home/UnitedWayIcon.vue";

export function useHome() {
    const posts = ref([
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