import * as React from 'react';

import { useBodyRef } from '../context/ElementRefContext';

import './body.less';
import CategoryNavigation from '../navigation';

import EmojiPicker from './EmojiPicker';

import { ClassNames } from '../../DomUtils/classNames';
import { useEmojiPickerContainerStyle } from '../../config/useConfig';
import Container, { FlexDirection } from '../Layout/Container';

interface IAppProps {}

const Body: React.FunctionComponent<IAppProps> = () => {
  const BodyRef = useBodyRef();
  const containerStyle = useEmojiPickerContainerStyle();
  return (
    <Container
      className={ClassNames.scrollBody}
      style={containerStyle}
      ref={BodyRef}
      direction={FlexDirection.COLUMN}
    >
      <CategoryNavigation />
      <EmojiPicker />
    </Container>
  );
};

export default Body;
