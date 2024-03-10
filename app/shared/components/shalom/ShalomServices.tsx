'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconType } from 'react-icons';
import ShalomService from './ShalomService';
import { shalomServices } from '../../constants/shalom';

export interface Servicio {
  titulo: string;
  descripcion: string;
  id: number;
  icon: IconType;
  url: string;
}

export default function ShalomServices() {
  return (
    <section className="my-6">
      <div className=" pb-6">
        <h2 className="text-3xl font-semibold text-center uppercase">Conoce los envios</h2>
        <img src="/SHALOM-AEREO-1.png" alt="Shalom" className="mx-auto mt-4 w-[100px]" />
      </div>
      <div className="bg-[#E12326] mt-[100px] p-4 pb-40 ">
        <div className="max-w-[1400px] mx-auto">
          <Swiper
            className="-mt-[100px] -mb-[120px]"
            slidesPerView={5}
            spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {shalomServices.map((servicio) => (
              <SwiperSlide key={servicio.id}>
                <ShalomService servicio={servicio} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
