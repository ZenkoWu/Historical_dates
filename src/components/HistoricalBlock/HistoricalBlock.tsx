import { useEffect, useState } from "react";
import { Slider } from "../Slider/Slider";
import { CIRCLE_DIAMETER } from "../../constants";
import { 
    StyledBtnContainer, 
    StyledBtnGroup, 
    StyledBtnTitle, 
    StyledCenter, 
    StyledCircle, 
    StyledContainer, 
    StyledEndDate, 
    StyledGradient, 
    StyledHeading, 
    StyledHeadingContainer, 
    StyledHorizontalLine, 
    StyledPadding, 
    StyledPeriod, 
    StyledPoint, 
    StyledPrevNextBtn, 
    StyledSection, 
    StyledSectionBtn, 
    StyledSectionTitle, 
    StyledStartDate, 
    StyledTextContainer, 
    StyledVerticalLine 
} from "./HistoricalBlockStyles";

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

                <StyledTextContainer>
                    <StyledHeadingContainer>
                        <StyledGradient>
                            <StyledHeading>Исторические даты</StyledHeading>
                        </StyledGradient>
                    </StyledHeadingContainer>
                   
                   <StyledBtnContainer>
                        <StyledBtnTitle>
                            0{section}/0{dateSections.length}
                        </StyledBtnTitle>

                        <StyledBtnGroup>
                            <StyledPrevNextBtn
                                disabled={section === 1} 
                                onClick={()=> {
                                    setSection((prev) => prev - 1)
                                    changePointsPosition(section - 1)
                                }}
                            >
                                {`❮`}
                            </StyledPrevNextBtn>

                            <StyledPrevNextBtn
                                disabled={section === dateSections.length}
                                onClick={()=> {
                                    setSection((prev) => prev + 1)
                                    changePointsPosition(section + 1) 
                                }}
                            >
                                {`❯`}
                            </StyledPrevNextBtn>
                        </StyledBtnGroup>
                    </StyledBtnContainer>
                    
                    <Slider slides={dateSections.find(el => el.id === section)!.events}/>
                </StyledTextContainer>  
            </StyledContainer>
        </StyledPadding>
    )
}

