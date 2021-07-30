// styled components
import { HeaderStyle } from "../../styles/header/HeaderStyles" 

// inner components
import HeaderFront from './HeaderFront'
import HeaderBack from './HeaderBack'

const Header = () => {
    return (
        <HeaderStyle className="header p-3 mb-3">
            <div className="flip-card">
                <div className="flip-card-wrap">
                    <HeaderFront />
                    <HeaderBack />
                </div>        
            </div>   
        </HeaderStyle>
    )
}

export default Header;
