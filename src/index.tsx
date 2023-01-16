import * as React from 'react';

import EmojiPickerReact from './EmojiPickerReact';
import ErrorBoundary from './components/ErrorBoundary';
import { PickerConfig } from './config/config';
import ReactionRecord from './components/Reaction/ReactionRecord';

// eslint-disable-next-line import/extensions
import './assets/icon-font/seewo-icon.js';
import ReactionPlan from './components/Reaction/ReactionPlan';
import RenderEmoji from './components/body/Emoji/RenderEmoji';
import { deserializersEmoji } from './dataUtils/emojiConvert';

export interface EmojiPickerProps extends PickerConfig {}

const EmojiPicker: React.FC<EmojiPickerProps> = props => {
  return (
    <ErrorBoundary>
      <EmojiPickerReact {...props} />
    </ErrorBoundary>
  );
};

export {
  ReactionRecord,
  ReactionPlan,
  EmojiPicker,
  deserializersEmoji,
  RenderEmoji
};

export * from './types/exposedTypes';
