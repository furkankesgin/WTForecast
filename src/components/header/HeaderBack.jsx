// styled components
import { HeaderBackStyle } from "../../styles/header/HeaderStyles" 

// statics
import { projectURL } from "../../statics/URLS";

const HeaderBack = () => {
    return (
        <HeaderBackStyle className="header">
            <header className="h3 mb-0">WTForecast</header>
            <p>WTForecast is an <a className="text-decoration-none" href={projectURL} target="_blank" rel="noreferrer">open source</a> weather application made with react.</p>
        </HeaderBackStyle>
    )
}

export default HeaderBack;
