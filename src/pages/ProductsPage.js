import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Filters, ProductList, Sort, PageHero, Loading } from '../components';
import { loadProducts } from '../redux/actions/filterActions';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.filterReducer);

  React.useEffect(() => {
    dispatch(loadProducts());
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main>
      <PageHero actualPage="products" actualProduct={false} />
      <Wrapper>
        <div className="section-center products">
          <Filters />
          <div>
            <Sort />
            <ProductList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
