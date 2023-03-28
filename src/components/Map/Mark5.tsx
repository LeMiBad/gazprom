import { useStore } from "effector-react"
import { FC } from "react"
import styled from "styled-components"
import { $competedObject, pickObject } from "../../store/askAnswers"
import { setCurPage } from "../../store/page"

const StyledSvg = styled.svg`
    position: absolute; 
    @media (min-width: 533px) and (max-width: 645px) {
        left: 187px;
        bottom: 206px;
    }
    @media (min-width: 645px) and (max-width: 768px) {
        left: 225px;
        bottom: 248px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        left: 280px;
        bottom: 303px;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        left: 375px;
        bottom: 403px;
    }
`

const Mark5: FC<{vis: boolean}> = ({vis}) => {
    const completedObjects = useStore($competedObject)


    const clickHandler = () => {
        pickObject('b')
        setCurPage(4)
    }

    return (
        <>
            {!completedObjects.b? <StyledSvg onClick={clickHandler} width="21" height="57" viewBox="0 0 21 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.0757 20.228C16.2904 19.8162 20.3938 15.454 20.3938 10.1334C20.3938 4.54081 15.86 0.00708008 10.2674 0.00708008C4.67475 0.00708008 0.141022 4.54081 0.141022 10.1334C0.141022 15.4936 4.30567 19.8811 9.57571 20.2366L9.57571 56.1353H11.0757L11.0757 20.228ZM6.01055 5.87391H14.5242V14.3933L10.274 10.1402V10.134H10.2678L6.01055 5.87391ZM10.2678 10.134H6.01056L10.274 14.3929V10.1402L10.2678 10.134Z" fill="white"/></StyledSvg>
            : 
            <StyledSvg width="21" height="57" viewBox="0 0 21 57" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.6274 20.228C16.8422 19.8162 20.9455 15.454 20.9455 10.1334C20.9455 4.54081 16.4118 0.00708008 10.8191 0.00708008C5.22648 0.00708008 0.692749 4.54081 0.692749 10.1334C0.692749 15.4936 4.8574 19.8811 10.1274 20.2366L10.1274 56.1353H11.6274L11.6274 20.228ZM6.56227 5.87391H15.076V14.3933L10.8257 10.1402V10.134H10.8195L6.56227 5.87391ZM10.8195 10.134H6.56229L10.8257 14.3929V10.1402L10.8195 10.134Z" fill="white" fillOpacity="0.5"/></StyledSvg>
            }
        </>
    )
}

export default Mark5