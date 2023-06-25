import {ref} from 'vue'

export function useNavigation(){
    const navbarLinks = ref([
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'Services',
            children: [
                {
                    name: 'Templated Sites',
                    href: '/templatedSites'
                },
                {
                    name: 'Custom Sites',
                    href: '/customSites'
                },
            ]
        },
        {
            name: 'Our Work',
            href: '/ourWork',
        },
        {
            name: 'Blog',
            href: '/blog',
        },
    ])

    const footerLinks = ref([
        {
            name: "Search Engine Optimization",
            to: "#",
        },
        {
            name: "Locations",
            to: "#",
        },
        {
            name: "Home",
            to: "/",
        },
        {
            name: "Learn More",
            to: "#",
        },
        {
            name: "Dallas Web Design",
            to: "#",
        },
        {
            name: "Custom Websites",
            to: "/customSites",
        },
        {
            name: "Plano Web Design",
            to: "#",
        },
        {
            name: "Frisco Web Design",
            to: "#",
        },
        {
            name: "Our Work",
            to: "/ourWork",
        },
        {
            name: "Fort Worth Web Design",
            to: "#",
        },
        {
            name: "Blog",
            to: "/blog",
        },
        {
            name: "Allen Web Design",
            to: "#",
        },
        {
            name: "Contact",
            to: "/contactUs",
        },
        {
            name: "McKinney Web Design",
            to: "#",
        },
        {
            name: "Grapevine Web Design",
            to: "#",
        }
    ])
    return {
        navbarLinks,
        footerLinks
    }
}