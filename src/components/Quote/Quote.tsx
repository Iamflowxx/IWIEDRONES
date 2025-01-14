import React from 'react';
import styled from 'styled-components';

const QuoteContainer = styled.div`
  background: #f5f5f5;
  padding: 60px 20px;
  text-align: center;
`;

const QuoteText = styled.div`
  color: #666;
  font-size: 24px;
  margin-bottom: 20px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  font-style: italic;
`;

const QuoteAuthor = styled.div`
  color: #888;
  margin-top: 20px;
  font-size: 16px;
`;

const Quote = () => {
  return (
    <QuoteContainer>
      <QuoteText>
        "Estaremos realmente atrapados con la tecnología cuando todo lo que queramos sean sólo cosas que funcionen."
      </QuoteText>
      <QuoteAuthor>
        - Douglas Adams
      </QuoteAuthor>
    </QuoteContainer>
  );
};

export default Quote;
