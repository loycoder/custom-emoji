import * as React from 'react';

/**
 * 生成各个子组件的 ref,通过Provider 到全局
 * @param param0
 * @returns
 */
export function ElementRefContextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const PickerMainRef = React.useRef<HTMLDivElement>(null);
  const BodyRef = React.useRef<HTMLDivElement>(null);
  const CategoryNavigationRef = React.useRef<HTMLDivElement>(null);

  return (
    <ElementRefContext.Provider
      value={{
        BodyRef,
        CategoryNavigationRef,
        PickerMainRef
      }}
    >
      {children}
    </ElementRefContext.Provider>
  );
}

export type ElementRef<
  E extends HTMLElement = HTMLElement
> = React.MutableRefObject<E | null>;

type ElementRefs = {
  PickerMainRef: ElementRef<HTMLDivElement>;
  BodyRef: ElementRef<HTMLDivElement>;
  CategoryNavigationRef: ElementRef<HTMLDivElement>;
};

const ElementRefContext = React.createContext<ElementRefs>({
  BodyRef: React.createRef(),
  CategoryNavigationRef: React.createRef(),
  PickerMainRef: React.createRef()
});

function useElementRef() {
  return React.useContext(ElementRefContext);
}

export function usePickerMainRef() {
  return useElementRef()['PickerMainRef'];
}

export function useBodyRef() {
  return useElementRef()['BodyRef'];
}

export function useCategoryNavigationRef() {
  return useElementRef()['CategoryNavigationRef'];
}
