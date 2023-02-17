import clsx from 'clsx';
import * as React from 'react';
import './index.less';

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
  inlineBlock?: boolean;
  inlineFix?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
  const {
    children,
    className,
    inlineBlock = false,
    direction = FlexDirection.ROW,
    inlineFix = false
  } = props;
  return (
    <div
      ref={ref}
      {...props}
      className={clsx(
        'custom-emoji-component',
        {
          flex: !inlineBlock,
          'inline-block': inlineBlock,
          'inline-fix': inlineFix
        },
        className,
        direction
      )}
    >
      {children}
    </div>
  );
});

Container.displayName = 'MediaMember';

export default Container;
