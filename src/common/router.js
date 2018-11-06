import React from "react";
import Loadable from "react-loadable";
import Loading from "src/components/loading";
import _Context from "src/routes/Context";

const Home = Loadable({
  loader: () => import("src/routes/Home/Home"),
  loading: Loading
});

const About = Loadable({
  loader: () => import("src/routes/About/About"),
  loading() {
    return <div>Loading...</div>;
  }
});

const Todo = Loadable({
  loader: () => import("src/routes/Todo"),
  loading: Loading
});

const Counter = Loadable({
  loader: () => import("src/routes/Counter"),
  loading: Loading
});

const Spring = Loadable({
  loader: () => import("src/routes/Spring"),
  loading: Loading
});

const Context = Loadable({
  loader: () => import("src/routes/Context"),
  loading: Loading
});

const routerConfig = [
  {
    path: "/",
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
    path: "/about/demo/loading",
    component: Loading
  },
  {
    path: "/about/demo/context",
    component: _Context
  }
];

export default routerConfig;
