import * as React from 'react';
import { useState } from 'react';

import { CategoryConfig } from '../../config/categoryConfig';
import { useDefaultActiveCategory } from '../../config/useConfig';

export function PickerContextProvider({ children }: Props) {
  const defaultActiveCategory = useDefaultActiveCategory();
  const activeCategoryState = useState<CategoryConfig>(defaultActiveCategory);

  return (
    <PickerContext.Provider
      value={{
        activeCategoryState
      }}
    >
      {children}
    </PickerContext.Provider>
  );
}

export type ReactState<T> = [T, React.Dispatch<React.SetStateAction<T>>];

const PickerContext = React.createContext<{
  activeCategoryState: ReactState<CategoryConfig>;
}>({
  activeCategoryState: null
});

type Props = Readonly<{
  children: React.ReactNode;
}>;

export function useActiveCategoryState(): ReactState<CategoryConfig> {
  const { activeCategoryState } = React.useContext(PickerContext);
  return activeCategoryState;
}
