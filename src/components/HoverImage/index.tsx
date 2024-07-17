import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.div<{ imageUrl: string }>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const InitialImg = styled(Image)`
  opacity: 1;

  ${Container}:hover & {
    opacity: 0;
  }
`;

const HoverImg = styled(Image)`
  opacity: 0;

  ${Container}:hover & {
    opacity: 1;
  }
`;

const HoverImage = ({ initSrc, hoverSrc }: { initSrc: string; hoverSrc: string }) => {
  return (
    <Container>
      <InitialImg imageUrl={initSrc} />
      <HoverImg imageUrl={hoverSrc} />
    </Container>
  );
};

export default HoverImage;
