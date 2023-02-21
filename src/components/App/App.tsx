import { useStore } from "effector-react"
import { createGlobalStyle } from "styled-components"
import { $curPage } from "../../store/page"
import AskPage from "../AskPage/AskPage"
import StartPage from "../StartPage/StartPage"


const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        user-select: none;
        @media (max-width: 768px) {
            h1 {
                font-size: 20px !important;
            }
            
            p {
                font-size: 16px !important;
            }
        }
    }
`


export const App = () => {
    const curPage = useStore($curPage)
    const Pages = [<StartPage/>, <AskPage/>]

    
    return (
        <>
            <GlobalStyles/>
            {Pages[curPage]}
        </>
    )
}

export default App