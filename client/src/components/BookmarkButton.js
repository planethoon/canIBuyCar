import styled from 'styled-components';
import marked from '../img/marked.png';
import unmarked from '../img/unmarked.png';

const BookmarkWrapper = styled.div`
  height: 2rem;
  width: 2rem;
  > img {
    max-width: 100%;
  }
`;

export default function BookmarkButton() {
  return (
    <>
      <BookmarkWrapper>
        <img src={marked} alt='' />
      </BookmarkWrapper>
    </>
  );
}
