
import background from "../assets/image 1.png"
const HeroSection = () => {
    return (
      <div className='max-w-[1100px] mx-auto p-9'>
      <div className='max-h-[530px] relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full text-black-200 max-h-[530px] bg-white/50 flex flex-col justify-center'>
              <h1 className='text-4xl sm:text-5xl lg:text-7xl text-center tracking-wide font-semibold mt-12'>  Transforming Spaces Crafting Comfort</h1>
              <div className="flex justify-center my-10">
          <a href="#" className="bg-black text-white py-3 px-14 mx-3 rounded-[30px]">
             Shop now
          </a>
          <a href="#" className="py-3 px-20 mx-3 rounded-[30px] border">
            Sell
          </a>
      </div>
          </div>
          <img className='w-full max-h-[530px] object-cover rounded-[80px]' src={background} alt="" />
      </div>
  </div>
    )
  }
  a
  export default HeroSection
  