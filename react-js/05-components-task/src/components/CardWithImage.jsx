import propTypes from 'prop-types';

const CardWithImage = ({ img, plan, desc, desc2 }) => {
    return (
        <div className="bg-[#40A2D8] text-white rounded m-4 p-2 hover:cursor-pointer hover:text-black hover:bg-[#F0EDCF]">
            <img src={img} alt="plan" className="p-2 rounded w-60 h-60 mx-auto" />
            <h4 className="text-4xl p-2 font-bold text-center">{plan }</h4>   
            <ul className="p-2 font-semibold space-y-2">
                <li>{desc}</li>
                <li>{ desc2}</li>
                </ul>
        </div>
    )
}

CardWithImage.propTypes = {
    img: propTypes.string,
    plan: propTypes.string,
    desc: propTypes.string,
    desc2 : propTypes.string
}

export default CardWithImage