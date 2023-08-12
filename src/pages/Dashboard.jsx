import { useEffect, useState } from 'react';
import "../App.css";
import { useData } from '../context/InventoryContext';

const Dashboard = () => {
  const {inventoryInfo} = useData();
  const [data, setData] = useState({
    totalStock : 0,
    totalDelivered : 0,
    totalLowStock : 0,
  })

  useEffect(() => {
    const totalStockItems = inventoryInfo?.reduce((acc, curr) => acc + curr?.stock , 0)
    const totalDeliveredItems = inventoryInfo?.reduce((acc, curr) => acc + curr?.delivered , 0)
    const totalLowStockItems = inventoryInfo?.filter(({stock}) => stock <= 10)?.length;
    setData({ totalStock : totalStockItems, totalDelivered :totalDeliveredItems, totalLowStock : totalLowStockItems})
  }, [])


  return (
    <div className='dashboard'>
      <h1>dashboard</h1>
      <section className='dashboard__lists'>
        <span>
          <strong>total stock</strong>
          {data?.totalStock}
        </span>
        <span>
          <strong>total delivered</strong>
          {data?.totalDelivered}
        </span>
        <span>
          <strong>total low stock</strong>
          {data?.totalLowStock}
        </span>
      </section>
    </div>
  )
}

export default Dashboard