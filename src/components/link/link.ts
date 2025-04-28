import { html, nothing } from 'lit';
import { icon } from '../icon/icon';
import { IconType } from '../icon/iconSvgs';
import './link.css';

export type LinkVariant = 'header' | 'tag' | 'inline' | 'inlineWithIcon';
export type LinkTarget = '_self' | '_blank' | '_parent' | '_top';

export interface LinkProps {
  href?: string;
  target?: LinkTarget;
  variant?: LinkVariant;
  label: string;
  withIcon?: IconType | null;
  border?: boolean;
  borderRadius?: boolean;
  dataActive?: boolean;
  onClick?: () => void;
}

export const link = ({
  href = '#',
  target = '_self',
  variant = 'header',
  label,
  withIcon = null,
  border = false,
  borderRadius = false,
  dataActive = false,
  onClick,
}: LinkProps) => {
  
  const handleClick = (e: MouseEvent) => {
    onClick?.();

    const event = new CustomEvent('link-click', {
      bubbles: true,
      composed: true,
      detail: { href },
    });

    (e.currentTarget as HTMLElement).dispatchEvent(event);
  };

  const classes = [
    'link',
    `link--${variant}`,
    border ? 'link-border' : '',
    borderRadius ? 'link-borderradius' : '',
    dataActive ? 'active' : '',
  ].filter(Boolean).join(' ');

  return html`
    <a
      class="${classes}"
      href="${href}"
      target="${target}"
      rel="${target === '_blank' ? 'noopener noreferrer' : ''}"
      aria-current=${dataActive ? 'page' : nothing}
      @click=${handleClick}
    >
      ${withIcon && variant === 'header'
        ? icon({ type: withIcon, size: 'medium' })
        : null}
      ${label}
      ${withIcon && variant === 'inlineWithIcon'
        ? icon({ type: withIcon, size: 'small' })
        : null}
    </a>
  `;
};
