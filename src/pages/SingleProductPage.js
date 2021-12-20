import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { single_product_url as url } from '../utils/constants';
import { formatPrice } from '../utils/helpers';
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from '../components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../redux/actions/productsActions';

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, single_product } = useSelector(
    (state) => state.productsReducer
  );
  console.log(single_product);
  useEffect(() => {
    dispatch(fetchSingleProduct(`${url}${id}`));
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const { name, description, price, stock, company, images } = single_product;

  return (
    <Wrapper>
      <PageHero actualPage={name} actualProduct={true} />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <div className="content">
            <h2>{name}</h2>
            <Stars />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available: </span>
              {stock > 1 ? 'In Stock' : 'Out Of Stock'}
            </p>
            <p className="info">
              <span>SKU: </span>
              {id}
            </p>
            <p className="info">
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            <AddToCart />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
