import * as React from 'react';
import { EmojiPickerProps } from '.';

import Body from './components/body/Body';
import { ElementRefContextProvider } from './components/context/ElementRefContext';
import { PickerConfigProvider } from './components/context/PickerConfigContext';
import PickerMain from './components/main/PickerMain';
import './EmojiPickerReact.less';

export default function EmojiPicker(props: EmojiPickerProps) {
  return (
    <ElementRefContextProvider>
      <PickerConfigProvider {...props}>
        <PickerMain>
          <Body />
        </PickerMain>
      </PickerConfigProvider>
    </ElementRefContextProvider>
  );
}
