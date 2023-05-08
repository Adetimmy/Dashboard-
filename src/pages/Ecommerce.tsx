import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoPrimitiveDot } from "react-icons/go"
import { Stack, PieChart, Button, SparkLine, Dough, Trans } from '../component'
import { useStateContext } from '../context/ContentProvider'
import { SparklineAreaData, earningData } from '../data/dummy'

const Ecommerce = () => {
  const { currentColor } = useStateContext()
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button 
              color='white'
              bgColor={currentColor}
              text='Download'
              borderRadius='10px'
              size='md'
            />

          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
              <button type='button' style={{color:item.iconColor, backgroundColor:item.iconBg}} className='opacity-0.9 rounded-full p-4 hover:drop-shadow-xl '>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
            <div className='flex justify-between'>
              <p className='font-semibold text-xl'>Revenue Updates</p>
              <div className='flex items-center gap-4'>
                <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                  <span><GoPrimitiveDot/></span>
                  <span>Expense</span>
                </p>
                
                <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                  <span><GoPrimitiveDot/></span>
                  <span>Budget</span>
                </p>

              </div>
            </div>
            <div>
              <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                <div className='border-r-1 border-color m-4 pr-10'>
                  <div>
                    <p>
                      <span className='text-3xl font-semibold'>$93,438</span>
                      <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                    </p>
                    <p className='text-gray-500 mt-1'>Budget</p>
                  </div>

                  <div className='mt-8'>
                    <p>
                      <span className='text-3xl font-semibold'>$48,438</span>
                    
                    </p>
                    <p className='text-gray-500 mt-1'>Expense</p>
                  </div>

                  <div className='mt-5'>
                    <SparkLine
                      currentColor={currentColor}
                      id='line-sparkline'
                      type='Line'
                      height='80px'
                      width='250px'
                      data={SparklineAreaData}
                      color={currentColor}
                      marker={{
                        visible: ['All'],
                        size: 5, fill: 'white', border: { color: `${currentColor}`, width: 2
                    }}}
                    />
                  </div>

                  <div className='mt-10'>
                    <Button 
                      color='white'
                      bgColor= {currentColor}
                      text='Download Report'
                      borderRadius='10px'
                      size=''
                    />
                  </div>
                </div>

                <div>
                  <Stack
                    width='320px'
                    height='360px'
                  />
                </div>
               </div>
            </div>
        </div> 
      </div>
      <div className='flex justify-center items-center flex-col my-10 gap-8'>
            <div className='rounded-lg p-5' style={{background:`${currentColor}`}}>
              <div className='text-white flex flex-row justify-between mt-5'>
                <h4 className='text-xl font-semibold'>Earnings</h4>
                <div className='flex flex-col'>
                  <h4 className='text-xl font-semibold'>$63,448.78</h4>
                  <p className='text-xs font-thin self-end'>Monthly Revenue</p>
                </div>
              </div>
              <div className='mt-6 w-full flex justify-center'>
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="150px" type="Column" data={SparklineAreaData} width="380px" color="rgb(242, 252, 253)" />
              </div>
            </div>

            <div className='rounded-lg p-5 flex items-center justify-between dark:bg-secondary-dark-bg'>
              <div className='flex flex-col'>
                <h4 className='text-xl font-semibold dark:text-white'>$43,246</h4>
                <p className='text-xs font-bold text-gray-500'>yearly Sales</p>
              </div>
              <div>
                <Dough/>
              </div>        
            </div>
      </div>

      <div className='flex justify-center mt-7'>
        <Trans/>
      </div>
    </div>
  )
}

export default Ecommerce