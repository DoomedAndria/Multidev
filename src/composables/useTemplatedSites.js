import MoneyIcon from "@/assets/icons/TemplatedSites/MoneyIcon.vue";

import tempSite from "@/assets/images/TemplatedSites/templatedSite.png"

export function useTemplatedSites() {

    const cardData = [
        {
            icon: MoneyIcon,
            title: 'Hosting Included',
            content: 'Hosting fees are built right into the monthly payment.'
        },
        {
            icon: MoneyIcon,
            title: 'Unlimited Edits',
            content: 'We’ll help you update any content or photos you might want at any time!'
        },
        {
            icon: MoneyIcon,
            title: 'Wicked Fast',
            content: 'We know how to get your business ranking on Google and all of our websites are built with SEO in mind.'
        },
        {
            icon: MoneyIcon,
            title: 'Google Analytics',
            content: 'It’s important to track how your website is being used and ' +
                'Google Analytics helps you understand exactly who your users are and where they’re going.'
        },
        {
            icon: MoneyIcon,
            title: 'SEO Friendly',
            content: 'Since our websites are built from scratch, you can enjoy blazing fast ' +
                'page speed scores which help your users stay on your website but also rank higher with SEO.'
        },
        {
            icon: MoneyIcon,
            title: 'Google Business\n' +
                'Profile',
            content: 'We also help you set up Google Business Profile which is a great tool for local businesses to get more leads.'
        },
    ]

    const tempSites = [
        tempSite,
        tempSite,
        tempSite,
    ]

    const questions = [
        {
            question: 'What are you using to build the website?',
            answer: ' '
        },
        {
            question: 'How long will it take for my website to be built?',
            answer: ' '
        },
        {
            question: 'Do I have a say in how my website looks?',
            answer: ' '
        },
        {
            question: 'What if I don’t have photos for my website?',
            answer: ' '
        },
        {
            question: 'Can I edit the content on the website myself?',
            answer: ' '
        },
    ]

    return {
        cardData,
        tempSites,
        questions
    }
}