import React from 'react';
import Loadable from 'react-loadable';
import Loading from 'src/components/loading';

const Home = Loadable({
    loader: () => import('src/routes/Home/Home'),
    loading: Loading
});

const About = Loadable({
    loader: () => import('src/routes/About/About'),
    loading() {
        return <div>Loading...</div>
    }
});

const Todo = Loadable({
    loader: () => import('src/routes/Todo'),
    loading: Loading
});

const Counter = Loadable({
    loader: () => import('src/routes/Counter'),
    loading: Loading
});

const Spring = Loadable({
    loader: () => import('src/routes/Spring'),
    loading: Loading
})

const routerConfig = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: "/home",
        exact: true,
        component: Home
    },
    {
        path: "/about/person",
        component: About
    },
    {
        path: "/todo",
        component: Todo
    },
    {
        path: "/counter",
        component: Counter
    },
    {
        path: "/about/spring",
        component: Spring
    },
    {
        path: "/about/person1/loading",
        component: Loading
    }
];

export default routerConfig;
