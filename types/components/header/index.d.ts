import { LitElement } from 'lit';
import type { Controls } from '@/index';
export declare class CodeSandboxHeader extends LitElement {
    showCode: boolean;
    showFiles: boolean;
    showPreview: boolean;
    showHeader: boolean;
    excludes: Controls[];
    active(show: boolean): "" | "disable-header-icon";
    refreshPreview(): void;
    toggle(show: '_showFiles' | '_showCode' | '_showPreview' | '_showHeader'): void;
    renderHeaderToggle: () => import("lit-html").TemplateResult<1> | null;
    renderFilesToggle: () => import("lit-html").TemplateResult<1> | null;
    renderCodeToggle: () => import("lit-html").TemplateResult<1> | null;
    renderRefreshIcon: () => import("lit-html").TemplateResult<1> | null;
    renderPreviewToggle: () => import("lit-html").TemplateResult<1> | null;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}