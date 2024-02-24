// @ts-nocheck
'use client'

import Image from "next/image";
import { register } from 'swiper/element/bundle';

import CarolImg from '../../../public/images/carol.jpg'
import CarolImg2 from '../../../public/images/carol-2.jpg'
import CarolImg3 from '../../../public/images/carol-3.jpg'

register();

export function PhotoCarousel() {
  return (
    <swiper-container
      slides-per-view="1"
      space-between="0"
      centered-slides="true"
      autoplay-delay="3000"
      effect="fade"
      class="border border-sand max-w-[340px]"
    >
      <swiper-slide>
        <Image src={CarolImg} alt='' className='max-w-[340px]' quality={100} />
      </swiper-slide>
      <swiper-slide>
        <Image src={CarolImg2} alt='' className='max-w-[340px]' quality={100} />
      </swiper-slide>
      <swiper-slide>
        <Image src={CarolImg3} alt='' className='max-w-[340px]' quality={100} />
      </swiper-slide>
    </swiper-container>
  );
}