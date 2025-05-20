// import React, { Component } from "react";
// import { useSeerbitPayment } from "seerbit-reactjs"
// import { PUBLIC_KEY } from "./config";

// const App = () => {
//     const options: any = {
//     public_key: PUBLIC_KEY,
//     amount: 100,
//     tranref: new Date().getTime(),
//     currency: "NGN",
//     email: "test@mail.com",
//     full_name: "Sam Smart",
//     mobile_no: "081234566789",
//     description: "test",
//     tokenize: false,
//     planId: "",
//     pocketId: "",
//     vendorId: "",
//     customization: {
//       theme: {
//         border_color: "#000000",
//         background_color: "#004C64",
//         button_color: "#0084A0",
//       },
//       payment_method: ["card", "account", "transfer", "wallet", "ussd"],
//       display_fee: true, // true
//       display_type: "embed", //inline
//       logo: "logo_url | base64",
//     },
//   };

//   const close: any = (close: any) => {
//     console.log(close);
//   };

//   const callback = (response: any, closeCheckout: any) => {
//     console.log(response);

//     setTimeout(() => closeCheckout(), 2000);
//   };

//    const initializePayment = useSeerbitPayment(options, callback, close);


//   return (
//     <div>
//       <h2>Make Payment</h2>
//       <button onClick={initializePayment}>Pay</button>
//     </div>
//   );
// };


// export default App


import React, { Component } from "react";
import { SeerbitButton } from "seerbit-reactjs";
import { PUBLIC_KEY } from "./config";

const App = () => {
    const options = {
    public_key: PUBLIC_KEY,
    amount: 100,
    tranref: new Date().getTime(),
    currency: "NGN",
    email: "test@mail.com",
    full_name: "Sam Smart",
    mobile_no: "081234566789",
    description: "test",
    tokenize: false,
    planId: "",
    pocketId: "",
    vendorId: "",
    customization: {
      theme: {
        border_color: "#000000",
        background_color: "#004C64",
        button_color: "#0084A0",
      },
      payment_method: ["card", "account", "transfer", "wallet", "ussd"],
      display_fee: true, // true
      display_type: "embed", //inline
      logo: "logo_url | base64",
    },
  };

  const close: any = (close:any) => {
    console.log(close);
  };
  const callback = (response: any, closeCheckout: any) => {
    console.log(response);

    setTimeout(() => closeCheckout(), 2000);
  };

  const paymentProps = {
    ...options,
    callback,
    close,
  };

  return (
    <div>
      <h2>Make Payment</h2>
      <SeerbitButton text="test payment" className="app-btn" {...paymentProps} />
    </div>
  );
};


export default App