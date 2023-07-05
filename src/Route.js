import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Movies from "./components/Movies";


export default function route() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
        </Routes>
    );
}
