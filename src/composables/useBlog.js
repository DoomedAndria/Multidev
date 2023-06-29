import {ref} from "vue";

import p1 from "@/assets/images/Blog/p1.png"
export function useBlog() {
    const posts = ref(
        [
            {
                image: p1,
                title: 'Custom WordPress Development: A Comprehensive Guide',
                author: 'Nick Meagher',
                date: 'May 11, 2023',
                content: 'Should you use a WordPress Theme or go with Custom WordPress\n' +
                    'Development from scratch? It all depends on your\n' +
                    'business goals.'
            },
            {
                image: p1,
                title: 'Custom WordPress Development: A Comprehensive Guide',
                author: 'Nick Meagher',
                date: 'May 11, 2023',
                content: 'Should you use a WordPress Theme or go with Custom WordPress\n' +
                    'Development from scratch? It all depends on your\n' +
                    'business goals.'
            },
            {
                image: p1,
                title: 'Custom WordPress Development: A Comprehensive Guide',
                author: 'Nick Meagher',
                date: 'May 11, 2023',
                content: 'Should you use a WordPress Theme or go with Custom WordPress\n' +
                    'Development from scratch? It all depends on your\n' +
                    'business goals.'
            },
            {
                image: p1,
                title: 'Custom WordPress Development: A Comprehensive Guide',
                author: 'Nick Meagher',
                date: 'May 11, 2023',
                content: 'Should you use a WordPress Theme or go with Custom WordPress\n' +
                    'Development from scratch? It all depends on your\n' +
                    'business goals.'
            },
        ]
    )
    return {
        posts
    }
}