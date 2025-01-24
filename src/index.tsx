import {createRoot} from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LazyShop} from "./pages/shop/Shop.lazy";
import {AboutLazy} from "./pages/about/About.lazy";
import {Suspense} from "react";


const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found ');
}
const container = createRoot(root);
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:'/about',
                element: <Suspense fallback={'Идет загрузка подождите'}> <AboutLazy/>  </Suspense>
            },
            {
                path:'/shop',
                element: <Suspense fallback={'Идет загрузка подождите'}> <LazyShop/> </Suspense>
            }
        ]
    }
]);
container.render(
    <RouterProvider router={router}/>
)

