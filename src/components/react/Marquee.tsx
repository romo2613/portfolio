import Marquee from "react-fast-marquee";
import type { ComponentProps } from 'react';


export default function(props: ComponentProps<typeof Marquee>){
  return (
    <div>
      <Marquee {...props} className="z-10">
         • PHP • Laravel • Laravel Livewire • Java • JavaScript • ReactJS • NextJS • JQuery • TailwindCSS • DaisyUI • ShadcnUI • BootStrap • CSS • HTML • MySQL • Ubuntu Server • AWS • CloudFlare • NGINX • aaPanel • DevilBox - Docker LAMP development stack • Postman • VScode
      </Marquee>
    </div>
  )
}

