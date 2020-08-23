const routes = [
    {
        path: "/groups",
        name: "Groups",
        component: () => import("@/views/Groups")
    },
    {
        path: "/timetable",
        name: "Timetable",
        component: () => import("@/views/Timetable")
    },
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home")
    },
    {
        path:"/clients",
        name: "Clients",
        component: () => import("@/views/Clients")
    }
];



export default routes;