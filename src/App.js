import Body from "./Components/Body";
import Roadmap from "./Components/Roadmap";
import Sidebar from "./Components/Sidebar";
import { createBrowserRouter, RouterProvider, Router} from "react-router-dom";




function App() {
  return (
    <div className="flex">

       <Sidebar/>
       <RouterProvider router={router}/>
    </div>
  );
}
const router = createBrowserRouter([
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/roadmap",
        element: <Roadmap/>,
      }
  
])




export default App;
