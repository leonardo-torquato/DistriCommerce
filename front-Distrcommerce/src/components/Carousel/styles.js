import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease-in-out;
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 2;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  ${({ position }) => position === 'left' ? 'left: 0;' : 'right: 0;'}
`;

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 2;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ active }) => active ? '#FFD814' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #FFD814;
  }
`;
