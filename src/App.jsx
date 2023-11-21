import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import { useSelector, useDispatch
} from 'react-redux';
import {  calculateTotals, getCartItems } from '../src/features/cart/cartSlice';
import {  openModal, closeModal } from '../src/features/modal/modalSlice';
import Modal from "./components/Modal";


function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
    
    // dispatch(closeModal(false));
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      {
        isOpen && (
          <Modal/>

        )
      }
      <Navbar />
      <CartContainer/>
    </main>
  )
}
export default App;
