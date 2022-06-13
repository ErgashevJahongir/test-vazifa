import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <footer>
                <a href="https://t.me/JahongirErgashev" className="footer">
                    Joha Eragshev
                </a>
            </footer>
        </>
    );
};

export default Layout;
