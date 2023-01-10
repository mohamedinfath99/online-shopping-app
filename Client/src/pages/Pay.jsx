import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useHistory } from 'react-router'


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

const KEY = "pk_test_51MOZjOHkI6ohd0XnJPN215U2qTDNEpUTHQoQUJMHLrErGJyHg89uy71MyuHiifWKcW9O1LHNeubVCqB3PmtRwhhk00CLfNX3Z6"

const Pay = () => {

    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory()

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
                history.push('/success')
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && (() => makeRequest)();
    }, [stripeToken, history])


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
