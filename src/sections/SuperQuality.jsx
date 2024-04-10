import Button from "../Components/Button"
import { shoe8 } from "../assets/images"


const SuperQuality = () => {
  return (
    <section id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      
      <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We provide you
         
          <span className='text-coral-red '> Super</span> 
          <span className='text-coral-red '> Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text '>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.jasssbkdabsdbasjsabik 
          sdhasdvias
          ashasd
        </p>
        <p className="mt-6 lg:max-w-lg">jdbasbkjabksdjb
        ajbasabksbk sajhdvas shjdvad svashj
        savasncjbsdcb shcja
        ds
        </p>

      <div className="mt-11 ">
      <Button label='View Detail'  />
      </div>
      
      </div>
      <div className=" flex-1 flex justify-center items-center">
        <img 
        src={shoe8}
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain"
        />
      </div>

    </section>
  )
}

export default SuperQuality
