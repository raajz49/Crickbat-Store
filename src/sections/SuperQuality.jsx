import Button from "../Components/Button"
import { bat8} from "../assets/images"


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
        Discover the pinnacle of cricket bat craftsmanship, designed to enhance your performance and elevate your game.
         Experience unparalleled quality, comfort, and innovation for your active lifestyle.
        </p>
        <p className="mt-6 lg:max-w-lg font-palanquin info-text text-slate-400 ">
          Uncover the essence of excellence in cricket bats, 
          tailored to elevate your performance and redefine your game.
        </p>

      <div className="mt-11 ">
      <Button label='View Detail'  />
      </div>
      
      </div>
      <div className=" flex-1 flex justify-center items-center">
        <img 
        src={bat8}
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain rounded-full "
        />
      </div>

    </section>
  )
}

export default SuperQuality
