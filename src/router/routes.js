import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import EventsPage from '@/views/EventsPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import SignupPage from '@/views/SignupPage.vue'
import AddEventPage from '@/views/AddEventPage.vue'
import EventDescription from '@/views/EventDescription.vue'



const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/signup',
        name: 'SignupPage',
        component: SignupPage
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage
    },
    {
        path: '/events',
        name: 'EventsPage',
        component: EventsPage
    },
    {
        path: '/events/:id',
        name: 'EventDescription',
        component: EventDescription
    },
    {
        path: '/addevent',
        name: 'AddEventPage',
        component: AddEventPage
    },
]
export default routes;