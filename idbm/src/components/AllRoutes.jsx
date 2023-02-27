import { Route, Routes } from "react-router-dom";
import AddMovie from "./AddMovie/AddMovie";
import Movies from "./movies/Movie";

export default function AllRoutes(){

    return ( 
        <div>

            <Routes>
                <Route path="/" element={<Movies/>} />
                <Route path="/movies" element={< AddMovie />} />
            </Routes>
        
        </div>
    )
}