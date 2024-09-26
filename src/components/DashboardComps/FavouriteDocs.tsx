import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import DoctorCard from './DoctorCard';
import { docsData } from '../AllData';

const FavouriteDocs = ({
  selected,
  handleSelected,
}: {
  selected: { [key: string]: boolean };
  // setSelected: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
  handleSelected: (id: string) => void;
}) => {
  const sliderRef = useRef<null | any>(null);

  const next = () => {
    sliderRef.current.swiper.slideNext();
  };

  const previous = () => {
    sliderRef.current.swiper.slidePrev();
  };

  return (
    <section className=' my-10 overflow-hidden'>
      <article className='flex justify-between pb-8'>
        <h4>Favorites ⭐️</h4>
        <div className='flex gap-3'>
          <button
            onClick={next}
            style={{ border: 'solid 1px !important' }}
            className='btnNext'
          >
            <div className='w-10 h-10 rounded-full grid place-items-center !border border-Grey2 text-Grey2 hover:bg-pryColor-100'>
              <FaArrowLeft />
            </div>
          </button>
          <button onClick={previous} className='btnPrev '>
            <div className='w-10 h-10 rounded-full grid place-items-center !border border-Grey2 text-Grey2 hover:bg-pryColor-100'>
              <FaArrowRight />
            </div>
          </button>
        </div>
      </article>
      <Swiper
        ref={sliderRef}
        slidesPerView={3.4}
        spaceBetween={10}
        navigation={{
          nextEl: '.btnNext',
          prevEl: '.btnPrev',
          disabledClass: 'swiper-button-disabled',
        }}
        scrollbar={{ el: '.swiper-scrollbar' }}
        modules={[Navigation, Pagination]}
        loop
        className='mySwiper '
      >
        {docsData
          .slice(0, 5)
          ?.map(
            ({
              id,
              imgUrl,
              hospitalName,
              logo,
              availability,
              location,
              insurance,
              Zip,
              fullName,
            }) => (
              <SwiperSlide
                key={id}
                className=''
                onClick={() => handleSelected(`${id}`)}
              >
                <DoctorCard
                  imgUrl={imgUrl}
                  hospitalName={hospitalName}
                  hospitalLogo={logo}
                  availability={availability}
                  location={location}
                  insurance={insurance}
                  zip={Zip}
                  fullName={fullName}
                  isSelected={selected[id]}
                  id={`${id}`}
                />
              </SwiperSlide>
            ),
          )}
      </Swiper>
    </section>
  );
};

export default FavouriteDocs;
