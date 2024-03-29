import { useStore } from "effector-react"
import { FC } from "react"
import styled from "styled-components"
import { $competedObject, pickObject } from "../../store/askAnswers"
import { setCurPage } from "../../store/page"

const StyledSvg = styled.svg`
    position: absolute; 
    @media (min-width: 533px) and (max-width: 645px) {
        left: 178px;
        bottom: 206px;
    }
    @media (min-width: 645px) and (max-width: 768px) {
        left: 210px;
        bottom: 248px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        left: 264px;
        bottom: 303px;
    }
    @media (min-width: 1024px) {
        left: 355px;
        bottom: 403px;
    }
`

const Mark4: FC<{vis: boolean}> = ({vis}) => {
    const completedObjects = useStore($competedObject)

    const clickHandler = () => {
        pickObject('h')
        setCurPage(4)
    }

    return (
        <>
            {!completedObjects.h? <StyledSvg onClick={clickHandler} width="21" height="37" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.4022 20.9195C16.6174 20.5082 20.7213 16.1458 20.7213 10.8249C20.7213 5.23221 16.1876 0.698486 10.5949 0.698486C5.0023 0.698486 0.468567 5.23221 0.468567 10.8249C0.468567 16.1846 4.63264 20.5719 9.90216 20.9279L9.90216 36.1354H11.4022L11.4022 20.9195ZM15.1869 10.8252C15.1869 8.28582 13.1242 6.23809 10.5967 6.23809C8.06921 6.23809 6.00479 8.29997 6.00479 10.8252C6.00479 13.3521 8.05331 15.4122 10.595 15.4122C13.1366 15.4122 15.1851 13.3645 15.1851 10.8252H15.1869ZM10.5967 12.8198C9.49381 12.8198 8.59946 11.9251 8.59946 10.8252C8.59946 9.72348 9.49381 8.83047 10.5967 8.83047C11.6996 8.83047 12.594 9.72525 12.594 10.8252C12.594 11.9268 11.6996 12.8198 10.5967 12.8198Z" fill="white"/></StyledSvg>
            : 
            <StyledSvg width="21" height="37" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.9539 20.9195C16.1691 20.5082 20.273 16.1458 20.273 10.8249C20.273 5.23221 15.7393 0.698486 10.1467 0.698486C4.55402 0.698486 0.0202942 5.23221 0.0202942 10.8249C0.0202942 16.1846 4.18437 20.5719 9.45389 20.9279L9.45389 36.1354H10.9539L10.9539 20.9195ZM14.7386 10.8252C14.7386 8.28582 12.676 6.23809 10.1485 6.23809C7.62094 6.23809 5.55652 8.29997 5.55652 10.8252C5.55652 13.3521 7.60503 15.4122 10.1467 15.4122C12.6883 15.4122 14.7369 13.3645 14.7369 10.8252H14.7386ZM10.1485 12.8198C9.04554 12.8198 8.15119 11.9251 8.15119 10.8252C8.15119 9.72348 9.04554 8.83047 10.1485 8.83047C11.2514 8.83047 12.1457 9.72525 12.1457 10.8252C12.1457 11.9268 11.2514 12.8198 10.1485 12.8198Z" fill="white" fillOpacity="0.5"/></StyledSvg>
            }
        </>
    )
}

export default Mark4