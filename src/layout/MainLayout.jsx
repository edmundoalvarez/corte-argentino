import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PropTypes from 'prop-types';

function MainLayout({ children }) {
    return (
        <>
            <Header/>
            <main className="main">{children}</main>
            <Footer />
        </>
    );
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default MainLayout;
