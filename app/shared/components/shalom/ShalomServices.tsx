'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconType } from 'react-icons';
import ShalomService from './ShalomService';
import { shalomServices } from '../../constants/shalom';
import { ButtonRed } from '../ui/Buttons';
import InfoTop from '../InfoTop';

export interface Servicio {
  titulo: string;
  descripcion: string;
  id: number;
  icon: IconType;
  url: string;
}

export default function ShalomServices() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <section className="">
      <div className="">
        <InfoTop>
          <div className="flex items-center justify-center flex-wrap gap-4 text-center">
            <h2 className="text-3xl font-semibold text-center uppercase">
              Envios por <strong className="text-[#E12326]">shalom</strong>
            </h2>
            <img src="/SHALOM-AEREO-1.png" alt="Shalom" className="w-[50px]" />
            <ButtonRed className="rounded-full w-[120px]" onClick={handleShow}>
              {show ? 'Ocultar' : 'Ver más'}
            </ButtonRed>
          </div>
        </InfoTop>
      </div>
      {show && (
        <div className="bg-[#E12326] mt-[100px] p-4 pb-40 animate-fade-in">
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
      )}
    </section>
  );
}
