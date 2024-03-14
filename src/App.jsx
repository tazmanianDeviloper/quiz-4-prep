import Navigation from "./components/nav/Navigation.jsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Header from "./components/header/Header.jsx";
import ThemeContextProvider from "./components/header/ThemeContextProvider.jsx";

function Root(){
    return(
        <ThemeContextProvider>
            <Header/>
            <Routes>
                    <Route
                        path={`/`}
                        element={<Navigation/>}
                    />
                    <Route
                        path={`/Sales`}
                        element={<Navigation/>}

                    />
                    <Route
                        path={`/Services`}
                        element={<Navigation/>}
                    />
            </Routes>
        </ThemeContextProvider>
    );
}

const router= createBrowserRouter(
    [{path:"*", Component:Root}]
);

export default function App() {

    return (
        <RouterProvider router={router}/>
    )
}


