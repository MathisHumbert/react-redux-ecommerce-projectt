import React from 'react';
import { useSelector } from 'react-redux';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { gridView } = useSelector((state) => state.filterReducer);

  if (gridView) {
    return <GridView />;
  } else {
    return <ListView />;
  }
};

export default ProductList;
