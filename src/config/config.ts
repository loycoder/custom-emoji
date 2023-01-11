import * as React from 'react';

import { CustomEmoji } from '../types/exposedTypes';
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
    emojiPickerStyle: {},
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
  emojiPickerStyle?: React.CSSProperties;

  customEmojis?: CustomEmoji[];
};

type ConfigExternal = PickerConfigInternal;

export type PickerConfig = Partial<ConfigExternal>;
