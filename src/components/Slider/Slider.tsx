import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';

type TSlide = {
    id: number,
    date: number,
    event: string
}

const StyledSliderBtn = styled.button`
    cursor: pointer;
    color: #3877ee;
    font-size: 1.5vw;
    background-color: white;
    border-radius: 50%; 
    border: 1px solid #e9e5e5;
    min-width: 3vw;
    min-height: 3vw;

    @media(max-width: 576px) {
        display: none;
    }
`
const StyledSliderContainer = styled.div`
    padding: 0 10px;  
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    gap: 10px; 

    @media(max-width: 576px) {
        order: 2;
        padding: 4vh 0 4vh 3vw;
    }
`
const StyledTitle = styled.p`
    font-weight: bold;
    font-size: 1.3vw;
    color: #3877ee; 

    @media(max-width: 576px) {
        font-size: 4vw; 
    }
`
const StyledText = styled.p`
    padding: 0; 
    color: #42567a; 
    font-size: 1.2vw;
    line-height: 1.5vw; 
    padding-top: 15px;

    @media(max-width: 576px) {
        font-size: 4vw;
        line-height: 4.2vw; 
        font-weight: 500;
    }
`

const StyledPagination = styled.div`
    visibility: hidden;

    @media (max-width: 576px) {
        visibility: visible;
        bottom: 7vh !important;
    }
`

export const Slider = ({slides}: {slides: TSlide[]}) => {
  return (
    <StyledSliderContainer>
        <StyledSliderBtn className="prevBtn">{`❮`}</StyledSliderBtn>
        
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            grabCursor={true}
            pagination={{clickable:true, el: '.swiper-pagination'}}
            navigation={{
                disabledClass: 'visibility-hidden', 
                nextEl: '.nextBtn',
                prevEl: '.prevBtn',
            }}
            breakpoints={{
                320:  {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                576: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }}
        >   
            {
                slides.map(el => (
                    <SwiperSlide key={el.id}>
                        <div>
                           <StyledTitle>{el.date}</StyledTitle>
                            <StyledText>{el.event}</StyledText>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <StyledPagination className="swiper-pagination"></StyledPagination>
        <StyledSliderBtn className="nextBtn">{`❯`}</StyledSliderBtn>
    </StyledSliderContainer>
  );
};
