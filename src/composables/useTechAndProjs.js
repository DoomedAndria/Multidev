import {ref} from "vue";
import FigmaIcon from "@/assets/icons/TechAndProjs/FigmaIcon.vue";
import WordpressIcon from "@/assets/icons/TechAndProjs/WordpressIcon.vue";
import WoocomerceIcon from "@/assets/icons/TechAndProjs/WoocomerceIcon.vue";
import ShopifyIcon from "@/assets/icons/TechAndProjs/ShopifyIcon.vue";
import VueIcon from "@/assets/icons/TechAndProjs/VueIcon.vue";
import LaravelIcon from "@/assets/icons/TechAndProjs/LaravelIcon.vue";

import p1 from "@/assets/images/TechAndProjs/p1.png"
import p2 from "@/assets/images/TechAndProjs/p2.png"
import p3 from "@/assets/images/TechAndProjs/p3.png"
import proj1 from "@/assets/images/TechAndProjs/proj1.png"
import proj2 from "@/assets/images/TechAndProjs/proj2.png"
import proj3 from "@/assets/images/TechAndProjs/proj3.png"
import proj4 from "@/assets/images/TechAndProjs/proj4.png"

export function useTechAndProjs() {
    const clients = ref([
        {
            name: "Jeff Rasansky",
            image: p1,
            company: "JR Law Firm",
            content: "The guys at Icepick do an amazing job, and have helped us with\n" +
                "more than one website. Always professional, quick to respond,\n" +
                "great eye for design, and more than willing to help if anything\n" +
                "comes up!"
        },
        {
            name: "Sondra Heffernan",
            company: "Infowerks",
            image: p2,
            content: "Icepick recently updated our company website. Our company is\n" +
                "beyond happy with our new design, the delivery, and their\n" +
                "professionalism in working with multiple decision makers. Looking\n" +
                "forward to working with Icepick on future projects."
        },
        {
            name: "Jennifer Hall",
            company: "AegisLiving",
            image: p3,
            content: "Icepick was able to help us get a very difficult web redesign\n" +
                "project across the finish line and continues to manage a large list\n" +
                "of projects to help improve user experience and SEO. The team is\n" +
                "knowledgeable, highly skilled and very responsive."
        },

    ])
    const projects = ref([
        proj1,
        proj2,
        proj3,
        proj4
    ])
    const icons = ref([
        FigmaIcon,
        WordpressIcon,
        WoocomerceIcon,
        ShopifyIcon,
        VueIcon,
        LaravelIcon,
    ])
    return {
        clients,
        projects,
        icons
    }
}