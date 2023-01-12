import * as React from 'react';
import { ScrollbarProps } from 'react-custom-scrollbars-2';

import { CustomEmoji, EmojiClickProps } from '../types/exposedTypes';

import { CategoryConfig } from './categoryConfig';

export function mergeConfig(
  userConfig: PickerConfig = {}
): PickerConfigInternal {
  const base = basePickerConfig();
  const config = Object.assign(base, userConfig);
  return config;
}

export function basePickerConfig(): PickerConfigInternal {
  return {
    categories: [],
    customEmojis: [],
    defaultActiveCategoryId: null,
    emojiClassName: '',
    emojiPickerContainerStyle: {},
    onClickEmoji: null,
    preLine: 7,
  };
}

export type PickerConfigInternal = {
  /**
   * @description 表情包分类
   */
  categories: CategoryConfig[];

  /**
   *  @description 默认选中的分类
   */
  defaultActiveCategoryId: String;

  /**
   * @description 表情元素样式名称
   */
  emojiClassName?: string;

  /**
   * @description 没一行显示的表情包数量
   */
  preLine?: number;

  /**
   * @description 表情包容器样式
   */
  emojiPickerContainerStyle?: React.CSSProperties;

  customEmojis?: CustomEmoji[];

  /**
   * 表情包点击事件
   */
  onClickEmoji?: EmojiClickProps;

  /**
   * 滚动条内部属性
   */
  scrollbarArgs?: ScrollbarProps;
};

type ConfigExternal = PickerConfigInternal;

export type PickerConfig = Partial<ConfigExternal>;
