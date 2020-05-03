// 引入vue 跟 vue-route
import Vue from 'vue'
import VueRouter from 'vue-router'
// 安装
Vue.use(VueRouter);
// 引入组件
const Home = () =>
    import ("../views/home/Home.vue")
const Cart = () =>
    import ("../views/cart/Cart.vue")
const profile = () =>
    import ("../views/profile/Profile.vue")
const Category = () =>
    import ("../views/category/Category.vue")
const Detail = () =>
    import ("../views/detail/Detail.vue")



const routes = [{
    path: "",
    redirect: "/home"
}, {
    path: "/home",
    component: Home
}, {
    path: "/cart",
    component: Cart
}, {
    path: "/category",
    component: Category
}, {
    path: "/profile",
    component: profile
},{
    path: "/detail/:iid",
    component: Detail
}
]
const router = new VueRouter({
    routes,
    mode: "history"
})

export default router
