const Layout = () => import("@/views/layout");

let routes = [

    {
        path: '/',
        name: 'layput',
        redirect:'/index',
        component: Layout,
        children: [
            {
                path: "/index",
                name: 'index',
                component: () => import("@/views/index/index")
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/login/index")
    },
    {
        path:"*",
        redirect:"/index"
    }
]

export default routes