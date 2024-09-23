import React from 'react';
import image1 from '../assets/images/moreto1.png';
import image2 from '../assets/images/moreto2.jpg';
import RedeemIcon from '@mui/icons-material/Redeem';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
const More = () => {
  return (
    <div className="bg-orange-50 py-8 px-10">
      <h2 className="text-lg font-bold text-left text-gray-800 mb-8 pl-4">
        More to Explore
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Card */}
        <div className="relative bg-blue-900 text-white shadow-lg overflow-hidden">
          <img src={image2} alt="Gift Card" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <h4 className="text-4xl font-sans font-semibold mb-2">Gift Card</h4>
            <p className="mb-4 text-gray-300">The Pleasure Is All Yours To Give</p>
            <button className="bg-white text-black font-bold py-2 px-4 hover:bg-gray-100 transition duration-300">
              Shop Gift Cards
            </button>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative bg-pink-800 text-white  shadow-lg overflow-hidden">
          <img src={image1} alt="Outlet" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h4 className="text-4xl font-semibold mb-2">Outlet</h4>
            <p className="mb-4 text-white">Extra 30% Selected  <br />Styles Off With Code <b>EXTRA30</b> </p>
        
            <button className="bg-white text-black font-bold py-2 px-4  hover:bg-gray-100 transition duration-300">
              Shop Outlet
            </button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 pt-9'>
        <div className='grid grid-rows-3'>
        <div>
         <RedeemIcon/>
         <p className='text-lg font-medium'>Complimentary gift wrapping</p>
         <p className='text-sm'>All orders are lovingly packaged in our signature pink  <br /> branded box. </p>
        </div>
        </div>
        <div>
         <LocalShippingIcon/>
         <p className='text-lg font-medium'>Worldwide delivery</p>
         <p className='text-sm'>Worldwide delivery available, express delivery available to <br /> selected regions only.</p>
        </div>
        <div>
            <AssignmentReturnIcon/>
            <p className='text-lg  font-medium'>Easy online returns</p>
          <p className='text-sm'>Easy returns are offered for all online orders. Products can <br /> be exchanged for an alternative size.</p>
        </div>
      </div>
    </div>
  );
};

export default More;
