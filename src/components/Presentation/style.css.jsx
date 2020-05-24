import styled from 'styled-components';

const Style = styled.div.attrs((props) => ({
  backgroundImage: props.backgroundImage,
}))`
  .backgroundImage {
    background-image:url('${(props) => props.backgroundImage}');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    padding-top: 9em;
    padding-bottom: 9em;
    max-width: 100%;
    position: relative;
    color: white;
    z-index: 1;
  }
  .title {
    font-weight: 600;
  }
  .backgroundImage::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`;
export default Style;
