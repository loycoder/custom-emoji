import * as React from 'react';

import EmojiPickerReact from './EmojiPickerReact';
import ErrorBoundary from './components/ErrorBoundary';
import { PickerConfig } from './config/config';
import ReactionRecord from './components/Reaction/ReactionRecord';

// eslint-disable-next-line import/extensions
import './assets/icon-font/seewo-icon.js';
import ReactionPlan from './components/Reaction/ReactionPlan';

export interface Props extends PickerConfig {}

const EmojiPicker: React.FC<Props> = props => {
  return (
    <ErrorBoundary>
      <EmojiPickerReact {...props} />
    </ErrorBoundary>
  );
};

export { ReactionRecord, ReactionPlan, EmojiPicker };
export * from './types/exposedTypes';
