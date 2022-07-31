import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetails from '@/views/event/EventDetailView.vue'
import EventRegister from '@/views/event/EventRegister.vue'
import EventEdit from '@/views/event/EditView.vue'
import Eventlayout from '@/views/event/EventLayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetWorkError from '@/views/NetworkErrorView.vue'
const routes = [{
        path: '/',
        name: 'EventList',
        component: EventListView,
        props: (route) => ({
            page: parseInt(route.query.page) || 1,
            morepage: parseInt(route.query.morepage) || 1
        })
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/event/:id',
        name: 'EventLayout',
        props: true,
        component: Eventlayout,
        children: [{
                path: '',
                name: 'EventDetails',
                component: EventDetails
            },
            {
                path: 'register',
                name: 'EventRegister',
                props: true,
                component: EventRegister
            },
            {
                path: 'edit',
                name: 'EventEdit',
                props: true,
                component: EventEdit
            }
        ]
    },
    {
        path: '/404/:resource',
        name: '404Resource',
        component: NotFoundView,
        props: true
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFoundView
    },
    {
        path: '/network-error',
        name: 'NetworkError',
        component: NetWorkError
    },
    {
        path: '/event/:id/register',
        name: 'EventRegister',
        props: true,
        component: EventRegister
    },
    {
        path: '/event/:id/edit',
        name: 'EventEdit',
        props: true,
        component: EventEdit
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router