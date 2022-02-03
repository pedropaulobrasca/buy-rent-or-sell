import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 277px;
  min-height: 360px;

  margin: 0 auto;
`;

export const ImageGroup = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 150px;

  background-color: #ddd;

  & > img {
    width: 100%;
    min-height: 200px;
    max-height: 200px;

    object-fit: cover;

    border-radius: 4px;
  }

  & > svg {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;

    width: 36px;
    height: 36px;

    fill-opacity: 0.5;
    fill: #fff;

    cursor: pointer;
  }
`;

export const DescGroup = styled.div`
  & > h3 {
    font-size: 16px;
    font-weight: bold;
    color: #3d3d3d;

    height: 80px;

    margin-top: 60px;

    @media (max-width: 700px) {
      margin-top: 60px;
    }
  }

  & > div {
    display: flex;
    justify-content: space-between;

    color: #999;
  }
`;
