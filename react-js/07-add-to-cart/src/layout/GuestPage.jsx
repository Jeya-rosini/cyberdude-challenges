import TheNav from '../components/TheNavBar';
import {Outlet} from 'react-router-dom'

const GuestPage = () => {
    return (
        <>
            <TheNav />
            <Outlet/>
        </>
    )
}

export default GuestPage