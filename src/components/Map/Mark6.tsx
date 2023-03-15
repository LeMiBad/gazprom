import { useStore } from "effector-react"
import { FC } from "react"
import styled from "styled-components"
import { $competedObject, pickObject } from "../../store/askAnswers"
import { setCurPage } from "../../store/page"

const StyledSvg = styled.svg`
    position: absolute; 
    @media (max-width: 375px) {
        left: 106px;
        bottom: 91px;
    }
    @media (min-width: 375px) and (max-width: 425px) {
        left: 128px;
        bottom: 107px;
    }
    @media (min-width: 425px) and (max-width: 768px) {
        left: 146px;
        bottom: 122px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        left: 275px;
        bottom: 222px;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        left: 367px;
        bottom: 295px;
    }
    @media (min-width: 1440px) {
        left: 520px;
        bottom: 415px;
    }
`

const Mark6: FC<{vis: boolean}> = ({vis}) => {
    const completedObjects = useStore($competedObject)

    const clickHandler = () => {
        pickObject('z')
        setCurPage(4)
    }

    return (
        <>
            {!completedObjects.z? <StyledSvg onClick={clickHandler} width="22" height="37" viewBox="0 0 22 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.7471 20.9195C16.9623 20.5082 21.0662 16.1458 21.0662 10.8249C21.0662 5.23221 16.5325 0.698486 10.9398 0.698486C5.34721 0.698486 0.813477 5.23221 0.813477 10.8249C0.813477 16.1846 4.97755 20.5719 10.2471 20.9279L10.2471 36.1353H11.7471L11.7471 20.9195ZM13.0055 6.07747H15.688C15.688 8.70201 13.5687 10.8312 10.9392 10.8184C8.3244 10.8184 6.19048 8.70201 6.19048 6.07747L8.87296 6.07747C8.87296 7.21428 9.79821 8.13908 10.9392 8.13908C12.0802 8.13908 13.0055 7.21611 13.0055 6.07747ZM15.688 10.8313H13.0055C13.0055 11.9699 12.0802 12.8929 10.9392 12.8929C9.79821 12.8929 8.87296 11.9681 8.87296 10.8313H6.19048C6.19048 13.4558 8.3244 15.5722 10.9392 15.5722C13.554 15.5722 15.688 13.443 15.688 10.8313Z" fill="white"/></StyledSvg>
            : 
            <StyledSvg width="21" height="37" viewBox="0 0 21 37" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.2988 20.9195C16.514 20.5082 20.6179 16.1458 20.6179 10.8249C20.6179 5.23221 16.0842 0.698486 10.4916 0.698486C4.89894 0.698486 0.365208 5.23221 0.365208 10.8249C0.365208 16.1846 4.52928 20.5719 9.7988 20.9279L9.7988 36.1353H11.2988L11.2988 20.9195ZM12.5572 6.07747H15.2397C15.2397 8.70201 13.1204 10.8312 10.491 10.8184C7.87613 10.8184 5.74221 8.70201 5.74221 6.07747L8.42469 6.07747C8.42469 7.21428 9.34994 8.13908 10.491 8.13908C11.632 8.13908 12.5572 7.21611 12.5572 6.07747ZM15.2397 10.8313H12.5572C12.5572 11.9699 11.632 12.8929 10.491 12.8929C9.34994 12.8929 8.42469 11.9681 8.42469 10.8313H5.74221C5.74221 13.4558 7.87613 15.5722 10.491 15.5722C13.1058 15.5722 15.2397 13.443 15.2397 10.8313Z" fill="white" fillOpacity="0.5"/></StyledSvg>
            }
        </>
    )
}

export default Mark6