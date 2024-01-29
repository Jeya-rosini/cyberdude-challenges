import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    place: "Manali",
    desc: "  Where mountains speaks and the river sings",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/07/15031416/manali-feature-compressed.jpg",
  },
  {
    id: 2,
    place: "Chirrapunji",
    desc: "The rainest place all over the world",
    image:
      "https://images.saymedia-content.com/.image/t_share/MTc2MjkzNzc1NjIxMDM5Mjk0/the-wettest-place-on-earth-cherrapunji-india.jpg",
  },
  {
    id: 3,
    place: "Jaipur",
    desc: " The city of joy and happiness",
    image:
      "https://images.squarespace-cdn.com/content/v1/5941ea315016e13f28c9be78/1589571296472-GM8C34TN7ZGFSKL56QWG/Amer+Fort%2C+Jaipur%2C+India+1-watermarked.jpg",
  },
  {
    id: 4,
    place: "Chikmagalur",
    desc: "Trek through the clouds",
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/07/08085616/featured-compressed-2.jpg",
  },
];

const DestinationPage = () => {
  const MapData = data.map((place) => {
    return (
      <div className="flex justify-normal items-center space-x-4 p-2 rounded w-full hover:bg-[#ffd369]">
        <img
          src={place.image}
          alt={place.place}
          className="rounded w-32 h-32"
        ></img>
        <div className="space-y-2">
          <h4 className="text-2xl font-bold font-cabin tracking-wider">
            {place.place}
          </h4>
          <p className="italic font-cabin tracking-wider">{place.desc}</p>
          <button className="bg-[#393E46] p-2 rounded hover:bg-white hover:text-black text-white font-bold font-cabin tracking-wider">
            Navigate
          </button>
        </div>
      </div>
    );
  });
  return (
    <div className="m-10 bg-[url('https://www.creativefabrica.com/wp-content/uploads/2023/06/25/Hiking-Watercolor-Hikers-Clipart-PNG-Graphics-72948328-1.png')] bg-cover bg-no-repeat">
      <h4 className="text-3xl font-bold font-cabin text-center p-4 m-2 tracking-wider ">
        Your Destination is here
      </h4>

      <div className="grid grid-rows-4 bg-slate-200/75 rounded" key="{data.id}">
        {" "}
        {MapData}
      </div>
    </div>
  );
};

export default DestinationPage;
