const Groups = { template: '<div>groups</div>' }

const routes = [
    { path: '/groups', component: Groups }
]
const router = new VueRouter({
    routes // short for `routes: routes`
})
const app = new Vue({
    router
}).$mount('#app')
import Vue from "vue";
import Router from  "vue-router";
import Hello from  "./components/HelloWord"

export default new Router({
    routes:[
        {
            path: "/hello",
            name: "hello",
            component: Hello
        }
    ]
})