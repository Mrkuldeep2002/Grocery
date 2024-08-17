import React from 'react';
import QRCode from 'react-qr-code';
import { useCart } from 'react-use-cart';

const QrCodeTotal = () => {
  const { cartTotal } = useCart();

  return (
    <div>
       <QRCode value={`upi://pay?pa=9929578931@paytm&pn=Intellemo&tn=cftrhwetaw4gta&am=${cartTotal}`}/>
      

    </div>
  );
};

export default QrCodeTotal;