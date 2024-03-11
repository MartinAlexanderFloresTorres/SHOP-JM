'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ShalomService from '@shared/components/shalom/ShalomService';
import { shalomServices } from '@shared/constants/shalom';

export default function ShalomServices() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <section>
      {show && (
        <div className="bg-[#E12326] mt-[100px] p-4 pb-40 animate-fade-in">
          <div className="max-w-[1400px] mx-auto">
            <Swiper
              className="-mt-[100px] -mb-[120px]"
              slidesPerView={5}
              spaceBetween={10}
              breakpoints={{
                0: {
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
              {shalomServices.map((service) => (
                <SwiperSlide key={service.id}>
                  <ShalomService service={service} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </section>
  );
}
