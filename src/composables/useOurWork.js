import {ref} from "vue";

export function useOurWork(){
    const siteData = ref([
        {
            image:'src/assets/images/OurWork/site.png',
            title:'Corewood Care',
            content: 'Corewood Care is a privately owned\n' +
                'home care and care management\n' +
                'agency dedicated to providing\n' +
                'personalized and exceptional care\n' +
                'support services to individuals in familiar surroundings.',
            siteLink:''
        },
        {
            image:'src/assets/images/OurWork/site.png',
            title:'Corewood Care',
            content: 'Corewood Care is a privately owned\n' +
                'home care and care management\n' +
                'agency dedicated to providing\n' +
                'personalized and exceptional care\n' +
                'support services to individuals in familiar surroundings.',
            siteLink:''
        },
        {
            image:'src/assets/images/OurWork/site.png',
            title:'Corewood Care',
            content: 'Corewood Care is a privately owned\n' +
                'home care and care management\n' +
                'agency dedicated to providing\n' +
                'personalized and exceptional care\n' +
                'support services to individuals in familiar surroundings.',
            siteLink:''
        },
        {
            image:'src/assets/images/OurWork/site.png',
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