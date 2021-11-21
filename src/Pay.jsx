import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const KEY = "pk_test_51Jxkh1A9FZFCrrHnaCOl7vb59G06dB29AaDWNXdjoxIVelJQEmyd92LlAlkNmv1DmxOU8zJnNGSU59IBC2SXVHGV00HdQ7b4vV";

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);
    //const history = useHistory()
    const navigate = useNavigate();

    const onToken = (token) => {
        setStripeToken(token)
    };

    useEffect (() =>{
      const makeRequest = async () =>{
          try{
            const res = await axios.post(
                "http://localhost:5000/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000
                }
            );
            console.log(res.data);
            navigate("/success");
          }catch(err){
             console.log(err) 
          }
        };
        stripeToken && makeRequest();
    }, [stripeToken, navigate]);


    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {stripeToken ? (<span>Processing. Please wait ...</span>) : (
                <StripeCheckout 
                    name="Astr-Oth Shop"
                    image="https://w7.pngwing.com/pngs/209/430/png-transparent-electric-blue-text-brand-apps-electrum-blue-text-logo-thumbnail.png"
                    shippingAddress
                    billingAddress={true}
                    bitcoin={true}
                    description= "Your Total is $20"
                    amount={2000}
                    token ={onToken}
                    stripeKey={KEY}
                >
                    <button
                        style=
                            {{
                                border: "none",
                                width: 120,
                                borderRadius: 5,
                                padding: "20px",
                                backgroundColor: "black",
                                color:"white",
                                fontWeight: "600",
                                cursor: "pointer"
                            }}
                    >
                        Pay now 
                    </button> 
            </StripeCheckout>
            )}
            
           
        </div>
    )
}

export default Pay
