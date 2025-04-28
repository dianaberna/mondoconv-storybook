import { html } from 'lit';
import './button.css';
import { icon, IconSize } from '@/components/icon/icon';
import { IconType } from '@/components/icon/iconSvgs';

export type ButtonShape = 'normal' | 'rounded';
export type ButtonWidth = 'fitcontent' | 'fixed';
export type ButtonHeight = 'fitcontent' | 'fixed';
export type ButtonVariant =
  | 'primario'
  | 'primario'
  | 'secondario'
  | 'secondario'
  | 'terziario'
  | 'dolcecasa'
  | 'dolcecasanero'
  | 'findomestic'
  | 'carrello';
export type ButtonType = 'pieno' | 'contorno'

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: ButtonType;
  iconsize?: IconSize;
  shape?: ButtonShape;
  width?: ButtonWidth;
  height?: ButtonHeight;
  iconleft?: IconType;
  iconright?: IconType;
  variant?: ButtonVariant;
  disabled?: boolean;
  ariaLabel?: string;
}

export const button = ({
  label,
  onClick,
  iconsize = 'small',
  shape = 'normal',
  width = 'fitcontent',
  height = 'fitcontent',
  iconleft,
  iconright,
  variant = 'primario',
  type = 'pieno',
  disabled = false,
  ariaLabel,
}: ButtonProps) => {
  const handleClick = (e: MouseEvent) => {
    if (disabled) return;
    onClick?.();

    const event = new CustomEvent('button-click', {
      bubbles: true,
      composed: true,
      detail: { label },
    });

    (e.target as HTMLElement).dispatchEvent(event);
  };

  const classes = [
    'button',
    `button--${variant}-${type}`,
    `button-${shape}`,
    `button-width-${width}`,
    `button-height-${height}`,
  ]
    .filter(Boolean)
    .join(' ');

  return html`
    <button class="${classes}" ?disabled=${disabled} @click=${handleClick} aria-label=${ariaLabel || label} >
      ${variant === "findomestic" ? html`<img src='./assets/findomestic.svg'>` : null}
      ${iconleft ? icon({ type: iconleft, size: iconsize }) : ''}
      ${label}
      ${iconright ? icon({ type: iconright, size: iconsize }) : ''}
    </button>
  `;
};
