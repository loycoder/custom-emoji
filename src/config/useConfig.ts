import * as React from 'react';
import { ScrollbarProps } from 'react-custom-scrollbars-2';

import { usePickerConfig } from '../components/context/PickerConfigContext';
import { EmojiClickProps } from '../types/exposedTypes';

import { CategoriesConfig, CategoryConfig } from './categoryConfig';

/**
 * 获取分类集合
 * @returns
 */
export function useCategoriesConfig(): CategoriesConfig {
  const { categories } = usePickerConfig();
  return categories;
}

/**
 * 获取当前默认选中的分类
 * @returns
 */
export function useDefaultActiveCategory(): CategoryConfig {
  const categories = useCategoriesConfig();
  const { defaultActiveCategoryId } = usePickerConfig();
  const findIndex = categories.findIndex(
    (vo) => vo.id === defaultActiveCategoryId
  );
  return findIndex === -1 ? null : categories[findIndex];
}

/**
 * 获取表情包外部样式
 * @returns
 */
export function useEmojiClassName(): string {
  const { emojiClassName } = usePickerConfig();
  return emojiClassName;
}

export function usePreLine(): number {
  const { preLine } = usePickerConfig();
  return preLine;
}

export function useEmojiPickerContainerStyle(): React.CSSProperties {
  const { emojiPickerContainerStyle } = usePickerConfig();
  return emojiPickerContainerStyle;
}

export function useEmojiClick(): EmojiClickProps {
  const { onClickEmoji } = usePickerConfig();
  return onClickEmoji;
}

export function useScrollbarArgs(): ScrollbarProps {
  const { scrollbarArgs } = usePickerConfig();
  return scrollbarArgs;
}
