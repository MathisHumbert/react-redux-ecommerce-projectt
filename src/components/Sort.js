import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  setGridView,
  setListView,
  sortProducts,
  updateSort,
} from '../redux/actions/filterActions';

const Sort = () => {
  const dispatch = useDispatch();
  const { gridView, filtered_products, sort, all_products } = useSelector(
    (state) => state.filterReducer
  );

  React.useEffect(() => {
    dispatch(sortProducts());
  }, [sort, all_products]);

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          className={gridView ? 'active' : null}
          onClick={() => dispatch(setGridView())}
        >
          <BsFillGridFill />
        </button>
        <button
          className={gridView ? null : 'active'}
          onClick={() => dispatch(setListView())}
        >
          <BsList />
        </button>
      </div>
      <p>{filtered_products.length} Products Found</p>
      <hr />
      <form>
        <label htmlFor="sort">
          <select
            name="sort"
            id="sort"
            className="sort-input"
            value={sort}
            onChange={(e) => dispatch(updateSort(e.target.value))}
          >
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a - z)</option>
            <option value="name-z">name (z - a)</option>
          </select>
        </label>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
