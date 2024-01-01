import { useEffect, useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./componennts/HomePage.jsx";
import Quiz from "./componennts/Quiz.jsx";
import ToolBox from "./componennts/ToolBox.jsx";
import EmergencyResponse from "./componennts/EmergencyResponse.jsx";
import AnswerUsual from "./componennts/AnswerUsual.jsx";
import Entry from "./componennts/Entry.jsx";
function App() {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="entry" element={<Entry/>}/>
        <Route path="quiz" element={<Quiz/>}/>
        <Route path="toolbox" element={<ToolBox/>}/>
        <Route path="emergency" element={<EmergencyResponse/>}/>
        <Route path="answer" element={<AnswerUsual/>}/>
        
        
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
