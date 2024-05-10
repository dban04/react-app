import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string;
    path: string;
    to: string;
}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        Component: LazyLayout,
        name: 'LazyLayou - Dash',
        path: '/lazyload/*',
        to: '/lazyload',
    },
    {
        Component: NoLazy,
        name: 'No lazy',
        path: 'no-lazy',
        to: '/no-lazy',
    },

]