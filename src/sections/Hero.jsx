import Button from "../Components/Button"
import BatCard from "../Components/BatCard"
import { statistics, bats } from "../Constants"
import { arrowRight } from "../assets/icons"

import { bat1 } from "../assets/images"
import { useState } from "react"

const Hero = () => {
  const [bigBatImg, setBatImg] = useState(bat1);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28 ml-20'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>


        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Cricket</span> Bats
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish New-Balance & SS arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigBatImg}
          alt='shoe collection'
          width={300} // Adjusted width
          height={100} // Adjusted height
          className='object-contain relative z-10 rounded-full'
    
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-4'>
          {bats.map((image, index) => (
            <div key={index}>
              <BatCard
                index={index}
                imgURL={image}
                changeBigBatImage={(bat) => setBatImg(bat)}
                bigBatImg={bigBatImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
