import React from "react";
import OrganizationChart from "./components/ChartContainer";

const DragDropChart = () => {
  const ds = {
    id: "n1",
    name: "Projects",
    title: "MSF",
    children: [ 
      { id: "n2", name: "Globe", title: "Globe" ,
        children:[
            {id: 'n3', name: 'Aparna P', title: "QA"},
            {id: 'n4', name: 'Balaji Ganesh K', title: "UI/TL"},
            {id: 'n5', name: 'Haritha A', title: "React Native"},
            {id: 'n6', name: 'Jasviram S', title: "React Native"},
            {id: 'n7', name: 'Megala N R', title: "Platform"},
            {id: 'n8', name: 'Pradeepa N', title: "Platform"},
            {id: 'n9', name: 'Rajapandi S', title: "React Native"},
            {id: 'n10', name: 'Ramesh S', title: "UI"},
            {id: 'n11', name: 'Santhoshkumar S', title: "TL/DM"},
            {id: 'n111', name: 'Rohini', title: "Project"},
        ]
    
        },
        { id: "n12", name: "KVB", title: "KVB" ,
        children:[
            {id: 'n13', name: 'Anbalagan G', title: "Production - Support"},
            {id: 'n14', name: 'Arun Kumar R B', title: "Web"},
            {id: 'n15', name: 'Jebin J', title: "Platform"},
            {id: 'n16', name: 'Rajeshkumar', title: "SPOC"},
            {id: 'n17', name: 'RamPrakash', title: "Web"},
            {id: 'n18', name: 'Kokila N', title: "Web"},
            {id: 'n19', name: 'Sindhu D', title: "Web"},
            {id: 'n20', name: 'Somayajula Srinivasa Sriteja', title: "Web"},
            {id: 'n21', name: 'Suganya', title: "SPOC"},
            {id: 'n211', name: 'Kailash', title: "Project"}
        ]
    
        },

      { id: "n22", name: "IDFC", title: "IDFC" ,
        children:[
            {id: 'n23', name: 'Sriram Parasuram', title: "IOS"},
            {id: 'n24', name: 'Shajakhan A', title: "IOS"},
            {id: 'n244', name: 'Vrags', title: "Project"},
           
        ]    
      },
      { id: "n25", name: "GWC", title: "GWC" ,
        children:[
            {id: 'n26', name: 'Lavanya S', title: "QA"},
            {id: 'n27', name: 'Mekala T', title: "QA"},
            {id: 'n28', name: 'Nilna TS', title: "Platform"},
            {id: 'n29', name: 'Nishanth S', title: "Web"},
            {id: 'n30', name: 'Ritheesh K', title: "SPOC"},
            {id: 'n31', name: 'Santhosh Kumar R', title: "Web"},
            {id: 'n32', name: 'Velmurugan R', title: "Flutter"},
            {id: 'n33', name: 'Vinoth Kumar R', title: "Android"},
            {id: 'n34', name: 'Vishnukiruthigalakshmi S', title: "Platform"},
            {id: 'n35', name: 'Preethu Jose', title: "Web"},
            {id: 'n353', name: 'Ramesh', title: "Project"},
           
        ]    
      },
      { id: "n36", name: "KSEC", title: "KSEC" ,
        children:[
            {id: 'n37', name: 'Abuthahir', title: "QA"},
            {id: 'n38', name: 'Arun Balaji B', title: "QA"},
            {id: 'n39', name: 'Bhavani', title: "Android"},
            {id: 'n40', name: 'Divya S', title: "TL/DM"},
            {id: 'n41', name: 'Meganathan M', title: "Platform"},
            {id: 'n42', name: 'Narmadadevi S', title: "IOS"},
            {id: 'n43', name: 'Vidhya B', title: "Platform"},
            {id: 'n432', name: 'Vrags', title: "Project"}
           
        ]    
      },
      { id: "n44", name: "KMB", title: "KMB" ,
        children:[
            {id: 'n45', name: 'Hemalatha G', title: "QA"},
            {id: 'n46', name: 'Jagen K', title: "IOS"},
            {id: 'n47', name: 'John Dev James', title: "Android"},
            {id: 'n48', name: 'Kirithika V P', title: "QA"},
            {id: 'n49', name: 'Mageshwari U', title: "TL/DM"},
            {id: 'n50', name: 'Manochitra', title: "IOS"},
            {id: 'n51', name: 'Revanth G', title: "Platform"},
            {id: 'n52', name: 'Sanjaykumar', title: "Platform"},
            {id: 'n53', name: 'Senthamizh S', title: "Android"},
            {id: 'n54', name: 'Shanmugavel C', title: "QA"},
            {id: 'n55', name: 'Buvaneswari M', title: "Platform"},            
            {id: 'n555', name: 'Magesh', title: "Project"},
           
        ]    
      },
      { id: "n56", name: "Currenex", title: "Currenex" ,
        children:[
            {id: 'n57', name: 'Allwyn P', title: "Platform"},
            {id: 'n58', name: 'Aravindh R', title: "IOS"},
            {id: 'n59', name: 'Dhanaprabhu R', title: "Android"},
            {id: 'n60', name: 'Harikrishnan M', title: "QA"},
            {id: 'n61', name: 'Kailash Mali', title: "TL/DM"},
            {id: 'n62', name: 'Praveen M', title: "QA"},
            {id: 'n622', name: 'Ramesh', title: "Project"}
        ]    
      },
      { id: "n63", name: "RT", title: "RT" ,
        children:[
            {id: 'n64', name: 'Moushmi Nirmal Kumar', title: "SPOC"},
            {id: 'n65', name: 'Pradeepa N', title: "Platform"},
            {id: 'n655', name: 'Rohini', title: "Project"}
           
        ]    
      },
      { id: "n66", name: "Angel", title: "Angel" ,
        children:[
            {id: 'n67', name: 'Dhanasekaran S J', title: "Platform"},
            {id: 'n68', name: 'Gurukathir J', title: "Android"},
            {id: 'n69', name: 'Kailash Mali', title: "TL/DM"},
            {id: 'n70', name: 'Manoj', title: "IOS"},
            {id: 'n71', name: 'Mohana Lakshmi T', title: "Platform"},
            {id: 'n72', name: 'Murugesh K', title: "IOS"},
            {id: 'n73', name: 'Nisha Nanthini Devi R', title: "Platform"},
            {id: 'n74', name: 'Prince S', title: "Android"},
            {id: 'n75', name: 'Rohini', title: "Project"}
        ]    
      },
    ]
  };

  return <OrganizationChart datasource={ds} draggable={true} />;
};

export default DragDropChart;
