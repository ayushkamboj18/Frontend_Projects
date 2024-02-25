import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function App() {
    return(
        <div>
            <Header/>
            <div className="flex">
                <Sidebar/>
                <div  className="flex1">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default App;