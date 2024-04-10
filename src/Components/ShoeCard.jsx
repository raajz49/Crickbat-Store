

const ShoeCard = ({ imgURL, changeBigBatImage, bigBatImg }) => {
    const handleClick = () => {
      if (bigBatImg !== imgURL.bigBat) {
        changeBigBatImage(imgURL.bigBat);
      }
    };
  return (
    <div className={` border-2 rounded-xl
    ${bigBatImg===imgURL
    ? 'border-coral-red' 
:'border-trasparent'
} cursor-pointer max-sm:flex-1
    `}
    onClick={handleClick} >
      <div className='flex  justify-center item-center bg-card bg-center bg-cover 
      sm:w-40 sm:h-40 rounded-xl max:sm:p-4'>
        <img 
        src={ imgURL.thumbnail }
        alt="Bat Collection" 
        width={127}
        height={103}
        className="object-contain rounded-full"
        />
      </div>
    </div>
  )
} 

export default ShoeCard
