import * as React from 'react';

import EmojiPickerReact from './EmojiPickerReact';
import ErrorBoundary from './components/ErrorBoundary';
import { PickerConfig } from './config/config';

// eslint-disable-next-line import/extensions
import './data/seewo-icon.js';

export interface Props extends PickerConfig {}

export const EmojiPicker: React.FC<Props> = props => {
  return (
    <ErrorBoundary>
      <EmojiPickerReact {...props} />
    </ErrorBoundary>
  );
};
