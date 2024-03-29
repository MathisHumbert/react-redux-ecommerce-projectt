import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const CheckoutPage = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h3>Sorry, there is no checkout page for this cloned project</h3>
        <Link to="/" className="btn">
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default CheckoutPage;
