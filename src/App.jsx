import { useEffect, useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./componennts/HomePage.jsx";
import Quiz from "./componennts/Quiz.jsx";
function App() {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="quiz" element={<Quiz/>}/>
        
        
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
