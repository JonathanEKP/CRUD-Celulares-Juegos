import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Celulares from "./Components/Celulares";
import CelularesForm from "./Components/CelularesForm";
import Juegos from "./Components/Juegos";
import JuegosForm from "./Components/JuegosForm";
import HomePage from "./Components/HomePage"; 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/celulares" element={<Celulares />} />
          <Route path="/celulares/Add" element={<CelularesForm />} />
          <Route path="/celulares/Edit/:id" element={<CelularesForm/>}/>
          <Route path="/celulares/Delete/:id" element={<CelularesForm del={true}/>}/>
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/juegos/Add" element={<JuegosForm />} />
          <Route path="/juegos/Edit/:id" element={<JuegosForm />} />
          <Route path="/juegos/Delete/:id" element={<JuegosForm del={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
