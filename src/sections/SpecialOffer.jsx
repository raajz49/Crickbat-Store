import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../Components/Button"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10">
      <div className="flex-1 ">
      <img 
      src={offer}
      width={773}
      height={687}
      className="object-contain w-full  "
      />
       </div>
      
       <div className="flex flex-1 flex-col">
      
      <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
         
          <span className='text-coral-red '> Special</span> Offers
         
        </h2>
        <p className='mt-4 lg:max-w-lg info-text '>
        Shoes, as essential accessories, blend fashion with functionality,
         offering both style and comfort to individuals worldwide.
        </p>
        <p className="mt-6 lg:max-w-lg">From classic designs to innovative technologies,
         the diverse range of shoes caters to every occasion and personal preference, 
        ensuring that every step is taken with confidence and flair.
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
