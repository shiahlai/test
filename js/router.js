const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory('/'),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import('./views/Home.vue.js')
        },
        {
            name: 'MultiSearch',
            path: '/multiSearch',
            component: () => import('./views/MultiSearch.vue.js'),
        },
        {
            name: 'Info',
            path: '/info',
            component: () => import('./views/Info.vue.js'),
        },
        // {
        //     name: 'Map',
        //     path: '/map',
        //     component: () => import('./views/Map.vue.js'),
        // },
        {
            path: '/:pathMatch(.*)', 
            redirect: { name: 'Home' }
        }
    ],
})

export default router;