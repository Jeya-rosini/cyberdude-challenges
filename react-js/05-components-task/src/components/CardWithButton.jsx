import ButtonText from "./ButtonText";
import propTypes from 'prop-types';

const CardWithButton = ({img = "https://i.redd.it/5ilwz1vxv50b1.png" , title="untitled" , subtitle="(unknown)"}) => {
// console.log(props);
    return (
        <div>
            <div className="bg-[#F0EDCF] m-4 p-2 flex flex-col space-y-2 rounded">
                <div>
                <img src={img} alt="flag" className="rounded w-full" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold">{title} <small className="italic font-semibold text-xl">{subtitle}</small></h3>
               </div>
                <div className="text-lg italic">
                <p>Click here to learn American English. And get rock </p>
            </div>
               <ButtonText/>
           </div>
        </div>
    )
}

CardWithButton.propTypes = {
    title: propTypes.string,
    img: propTypes.string,
    subTitle : propTypes.string
}

export default CardWithButton