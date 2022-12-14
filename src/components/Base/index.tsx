import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 20px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.color.primary.c500};
`;

const Text = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.inter.regular};
  color: ${({ theme }) => theme.color.gray.c200};
  font-size: 18px;
`;

interface BaseProps {
  text: string;
}

export default function Base({ text }: BaseProps) {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
}
