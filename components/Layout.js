import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      {/* <h1>This is common layout</h1> */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
