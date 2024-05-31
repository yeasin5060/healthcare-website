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
import Newspage from './pages/newspage/Newspage';
import Contacts from './pages/contact/Contacts';
import Appointments from './pages/appointment/Appointments';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element = {<Mains/>}>
        <Route path='/' element = {<Homepage/>}/>
        <Route path='/about' element = {<Aboutpage/>}/>
        <Route path='/service' element = {<Servicepage/>}/>
        <Route path='/doctor' element = {<Doctorpage/>}/>
        <Route path='/news' element = {<Newspage/>}/>
        <Route path='/contact' element = {<Contacts/>}/>
        <Route path='/appointment' element = {<Appointments/>}/>
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
