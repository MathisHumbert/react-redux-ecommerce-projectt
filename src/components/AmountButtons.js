import React from 'react';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toggleCartItemAmount } from '../redux/actions/cartActions';

const AmountButtons = ({ amount, stock, setAmount, productPage, id }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <button
        className="amount-btn"
        type="button"
        onClick={() => {
          if (productPage) {
            setAmount((oldAmount) => {
              if (amount === 1) {
                return 1;
              }
              return oldAmount - 1;
            });
          } else {
            dispatch(toggleCartItemAmount(id, 'dec'));
          }
        }}
      >
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button
        className="amount-btn"
        type="button"
        onClick={() => {
          if (productPage) {
            setAmount((oldAmount) => {
              if (amount === stock) {
                return stock;
              }
              return oldAmount + 1;
            });
          } else {
            dispatch(toggleCartItemAmount(id, 'inc'));
          }
        }}
      >
        <FaPlus />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`;

export default AmountButtons;
