import { arrowRight } from "../assets/icons"
import { offer, offerlast } from "../assets/images"
import Button from "../Components/Button"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
     <div className="flex-1">
  <img 
    src={offerlast}
    width={773}
    height={687}
    className="object-contain w-full rounded-full"
    alt="Offer Image"
  />
</div>

      
       <div className="flex flex-1 flex-col">
      
      <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
         
          <span className='text-coral-red '> Special</span> Offers
         
        </h2>
        <p className='mt-4 lg:max-w-lg info-text font-medium'>
        Cricket bats, indispensable equipment for players, harmoniously blend tradition with innovation,
         delivering both performance and style to cricket enthusiasts worldwide.
        </p>
        <p className="mt-6 lg:max-w-lg info-text text-slate-gray  ">From timeless designs to groundbreaking innovations,
         the wide array of cricket bats caters to every player's needs and preferences, 
        ensuring every stroke is executed with precision and style.
        ds
        </p>

      <div className="mt-11  flex flex-wrap gap-4">
      <Button label='Shop Now' iconURL={arrowRight} />
      <Button
       label='learnmore'
      backgroundColor="bg-white"
      borderColor="border-slate-gray"
      textColor="text-slate-gray"
      rounded="full"

      />
      </div>
      
      </div>
      
    </section>
    )
  }

export default SpecialOffer
