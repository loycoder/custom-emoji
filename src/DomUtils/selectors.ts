import { asSelectors, ClassNames } from './classNames';

export type NullableElement = HTMLElement | null;

export function queryScrollBody(root: NullableElement): NullableElement {
  return root
    ? root.matches(asSelectors(ClassNames.scrollBody))
      ? root
      : root.querySelector(asSelectors(ClassNames.scrollBody))
    : null;
}
