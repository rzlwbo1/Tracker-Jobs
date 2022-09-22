import React from "react";
import FormAddJob from './FormAddJob';


function App() {
  return (
    <div className="p-4">
      <h1 className="fw-bold text-center title-app">
        Tracker <span style={{ color: "#2FC851" }}>Jobs</span>
      </h1>

      <FormAddJob />
    </div>
  );
}

export default App;
