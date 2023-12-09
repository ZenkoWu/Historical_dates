import { useEffect, useState } from "react";
import styled from "styled-components";

type TSection = {
    id: number,
    title: string,
    dateStart: number,
    dateEnd: number,
    x: number, 
    y: number, 
    events: {
        id: number,
        date: number,
        event: string
    }[]
}
const CIRCLE_DIAMETER: number = 27

const StyledPadding = styled.div`
    padding-left: 18%;
    padding-right: 9%;
`
const StyledContainer = styled.div`
    position: relative;
    border-left: 1px solid #e9ebf1;
    border-right: 1px solid #e9ebf1;
    height: 100vh;
`
const StyledVerticalLine = styled.div`
    position: absolute;
    left: 50%;
    height: 100vh;
    border-left: 1px solid #e9ebf1;
`
const StyledHorizontalLine = styled.div`
    position: absolute;
    top: 45%;
    width: 100%;
    border-top: 1px solid #e9ebf1;
`
const StyledCenter = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0; 
    bottom: 0;
    width: 0;
    height: 0;
    margin: auto;

    @media (max-width: 576px) {
        display: none;
    }
`

const StyledCircle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0; 
    bottom: 0;
    margin: auto;
    height: ${CIRCLE_DIAMETER}vw;
    width: ${CIRCLE_DIAMETER}vw;
    border: 1px solid #d4dee3;
    border-radius: 50%; 

    @media (max-width: 576px) {
        display: none;
    }
`
const StyledPoint = styled.div<{left: number, top: number, isBorder: boolean}>`
    position: absolute;
    z-index: 1000;
    left: ${({left}) => left}px;
    top: ${({top}) => top}px;
    display: flex; 
    align-items: center;
    gap: 10px;
    border:  ${({isBorder}) => isBorder ? '3px solid grey': 'none'};
    border-radius: 50%;

    &:hover {
        border: none !important;
        width: 10px;
        transition: all 0.5s ease-out;
    }

    &:hover .section {
        display: flex;
        transition: transform 4s ease-in-out 3s;
    }

`
const StyledSection = styled.div<{isDisplay: boolean}>`
    position: absolute;  
    top: -20px; 
    left: -20px; 
    display: ${({isDisplay}) =>  isDisplay ? 'flex' : 'none'}; 
    align-items: center; 
    gap: 15px; 
`
const StyledSectionBtn = styled.button`
    width: 3vw;
    height: 3vw;  
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid grey;
    background-color: #f4f5f9;
`
const StyledSectionTitle = styled.h4`
    fontSize: 1.2vw;
`
const StyledPeriod = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0; 
    bottom: 0;
    width: 50vw;
    height: 15vh; 
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: auto;
    z-index: 2;
    font-size: 9vw; 
`
const StyledStartDate = styled.p`
    color: #1515b2;
`
const StyledEndDate = styled.p`
    color: #ea2c4d;
`

const setPosition = (
    diameter: number, 
    data: TSection[], 
    id?: number, 
    coefficient: number = 0.335, // 0,5
    pointsCount: number = 6
) => { 
    const D = Math.floor(diameter * window.innerWidth / 100)
    const  R = D / 2;
    const POINT_SIZE = 3;

    return data.map((el, i) => {
        const radian = (id ? i - id + 1 : i) * (2 * Math.PI / pointsCount) - coefficient * Math.PI; 
        
        const x = R * Math.cos(radian) - POINT_SIZE / 2 ;
        const y = R * Math.sin(radian) - POINT_SIZE / 2 ;
        return {...el, x, y}
    })
}

export const HistoricalBlock = ({
    sections, 
    startPointId
}: {
    sections: TSection[], 
    startPointId: number
}) => { 
    const [dateSections, setdateSections] = useState(sections)
    const [section, setSection] = useState<number>(startPointId)

    useEffect(()=> {
        setdateSections(() => setPosition(CIRCLE_DIAMETER, sections))
    }, [])

    const changePointsPosition = (id?: number) => 
        setdateSections(() => setPosition(CIRCLE_DIAMETER, sections, id))

    const onResize = () => changePointsPosition()

    useEffect(()=> {
        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);
    }, [window.innerWidth])


    const onSectionBtnClick = (id: number) => {
        setSection(id)
        changePointsPosition(id)
    }

    return (
        <StyledPadding>  
            <StyledContainer>
           
                <StyledVerticalLine/>
                
                <StyledHorizontalLine>
                    <StyledPeriod>
                        <StyledStartDate>
                            {dateSections.find(el => el.id === section)?.dateStart}
                        </StyledStartDate>

                        <StyledEndDate>
                            {dateSections.find(el => el.id === section)?.dateEnd} 
                        </StyledEndDate>
                    </StyledPeriod>

                    <StyledCenter>
                            {
                                dateSections.map(el => (
                                    <StyledPoint 
                                        top={el.y} 
                                        left={el.x} 
                                        isBorder={el.id !== section}
                                    >
                                        <StyledSection 
                                            className="section" 
                                            isDisplay={el.id === section}
                                        >
                                            <StyledSectionBtn onClick={()=> onSectionBtnClick(el.id)}>
                                                {el.id}
                                            </StyledSectionBtn>
                                            <StyledSectionTitle>{el.title}</StyledSectionTitle>
                                        </StyledSection>
                                    </StyledPoint>
                                ))
                            }
                    </StyledCenter>

                    <StyledCircle/>
                </StyledHorizontalLine>
                   
            </StyledContainer>
        </StyledPadding>
    )
}

