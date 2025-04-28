import { html } from "lit";
import { modal, ModalProps } from "@/components/modal/modal";
import { button } from "@/components/button/button";
import { StoryFn, Meta } from "@storybook/web-components";

export default {
    title: "Modal",
    tags: ["autodocs"],
    argTypes: {
        title: { control: "text", description: "Titolo del modale" },
        content: {
            control: "text",
            description: "Contenuto principale del modale",
        },
        headerContent: {
            control: "text",
            description: "Contenuto opzionale dell'header",
        },
        width: {
            control: "text",
            description: "Larghezza del modale (es: 400px, 50vw)",
        },
        height: {
            control: "text",
            description: "Altezza del modale (es: 300px, 50vh)",
        },
        variant: {
            control: { type: "select" },
            options: ["default", "overlay"],
            description: "Tipo di modale",
        },
    },
    parameters: {
      docs: {
        description: {
          component: 'Il componente Modal crea finestre di dialogo modali, bloccando l’interazione con il resto della pagina. Permette la chiusura tramite ESC, click esterno o pulsante. Gestisce focus automatico e attributi aria-modal per la piena accessibilità.'
        }
      }
    }
} as Meta<ModalProps>;

const Template: StoryFn<ModalProps> = (args) => {
    const openModal = () => {
        const modalOverlay = document.querySelector("#modal");
        if (modalOverlay) modalOverlay.classList.add("is-open");

        const modalContainer = document.getElementById("modal-container");
        modalContainer?.focus();
    };

    const contentHtml = args.content
        ? html([args.content] as unknown as TemplateStringsArray)
        : html`
              <p>
                  Contenuto della modale. Può essere chiusa con ESC, click
                  esterno o pulsante.
              </p>
              <footer class="modal-footer">
                  ${button({
                      label: "Azione",
                      variant: "primario",
                      type: "pieno",
                      onClick: () => console.log("Esegui azione"),
                  })}
              </footer>
          `;

    const headerContentHtml = args.headerContent
        ? html([args.headerContent] as unknown as TemplateStringsArray)
        : html` <p>Testo extra nell'header del modale.</p> `;

    return html`
        <button type="button" @click=${openModal}>Apri Modale</button>
        ${modal({
            ...args,
            content: contentHtml,
            headerContent: headerContentHtml,
        })}
    `;
};

export const Default = {
    render: Template,
    args: {
        title: "Titolo Modale",
        width: "400px",
        variant: "default",
    }
};


export const Width25 = {
    render: Template,
    args: {
        title: "Titolo Modale",
        width: "25vw",
        variant: "default",
    },
};

export const Width80 = {
    render: Template,
    args: {
        title: "Titolo Modale",
        width: "80vw",
        variant: "default",
    },
};

export const Overlay = {
    render: Template,
    args: {
        title: "Titolo Modale",
        variant: "overlay",
    },
};
