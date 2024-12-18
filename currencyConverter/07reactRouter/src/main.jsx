import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './components/header/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Layout/>,
//       children:[
//         {
//           path:"",
//           element: <Home/>
//         },
//         {
//           path: "about",
//           element: <About/>
        
//         },
       



//       ]
//     }
//   ]
// )

const router = createBrowserRouter([
  createRoutesFromElements(
    <Route path='/' element= {
      <Layout/>
    }>
      <Route path='' element={
        <Home/>
      }/>
        <Route path='about' element={
        <About/>
      }/>
       <Route path='user/:userid' element={
        <User/>
      }/>
      <Route path='github' element={
        <Github/>
      }/>
      <Route
      loader={
        ()=>{

        }
      }
      path='github'
      element={<Github/>}
      />
      <Route
      loader={githubInfoLoader}
      />
      
      

    </Route>
  )
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}/>
  </StrictMode>,
)
