import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Home from "./components/Home";
import Books from "./components/Books";
import Peoples from "./components/Peoples";
import Articles from "./components/Articles";
import Help from "./components/Help";

import "./style.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const createEle = document.getElementById('root');
const app = ReactDOM.createRoot(createEle);

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/peoples",
                element : <Peoples/>
            },
            {
                path : "/books",
                element : <Books/>
            },
            {
                path : "/articles",
                element : <Articles/>
            },
            {
                path : "/help",
                element : <Help/>
            },
            
        ]
    }
])


app.render(<RouterProvider router={appRouter} />)