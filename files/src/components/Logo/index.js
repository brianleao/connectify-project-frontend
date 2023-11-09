import {Link} from 'react-router-dom'
import LogoConnectify from '../../layout/images/logo_connectify.png'

function Logo () {
    return (
       <Link to="/">
            <img src={LogoConnectify}/>
       </Link>
    )
}

export default Logo