import clsx from 'clsx';
import * as React from 'react';
// import { useEffect } from 'react';

import { useCategoriesConfig } from '../../config/useConfig';
import Container, { FlexDirection } from '../Layout/Container';
import Button from '../atoms/Button';
import { useCategoryNavigationRef } from '../context/ElementRefContext';
import { useActiveCategoryState } from '../context/PickerContext';

import './index.less';

interface IAppProps {}

const CategoryNavigation: React.FunctionComponent<IAppProps> = () => {
  const categories = useCategoriesConfig();
  const CategoryNavigationRef = useCategoryNavigationRef();
  const [activeCateory, setActiveCateory] = useActiveCategoryState();

  if ([0, 1].includes(categories.length)) {
    return null;
  }

  return (
    <Container
      direction={FlexDirection.ROW}
      ref={CategoryNavigationRef}
      className="category-list-wrap"
    >
      {categories.map((item, key) => {
        return (
          <Button
            key={key}
            data-id={item.id}
            onClick={() => {
              setActiveCateory(item);
            }}
            className={clsx('category-list-item', {
              active: activeCateory?.id === item.id
            })}
          >
            {item.icon}
          </Button>
        );
      })}
    </Container>
  );
};

export default CategoryNavigation;
