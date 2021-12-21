import React from 'react';
import styled from 'styled-components';
import { getUniqueValues, formatPrice } from '../utils/helpers';
import { FaCheck } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  updateFilters,
  filterProducts,
  clearFilters,
} from '../redux/actions/filterActions';

const Filters = () => {
  const dispatch = useDispatch();
  const { filters, filtered_products, all_products } = useSelector(
    (state) => state.filterReducer
  );

  React.useEffect(() => {
    dispatch(filterProducts());
  }, [filters]);

  const categories = getUniqueValues(all_products, 'category');
  const companies = getUniqueValues(all_products, 'company');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* text */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={filters.text}
              onChange={(e) => dispatch(updateFilters(e))}
            />
          </div>
          {/* category */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    onClick={(e) => dispatch(updateFilters(e))}
                    className={c === filters.category ? 'active' : null}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          {/* company */}
          <div className="form-control">
            <h5>company</h5>
            <select
              name="company"
              className="company"
              value={filtered_products.company}
              onChange={(e) => dispatch(updateFilters(e))}
            >
              {companies.map((c, index) => {
                return (
                  <option value={c} key={index}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          {/* colors */}
          <div className="form-control">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((c, index) => {
                if (c === 'all') {
                  return (
                    <button
                      name="color"
                      data-color={c}
                      className={
                        c === filters.color ? 'all-btn active' : 'all-btn'
                      }
                      key={index}
                      onClick={(e) => dispatch(updateFilters(e))}
                    >
                      {c}
                    </button>
                  );
                } else {
                  return (
                    <button
                      name="color"
                      data-color={c}
                      className={
                        c === filters.color ? 'color-btn active' : 'color-btn'
                      }
                      style={{ background: c }}
                      key={index}
                      onClick={(e) => dispatch(updateFilters(e))}
                    >
                      {c === filters.color && <FaCheck />}
                    </button>
                  );
                }
              })}
            </div>
          </div>
          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(filters.price)}</p>
            <input
              type="range"
              name="price"
              min={filters.min_price}
              max={filters.max_price}
              value={filters.price}
              onChange={(e) => dispatch(updateFilters(e))}
            />
          </div>
          {/* shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={(e) => dispatch(updateFilters(e))}
              checked={filters.shipping}
            />
          </div>
        </form>
        <button
          className="clear-btn"
          type="button"
          onClick={() => dispatch(clearFilters())}
        >
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
