export enum ClassNames {
  categoryContent = 'epr-emoji-category-content',
  scrollBody = 'emoji-body-container',
  category = 'epr-emoji-category',
}

export function asSelectors(...classNames: ClassNames[]): string {
  return classNames.map((c) => `.${c}`).join('');
}
