import { html, nothing, TemplateResult } from 'lit';
import { icon } from '@/components/icon/icon';
import { IconType } from '@/components/icon/iconSvgs';
import './dropdown.css';

export interface DropdownProps {
  label: string;
  content: TemplateResult | string;
  variant?: 'iconLabelCart' | 'onlyLabel';
  iconName?: IconType | null;
  dropdownWidth?: string;
  dropdownClass?: string;
  labelOnTopRight?: string;
}

let isDropdownListenerAttached = false;

export const dropdown = ({
  label,
  content,
  variant = 'iconLabelCart',
  dropdownWidth = 'auto',
  dropdownClass = '',
  labelOnTopRight = '2',
  iconName = null,
}: DropdownProps) => {
  const uniqueId = `dropdown-${Math.random().toString(36).substring(2, 11)}`;

  const handleToggle = (event: Event) => {
    const dropdownElement = (event.currentTarget as Element).closest('.dropdown');
    const dropdownContent = dropdownElement?.querySelector('.dropdown__content') as HTMLElement;
    const triggerButton = dropdownElement?.querySelector('.dropdown__button') as HTMLButtonElement;

    if (dropdownContent && triggerButton) {
      const isExpanded = dropdownContent.getAttribute('aria-expanded') === 'true';
      dropdownContent.setAttribute('aria-expanded', (!isExpanded).toString());
      dropdownContent.style.display = isExpanded ? 'none' : 'block';
      triggerButton.setAttribute('aria-expanded', (!isExpanded).toString());
    }

    event.stopPropagation();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const dropdownElement = (event.currentTarget as Element).closest('.dropdown');
    const dropdownContent = dropdownElement?.querySelector('.dropdown__content') as HTMLElement;
    const triggerButton = dropdownElement?.querySelector('.dropdown__button') as HTMLButtonElement;
    const isExpanded = dropdownContent?.getAttribute('aria-expanded') === 'true';

    switch (event.key) {
      case 'Escape':
        if (isExpanded) {
          handleToggle(event);
        }
        break;
      case 'Tab':
        if (isExpanded && dropdownContent) {
          const focusableElements = dropdownContent.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])');
          const lastFocusable = focusableElements[focusableElements.length - 1];
          if (document.activeElement === lastFocusable && !event.shiftKey) {
            handleToggle(event);
          } else if (document.activeElement === triggerButton && event.shiftKey) {
            handleToggle(event);
          }
        }
        break;
    }
  };

  if (!isDropdownListenerAttached) {
    document.addEventListener('click', (event) => {
      const dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target as Node)) {
          const dropdownContent = dropdown.querySelector('.dropdown__content') as HTMLElement;
          const triggerButton = dropdown.querySelector('.dropdown__button') as HTMLButtonElement;
          if (dropdownContent && dropdownContent.getAttribute('aria-expanded') === 'true') {
            dropdownContent.setAttribute('aria-expanded', 'false');
            dropdownContent.style.display = 'none';
            triggerButton?.setAttribute('aria-expanded', 'false');
          }
        }
      });
    });
    isDropdownListenerAttached = true;
  }

  const containerClasses = ['dropdown', `dropdown--${variant}`].filter(Boolean).join(' ');
  const buttonClasses = ['dropdown__button', `button--${variant}`].filter(Boolean).join(' ');
  const contentClasses = ['dropdown__content', dropdownClass].filter(Boolean).join(' ');
  const customStyles = dropdownWidth ? `width: ${dropdownWidth};` : '';

  return html`
    <div id=${uniqueId} class="${containerClasses}" @keydown=${handleKeyDown}>
      <button
        class="${buttonClasses}"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="${uniqueId}-dropdown"
        @click=${handleToggle}
      >
        ${variant === "iconLabelCart" && iconName
          ? icon({ type: iconName, size: 'large' })
          : nothing}
        <span class="dropdown__label">${label}</span>
        ${parseInt(labelOnTopRight) > 0 && variant === "iconLabelCart"
          ? html`<span class="labelOnTopRight">${labelOnTopRight}</span>`
          : nothing}
      </button>

      <div
        id="${uniqueId}-dropdown"
        class="${contentClasses}"
        style="${customStyles}"
        aria-labelledby="${uniqueId}"
        aria-expanded="false"
      >
        ${content}
      </div>
    </div>
  `;
};
