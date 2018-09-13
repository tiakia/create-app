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
})

const routerConfig = [
    {
        path: "/main/home",
        component: Home
    },
    {
        path: "/main/about/person",
        exact: true,
        component: About
    },
    {
        path: "/main/todo",
        component: Todo
    },
    {
        path: "/main/counter",
        component: Counter
    },
    {
        path: "/main/about/person1/loading",
        exact: true,
        component: Loading
    }
];

export default routerConfig;
