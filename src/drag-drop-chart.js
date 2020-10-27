import React, {useEffect} from "react";
import OrganizationChart from "./components/ChartContainer";
import {DS} from "./constants";
const DragDropChart = () => { 
  
  const onSave = () => {
    localStorage.setItem('DS', JSON.stringify(DS));
     console.log(DS)
     console.log(JSON.parse(localStorage.getItem("DS")))
  };

  return (
    <div>
      <section className="toolbar">
        <button
          onClick={onSave}
          style={{ marginLeft: "2rem" }}
        >
          Save
        </button>
      </section>
      <OrganizationChart datasource={DS} draggable={true} />
     
    </div>
  );
  
};

export default DragDropChart;
