import {ref} from "vue";

import site from "@/assets/images/OurWork/site.png"
export function useOurWork(){
    const siteData = ref([
        {
            image:site,
            title:'Corewood Care',
            content: 'Corewood Care is a privately owned\n' +
                'home care and care management\n' +
                'agency dedicated to providing\n' +
                'personalized and exceptional care\n' +
                'support services to individuals in familiar surroundings.',
            siteLink:''
        },
        {
            image:site,
            title:'Corewood Care',
            content: 'Corewood Care is a privately owned\n' +
                'home care and care management\n' +
                'agency dedicated to providing\n' +
                'personalized and exceptional care\n' +
                'support services to individuals in familiar surroundings.',
            siteLink:''
        },
        {
            image:site,
            title:'Corewood Care',
            content: 'Corewood Care is a privately owned\n' +
                'home care and care management\n' +
                'agency dedicated to providing\n' +
                'personalized and exceptional care\n' +
                'support services to individuals in familiar surroundings.',
            siteLink:''
        },
        {
            image:site,
            title:'Corewood Care',
            content: 'Corewood Care is a privately owned\n' +
                'home care and care management\n' +
                'agency dedicated to providing\n' +
                'personalized and exceptional care\n' +
                'support services to individuals in familiar surroundings.',
            siteLink:''
        }
    ])

    return{
        siteData
    }
}