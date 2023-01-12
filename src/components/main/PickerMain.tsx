import clsx from 'clsx';
import * as React from 'react';

import { usePickerMainRef } from '../context/ElementRefContext';
import { PickerContextProvider } from '../context/PickerContext';
import './PickerMain.css';

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function PickerMain({ children }: Props) {
  return (
    <PickerContextProvider>
      <PickerRootElement>{children}</PickerRootElement>
    </PickerContextProvider>
  );
}

type RootProps = Readonly<{
  children: React.ReactNode;
}>;

function PickerRootElement({ children }: RootProps) {
  const PickerMainRef = usePickerMainRef();
  return (
    <div
      className={clsx('custom-emoji-component custom-emoji-picker', 'epr-main')}
      ref={PickerMainRef}
    >
      {children}
    </div>
  );
}
