import VueRouter from "vue-router";

import store from "./store/index";

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
        path: "/dashboard/goals",
        name: "Goals",
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "Goals" */ "./components/pages/Goals.vue"
            ),
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
    {
        path: "/dashboard/goals",
        name: "Goals",
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "tasks" */ "./components/pages/Goals.vue"
            ),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/dashboard/help",
        name: "AdminHelp",
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "AdminHelp" */ "./components/pages/AdminHelp.vue"
            ),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/dashboard/notifications",
        name: "NotifLayout",
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "AdminHelp" */ "./components/pages/NotificationsLayout.vue"
            ),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/dashboard/tasks2",
        name: "Tasks2",
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "AdminHelp" */ "./components/pages/Tasks2.vue"
            ),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/dashboard/task/:id/edit",
        name: "TaskEdit",
        // route level code-splitting
        // this generates a separate chunk (profile.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "AdminHelp" */ "./components/TaskEdit.vue"
            ),
        meta: {
            requiresAuth: true,
        },
    },
];
// const router = new VueRouter({
//     routes,
//     mode: "history",
//   });

  console.log(localStorage.getItem("tokenConnexion"));

// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth) {
//       if (!localStorage.getItem("tokenConnexion")){
//         if ( store.state.token=null) {
//           next({
//             path: "/",
//           });
//         } else {
//           next();
//         }
//       } else {
//         next();
//       }
//     }
//     next();
//   });

// router.beforeEach((to,from,next)=>{

//     if (to.meta.requiresAuth) {
//       if (store.state.token=null) {
//         next({
//           path: "/"
//         });
//       } else {
//         next();
//       }
//     } else {
//       next();
//     }
//   next();
  
//   })
  
//   export default router
