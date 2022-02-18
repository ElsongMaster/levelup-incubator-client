export const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "profil" */ "./components/Home.vue"),
    },

    {
        path: "/dashboard/profil",
        name: "Profil",
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "profil" */ "./components/Profil2.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/dashboard/compte",
        name: "Compte",
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "profil" */ "./components/Profil2.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/dashboard/tasks",
        name: "Tasks",
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "tasks" */ "./components/Tasks.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/dashboard/formcontact",
        name: "Formcontact",
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "tasks" */ "./components/Formcontact.vue"
            ),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/dashboard/filelist",
        name: "Filelist",
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "tasks" */ "./components/Filelist.vue"),
        meta: {
            requiresAuth: true,
        },
    },
];
