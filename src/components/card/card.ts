import { html, nothing } from "lit";
import { link } from '@/components/link/link';
import "./card.css";

export interface CardProps {
  variant?: "default" | "nuovo";
  imageSrc?: string;
  title?: string;
  description?: string;
  linkHref?: string;
  linkLabel: string;
}

export const card = ({
  variant = "default",
  imageSrc,
  title,
  description,
  linkHref,
  linkLabel,
}: CardProps) => {
  const classes = [
    'card',
    `card--${variant}`,
  ].join(' ');

  return html`
    <article class="${classes}">
      ${imageSrc ? html`<img src="${imageSrc}" alt="${title || 'Card image'}" />` : nothing}
      ${title ? html`<h3>${title}</h3>` : nothing}
      ${description ? html`<p>${description}</p>` : nothing}
      ${link({
        variant: 'inline',
        href: linkHref || '#',
        target: '_self',
        label: linkLabel,
        border: false,
        borderRadius: false,
      })}
    </article>
  `;
};
