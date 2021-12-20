import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImages = ({ images }) => {
  const [mainImg, setMainImg] = useState(images[0].url);
  return (
    <Wrapper>
      <img src={mainImg} alt="main-img" className="main" />
      <div className="gallery">
        {images.map((image) => {
          const { id, url } = image;
          return (
            <img
              src={url}
              alt={id}
              key={id}
              className={url === mainImg ? 'active' : null}
              onClick={() => setMainImg(url)}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
