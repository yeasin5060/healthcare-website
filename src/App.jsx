import { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Aboutpage from './pages/aboutpage/Aboutpage';
import Mains from './layout/main/Mains';
import Servicepage from './pages/servicepage/Servicepage';
import Doctorpage from './pages/doctorpage/Doctorpage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element = {<Mains/>}>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/about' element = {<Aboutpage/>}/>
        <Route path='/service' element = {<Servicepage/>}/>
        <Route path='/doctor' element = {<Doctorpage/>}/>
      </Route>
    )
  );
  return (
    <RouterProvider
    router={router}
  />
  )
}

export default App
