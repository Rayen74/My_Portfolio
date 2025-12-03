import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CollapsedContext } from "./CollapsedContext";
import Sidebar from "./components/Sidebar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <CollapsedContext.Provider value={{ collapsed, setCollapsed }}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen text-white bg-gray-900">
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                {/* Add other routes as needed */}
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CollapsedContext.Provider>
  );
}

export default App;