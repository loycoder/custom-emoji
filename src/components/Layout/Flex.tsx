import clsx from 'clsx';
import * as React from 'react';
import './Flex.less';

export enum FlexDirection {
  ROW = 'flex-row',
  COLUMN = 'flex-column'
}

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  direction?: FlexDirection;
}

const Flex = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, className, direction = FlexDirection.ROW } = props;
  return (
    <div ref={ref} {...props} className={clsx('flex', className, direction)}>
      {children}
    </div>
  );
});

Flex.displayName = 'MediaMember';

export default Flex;
