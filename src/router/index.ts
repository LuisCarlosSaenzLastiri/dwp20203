import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Register from '../views/Register.vue'
import Ventas from '../views/Ventas.vue'
import Proveedores from '../views/Proveedores/Proveedores.vue';
import Producto from '../views/Producto/Producto.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
 
  {
    path: '/Ventas',
    name: 'Ventas',
    component: Ventas
  },
  {
    path: '/Proveedores',
    name: 'Proveedores',
    component: Proveedores
  },
  {
    path: '/Producto',
    name: 'Producto',
    component: Producto
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
