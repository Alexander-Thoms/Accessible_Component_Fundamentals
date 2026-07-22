# ARIA Component Comparison: Custom vs shadcn/ui

## Keyboard Testing Checklist

Use these tests on **each custom component** and the **shadcn equivalent**.

### Modal / Dialog
- [ ] Tab moves focus through focusable elements inside the dialog
- [ ] Shift+Tab reverse-cycles through focusable elements
- [ ] Tab does NOT escape the dialog (focus trap)
- [ ] Escape closes the dialog
- [ ] Focus moves to first focusable element on open
- [ ] Focus returns to trigger button on close
- [ ] Overlay click closes the dialog

### Tabs
- [ ] Tab focuses the active tab, not individual tab stops
- [ ] Left/Right arrow keys move tab selection (automatic activation)
- [ ] Home key selects first tab
- [ ] End key selects last tab
- [ ] Tab moves from tablist into the active tabpanel

### Disclosure
- [ ] Space toggles open/closed
- [ ] Enter toggles open/closed
- [ ] Tab moves to next focusable element (disclosure does NOT trap focus)
- [ ] Focus remains on the button when toggling

---

## Comparison: Custom Modal vs shadcn Dialog

| Feature | Custom | shadcn (Base UI) |
|---|---|---|
| `role="dialog"` | | |
| `aria-modal="true"` | | |
| `aria-labelledby` | | |
| Focus trap | | |
| Escape to close | | |
| Focus restore on close | | |
| Portal rendering | | |
| Backdrop / overlay | | |
| Scroll lock | | |
| Animations / transitions | | |
| `aria-describedby` | | |

## Comparison: Custom Tabs vs shadcn Tabs

| Feature | Custom | shadcn (Base UI) |
|---|---|---|
| `role="tablist"` | | |
| `role="tab"` / `role="tabpanel"` | | |
| `aria-selected` | | |
| `aria-controls` | | |
| `aria-labelledby` | | |
| Roving tabindex | | |
| Arrow key navigation | | |
| Home / End keys | | |
| Orientation support | | |

## Comparison: Custom Disclosure vs shadcn Dialog (closest match)

| Feature | Custom Disclosure | shadcn Dialog |
|---|---|---|
| `aria-expanded` | | |
| `aria-controls` | | |
| `hidden` attribute | | |
| Space / Enter toggle | | |
| Focus stays on trigger | | |

---

## Observations

<!-- Write your notes here after testing both implementations -->

### What shadcn handled that I missed:

1.

2.

3.

### What I handled differently:

1.

2.

3.
