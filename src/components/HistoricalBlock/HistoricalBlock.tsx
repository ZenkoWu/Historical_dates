import styled from "styled-components";

type TSections = {
    id: number,
    title: string,
    dateStart: number,
    dateEnd: number,
    events: {
        id: number,
        date: number,
        event: string
    }[]
}[]

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
    height: 27vw;
    width: 27vw;
    border: 1px solid #d4dee3;
    border-radius: 50%; 

    @media (max-width: 576px) {
        display: none;
    }
`
export const HistoricalBlock = ({sections}: {sections: TSections}) => { 

    
    return (
        <StyledPadding>  
            <StyledContainer>
           
                <StyledVerticalLine/>
                
                <StyledHorizontalLine>
                    <StyledCenter>
                            
                    </StyledCenter>
                    <StyledCircle/>
                </StyledHorizontalLine>
                   
            </StyledContainer>
        </StyledPadding>
    )
}

