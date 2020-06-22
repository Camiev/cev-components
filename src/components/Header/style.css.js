import styled from 'styled-components';

const Style = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
}))`
   {
    flex-grow: 0;
    position: sticky;
    top: 0;
    left: auto;
    right: 0;
    background-color: ${(props) => props.backgroundColor};
    z-index: 2;
  }
  .line-bottom {
    left: calc(50%);
    width: 22px;
    bottom: 8px;
    height: 1px;
    position: absolute;
    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
  }
  .iconDesktop {
    padding-right: 1.1em;
  }
  .iconMobile {
    padding-right: 1.2em;
  }
  .title {
    flex-grow: 1;
    line-height: 1em;
  }
  .toolbar {
    min-height: 6.5em;
    transition: min-height 0.25s ease-out;
  }
  .toolbar .image {
    max-height: 2.8em;
    transition: max-height 0.25s ease-out;
    margin-left: 1em;
  }
  .toolbar.smaller {
    min-height: 4.5em;
    transition: min-height 0.25s ease-out;
  }
  .toolbar.smaller .image {
    max-height: 2.2em;
    transition: max-height 0.25s ease-out;
    margin-left: 1em;
  }
`;

export default Style;
