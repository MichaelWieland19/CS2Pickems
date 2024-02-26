import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import CreateGroup from './components/CreateGroup.vue';
import JoinGroup from './components/JoinGroup.vue';
import GroupDashboard from './components/GroupDashboard.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/create-group', component: CreateGroup },
    { path: '/join-group', component: JoinGroup },
    { path: '/group/:id', component: GroupDashboard, props: true },
    //...
  ]
});

export default router;