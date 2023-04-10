import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';




const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Button = styled.button`
    border: none;
    width: 120px;
    border-radius: 5px;
    padding: 20px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`


const KEY = process.env.REACT_APP_STRIPE;
console.log(KEY);

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token)
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post('http://localhost:5000/api/v1/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: 2000
                })
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && (() => makeRequest)();
    }, [stripeToken])


    return (
        <Container>

            {stripeToken ? (<span>Processing. Please wait...</span>) : (
                <StripeCheckout
                    name="Trripy"
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fM8IqLFBI1AzQ432qG03-VwTqSopjehUlQ&usqp=CAU'
                    billingAddress
                    shippingAddress
                    description='Your total is $20'
                    amount={2000}
                    token={onToken}
                    stripeKey={KEY}>
                    <Button>
                        Pay Now
                    </Button>
                </StripeCheckout>
            )}
        </Container>
    )
}

export default Pay
