import { RouterProvider,createHashRouter } from 'react-router-dom'
import Layout from './componants/Layout/Layout'
import Movies from './componants/Movies/Movies'
import People from './componants/People/People'
import Tv from './componants/Tv/Tv'
import ItemDetails from './componants/ItemDetails/ItemDetails'
import axios from 'axios'
import Home from './componants/Home/Home'
import Error from './componants/Error/Error'

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
