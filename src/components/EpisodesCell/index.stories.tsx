import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
// import { action } from '@storybook/addon-actions';
import styled from 'styled-components/native';
import EpisodesCell from './';

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.gray.c25};
`;

export const actions = {
  // onPress: action('onPress'),
};
storiesOf('components/EpisodesCell', module).add('default', () => (
  <Container>
    <EpisodesCell text={'EpisodesCell Component'} {...actions} />
  </Container>
));
