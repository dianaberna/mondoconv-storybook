import { html, render } from "lit";
import type { TemplateResult } from "lit";
import "./tab.css";

export interface TabProps {
    label: string;
    content: string | TemplateResult | Function;
}

export interface LitTabsProps {
    tabs: TabProps[];
    activeTab?: number;
    variant?: "default" | "pieno";
    container: HTMLElement;
}

export const createTabs = ({
    tabs,
    activeTab = 0,
    variant = "default",
    container,
}: LitTabsProps) => {
    let currentActiveTab = activeTab;

    const focusTab = (index: number) => {
        const tabButton = container.querySelector(
            `#tab-${index}`
        ) as HTMLButtonElement | null;
        tabButton?.focus();
    };

    const updateActiveTab = (index: number) => {
        currentActiveTab = index;
        renderTabs();
        focusTab(index);

        const event = new CustomEvent("tab-change", {
            bubbles: true,
            composed: true,
            detail: { activeTab: currentActiveTab },
        });
        container.dispatchEvent(event);
    };

    const handleTabClick = (index: number) => {
        updateActiveTab(index);
    };

    const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") {
            updateActiveTab(Math.max(currentActiveTab - 1, 0));
        } else if (event.key === "ArrowRight") {
            updateActiveTab(Math.min(currentActiveTab + 1, tabs.length - 1));
        }
    };

    const renderTabs = () => {
        const classes = ["tabs", `tabs--${variant}`].join(" ");

        const template = html`
            <div class="${classes}">
                <div
                    role="tablist"
                    aria-labelledby="tablist-1"
                    @keydown=${handleKeydown}
                >
                    ${tabs.map(
                        (tab, index) => html`
                            <span>
                                <button
                                    id="tab-${index}"
                                    type="button"
                                    role="tab"
                                    aria-selected="${index ===
                                    currentActiveTab}"
                                    aria-controls="tabpanel-${index}"
                                    tabindex="${index === currentActiveTab
                                        ? "0"
                                        : "-1"}"
                                    @click=${() => handleTabClick(index)}
                                    class="tab-button tab-button--${variant} ${index ===
                                    currentActiveTab
                                        ? "tab-button--active"
                                        : ""}"
                                >
                                    ${tab.label}
                                </button>
                            </span>
                        `
                    )}
                </div>

                ${tabs.map(
                    (tab, index) => html`
                        <div
                            id="tabpanel-${index}"
                            role="tabpanel"
                            aria-labelledby="tab-${index}"
                            class="tabpanel ${index !== currentActiveTab
                                ? "is-hidden"
                                : ""}"
                            ?hidden=${index !== currentActiveTab}
                        >
                            ${typeof tab.content === "function"
                                ? tab.content()
                                : tab.content}
                        </div>
                    `
                )}
            </div>
        `;

        render(template, container);
    };

    renderTabs();

    return {
        update: updateActiveTab,
        getActiveTab: () => currentActiveTab,
    };
};
