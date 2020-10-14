import React from "react";
import OrganizationChart from "./components/ChartContainer";

const DragDropChart = () => {
  const ds = {
    id: "n1",
    name: "MSF",
    title: "Projects",
    children: [ 
      { id: "n2", name: "Rohini", title: "Globe" ,
        children:[
            {id: 'n3', name: 'Aparna P', title: "QA"},
            {id: 'n4', name: 'Balaji Ganesh K', title: "UI/TL"},
            {id: 'n5', name: 'Haritha A', title: "React Native"},
            {id: 'n6', name: 'Jasviram S', title: "React Native"},
            {id: 'n7', name: 'Megala N R', title: "Platform"},
        ]
    
        },
        { id: "n8", name: "Kailash", title: "KVB" ,
        children:[
            {id: 'n9', name: 'Anbalagan G', title: "Production - Support"},
            {id: 'n10', name: 'Arun Kumar R B', title: "Web"},
            {id: 'n11', name: 'Jebin J', title: "Platform"},
            {id: 'n12', name: 'Rajeshkumar', title: "SPOC"},
            {id: 'n13', name: 'RamPrakash', title: "Web"},
        ]
    
        },

      { id: "n14", name: "Ramesh", title: "GWC" ,
        children:[
            {id: 'n15', name: 'Lavanya S', title: "QA"},
            {id: 'n16', name: 'Nishanth S', title: "Web"},
            {id: 'n17', name: 'Velmurugan R', title: "Flutter"},
            {id: 'n18', name: 'Vinoth Kumar R', title: "Android"},
            {id: 'n19', name: 'Ritheesh K', title: "SPOC"},
        ]
    
        }
    ]
  };

  return <OrganizationChart datasource={ds} draggable={true} />;
};

export default DragDropChart;
