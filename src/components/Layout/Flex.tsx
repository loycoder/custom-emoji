import clsx from 'clsx';
import * as React from 'react';
import './Flex.less';

export enum FlexDirection {
  ROW = 'flex-row',
  COLUMN = 'flex-column'
}

type Props = Readonly<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  direction?: FlexDirection;
}>;

const Flex = React.forwardRef<HTMLDivElement, Props>(
  ({ children, className, style = {}, direction = FlexDirection.ROW }, ref) => {
    return (
      <div
        ref={ref}
        style={{ ...style }}
        className={clsx('flex', className, direction)}
      >
        {children}
      </div>
    );
  }
);

Flex.displayName = 'MediaMember';

export default Flex;
