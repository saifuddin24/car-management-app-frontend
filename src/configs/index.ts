import {RouteRecordRaw} from "vue-router";

export interface NavItem {
  title: string;
  icon: string;
  value: string;
  children?: SubNavItem[]|null,
  exact?:boolean
  route?:RouteRecordRaw,
}

export interface SubNavItem extends NavItem{ }

const navigations = [
  {
    prepend_icon:'mdi-home',
    title:'Home',
    value:'home',
    exact:true,
    route: {
      path: '',
      name: 'Home',
      component: () => import( '@/views/Home.vue'),
      meta:{
        view:''
      }
    },
  },
  {
    title:'About',
    prepend_icon:'mdi-forum',
    value:'about',
    route: {
      path: 'about',
      name: 'About',
      component: () => import( '@/views/About.vue'),
    } as RouteRecordRaw
  },
  {
    title:'Car',
    prepend_icon:'mdi-car',
    value:'Car',
    route: {
      path: 'cars',
      name: 'Cars',
      component: () => import( '@/views/cars/View.vue'),
      children:[
        {
          path: '',
          name: 'cars.index',
          component:  import( '@/views/cars/Index.vue'),
          meta: {
            view: 'table'
          }
        },
        {
          path: 'create',
          name: 'cars.create',
          component: () => import( '@/views/cars/Create.vue'),
        }
      ]
    } as RouteRecordRaw,
    children:[
      {
        prepend_icon: 'mdi-cash-plus',
        title: 'Add Car Revenue',
        value: 'car-list',
        route: {path:'cars'}
      }
    ]

  },

];

export default navigations;
export const routes = navigations.map( ( nav:NavItem ) =>  nav.route );
