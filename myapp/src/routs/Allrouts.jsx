import {  Route, Routes } from "react-router-dom"
import Form from "../conponents/Form"
import Cards from "../conponents/Cards"


export default function AllRouts(){


    return (
        <Routes>
            <Route path="/PostData" element={<Form />} />
            <Route path="/retrive" element={<Cards/>} />

        </Routes>
    )
}