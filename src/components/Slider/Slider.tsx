import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
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
    height: 3vw;
`
const StyledSliderContainer = styled.div`
    padding: 0 10px;  
    display: flex; 
    justify-content: space-between;
    align-items: center; 
    gap: 10px; 
`
const StyledTitle = styled.p`
    font-weight: bold;
    font-size: 1.3vw;
`
const StyledText = styled.p`
    padding: 0; 
    color: #3877ee; 
    font-size: 1.2vw;
    line-height: 24px; 
    padding-top: 15px;
`

export const Slider = ({slides}: {slides: TSlide[]}) => {
  return (
    <StyledSliderContainer>
        <StyledSliderBtn className="prevBtn">{`❮`}</StyledSliderBtn>
        
        <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            grabCursor={true}
            navigation={{
                disabledClass: 'visibility-hidden', 
                nextEl: '.nextBtn',
                prevEl: '.prevBtn',
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

        <StyledSliderBtn className="nextBtn">{`❯`}</StyledSliderBtn>
    </StyledSliderContainer>
  );
};
