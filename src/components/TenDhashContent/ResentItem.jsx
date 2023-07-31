import React from "react";
import house1 from "../../assets/images/house-3.jpg";
import house2 from "../../assets/images/house-2.jpg";
import { Link } from "react-router-dom";
import { useGetItemQuery, useSendRequestsMutation } from "../../store/api/ItemsSlice";
import { ToastContainer, toast } from "react-toastify"

function ResentItem() {

  const {data: items = []} = useGetItemQuery()
 
  const [SendRequest] = useSendRequestsMutation()

  const handleRequest = (property_id) => {
    SendRequest(property_id).unwrap().then(() => {
      toast.success("Request sent successfully")
    }).catch((error) => {
      console.log(error)
      if(error.status === 400) {
       toast.error("Request already sent for this property")
      }
    })
  }

  return (
    <div className="bg-white p-6 w-full flex flex-col shadow rounded">
      <ToastContainer/>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">Recently Added</h3>
        <Link to = '/tenant/Properties'>
        <span className="text-[#00befe]">See all</span>
        </Link>
      </div>
      {/* Recent items */}
      <div className="mt-4 flex flex-wrap justify-center gap-5 p-4 pb-5">
        {/* item */}
            {items.slice(-3).map(item =>           
              <div key={item.id} className='flex flex-col gap-6  overflow-hidden w-[300px] bg-white shadow-lg border-2 hover:border-[#00befe] p-4 rounded-xl hover:scale-[0.98] transition-all'>
                <Link to={`/Tenant/dashboard/ViewProperty/${item.id}`}>       
                  <img src={item.image} alt="" className='w-full h-[180px] rounded-xl bg-auto bg-no-repeat bg-center cursor-pointer'/>
                </Link> 
                <div className='flex flex-col gap-4 md:gap-4 w-full '>
                    <div className='flex flex-col gap-2'>
                        <h3 className=" text-2xl"> {item.address.slice(0, 20) + [item.address.length >= 20 ? '...' : '']}</h3>
                        <span className='text-sm text-[#00befe]'>{item.title}</span>
                        <span className="text-[#222]">$ {item.rent_fee}</span>
                    </div>
                    <div className='flex'>
                        <button onClick={() => handleRequest(item.id)}
                        className='cursor-pointer w-full py-2 px-3 bg-[#00befe] text-white rounded-lg'>Send Request</button>
                    </div>
                </div>
              </div>
            )}          
      </div>
    </div>
  );
}

export default ResentItem;
