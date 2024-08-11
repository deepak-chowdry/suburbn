'use client'
import { useState, useEffect } from 'react';
import gsap from 'gsap'
const useCart = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subTotal = 0;
    const keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subTotal += parseInt(myCart[keys[i]].price) * parseInt(myCart[keys[i]].qty)
    }
    localStorage.setItem('cartTotal', JSON.stringify(subTotal))
  }

  const addToCart = (id, name, image, qty, price) => {
    const newCart = { ...cart };
    if (id in newCart) {
      newCart[id].qty += qty;
    } else {
      newCart[id] = { qty, name, image, price };
    }
    setCart(newCart);
    saveCart(newCart)
    gsap.fromTo('#cart-icon', {
      scale: 1.2,
      duration: 1,
      ease: 'elastic.out(1, 0.8)',
    }, {
      scale: 1,
      duration: 1,
      ease: 'elastic.out(1, 0.8)',
    });
    gsap.fromTo('#plusone', {
      opacity: 1,
      y: -5,
      duration: 1,
    }, {
      opacity: 0,
      y: -10,
      duration: 1,
    });
  };

  const removeFromCart = (id, name, image, qty, price,) => {
    let newCart = cart;
    if (id in cart) {
      newCart[id].qty = cart[id].qty - qty
    }
    if (newCart[id].qty <= 0) {
      delete newCart[id]
    }
    setCart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setCart({});
    saveCart({})
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export default useCart;
