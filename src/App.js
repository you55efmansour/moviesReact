import { RouterProvider,createHashRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Movies from './components/Movies/Movies'
import People from './components/People/People'
import Tv from './components/Tv/Tv'
import ItemDetails from './components/ItemDetails/ItemDetails'
import axios from 'axios'
import Home from './components/Home/Home'
import Error from './components/Error/Error'

async function getTrending(mediaType , setFunc){
  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=e3a7656e592d3c3ca6ee2b488863363e`);
  setFunc(data.results)
}



export default function App() {
  let routers = createHashRouter([
    {path:"/" , element:<Layout/> , children:[
      {index:true , element:<Home getTrending = {getTrending}/>},
      {path:"movies" , element:<Movies getTrending = {getTrending}/>},
      {path:'people' , element:<People getTrending = {getTrending}/>},
      {path:'tv' , element:<Tv getTrending = {getTrending}/>},
      {path:'item details/:id/:mediaType' , element:<ItemDetails/>},
      {path:'*' , element:<Error/>},
    ]}
  ])
  return (
    <>
    <RouterProvider router={routers}></RouterProvider>
    </>
  )
}
