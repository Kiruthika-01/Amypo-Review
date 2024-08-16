import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import ContactUs from './ContactUs';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Login from './Login';
import SecondNavbar from './SecondNavbar';
import Partywear from './Partywear';
import PartywearDetails from './PartywearDetails';
import Footer from './Footer';
import Summerwear from './Summerwear';
import Casualwear from './Casualwear';
import OurCollection from './OurCollection';
import { CartProvider } from './CartContext';
import PaymentDetails from './PaymentDetails';
import CasualwearDetails from './CasualwearDetails';
import SummerwearDetails from './SummerwearDetails';
import TraditionalwearDetails from './TraditioanlwearDetails';
import Cart from './Cart';
import AboutUs from './AboutUs';
import PaymentMethod from './PaymentMethod';
import GiftPage from './GiftPage';
import ReviewPage from './ReviewPage';
import HelpCenter from './HelpCenter';
import RewardsPage from './RewardsPage';
import MyWishlist from './MyWishList';
 import GPayPage from './GPayPage';
import AccountPage from './AccountPage';
import SuccessPage from './SuccessPage';
import Traditionalwear from './TraditionalWear';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <SecondNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/partywear" element={<Partywear />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/partywear/:id" element={<PartywearDetails />} />
          <Route path="/summerwear" element={<Summerwear />} />
          <Route path="/casualwear" element={<Casualwear />} />
          <Route path="/payment-method" element={<PaymentMethod/>} />
          <Route path="/casualwear/:id" element={<CasualwearDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ourcollection" element={<OurCollection />} />
          <Route path="/payment-details" element={<PaymentDetails />} />
          <Route path="/summerwear/:id" element={<SummerwearDetails />} />
          <Route path='/cart' element={<Cart/>}/>
        <Route path='/giftpage' element={<GiftPage/>}/>
        <Route path='/reviewpage' element={<ReviewPage/>}/>
        <Route path='/helpcenter' element={<HelpCenter/>}/>
        <Route path='/rewards' element={<RewardsPage/>}/>
        <Route path='/mywishlist' element={<MyWishlist/>}/>
        <Route path='/GPayPage' element={<GPayPage/>}/>
        <Route path="/accountuser" element={<AccountPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/traditionalwear" element={<Traditionalwear />} />
        <Route path="/traditionalwear/:id" element={<TraditionalwearDetails />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
};

export default App;
