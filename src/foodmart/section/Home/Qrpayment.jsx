import React from 'react';
import QRCode from 'react-qr-code';
import { useCart } from 'react-use-cart';

const QrCodeTotal = () => {
  const { cartTotal } = useCart();

  return (
    <div>
      <QRCode value={`Total Price: ${cartTotal}`} size={128} />
    </div>
  );
};

export default QrCodeTotal;