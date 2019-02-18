import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './components/home';
import list from './components/list';
import detail from './components/detail';
import user from './components/user';
import error from './components/error';

const routes=[
	{path:'/home',component:home},
	{path:'/list',component:list},
	{path:'/detail/:id',component:detail,name:'detail'},
	{path:'/user',component:user},
	{path:'/',redirect:'/home'},
	{path:'*',component:error}
];

export default new Router({
  routes
})
