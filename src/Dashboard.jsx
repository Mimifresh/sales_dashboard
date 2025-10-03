import supabase from "./supabase-client";
import { useEffect } from "react";

function Dashboard() {
    useEffect(()=>{
        fetchMatrix()
    }, [])
    async function fetchMatrix(){
    const responce = await supabase
    .from('sales_deals')
    .select(
        `name,
        value
        `,
    )
    .order('value', { ascending: false })
    .limit(1)
    console.log(responce);
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