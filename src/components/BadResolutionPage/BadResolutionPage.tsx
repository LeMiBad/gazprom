import styled from "styled-components"
import GradientBackground from "../UI/GradientBackground/GradientBackground"
import background from './backgound.jpg'
import Mobile from "./Mobile"
import z from "./z.png"
import c from "./c.png"
import LOGOTIP from "../UI/GazpromName/LOGOTIP"


const Name = styled.div`
    padding-top: 13vh;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    width: 100%;
    height: 5vh;
    box-sizing: border-box;
    div {
        height: 1px;
        background-color: white;
    }
    h1 {
        font-size: 20px;
        left: 6%;
        padding: 0 15px;
    }
    div:nth-child(1) {
        width: 5%;
    }
    div:nth-child(3) {
        flex: 1 1;
    }
`

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BadResolutionPage = () => {
    return (
        <GradientBackground gradient={`url('${background}')`}>
            <div style={{position: 'absolute', background: 'linear-gradient(180deg, #15B8AD -9.43%, rgba(21, 112, 184, 0.49) 41.3%, rgba(7, 29, 47, 0.7) 100%)', width: '100%', height: '100vh', zIndex: -1}}></div>
            <img style={{position: "absolute", top: 0, right: 0, width: '80%'}} src={c}></img>
            <img style={{position: "absolute", bottom: 0, left: 0, width: '80%'}} src={z}></img>
            <Wrapper>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 10}}>
                    <p style={{fontWeight: 600, fontSize: 16, width: '70%', color: 'white'}}>Переверни экран телефона горизонтально и продолжай квест ;)</p>
                    <Mobile/>
                </div>
            </Wrapper>
            <Name>
                <div></div>
                <LOGOTIP pad={1.5} />
                <div></div>
            </Name>
        </GradientBackground>
    )
}

export default BadResolutionPage