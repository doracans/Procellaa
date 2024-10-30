import star from "../assets/Stars.png"
import profil from "../assets/Ellipse 1.png"
const RivewSection = () => {
    return (
        <div className="flex w-full justify-center py-11">
            <div className= "text-center">
            <p className="">
                "Procella's furniture combines quality craftsmanship and innovative design. The diverse collections offer <br />
                both style and functionality, creating an impressive blend. Highly recommended for those seeking a <br />
                transformative and comfortable living experience!"
            </p>
            <div className="flex justify-center">
            <img src={star} alt="bintang" className="py-6"  />
            </div>
            <div className="flex justify-center">
            <img src={profil} alt="profil" width={100} />
            </div>
            <p className="py-4 text-bold">Lucas Graham</p>
            </div>
            
        </div>
    )
}

export default RivewSection
