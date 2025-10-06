import supabase from "./supabase-client";
import { useEffect, useState } from "react";
import { Charts } from "react-charts";
function Dashboard() {

  const [matrix, setMatrix] = useState([])

    useEffect(()=>{
        fetchMatrix()
    }, [])


    async function fetchMatrix(){
    const { data, error} = await supabase
    .from('sales_deals')
    .select(
      `
      name,
      value.sum()
      `,
    )
    if (error) {
      throw error
    }
    console.log(data)
    setMatrix(data)
    }
  return (
    <div className="dashboard-wrapper">
      <div className="chart-container">
        <h2>Total Sales This Quarter ($)</h2>
      </div>
    </div>
  );
}

export default Dashboard;