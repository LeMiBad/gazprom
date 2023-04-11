import { useStore } from "effector-react"
import { useState } from "react"
import styled from "styled-components"
import { $pickedObject } from "../../store/askAnswers"
import GreenButton from "../UI/GreenButton/GreenButton"
import Znak from "./Znak"

const GameRuleWrapper = styled.div`
    position: absolute;
    right: 5%;
    cursor: pointer;
    top: 9%;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #d9d9d970;
    display: flex;
    justify-content: center;
    align-items: center;
`

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
    width: 55%;
    height: auto;
    background: linear-gradient(357.3deg, #1570B8 15.18%, rgba(255, 255, 255, 0) 60%);
`

const ModalImg = styled.img`
    position: relative; 
    background: url('https://media.vogue.co.uk/photos/63c131bc8bd24239189e4e30/16:9/w_1856,h_1044,c_limit/MC_FLOWERS_YSL_01.png');
    width: 100%;
    height: 100%; 
    z-index: -1;
`

const ModalName = styled.h1`
    position: absolute;
    left: 3%;
    bottom: 3%;
    font-size: 16px;
    color: white;
    padding-bottom: 18px;
`
const ModalDesk = styled.h1`
    position: absolute;
    left: 3%;
    bottom: 30px;
    font-size: 14px;
    color: white;
    width: 80%;
`

const ButtonWrapper = styled.div`
    position: absolute;
    right: 5%;
    bottom: -25px;
    cursor: pointer;
`




const GameRule = () => {
    const pickedObject = useStore($pickedObject)
    const [isOpen, setIsOpen] = useState(true)

    const openHandler = () => setIsOpen(isOpen? false : true)


    return (
        <>
            {isOpen? 
            <ModalPhone>
                <ModalWrapper>
                    <Modal>
                        <ModalImg alt='dw' src={pickedObject.askPage.img}></ModalImg>
                        <ModalName></ModalName>
                        <ModalDesk>{pickedObject.askPage.text}</ModalDesk>
                        <ButtonWrapper>
                            <GreenButton func={openHandler}>Понятно</GreenButton>
                        </ButtonWrapper>
                    </Modal>
                </ModalWrapper>
            </ModalPhone>
            : 
            null}
            <GameRuleWrapper onClick={openHandler}>
                <Znak/>
            </GameRuleWrapper>
        </>
    )
}

export default GameRule