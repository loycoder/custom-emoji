import * as React from 'react';
import './appIcon.less';

interface AppIconProps {
  icon: string;
  className?: string;
  onClick?: (e: any) => void;
}

export default function AppIcon(props: AppIconProps) {
  const { icon, className, onClick } = props;
  const isSvg = icon.indexOf('#') === 0;

  return isSvg ? (
    <svg
      className={`app-icon ${className || ''}`}
      onClick={onClick}
      aria-hidden="true"
    >
      <use xlinkHref={icon} />
    </svg>
  ) : (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <i
      className={`app-icon icon-font ${icon} ${className || ''}`}
      onClick={onClick}
    />
  );
}
