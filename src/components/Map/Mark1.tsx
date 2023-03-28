import { useStore } from "effector-react"
import { FC } from "react"
import styled from "styled-components"
import { $competedObject, pickObject } from "../../store/askAnswers"
import { setCurPage } from "../../store/page"

const StyledSvg = styled.svg`
    position: absolute; 
    @media (min-width: 533px) and (max-width: 645px) {
        left: 140px;
        bottom: 50px;
    }
    @media (min-width: 645px) and (max-width: 768px) {
        left: 168px;
        bottom: 60px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        left: 211px;
        bottom: 73px;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        left: 285px;
        bottom: 100px;
    }
`

const Mark1: FC<{vis: boolean}> = ({vis}) => {
    const completedObjects = useStore($competedObject)

    

    const clickHandler = () => {
        pickObject('o') 
        setCurPage(4)
    }

    return (
        <>
            {!completedObjects.o? <StyledSvg onClick={clickHandler} width="21" height="41" viewBox="0 0 21 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.055 20.429C16.9476 19.7141 20.7044 15.5006 20.7044 10.4096C20.7044 4.81693 16.1707 0.283203 10.5781 0.283203C4.98542 0.283203 0.451691 4.81693 0.451691 10.4096C0.451691 15.9945 4.97294 20.5234 10.555 20.5359L10.555 40.1351H12.055L12.055 20.429ZM11.0504 8.17146L8.81473 10.4099L11.0504 12.65L8.81473 14.8885H8.33726H6.58082H6.10336L8.33726 12.65L6.10336 10.4099L8.33726 8.17146L6.10336 5.93131H6.58082H8.33726H8.81473L11.0504 8.17146ZM15.0547 8.17098L12.819 5.93083H12.3416H10.5713H10.0939L12.3416 8.17098L10.0939 10.4094L12.3416 12.6496L10.0939 14.888H10.5713H12.3416H12.819L15.0547 12.6496L12.819 10.4094L15.0547 8.17098Z" fill="white"/></StyledSvg>
            : 
            <StyledSvg width="21" height="41" viewBox="0 0 21 41" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.6064 20.4293C16.499 19.7143 20.2558 15.5008 20.2558 10.4098C20.2558 4.81718 15.7221 0.283447 10.1294 0.283447C4.53681 0.283447 0.00308228 4.81718 0.00308228 10.4098C0.00308228 15.9948 4.52433 20.5237 10.1064 20.5362L10.1064 40.1354H11.6064L11.6064 20.4293ZM10.6017 8.17171L8.36612 10.4101L10.6017 12.6503L8.36612 14.8887H7.88866H6.13221H5.65475L7.88866 12.6503L5.65475 10.4101L7.88866 8.17171L5.65475 5.93155H6.13221H7.88866H8.36612L10.6017 8.17171ZM14.6061 8.17122L12.3704 5.93107H11.893H10.1227H9.64527L11.893 8.17122L9.64527 10.4097L11.893 12.6498L9.64527 14.8882H10.1227H11.893H12.3704L14.6061 12.6498L12.3704 10.4097L14.6061 8.17122Z" fill="white" fillOpacity="0.5"/></StyledSvg> 
            }
        </>
    )
}

export default Mark1