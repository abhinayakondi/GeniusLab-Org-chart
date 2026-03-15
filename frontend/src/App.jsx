import { useState, useEffect } from "react";
import OrgChartComponent from "./components/OrgChart";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/employees")
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div>
      <h1>Organization Chart</h1>
      <OrgChartComponent data={employees} />
    </div>
  );
}

export default App;