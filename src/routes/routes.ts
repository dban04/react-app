import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    Component: LazyExoticComponent<() => JSX.Element> | JSXComponent
    name: string;
    path: string;
    to: string;
}

const lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
const lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const lazy3= lazy(() => import(/*webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        Component: lazy1,
        name: 'Lazy-1',
        path: 'lazy1',
        to: '/lazy1',
    },
    {
        Component: lazy2,
        name: 'Lazy-2',
        path: 'lazy2',
        to: '/lazy2',
    },
    {
        Component: lazy3,
        name: 'Lazy-3',
        path: 'lazy3',
        to: '/lazy3',
    },
]