import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai"

const Star = ({stars}) => {
   const ratingStar = Array.from({length:5},(elem,index)=>{
        let number = index + 0.5;



    
    return <span className="relative mt-2 px-3 bg-slate-500  spacing-x-0 grid grid-cols-5  text-2xl  gap-0 text-orange-500 " key={index}>
        {
            stars>=index+1
            ?<FaStar className=" absolute   "></FaStar>
            :stars>=number
            ?<FaStarHalfAlt className=" absolute "></FaStarHalfAlt>
            :<AiOutlineStar className="absolute "></AiOutlineStar>
        }
    </span>
    })
    return (
        <div className="flex gap-0 ">
            <div className="flex justify-start gap-0 ">
                {ratingStar}
            </div>
        </div>
    )
};

export default Star;
