'use client';

import { Carousel } from 'flowbite-react';

function carousel() {
  return (
    <div className="h-80">
      <Carousel pauseOnHover>
        <img src="https://www.bhmpics.com/downloads/hiking-wallpaper-/11.5418340-mountain-sunset-pastel-adventure-outdoor-cloud-sky-hiking-landscape-mountain-range-person-hike-explore-wallpaper-nature-wallpapers-nature-backgrounds-evening-altitude-horizon-colorful-free-sto.jpg" alt="wander image" className="object-cover" />
        <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg" alt="wander image" className="object-cover"></img>
            <img src="https://mrwallpaper.com/images/hd/foggy-forest-landscape-p82o7yjoyi1pxw8a.jpg" alt="wander image" className="object-cover"></img>
            <img src="https://wallpaperswide.com/download/spectacular_desert_landscape-wallpaper-3840x2160.jpg" alt="wander image" className="object-cover"></img>
            <img src="https://i.natgeofe.com/n/2e1b6292-50e6-48ed-86bf-6329bcd0bb38/0143_AlUla_Moments_Desert_X_HP-Edit_2x1.jpg" alt="wander image" className="object-cover"></img>
      </Carousel>
    </div>
  );
}

export default carousel