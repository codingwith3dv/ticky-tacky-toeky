import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
];
var router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});
export default router;
//# sourceMappingURL=index.js.map