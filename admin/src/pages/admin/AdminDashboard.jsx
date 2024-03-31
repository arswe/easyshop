import React from 'react'
import Chart from 'react-apexcharts'
import { Helmet } from 'react-helmet-async'
import { FaCartShopping, FaUsers } from 'react-icons/fa6'
import { MdCurrencyExchange, MdProductionQuantityLimits } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  const state = {
    series: [
      {
        name: 'Orders',
        data: [23, 34, 45, 56, 76, 34, 23, 76, 87, 78, 34, 45],
      },
      {
        name: 'Revenue',
        data: [67, 39, 45, 56, 90, 56, 23, 56, 87, 78, 67, 78],
      },
      {
        name: 'Sellers',
        data: [34, 39, 56, 56, 80, 67, 23, 56, 98, 78, 45, 56],
      },
    ],
    options: {
      color: ['#181ee8', '#181ee8'],
      plotOptions: { radius: 30 },
      chart: { background: 'transparent', foreColor: '#d0d2d6' },
      dataLabels: { enabled: false },
      strock: {
        show: true,
        curve: ['smooth', 'straight', 'stepline'],
        lineCap: 'butt',
        colors: '#f0f0f0',
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      legend: { position: 'top' },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          options: {
            plotOptions: { bar: { horizontal: true } },
            chart: { height: '550px' },
          },
        },
      ],
    },
  }

  return (
    <>
      <Helmet>
        <title> admin Dashboard</title>
      </Helmet>
      <div className='px-2 md:px-7 py-5'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
          <div className='flex justify-between items-center p-5 bg-[#f8d8d8] rounded-md gap-3'>
            <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
              <h2 className='text-3xl font-bold'>$1258</h2>
              <span className='text-md font-medium'>Total Salse</span>
            </div>
            <div className='w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
              <MdCurrencyExchange className='text-[#fae8e8] shadow-lg' />
            </div>
          </div>

          <div className='flex justify-between items-center p-5 bg-[#f1b8f5] rounded-md gap-3'>
            <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
              <h2 className='text-3xl font-bold'>25</h2>
              <span className='text-md font-medium'>Products</span>
            </div>

            <div className='w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl'>
              <MdProductionQuantityLimits className='text-[#fae8e8] shadow-lg' />
            </div>
          </div>

          <div className='flex justify-between items-center p-5 bg-[#c2fac4] rounded-md gap-3'>
            <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
              <h2 className='text-3xl font-bold'>125</h2>
              <span className='text-md font-medium'>Sellers</span>
            </div>

            <div className='w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl'>
              <FaUsers className='text-[#fae8e8] shadow-lg' />
            </div>
          </div>

          <div className='flex justify-between items-center p-5 bg-[#bef3fa] rounded-md gap-3'>
            <div className='flex flex-col justify-start items-start text-[#5c5a5a]'>
              <h2 className='text-3xl font-bold'>85</h2>
              <span className='text-md font-medium'>Orders</span>
            </div>

            <div className='w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl'>
              <FaCartShopping className='text-[#fae8e8] shadow-lg' />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-wrap mt-7'>
          <div className='w-full lg:w-7/12 lg:pr-3'>
            <div className='w-full bg-[#07102c] p-4 rounded-md'>
              <Chart options={state.options} series={state.series} type='bar' height={350} />
            </div>
          </div>

          <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
            <div className='w-full bg-[#07102c] p-4 rounded-md text-[#d0d2d6]'>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-lg text-[#f1f2f5] pb-3'>Recent Seller Message</h2>
                <Link className='font-semibold text-sm text-[#f3f3f5]'>View All</Link>
              </div>

              <div className='flex flex-col gap-2 pt-6 text-[#d0d2d6]'>
                <ol className='relative border-1 border-slate-600 ml-4'>
                  <li className='mb-3 ml-6'>
                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                      <img
                        src='http://localhost:3000/images/admin.jpg'
                        alt='admin'
                        className='w-full h-full rounded-full shadow-lg'
                      />
                    </div>

                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                      <div className='flex justify-between items-center mb-2'>
                        <Link>admin</Link>
                        <time> 2 day ago</time>
                      </div>

                      <div>
                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                          m.message
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className='mb-3 ml-6'>
                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                      <img
                        src='http://localhost:3000/images/admin.jpg'
                        alt='admin'
                        className='w-full h-full rounded-full shadow-lg'
                      />
                    </div>

                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                      <div className='flex justify-between items-center mb-2'>
                        <Link>admin</Link>
                        <time> 2 day ago</time>
                      </div>

                      <div>
                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800'>
                          m.message
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* Add this div */}
        <div className='w-full p-4 bg-[#07102c] rounded-md mt-6'>
          <div className='flex justify-between items-center border-b-2 border-cyan-200'>
            <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3 '>Recent Orders</h2>
            <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
          </div>

          <div className='relative overflow-x-auto'>
            <table className='w-full text-sm text-left text-[#d0d2d6]'>
              <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                <tr>
                  <th scope='col' className='py-3 px-4'>
                    Order Id
                  </th>
                  <th scope='col' className='py-3 px-4'>
                    Price
                  </th>
                  <th scope='col' className='py-3 px-4'>
                    Payment Status
                  </th>
                  <th scope='col' className='py-3 px-4'>
                    Order Status
                  </th>
                  <th scope='col' className='py-3 px-4'>
                    Active
                  </th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4].map((order, index) => (
                  <tr className='border-b border-slate-700' key={index}>
                    <td className='py-3 px-4'>#1234</td>
                    <td className='py-3 px-4'>$125</td>
                    <td className='py-3 px-4'>Paid</td>
                    <td className='py-3 px-4'>Delivered</td>
                    <td className='py-3 px-4'>
                      <Link to='/admin/dashboard' className='bg-[#f8d8d8] text-[#fa0305] px-3 py-1 rounded-md'>
                        view
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminDashboard
