# Darksight

Darksight is a Vue 3 + Vite UI component showcase and documentation app.  
It includes themed component demos (light/dark), navigation patterns, and reusable docs sections for consistent component guidance.

## Tech stack

- Vue 3
- Vue Router 4
- Vite

## Project structure

```text
darksight/
  src/
    components/
      DsTooltip.vue
      DsSnackbar.vue
      DocsSection.vue
    composables/
      useSnackbar.js
    pages/
      ButtonsPage.vue
      BreadcrumbPage.vue
      CardPage.vue
      DocumentationPage.vue
      GettingStartedPage.vue
      HomePage.vue
      InputsPage.vue
      PaginationPage.vue
      RadioButtonsPage.vue
      SearchInputPage.vue
      SnackbarPage.vue
      StepperPage.vue
      TabsPage.vue
      ThemesPage.vue
      TooltipPage.vue
    router/
      index.js
    App.vue
    main.js
  styles.css
  index.html
```

## Getting started

### Install dependencies

```sh
npm install
```

### Run dev server

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

## Routing and metadata

Routes are lazy-loaded and include metadata for:

- breadcrumb label/icon
- page title
- page description
- category grouping

`router.afterEach` updates `document.title` automatically.

## Key UI components

### `DsTooltip`

- Hover/focus trigger behavior
- Keyboard escape support
- Accessible tooltip semantics (`role="tooltip"`, `aria-describedby`)

### `DsSnackbar`

- Variant styles: info/success/error/warning
- Live region semantics (assertive for errors)
- Optional action and dismiss controls

### `useSnackbar` composable

- Queue-based snackbar flow
- Dedupe logic for repeated messages
- Action callback support per queued item
- Auto-dismiss with configurable duration

## Theming and styling

Global styles use tokenized variables in `styles.css`, including semantic aliases:

- `--surface`, `--surface-elevated`, `--surface-card`
- `--text-primary`, `--text-secondary`
- `--border-color`, `--border-subtle`
- `--accent-color`

Utility classes added:

- `.u-visually-hidden`
- `.u-card`
- `.u-section-stack`

## Documentation patterns

`DocsSection.vue` provides a reusable docs block with:

- title/description
- preview slot
- optional API list
- accessibility notes

It is integrated in key pages including:

- `TooltipPage.vue`
- `SnackbarPage.vue`

## Recommended IDE setup

- VS Code
- Vue - Official (Volar)

## Notes

This project is intended as a practical component library reference and demo workspace.  
Use it as a base for design system experimentation, component API documentation, and accessibility iteration.
