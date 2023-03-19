module.exports = {
    title: 'Mr_Spade',
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }]
    ],
    markdown: {
        anchor:{
            permalink: false
        },
        extendMarkdown: md => {
            md.use(require('markdown-it-mathjax3'))
            md.linkify.set({ fuzzyEmail: false })
        }
    },
    plugins: [
        [
            'vuepress-plugin-mathjax',
            {
                target: 'svg',
                macros: {
                    '*': '\\times',
                },
            }
        ],
        [
            '@vuepress/blog',
            {
                directories: [
                    {
                        id: '学习·OI',
                        dirname: 'study/OI',
                        path: '/study/OI/',
                        itemPermalink: '/study/OI/:slug',
                        pagination: {
                            lengthPerPage: 999,
                        },
                    },
                    {
                        id: '学习·数学',
                        dirname: 'study/math',
                        path: '/study/math/',
                        itemPermalink: '/study/math/:slug',
                        pagination: {
                            lengthPerPage: 999,
                        },
                    },
                    {
                        id: '生活·游行者冥想',
                        dirname: 'life/bike',
                        path: '/life/bike/',
                        itemPermalink: '/life/bike/:slug',
                        pagination: {
                            lengthPerPage: 999,
                        },
                    },
                    {
                        id: '生活·杂记',
                        dirname: 'life/notes',
                        path: '/life/notes/',
                        itemPermalink: '/life/notes/:slug',
                        pagination: {
                            lengthPerPage: 999,
                        },
                    },
                    {
                        id: '生活·比赛游记',
                        dirname: 'life/records',
                        path: '/life/records/',
                        itemPermalink: '/life/records/:slug',
                        pagination: {
                            lengthPerPage: 999,
                        },
                    },
                    {
                        id: '生活·空想白昼',
                        dirname: 'life/fantasy',
                        path: '/life/fantasy/',
                        itemPermalink: '/life/fantasy/:slug',
                        pagination: {
                            lengthPerPage: 999,
                        },
                    },
                ],
            },
        ],
    ]
}