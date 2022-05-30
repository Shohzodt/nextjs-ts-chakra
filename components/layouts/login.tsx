import AppNavbar from '../AppNavbar'


const DefaultLayout = ({ children }) => {
    return (
        <>
            <AppNavbar />
            {children}
        </>
    )
}

export default DefaultLayout