import * as React from 'react';

export type CategoryConfig = {
  id: string;
  name: string;
  icon?: string | React.ReactNode;
};

export type CategoriesConfig = CategoryConfig[];
