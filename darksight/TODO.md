# Remove DocsSection and Inline Examples TODO

## Task: Remove unnecessary DocsSection.vue and place component examples directly on pages

### Information Gathered:
- `DocsSection.vue` is currently used in:
  - `darksight/src/pages/ChipPage.vue`
  - `darksight/src/pages/BadgePage.vue`
  - `darksight/src/pages/SnackbarPage.vue`
  - `darksight/src/pages/TooltipPage.vue`
- `InputPage.vue` already renders inline examples and does not use `DocsSection`.
- The pages currently pass API and notes arrays into `DocsSection`; these need to be represented inline after removal.

### Plan:
1. [x] Confirm plan with user - APPROVED
2. [x] Refactor `ChipPage.vue` to remove `DocsSection` usage and inline all examples/content
3. [x] Refactor `BadgePage.vue` to remove `DocsSection` usage and inline all examples/content
4. [x] Refactor `SnackbarPage.vue` to remove `DocsSection` usage and inline all examples/content
5. [x] Refactor `TooltipPage.vue` to remove `DocsSection` usage and inline all examples/content
6. [ ] Remove unused `DocsSection.vue`
7. [x] Run build validation (`npm run build`)

## Follow-up Task: Fix chip icon rendering + dark mode styling

### Plan:
1. [x] Confirm follow-up plan with user - APPROVED
2. [ ] Fix icon path data in `src/components/DsChip.vue`
3. [ ] Improve dark-mode styling for chip variants/states
4. [ ] Run build validation (`npm run build`)

## New Task: Make divider inline label dynamic (attr/class based)

### Information Gathered:
- Divider styles are in `darksight/styles.css`.
- Current inline label is hardcoded: `.divider::before { content: 'MAIN'; }`.
- Divider usage in navigation is in `darksight/src/App.vue` as `<div class="divider divider-inset"></div>`.

### Plan:
1. [x] Confirm plan with user - APPROVED
2. [x] Update divider CSS to support dynamic label via attribute (`data-label`)
3. [x] Add class-based label support for common predefined labels
4. [x] Update divider usage in `src/App.vue` to set inline label dynamically
5. [x] Validate style consistency for inset/left/right divider variants

### Dependent Files to be edited:
- `darksight/styles.css`
- `darksight/src/App.vue`
- `darksight/TODO.md`

### Followup steps:
- Ensure divider renders label from `data-label` where provided
- Ensure class-based fallback works when needed

## New Task: Add new CardPage card types inspired by CodePen (HTML + CSS only)

### Information Gathered:
- `darksight/src/pages/CardPage.vue` currently has one profile card demo.
- `darksight/styles.css` contains `.profile-card*` styles and responsive/dark theme conventions.
- Requirement: create a few new card types based on the reference, without comment/like icons, and using plain HTML/CSS (no Sass).

### Plan:
1. [x] Confirm plan with user - APPROVED
2. [x] Update `src/pages/CardPage.vue` to add 3 new card types
3. [x] Add CSS for new card variants in `styles.css` (responsive + dark theme support)
4. [ ] Quick validation for template/style consistency

### Dependent Files to be edited:
- `darksight/src/pages/CardPage.vue`
- `darksight/styles.css`
- `darksight/TODO.md`

### Followup steps:
- Ensure no comment/like icon UI appears in any new card
- Keep visuals aligned with existing typography and spacing system
