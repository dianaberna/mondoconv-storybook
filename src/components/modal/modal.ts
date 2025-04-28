import { html, TemplateResult } from 'lit';
import { button } from '@/components/button/button';
import './modal.css';

export interface ModalProps {
  title: string;
  content?: string | HTMLElement | TemplateResult;
  headerContent?: string | HTMLElement | TemplateResult;
  width?: string;
  height?: string;
  variant?: 'default' | 'overlay';
}

export const modal = ({
  title,
  content = '',
  headerContent = '',
  width = '',
  height = '',
  variant = 'default',
}: ModalProps) => {

  const closeModal = () => {
    const modalOverlay = document.getElementById('modal');
    modalOverlay?.classList.remove('is-open');
  };

  const handleOverlayClick = (e: Event) => {
    if ((e.target as HTMLElement).id === 'modal') {
      closeModal();
    }
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  // Attach global listener ONCE
  if (!document.body.hasAttribute('modal-key-listener-attached')) {
    document.addEventListener('keydown', handleKeydown);
    document.body.setAttribute('modal-key-listener-attached', 'true');
  }

  const classes = [
    'modal-container',
    `modal--${variant}`,
    width ? `modal-width-${width}` : '',
    height ? `modal-height-${height}` : '',
  ].filter(Boolean).join(' ');

  return html`
    <div 
      id="modal"
      class="modal"
      role="presentation"
      tabindex="-1"
      @click=${handleOverlayClick}
    >
      <div
        id="modal-container"
        role="dialog"
        class="${classes}"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        aria-modal="true"
      >
        <header class="modal-header">
          <div class="modal-header-standard">
            <h2 id="modal-title" class="modal-title">${title}</h2>
            ${button({
              iconleft: "tipo_chiudi",
              iconsize: "small",
              label: "",
              variant: 'primario',
              type: 'contorno',
              onClick: closeModal,
              width: 'fitcontent',
              height: 'fitcontent',
            })}
          </div>
          ${variant === 'overlay' ? html`
            <div class="modal-header-content">
              ${headerContent}
            </div>
          ` : null}
        </header>
        <div id="modal-desc" class="modal-content">
          ${content}
        </div>
      </div>
    </div>
  `;
};
