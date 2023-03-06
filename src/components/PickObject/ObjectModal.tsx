import { FC } from "react"
import styled from "styled-components"
import Cross from "../UI/Cross/Cross"
import GreenButton from "../UI/GreenButton/GreenButton"

const ModalPhone = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1.5px);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 100%; 
    height: 100%;
    filter: drop-shadow(0px 4px 20px rgba(21, 184, 173, 0.8));
    display: flex;
    justify-content: center;
    align-items: center;
`

const Modal = styled.div`
    position: relative;
    width: 70%;
    height: 75%;
    background: linear-gradient(90deg, #BEE4FA 32.87%, rgba(190, 228, 250, 0) 60.25%);
`

const ModalImg = styled.img`
    position: relative; 
    width: 100%;
    height: 100%; 
    z-index: -1;
`

const ModalName = styled.h1`
    position: absolute;
    left: 3%;
    top: 3%;
    font-size: 16px;
    color: #1570B8;
`
const ModalDesk = styled.h1`
    position: absolute;
    left: 3%;
    bottom: 3%;
    font-size: 14px;
    color: #1570B8;
    width: 40%;
`


const CrossWrapper = styled.div`
    position: absolute;
    right: 1%;
    top: 2%;
`

const ButtonWrapper = styled.div`
    position: absolute;
    right: 5%;
    bottom: -25px;
`


interface IObjectModal {
    close: () => void
    data: {
        name: string
        desk: string
        image: string
        smallImage: string
        backImage: string
    }
}


const ObjectModal: FC<IObjectModal> = ({close, data}) => {
    return <ModalPhone>
                <ModalWrapper>
                    <Modal>
                        <ModalImg alt='dw' src={data.backImage}></ModalImg>
                        <CrossWrapper><Cross func={close}/></CrossWrapper>
                        <ModalName>{data.name}</ModalName>
                        <ModalDesk>{data.desk}</ModalDesk>
                        <ButtonWrapper>
                            <GreenButton func={() => {}}>Перейти</GreenButton>
                        </ButtonWrapper>
                    </Modal>
            </ModalWrapper>
    </ModalPhone>
}

export default ObjectModal