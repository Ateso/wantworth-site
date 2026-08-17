/* @ds-bundle: {"format":3,"namespace":"ATESSODesignSystem_bbf0b0","components":[{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Avatar","sourcePath":"components/layout/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/layout/Avatar.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"Progress","sourcePath":"components/layout/Progress.jsx"},{"name":"Stat","sourcePath":"components/layout/Stat.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Accordion","sourcePath":"components/overlay/Accordion.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/feedback/Alert.jsx":"d044ee8e8096","components/feedback/Badge.jsx":"c419ae23ce2b","components/feedback/Tag.jsx":"596f4896dbeb","components/feedback/Toast.jsx":"659d9849ad55","components/feedback/Tooltip.jsx":"ddb8e93320e5","components/forms/Button.jsx":"04a6587aad53","components/forms/Checkbox.jsx":"c8643bf7a2a6","components/forms/IconButton.jsx":"6a9edbcb04b7","components/forms/Input.jsx":"f5e931b50ecc","components/forms/Radio.jsx":"eff786f97742","components/forms/Select.jsx":"dd36fe278504","components/forms/Switch.jsx":"27c29ba61819","components/forms/Textarea.jsx":"3220edc6420d","components/layout/Avatar.jsx":"c0a1066a5e9a","components/layout/Card.jsx":"14465fc4ca90","components/layout/Divider.jsx":"2af4bc566179","components/layout/Progress.jsx":"abc486c5e4b6","components/layout/Stat.jsx":"b023b546e00a","components/navigation/Breadcrumb.jsx":"cb5dff272436","components/navigation/Pagination.jsx":"a1d58b9cd965","components/navigation/Tabs.jsx":"4e0d7b3e7863","components/overlay/Accordion.jsx":"1fd8df3b6ce4","components/overlay/Dialog.jsx":"c4a8edaf0554","estimator/estimator-core.jsx":"01751804cc9e","estimator/estimator.jsx":"2752623355c4","estimator/tweaks-panel.jsx":"6591467622ed","ui_kits/portal/portal.jsx":"8987704052b6","ui_kits/website/sections.jsx":"81d9222eb9ce"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ATESSODesignSystem_bbf0b0 = window.ATESSODesignSystem_bbf0b0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-alert {
  display: flex; gap: var(--space-3); align-items: flex-start;
  font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text-body);
  padding: var(--space-4); border-radius: var(--radius-md);
  border: var(--border-width) solid var(--border-default); background: var(--surface-card);
  border-left-width: 4px;
}
.ats-alert__icon { flex: none; margin-top: 1px; }
.ats-alert__icon svg { width: 20px; height: 20px; display: block; }
.ats-alert__title { font-family: var(--font-display); font-weight: var(--fw-bold); font-size: var(--text-md); color: var(--text-strong); margin-bottom: 2px; text-transform: none; }
.ats-alert--info    { border-left-color: var(--info); }
.ats-alert--info .ats-alert__icon { color: var(--info); }
.ats-alert--success { border-left-color: var(--success); }
.ats-alert--success .ats-alert__icon { color: var(--success); }
.ats-alert--warning { border-left-color: var(--warning); }
.ats-alert--warning .ats-alert__icon { color: var(--warning); }
.ats-alert--danger  { border-left-color: var(--danger); }
.ats-alert--danger .ats-alert__icon { color: var(--danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-alert-css')) {
  const s = document.createElement('style');
  s.id = 'ats-alert-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 16v-4M12 8h.01M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4 12 14.01l-3-3"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20ZM15 9l-6 6M9 9l6 6"
  })
};
function Alert({
  tone = 'info',
  title,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ats-alert', `ats-alert--${tone}`, className].filter(Boolean).join(' '),
    role: "alert"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ats-alert__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[tone])), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    className: "ats-alert__title"
  }, title), /*#__PURE__*/React.createElement("div", null, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-badge {
  display: inline-flex; align-items: center; gap: 5px;
  font-family: var(--font-sans); font-weight: var(--fw-semibold);
  font-size: var(--text-xs); line-height: 1;
  padding: 4px 10px; border-radius: var(--radius-pill);
  white-space: nowrap;
}
.ats-badge--dot::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
.ats-badge--neutral { background: var(--gray-100); color: var(--gray-700); }
.ats-badge--brand   { background: var(--teal-100); color: var(--teal-800); }
.ats-badge--success { background: var(--green-100); color: #1c6b45; }
.ats-badge--warning { background: var(--amber-100); color: #8a5d13; }
.ats-badge--danger  { background: var(--red-100); color: #a5342a; }
.ats-badge--info    { background: var(--blue-100); color: #1f5f78; }
.ats-badge--solid   { background: var(--color-primary); color: var(--color-on-primary); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-badge-css')) {
  const s = document.createElement('style');
  s.id = 'ats-badge-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  className = '',
  ...rest
}) {
  const cls = ['ats-badge', `ats-badge--${tone}`, dot ? 'ats-badge--dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-tag {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--font-sans); font-weight: var(--fw-medium);
  font-size: var(--text-sm); color: var(--text-body);
  padding: 6px 12px; border-radius: var(--radius-pill);
  background: var(--surface-card); border: var(--border-width) solid var(--border-default);
  transition: border-color var(--dur-base), background var(--dur-base), color var(--dur-base);
}
.ats-tag--brand { background: var(--teal-50); border-color: var(--teal-200); color: var(--teal-800); }
.ats-tag--interactive { cursor: pointer; }
.ats-tag--interactive:hover { border-color: var(--color-primary); color: var(--text-strong); }
.ats-tag__remove {
  display: inline-flex; align-items: center; justify-content: center;
  width: 16px; height: 16px; border: none; background: transparent;
  color: var(--text-muted); cursor: pointer; padding: 0; border-radius: 50%;
}
.ats-tag__remove:hover { background: var(--gray-200); color: var(--text-strong); }
.ats-tag__remove svg { width: 12px; height: 12px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-tag-css')) {
  const s = document.createElement('style');
  s.id = 'ats-tag-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tag({
  children,
  tone = 'neutral',
  onRemove,
  onClick,
  className = '',
  ...rest
}) {
  const interactive = !!onClick;
  const cls = ['ats-tag', tone === 'brand' ? 'ats-tag--brand' : '', interactive ? 'ats-tag--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ats-tag__remove",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-toast {
  display: flex; gap: var(--space-3); align-items: flex-start;
  font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text-body);
  background: var(--surface-card); border: var(--border-width) solid var(--border-subtle);
  border-radius: var(--radius-md); box-shadow: var(--shadow-lg);
  padding: var(--space-4); min-width: 300px; max-width: 420px;
}
.ats-toast__accent { width: 4px; align-self: stretch; border-radius: var(--radius-pill); flex: none; }
.ats-toast--success .ats-toast__accent { background: var(--success); }
.ats-toast--danger  .ats-toast__accent { background: var(--danger); }
.ats-toast--info    .ats-toast__accent { background: var(--info); }
.ats-toast--brand   .ats-toast__accent { background: var(--color-primary); }
.ats-toast__title { font-family: var(--font-display); font-weight: var(--fw-bold); font-size: var(--text-md); color: var(--text-strong); text-transform: none; }
.ats-toast__body { margin-top: 2px; color: var(--text-muted); }
.ats-toast__close {
  margin-left: auto; border: none; background: transparent; cursor: pointer;
  color: var(--text-subtle); padding: 2px; border-radius: var(--radius-sm); flex: none;
}
.ats-toast__close:hover { color: var(--text-strong); background: var(--gray-100); }
.ats-toast__close svg { width: 16px; height: 16px; display: block; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-toast-css')) {
  const s = document.createElement('style');
  s.id = 'ats-toast-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Toast({
  tone = 'brand',
  title,
  children,
  onClose,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ats-toast', `ats-toast--${tone}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ats-toast__accent"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "ats-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "ats-toast__body"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ats-toast__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-tooltip { position: relative; display: inline-flex; }
.ats-tooltip__bubble {
  position: absolute; z-index: 50; left: 50%; transform: translateX(-50%) translateY(4px);
  bottom: calc(100% + 8px);
  background: var(--gray-900); color: var(--white);
  font-family: var(--font-sans); font-size: var(--text-xs); font-weight: var(--fw-medium);
  padding: 6px 10px; border-radius: var(--radius-sm); white-space: nowrap;
  opacity: 0; pointer-events: none; box-shadow: var(--shadow-md);
  transition: opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out);
}
.ats-tooltip__bubble::after {
  content: ""; position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
  border: 5px solid transparent; border-top-color: var(--gray-900);
}
.ats-tooltip:hover .ats-tooltip__bubble,
.ats-tooltip:focus-within .ats-tooltip__bubble { opacity: 1; transform: translateX(-50%) translateY(0); }
.ats-tooltip--bottom .ats-tooltip__bubble { bottom: auto; top: calc(100% + 8px); }
.ats-tooltip--bottom .ats-tooltip__bubble::after { top: auto; bottom: 100%; border-top-color: transparent; border-bottom-color: var(--gray-900); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-tooltip-css')) {
  const s = document.createElement('style');
  s.id = 'ats-tooltip-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tooltip({
  label,
  placement = 'top',
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ats-tooltip', placement === 'bottom' ? 'ats-tooltip--bottom' : '', className].filter(Boolean).join(' ')
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "ats-tooltip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-btn {
  --_bg: var(--color-primary);
  --_fg: var(--color-on-primary);
  --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-display);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  border: var(--border-width) solid var(--_bd);
  background: var(--_bg); color: var(--_fg);
  border-radius: var(--radius-pill);
  cursor: pointer;
  white-space: nowrap;
  transition: transform var(--dur-fast) var(--ease-standard),
              background var(--dur-base) var(--ease-standard),
              box-shadow var(--dur-base) var(--ease-standard),
              border-color var(--dur-base) var(--ease-standard),
              color var(--dur-base) var(--ease-standard);
}
.ats-btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.ats-btn:active { transform: translateY(1px) scale(0.985); }
.ats-btn[disabled] { opacity: 0.45; cursor: not-allowed; transform: none; }

/* sizes */
.ats-btn--sm { font-size: var(--text-xs); padding: 0 var(--space-4); height: 34px; }
.ats-btn--md { font-size: var(--text-sm); padding: 0 var(--space-5); height: 44px; }
.ats-btn--lg { font-size: var(--text-md); padding: 0 var(--space-6); height: 54px; }

/* variants */
.ats-btn--primary:not([disabled]):hover { background: var(--color-primary-hover); box-shadow: var(--shadow-brand); }
.ats-btn--secondary { --_bg: var(--gray-900); --_fg: var(--white); }
.ats-btn--secondary:not([disabled]):hover { --_bg: var(--gray-800); box-shadow: var(--shadow-md); }
.ats-btn--outline { --_bg: transparent; --_fg: var(--text-strong); --_bd: var(--border-strong); }
.ats-btn--outline:not([disabled]):hover { --_bd: var(--color-primary); --_fg: var(--color-primary-active); background: var(--teal-50); }
.ats-btn--ghost { --_bg: transparent; --_fg: var(--text-strong); }
.ats-btn--ghost:not([disabled]):hover { background: var(--gray-100); }
.ats-btn--danger { --_bg: var(--danger); --_fg: var(--white); }
.ats-btn--danger:not([disabled]):hover { --_bg: #c94a3f; box-shadow: var(--shadow-md); }

.ats-btn--block { width: 100%; }
.ats-btn svg { width: 1.15em; height: 1.15em; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-btn-css')) {
  const s = document.createElement('style');
  s.id = 'ats-btn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  block = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  className = '',
  ...rest
}) {
  const cls = ['ats-btn', `ats-btn--${variant}`, `ats-btn--${size}`, block ? 'ats-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled
  }, rest), iconLeft, children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-check { display: inline-flex; align-items: flex-start; gap: var(--space-3); cursor: pointer; font-family: var(--font-sans); color: var(--text-body); font-size: var(--text-sm); user-select: none; }
.ats-check[data-disabled="true"] { opacity: 0.5; cursor: not-allowed; }
.ats-check input { position: absolute; opacity: 0; width: 0; height: 0; }
.ats-check__box {
  flex: none; width: 20px; height: 20px; margin-top: 1px;
  border: 2px solid var(--border-strong); border-radius: var(--radius-xs);
  background: var(--surface-card);
  display: flex; align-items: center; justify-content: center;
  transition: background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard);
}
.ats-check__box svg { width: 14px; height: 14px; color: var(--color-on-primary); opacity: 0; transform: scale(0.5); transition: opacity var(--dur-fast), transform var(--dur-fast) var(--ease-spring); }
.ats-check input:checked + .ats-check__box { background: var(--color-primary); border-color: var(--color-primary); }
.ats-check input:checked + .ats-check__box svg { opacity: 1; transform: scale(1); }
.ats-check input:focus-visible + .ats-check__box { box-shadow: var(--focus-ring); }
.ats-check__label { line-height: 1.35; }
.ats-check__label b { display: block; color: var(--text-strong); font-weight: var(--fw-semibold); font-size: var(--text-md); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-check-css')) {
  const s = document.createElement('style');
  s.id = 'ats-check-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Checkbox({
  label,
  description,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ats-check', className].filter(Boolean).join(' '),
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ats-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "ats-check__label"
  }, description ? /*#__PURE__*/React.createElement("b", null, label) : label, description));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  border: var(--border-width) solid transparent;
  background: transparent; color: var(--text-body);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--dur-base) var(--ease-standard),
              color var(--dur-base) var(--ease-standard),
              border-color var(--dur-base) var(--ease-standard),
              transform var(--dur-fast) var(--ease-standard);
}
.ats-iconbtn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.ats-iconbtn:active { transform: scale(0.92); }
.ats-iconbtn[disabled] { opacity: 0.4; cursor: not-allowed; }
.ats-iconbtn svg { width: 1.25em; height: 1.25em; display: block; }

.ats-iconbtn--sm { width: 34px; height: 34px; font-size: var(--text-sm); }
.ats-iconbtn--md { width: 44px; height: 44px; font-size: var(--text-md); }
.ats-iconbtn--lg { width: 54px; height: 54px; font-size: var(--text-lg); }

.ats-iconbtn--ghost:not([disabled]):hover { background: var(--gray-100); color: var(--text-strong); }
.ats-iconbtn--solid { background: var(--color-primary); color: var(--color-on-primary); border-radius: var(--radius-pill); }
.ats-iconbtn--solid:not([disabled]):hover { background: var(--color-primary-hover); }
.ats-iconbtn--outline { border-color: var(--border-strong); border-radius: var(--radius-pill); }
.ats-iconbtn--outline:not([disabled]):hover { border-color: var(--color-primary); color: var(--color-primary-active); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-iconbtn-css')) {
  const s = document.createElement('style');
  s.id = 'ats-iconbtn-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function IconButton({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  label,
  className = '',
  ...rest
}) {
  const cls = ['ats-iconbtn', `ats-iconbtn--${variant}`, `ats-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: cls,
    disabled: disabled,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-field { display: flex; flex-direction: column; gap: var(--space-2); }
.ats-field__label {
  font-family: var(--font-sans); font-weight: var(--fw-semibold);
  font-size: var(--text-sm); color: var(--text-strong);
}
.ats-field__req { color: var(--danger); margin-left: 2px; }
.ats-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
.ats-field__error { font-size: var(--text-xs); color: var(--danger); font-weight: var(--fw-medium); }

.ats-input {
  font-family: var(--font-sans); font-size: var(--text-md);
  color: var(--text-strong); background: var(--surface-card);
  border: var(--border-width) solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 var(--space-4); height: 46px; width: 100%;
  transition: border-color var(--dur-base) var(--ease-standard),
              box-shadow var(--dur-base) var(--ease-standard);
}
.ats-input::placeholder { color: var(--text-subtle); }
.ats-input:hover { border-color: var(--border-strong); }
.ats-input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--focus-ring); }
.ats-input[disabled] { background: var(--surface-sunken); color: var(--text-muted); cursor: not-allowed; }
.ats-input--invalid { border-color: var(--danger); }
.ats-input--invalid:focus { box-shadow: 0 0 0 3px rgba(219,90,78,0.30); }

.ats-input-wrap { position: relative; display: flex; align-items: center; }
.ats-input-wrap .ats-input__icon {
  position: absolute; left: var(--space-4); color: var(--text-muted);
  display: flex; pointer-events: none;
}
.ats-input-wrap .ats-input__icon svg { width: 18px; height: 18px; }
.ats-input-wrap--icon .ats-input { padding-left: calc(var(--space-4) + 26px); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-input-css')) {
  const s = document.createElement('style');
  s.id = 'ats-input-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Input({
  label,
  hint,
  error,
  required = false,
  icon = null,
  id,
  className = '',
  ...rest
}) {
  const fieldId = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  const input = /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    className: ['ats-input', error ? 'ats-input--invalid' : '', className].filter(Boolean).join(' '),
    "aria-invalid": !!error
  }, rest));
  return /*#__PURE__*/React.createElement("div", {
    className: "ats-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ats-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ats-field__req"
  }, "*")), icon ? /*#__PURE__*/React.createElement("div", {
    className: "ats-input-wrap ats-input-wrap--icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ats-input__icon"
  }, icon), input) : input, error ? /*#__PURE__*/React.createElement("span", {
    className: "ats-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ats-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-radio { display: inline-flex; align-items: flex-start; gap: var(--space-3); cursor: pointer; font-family: var(--font-sans); color: var(--text-body); font-size: var(--text-sm); user-select: none; }
.ats-radio[data-disabled="true"] { opacity: 0.5; cursor: not-allowed; }
.ats-radio input { position: absolute; opacity: 0; width: 0; height: 0; }
.ats-radio__dot {
  flex: none; width: 20px; height: 20px; margin-top: 1px;
  border: 2px solid var(--border-strong); border-radius: 50%;
  background: var(--surface-card);
  display: flex; align-items: center; justify-content: center;
  transition: border-color var(--dur-fast) var(--ease-standard);
}
.ats-radio__dot::after { content: ""; width: 10px; height: 10px; border-radius: 50%; background: var(--color-primary); transform: scale(0); transition: transform var(--dur-fast) var(--ease-spring); }
.ats-radio input:checked + .ats-radio__dot { border-color: var(--color-primary); }
.ats-radio input:checked + .ats-radio__dot::after { transform: scale(1); }
.ats-radio input:focus-visible + .ats-radio__dot { box-shadow: var(--focus-ring); }
.ats-radio__label { line-height: 1.35; }
.ats-radio__label b { display: block; color: var(--text-strong); font-weight: var(--fw-semibold); font-size: var(--text-md); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-radio-css')) {
  const s = document.createElement('style');
  s.id = 'ats-radio-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Radio({
  label,
  description,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ats-radio', className].filter(Boolean).join(' '),
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ats-radio__dot"
  }), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "ats-radio__label"
  }, description ? /*#__PURE__*/React.createElement("b", null, label) : label, description));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-select-wrap { position: relative; display: block; }
.ats-select {
  appearance: none; -webkit-appearance: none;
  font-family: var(--font-sans); font-size: var(--text-md);
  color: var(--text-strong); background: var(--surface-card);
  border: var(--border-width) solid var(--border-default);
  border-radius: var(--radius-md);
  padding: 0 calc(var(--space-4) + 22px) 0 var(--space-4); height: 46px; width: 100%;
  cursor: pointer;
  transition: border-color var(--dur-base) var(--ease-standard),
              box-shadow var(--dur-base) var(--ease-standard);
}
.ats-select:hover { border-color: var(--border-strong); }
.ats-select:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--focus-ring); }
.ats-select[disabled] { background: var(--surface-sunken); color: var(--text-muted); cursor: not-allowed; }
.ats-select--invalid { border-color: var(--danger); }
.ats-select__chevron {
  position: absolute; right: var(--space-4); top: 50%; transform: translateY(-50%);
  width: 16px; height: 16px; pointer-events: none; color: var(--text-muted);
}
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-select-css')) {
  const s = document.createElement('style');
  s.id = 'ats-select-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Select({
  label,
  hint,
  error,
  required = false,
  options = [],
  placeholder,
  id,
  className = '',
  children,
  ...rest
}) {
  const fieldId = id || (label ? 'sel-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "ats-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ats-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ats-field__req"
  }, "*")), /*#__PURE__*/React.createElement("div", {
    className: "ats-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    className: ['ats-select', error ? 'ats-select--invalid' : '', className].filter(Boolean).join(' '),
    "aria-invalid": !!error
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lbl);
  }), children), /*#__PURE__*/React.createElement("svg", {
    className: "ats-select__chevron",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), error ? /*#__PURE__*/React.createElement("span", {
    className: "ats-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ats-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-switch { display: inline-flex; align-items: center; gap: var(--space-3); cursor: pointer; font-family: var(--font-sans); font-size: var(--text-sm); color: var(--text-body); user-select: none; }
.ats-switch[data-disabled="true"] { opacity: 0.5; cursor: not-allowed; }
.ats-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.ats-switch__track {
  position: relative; flex: none; width: 44px; height: 26px;
  background: var(--gray-300); border-radius: var(--radius-pill);
  transition: background var(--dur-base) var(--ease-standard);
}
.ats-switch__thumb {
  position: absolute; top: 3px; left: 3px; width: 20px; height: 20px;
  background: var(--white); border-radius: 50%; box-shadow: var(--shadow-sm);
  transition: transform var(--dur-base) var(--ease-spring);
}
.ats-switch input:checked + .ats-switch__track { background: var(--color-primary); }
.ats-switch input:checked + .ats-switch__track .ats-switch__thumb { transform: translateX(18px); }
.ats-switch input:focus-visible + .ats-switch__track { box-shadow: var(--focus-ring); }
.ats-switch__label b { color: var(--text-strong); font-weight: var(--fw-semibold); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-switch-css')) {
  const s = document.createElement('style');
  s.id = 'ats-switch-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Switch({
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['ats-switch', className].filter(Boolean).join(' '),
    "data-disabled": disabled
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ats-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ats-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "ats-switch__label"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-textarea {
  font-family: var(--font-sans); font-size: var(--text-md);
  color: var(--text-strong); background: var(--surface-card);
  border: var(--border-width) solid var(--border-default);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4); width: 100%; min-height: 112px;
  resize: vertical; line-height: var(--leading-normal);
  transition: border-color var(--dur-base) var(--ease-standard),
              box-shadow var(--dur-base) var(--ease-standard);
}
.ats-textarea::placeholder { color: var(--text-subtle); }
.ats-textarea:hover { border-color: var(--border-strong); }
.ats-textarea:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--focus-ring); }
.ats-textarea[disabled] { background: var(--surface-sunken); color: var(--text-muted); cursor: not-allowed; }
.ats-textarea--invalid { border-color: var(--danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-textarea-css')) {
  const s = document.createElement('style');
  s.id = 'ats-textarea-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Textarea({
  label,
  hint,
  error,
  required = false,
  id,
  className = '',
  ...rest
}) {
  const fieldId = id || (label ? 'ta-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "ats-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ats-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ats-field__req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    className: ['ats-textarea', error ? 'ats-textarea--invalid' : '', className].filter(Boolean).join(' '),
    "aria-invalid": !!error
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    className: "ats-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ats-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-avatar {
  display: inline-flex; align-items: center; justify-content: center;
  border-radius: 50%; overflow: hidden; flex: none;
  font-family: var(--font-display); font-weight: var(--fw-bold);
  background: var(--teal-200); color: var(--teal-900);
  border: 2px solid var(--surface-card);
  text-transform: uppercase; user-select: none;
}
.ats-avatar img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ats-avatar--xs { width: 24px; height: 24px; font-size: 10px; }
.ats-avatar--sm { width: 32px; height: 32px; font-size: 12px; }
.ats-avatar--md { width: 44px; height: 44px; font-size: 15px; }
.ats-avatar--lg { width: 60px; height: 60px; font-size: 20px; }
.ats-avatar--xl { width: 88px; height: 88px; font-size: 30px; }
.ats-avatar__status {
  position: absolute; bottom: 0; right: 0; width: 28%; height: 28%;
  min-width: 8px; min-height: 8px; border-radius: 50%;
  border: 2px solid var(--surface-card); background: var(--gray-400);
}
.ats-avatar__status--online { background: var(--success); }
.ats-avatar__status--busy { background: var(--danger); }
.ats-avatar-wrap { position: relative; display: inline-flex; }
.ats-avatar-group { display: inline-flex; }
.ats-avatar-group > * { margin-left: -10px; }
.ats-avatar-group > *:first-child { margin-left: 0; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-avatar-css')) {
  const s = document.createElement('style');
  s.id = 'ats-avatar-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function initials(name = '') {
  return name.trim().split(/\s+/).slice(0, 2).map(n => n[0]).join('');
}
function Avatar({
  src,
  name = '',
  size = 'md',
  status,
  className = '',
  ...rest
}) {
  const av = /*#__PURE__*/React.createElement("span", _extends({
    className: ['ats-avatar', `ats-avatar--${size}`, className].filter(Boolean).join(' ')
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
  if (!status) return av;
  return /*#__PURE__*/React.createElement("span", {
    className: "ats-avatar-wrap"
  }, av, /*#__PURE__*/React.createElement("span", {
    className: `ats-avatar__status ats-avatar__status--${status}`
  }));
}
function AvatarGroup({
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['ats-avatar-group', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-card {
  background: var(--surface-card);
  border: var(--border-width) solid var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow var(--dur-base) var(--ease-standard),
              transform var(--dur-base) var(--ease-standard),
              border-color var(--dur-base) var(--ease-standard);
}
.ats-card--pad { padding: var(--space-5); }
.ats-card--interactive { cursor: pointer; }
.ats-card--interactive:hover { box-shadow: var(--shadow-lg); transform: translateY(-3px); border-color: var(--border-default); }
.ats-card--flat { box-shadow: none; }
.ats-card--brand { background: var(--teal-50); border-color: var(--teal-200); }
.ats-card--ink { background: var(--gray-900); border-color: var(--gray-900); color: var(--gray-100); }
.ats-card--accent { border-top: 3px solid var(--color-primary); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-card-css')) {
  const s = document.createElement('style');
  s.id = 'ats-card-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Card({
  children,
  variant = 'default',
  padded = true,
  interactive = false,
  className = '',
  ...rest
}) {
  const cls = ['ats-card', padded ? 'ats-card--pad' : '', interactive ? 'ats-card--interactive' : '', variant === 'flat' ? 'ats-card--flat' : '', variant === 'brand' ? 'ats-card--brand' : '', variant === 'ink' ? 'ats-card--ink' : '', variant === 'accent' ? 'ats-card--accent' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-divider { border: none; background: var(--border-default); }
.ats-divider--h { width: 100%; height: 1px; margin: var(--space-5) 0; }
.ats-divider--v { width: 1px; align-self: stretch; margin: 0 var(--space-4); }
.ats-divider--label {
  display: flex; align-items: center; gap: var(--space-4);
  color: var(--text-subtle); font-family: var(--font-display);
  text-transform: uppercase; letter-spacing: var(--tracking-label);
  font-size: var(--text-xs); font-weight: var(--fw-bold);
  background: none; margin: var(--space-5) 0;
}
.ats-divider--label::before, .ats-divider--label::after {
  content: ""; flex: 1; height: 1px; background: var(--border-default);
}
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-divider-css')) {
  const s = document.createElement('style');
  s.id = 'ats-divider-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Divider({
  orientation = 'horizontal',
  label,
  className = '',
  ...rest
}) {
  if (label) {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: ['ats-divider--label', className].filter(Boolean).join(' ')
    }, rest), label);
  }
  const cls = ['ats-divider', orientation === 'vertical' ? 'ats-divider--v' : 'ats-divider--h', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/Progress.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-progress { width: 100%; }
.ats-progress__head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px; }
.ats-progress__label { font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--fw-semibold); color: var(--text-strong); }
.ats-progress__value { font-family: var(--font-mono); font-size: var(--text-xs); color: var(--text-muted); }
.ats-progress__track { height: 8px; background: var(--gray-100); border-radius: var(--radius-pill); overflow: hidden; }
.ats-progress__fill { height: 100%; border-radius: var(--radius-pill); background: var(--color-primary); transition: width var(--dur-slow) var(--ease-out); }
.ats-progress__fill--ink { background: var(--gray-900); }
.ats-progress__fill--warning { background: var(--warning); }
.ats-progress--sm .ats-progress__track { height: 5px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-progress-css')) {
  const s = document.createElement('style');
  s.id = 'ats-progress-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Progress({
  value = 0,
  label,
  showValue = false,
  tone = 'brand',
  size = 'md',
  className = '',
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const fillTone = tone === 'ink' ? 'ats-progress__fill--ink' : tone === 'warning' ? 'ats-progress__fill--warning' : '';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ats-progress', size === 'sm' ? 'ats-progress--sm' : '', className].filter(Boolean).join(' ')
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "ats-progress__head"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "ats-progress__label"
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    className: "ats-progress__value"
  }, pct, "%")), /*#__PURE__*/React.createElement("div", {
    className: "ats-progress__track",
    role: "progressbar",
    "aria-valuenow": pct,
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, /*#__PURE__*/React.createElement("span", {
    className: ['ats-progress__fill', fillTone].filter(Boolean).join(' '),
    style: {
      width: pct + '%'
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Progress.jsx", error: String((e && e.message) || e) }); }

// components/layout/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-stat { display: flex; flex-direction: column; gap: 4px; }
.ats-stat__value {
  font-family: var(--font-display); font-weight: var(--fw-black);
  font-size: var(--text-4xl); line-height: 1; color: var(--text-strong);
  letter-spacing: var(--tracking-tight);
}
.ats-stat__value--brand { color: var(--color-primary-active); }
.ats-stat__label {
  font-family: var(--font-display); text-transform: uppercase;
  letter-spacing: var(--tracking-label); font-size: var(--text-xs);
  font-weight: var(--fw-bold); color: var(--text-muted);
}
.ats-stat__delta { font-family: var(--font-sans); font-size: var(--text-sm); font-weight: var(--fw-semibold); }
.ats-stat__delta--up { color: var(--success); }
.ats-stat__delta--down { color: var(--danger); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-stat-css')) {
  const s = document.createElement('style');
  s.id = 'ats-stat-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Stat({
  value,
  label,
  delta,
  trend,
  brand = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ats-stat', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "ats-stat__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: ['ats-stat__value', brand ? 'ats-stat__value--brand' : ''].filter(Boolean).join(' ')
  }, value), delta && /*#__PURE__*/React.createElement("span", {
    className: `ats-stat__delta ats-stat__delta--${trend === 'down' ? 'down' : 'up'}`
  }, delta));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Stat.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-crumbs { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; font-family: var(--font-sans); font-size: var(--text-sm); }
.ats-crumbs a { color: var(--text-muted); text-decoration: none; }
.ats-crumbs a:hover { color: var(--color-primary-active); text-decoration: none; }
.ats-crumbs__sep { color: var(--text-subtle); display: inline-flex; }
.ats-crumbs__sep svg { width: 14px; height: 14px; }
.ats-crumbs__current { color: var(--text-strong); font-weight: var(--fw-semibold); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-crumbs-css')) {
  const s = document.createElement('style');
  s.id = 'ats-crumbs-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Breadcrumb({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    className: ['ats-crumbs', className].filter(Boolean).join(' ')
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "ats-crumbs__current",
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#'
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      className: "ats-crumbs__sep"
    }, /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "m9 6 6 6-6 6"
    }))));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-pager { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-sans); }
.ats-pager__btn {
  min-width: 38px; height: 38px; padding: 0 10px;
  display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid var(--border-default); background: var(--surface-card);
  color: var(--text-body); border-radius: var(--radius-md); cursor: pointer;
  font-size: var(--text-sm); font-weight: var(--fw-semibold);
  transition: border-color var(--dur-base), background var(--dur-base), color var(--dur-base);
}
.ats-pager__btn:hover:not([disabled]):not([aria-current]) { border-color: var(--border-strong); background: var(--surface-sunken); }
.ats-pager__btn[aria-current="page"] { background: var(--color-primary); border-color: var(--color-primary); color: var(--color-on-primary); }
.ats-pager__btn[disabled] { opacity: 0.4; cursor: not-allowed; }
.ats-pager__btn svg { width: 16px; height: 16px; }
.ats-pager__gap { color: var(--text-subtle); padding: 0 2px; }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-pager-css')) {
  const s = document.createElement('style');
  s.id = 'ats-pager-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function range(total, current) {
  const out = [];
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || Math.abs(p - current) <= 1) out.push(p);else if (out[out.length - 1] !== '…') out.push('…');
  }
  return out;
}
function Pagination({
  total = 1,
  page = 1,
  onChange,
  className = '',
  ...rest
}) {
  const go = p => onChange && p >= 1 && p <= total && p !== page && onChange(p);
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ['ats-pager', className].filter(Boolean).join(' '),
    "aria-label": "Pagination"
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ats-pager__btn",
    disabled: page <= 1,
    onClick: () => go(page - 1),
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }))), range(total, page).map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: 'g' + i,
    className: "ats-pager__gap"
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    className: "ats-pager__btn",
    "aria-current": p === page ? 'page' : undefined,
    onClick: () => go(p)
  }, p)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ats-pager__btn",
    disabled: page >= total,
    onClick: () => go(page + 1),
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }))));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-tabs { display: flex; gap: 4px; border-bottom: 1px solid var(--border-default); }
.ats-tab {
  position: relative; font-family: var(--font-display); font-weight: var(--fw-bold);
  text-transform: uppercase; letter-spacing: var(--tracking-wide); font-size: var(--text-xs);
  color: var(--text-muted); background: transparent; border: none; cursor: pointer;
  padding: var(--space-3) var(--space-4); margin-bottom: -1px;
  border-bottom: 2px solid transparent;
  transition: color var(--dur-base), border-color var(--dur-base);
}
.ats-tab:hover { color: var(--text-strong); }
.ats-tab[aria-selected="true"] { color: var(--text-strong); border-bottom-color: var(--color-primary); }
.ats-tab:focus-visible { outline: none; box-shadow: var(--focus-ring); border-radius: var(--radius-sm); }
.ats-tab__count { margin-left: 6px; font-family: var(--font-sans); font-size: 11px; background: var(--gray-100); color: var(--text-muted); border-radius: var(--radius-pill); padding: 1px 7px; }

.ats-tabs--pill { border-bottom: none; background: var(--surface-sunken); padding: 4px; border-radius: var(--radius-pill); display: inline-flex; }
.ats-tabs--pill .ats-tab { border-radius: var(--radius-pill); border-bottom: none; margin-bottom: 0; }
.ats-tabs--pill .ats-tab[aria-selected="true"] { background: var(--surface-card); color: var(--text-strong); box-shadow: var(--shadow-xs); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'ats-tabs-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  className = '',
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const active = isControlled ? value : internal;
  const select = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    className: ['ats-tabs', variant === 'pill' ? 'ats-tabs--pill' : '', className].filter(Boolean).join(' ')
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    type: "button",
    "aria-selected": active === it.value,
    className: "ats-tab",
    onClick: () => select(it.value)
  }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "ats-tab__count"
  }, it.count))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-accordion { border: 1px solid var(--border-default); border-radius: var(--radius-lg); overflow: hidden; background: var(--surface-card); }
.ats-accordion__item + .ats-accordion__item { border-top: 1px solid var(--border-subtle); }
.ats-accordion__trigger {
  width: 100%; display: flex; align-items: center; justify-content: space-between; gap: var(--space-4);
  background: transparent; border: none; cursor: pointer; text-align: left;
  padding: var(--space-4) var(--space-5);
  font-family: var(--font-display); font-weight: var(--fw-bold); font-size: var(--text-md);
  color: var(--text-strong); text-transform: none;
  transition: background var(--dur-base);
}
.ats-accordion__trigger:hover { background: var(--surface-sunken); }
.ats-accordion__trigger:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.ats-accordion__icon { flex: none; color: var(--color-primary-active); transition: transform var(--dur-base) var(--ease-standard); }
.ats-accordion__icon svg { width: 20px; height: 20px; display: block; }
.ats-accordion__item[data-open="true"] .ats-accordion__icon { transform: rotate(45deg); }
.ats-accordion__panel { overflow: hidden; transition: height var(--dur-base) var(--ease-standard); }
.ats-accordion__inner { padding: 0 var(--space-5) var(--space-5); color: var(--text-body); font-size: var(--text-sm); line-height: var(--leading-relaxed); }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-accordion-css')) {
  const s = document.createElement('style');
  s.id = 'ats-accordion-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Item({
  item,
  open,
  onToggle
}) {
  const ref = React.useRef(null);
  const [height, setHeight] = React.useState(open ? 'auto' : 0);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setHeight(open ? el.scrollHeight : 0);
  }, [open, item.content]);
  return /*#__PURE__*/React.createElement("div", {
    className: "ats-accordion__item",
    "data-open": open
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ats-accordion__trigger",
    "aria-expanded": open,
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("span", null, item.title), /*#__PURE__*/React.createElement("span", {
    className: "ats-accordion__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ats-accordion__panel",
    style: {
      height
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ats-accordion__inner",
    ref: ref
  }, item.content)));
}
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  className = '',
  ...rest
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['ats-accordion', className].filter(Boolean).join(' ')
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(Item, {
    key: i,
    item: it,
    open: open.has(i),
    onToggle: () => toggle(i)
  })));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.ats-dialog__backdrop {
  position: fixed; inset: 0; z-index: 100;
  background: rgba(18, 20, 20, 0.5); backdrop-filter: blur(3px);
  display: flex; align-items: center; justify-content: center; padding: var(--space-5);
  animation: ats-dialog-fade var(--dur-base) var(--ease-out);
}
.ats-dialog {
  background: var(--surface-card); border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl); width: 100%; max-width: 480px;
  overflow: hidden; animation: ats-dialog-pop var(--dur-slow) var(--ease-spring);
}
.ats-dialog__head { padding: var(--space-6) var(--space-6) 0; display: flex; align-items: flex-start; gap: var(--space-4); }
.ats-dialog__title { font-family: var(--font-display); font-weight: var(--fw-extra); font-size: var(--text-2xl); color: var(--text-strong); line-height: 1.1; flex: 1; text-transform: none; }
.ats-dialog__close { flex: none; border: none; background: transparent; color: var(--text-muted); cursor: pointer; padding: 6px; border-radius: var(--radius-sm); }
.ats-dialog__close:hover { background: var(--gray-100); color: var(--text-strong); }
.ats-dialog__close svg { width: 20px; height: 20px; display: block; }
.ats-dialog__body { padding: var(--space-4) var(--space-6); color: var(--text-body); font-size: var(--text-md); }
.ats-dialog__foot { padding: var(--space-4) var(--space-6) var(--space-6); display: flex; gap: var(--space-3); justify-content: flex-end; }
@keyframes ats-dialog-fade { from { opacity: 0; } to { opacity: 1; } }
@keyframes ats-dialog-pop { from { opacity: 0; transform: translateY(12px) scale(0.97); } to { opacity: 1; transform: none; } }
`;
if (typeof document !== 'undefined' && !document.getElementById('ats-dialog-css')) {
  const s = document.createElement('style');
  s.id = 'ats-dialog-css';
  s.textContent = CSS;
  document.head.appendChild(s);
}
function Dialog({
  open = true,
  title,
  children,
  footer,
  onClose,
  className = '',
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ats-dialog__backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ['ats-dialog', className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ats-dialog__head"
  }, title && /*#__PURE__*/React.createElement("h2", {
    className: "ats-dialog__title"
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "ats-dialog__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "ats-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "ats-dialog__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// estimator/estimator-core.jsx
try { (() => {
/* ATESSO Estimator — core config, pricing, UI atoms, step renderers.
   Uses global React + window.ATESSODesignSystem_bbf0b0. Exposes window.EST. */
(function () {
  const React = window.React;
  const DS = window.ATESSODesignSystem_bbf0b0 || {};
  const Button = DS.Button || (p => React.createElement('button', p, p.children));
  const Progress = DS.Progress || (() => null);

  /* ---------------- CONFIG ---------------- */
  const SERVICES = [{
    id: 'website',
    label: 'Website design & build',
    icon: 'monitor',
    base: 500,
    note: 'from',
    desc: 'WordPress / WooCommerce'
  }, {
    id: 'redesign',
    label: 'Website redesign',
    icon: 'refresh-cw',
    base: 400,
    note: 'from',
    desc: 'Refresh an existing site'
  }, {
    id: 'logo',
    label: 'Logo & brand identity',
    icon: 'pen-tool',
    base: 850,
    note: 'from',
    desc: 'Marks, identity systems'
  }, {
    id: 'print',
    label: 'Print & menus',
    icon: 'file-text',
    base: 400,
    note: 'from',
    desc: 'Menus, postcards, cards'
  }, {
    id: 'signage',
    label: 'Signage & banners',
    icon: 'flag',
    base: 600,
    note: 'from',
    desc: 'Signs, displays, banners'
  }, {
    id: 'merch',
    label: 'Merch & apparel',
    icon: 'shirt',
    base: 500,
    note: 'from',
    desc: 'Tees, mugs, swag'
  }, {
    id: 'retainer',
    label: 'Ongoing marketing',
    icon: 'trending-up',
    base: 100,
    note: '/mo',
    desc: 'Monthly retainer'
  }, {
    id: 'unsure',
    label: "Not sure — guide me",
    icon: 'sparkles',
    base: 0,
    note: '',
    desc: "We'll help you scope it"
  }];
  const PURPOSES = [{
    id: 'ecommerce',
    label: 'Online store',
    icon: 'shopping-bag'
  }, {
    id: 'business',
    label: 'Business site',
    icon: 'briefcase'
  }, {
    id: 'booking',
    label: 'Bookings',
    icon: 'calendar'
  }, {
    id: 'portfolio',
    label: 'Portfolio',
    icon: 'image'
  }, {
    id: 'blog',
    label: 'Blog / content',
    icon: 'rss'
  }, {
    id: 'info',
    label: 'Informational',
    icon: 'info'
  }];
  const SCOPES = [{
    id: 'standard',
    label: 'Standard',
    sub: '6–12 pages',
    mult: 1.6
  }, {
    id: 'large',
    label: 'Large',
    sub: '12+ pages',
    mult: 2.4
  }, {
    id: 'store',
    label: 'Online store',
    sub: 'products + checkout',
    mult: 2.8
  }];
  const FEATURES = [{
    id: 'store',
    label: 'Online store / cart',
    add: 1500
  }, {
    id: 'booking',
    label: 'Booking / scheduling',
    add: 600
  }, {
    id: 'members',
    label: 'Membership / login',
    add: 900
  }, {
    id: 'blog',
    label: 'Blog',
    add: 300
  }, {
    id: 'news',
    label: 'Newsletter signup',
    add: 200
  }, {
    id: 'multi',
    label: 'Multiple languages',
    add: 800
  }, {
    id: 'forms',
    label: 'Custom forms',
    add: 150
  }, {
    id: 'chat',
    label: 'Live chat',
    add: 250
  }, {
    id: 'anim',
    label: 'Animations / motion',
    add: 500
  }, {
    id: 'seo',
    label: 'SEO setup',
    add: 400
  }];
  const NEEDS = [{
    id: 'copy',
    label: 'Copywriting',
    sub: 'We write the words',
    add: 600
  }, {
    id: 'photo',
    label: 'Photography',
    sub: 'Shoot or source images',
    add: 500
  }, {
    id: 'logo',
    label: 'A logo',
    sub: "Don't have one yet",
    add: 850
  }, {
    id: 'content',
    label: 'Content migration',
    sub: 'Move existing content',
    add: 350
  }];
  const ASSETS = [{
    id: 'have_logo',
    label: 'Logo'
  }, {
    id: 'have_brand',
    label: 'Brand guidelines'
  }, {
    id: 'have_copy',
    label: 'Written content'
  }, {
    id: 'have_photo',
    label: 'Photography'
  }, {
    id: 'have_site',
    label: 'Existing website'
  }];
  const STYLE_AXES = [{
    id: 'bold',
    left: 'Minimal',
    right: 'Bold'
  }, {
    id: 'modern',
    left: 'Classic',
    right: 'Modern'
  }, {
    id: 'serious',
    left: 'Playful',
    right: 'Serious'
  }, {
    id: 'colorful',
    left: 'Understated',
    right: 'Colorful'
  }, {
    id: 'sporty',
    left: 'Elegant',
    right: 'Sporty'
  }];
  const COLOR_MOODS = [{
    id: 'mint',
    col: 'green',
    label: 'Mint & Charcoal',
    mood: 'Calm · trustworthy · fresh',
    colors: ['#6DCFB5', '#16181D', '#CDEFE6', '#F7F8F8']
  }, {
    id: 'green',
    col: 'green',
    label: 'Green Supreme',
    mood: 'Growth · health · natural',
    colors: ['#3AA187', '#1B463C', '#97E0CF', '#EAF6F0']
  }, {
    id: 'olive',
    col: 'green',
    label: 'Olive',
    mood: 'Earthy · natural · grounded',
    colors: ['#7D7F3A', '#4E5022', '#AEB05C', '#EFF0DA']
  }, {
    id: 'lime',
    col: 'green',
    label: 'Lime',
    mood: 'Fresh · energetic · zesty',
    colors: ['#9CCC3C', '#5E7D1E', '#C6E67A', '#F1F7DD']
  }, {
    id: 'blue',
    col: 'cool',
    label: 'Deep Blue',
    mood: 'Trust · professional · dependable',
    colors: ['#2E6C8E', '#0F2A3C', '#5AB4D6', '#DCEBF3']
  }, {
    id: 'purple',
    col: 'cool',
    label: 'Royal Purple',
    mood: 'Luxury · creative · premium',
    colors: ['#6B4E9E', '#2E2350', '#B79AE0', '#EFE9F7']
  }, {
    id: 'mono',
    col: 'cool',
    label: 'Monochrome',
    mood: 'Modern · sophisticated · minimal',
    colors: ['#2C2E35', '#5F636D', '#BFC3C9', '#E8EAEC']
  }, {
    id: 'earthy',
    col: 'cool',
    label: 'Earthy Neutral',
    mood: 'Grounded · organic · artisanal',
    colors: ['#7A6A53', '#A98F5F', '#C9B48C', '#EDE6D8']
  }, {
    id: 'red',
    col: 'warm',
    label: 'Warm Red',
    mood: 'Energetic · bold · appetizing',
    colors: ['#DB5A4E', '#8A2F27', '#E0A23B', '#FBEFE0']
  }, {
    id: 'gold',
    col: 'warm',
    label: 'Sunny Gold',
    mood: 'Optimistic · friendly · warm',
    colors: ['#E0A23B', '#B26D12', '#F4CE7A', '#FBF1DC']
  }, {
    id: 'orange',
    col: 'warm',
    label: 'Loud Orange',
    mood: 'Bold · energetic · confident',
    colors: ['#FF6A13', '#B23A00', '#FF9E5C', '#FFE8D6']
  }, {
    id: 'blush',
    col: 'warm',
    label: 'Blush Rose',
    mood: 'Playful · affectionate · warm',
    colors: ['#E58AA0', '#B24A63', '#F6C9D4', '#FBEAF0']
  }];
  const COLOR_COLUMNS = [{
    key: 'green',
    label: 'Greens'
  }, {
    key: 'cool',
    label: 'Blues · Purple · Neutrals'
  }, {
    key: 'warm',
    label: 'Reds · Golds · Oranges'
  }];
  // Type psychology — each direction maps a feeling to a font style (see brand wayfinding).
  const FONT_DIRECTIONS = [{
    id: 'sans',
    label: 'Sans-serif',
    word: 'Stable',
    mood: 'Objective · clean · modern',
    tag: 'ATESSO default',
    stack: "'Montserrat', sans-serif",
    weight: 600,
    upper: true
  }, {
    id: 'serif',
    label: 'Serif',
    word: 'Traditional',
    mood: 'Respectable · reliable · trusted',
    stack: "'Playfair Display', serif",
    weight: 700,
    upper: false
  }, {
    id: 'modern',
    label: 'Modern',
    word: 'Strong',
    mood: 'Progressive · stylish · chic',
    stack: "'Jost', sans-serif",
    weight: 500,
    upper: true
  }, {
    id: 'script',
    label: 'Script',
    word: 'Elegant',
    mood: 'Affectionate · creative · refined',
    stack: "'Dancing Script', cursive",
    weight: 700,
    upper: false
  }, {
    id: 'friendly',
    label: 'Friendly',
    word: 'Friendly',
    mood: 'Warm · approachable · rounded',
    stack: "'Quicksand', sans-serif",
    weight: 700,
    upper: false
  }, {
    id: 'unique',
    label: 'Unique',
    word: 'Unique',
    mood: 'Distinctive · original · memorable',
    stack: "'Syne', sans-serif",
    weight: 700,
    upper: false
  }, {
    id: 'slab',
    label: 'Slab serif',
    word: 'Grounded',
    mood: 'Sturdy · confident · editorial',
    stack: "'Zilla Slab', serif",
    weight: 700,
    upper: false
  }, {
    id: 'condensed',
    label: 'Condensed',
    word: 'Impactful',
    mood: 'Tall · urban · punchy',
    stack: "'Oswald', sans-serif",
    weight: 600,
    upper: true
  }, {
    id: 'rounded',
    label: 'Rounded',
    word: 'Cheerful',
    mood: 'Soft · casual · friendly',
    stack: "'Baloo 2', sans-serif",
    weight: 600,
    upper: false
  }, {
    id: 'techno',
    label: 'Monospace',
    word: 'Technical',
    mood: 'Precise · digital · exact',
    stack: "'Space Mono', monospace",
    weight: 700,
    upper: false
  }];
  const VIBES = ['Trustworthy', 'Premium', 'Friendly', 'Energetic', 'Calm', 'Handcrafted', 'High-tech', 'Local', 'Bold', 'Timeless'];
  const BUDGETS = ['< $500', '$500–$2k', '$2k–$5k', '$5k–$10k', '$10k+', 'Open'];
  const TIMELINES = [{
    id: 'asap',
    label: 'ASAP'
  }, {
    id: '2-4w',
    label: '2–4 weeks'
  }, {
    id: '1-2',
    label: '1–2 months'
  }, {
    id: '3-6',
    label: '3–6 months'
  }, {
    id: 'ongoing',
    label: 'Ongoing'
  }, {
    id: 'flex',
    label: 'Flexible'
  }];

  /* ---------------- HELPERS ---------------- */
  const hasWeb = s => (s.services || []).some(x => x === 'website' || x === 'redesign');
  const hasDesign = s => (s.services || []).some(x => ['website', 'redesign', 'logo', 'print', 'signage', 'merch'].includes(x));
  const money = n => '$' + Math.round(n).toLocaleString('en-US');
  function calc(state) {
    const svc = state.services || [];
    const real = svc.filter(x => x !== 'unsure');
    if (!real.length) return {
      amount: null,
      label: "Let's talk",
      sub: 'Pick a service for a ballpark'
    };
    const scope = SCOPES.find(s => s.id === state.scope);
    let oneTime = 0,
      monthly = 0;
    real.forEach(id => {
      const s = SERVICES.find(x => x.id === id);
      if (!s) return;
      if (id === 'retainer') {
        monthly += s.base;
        return;
      }
      if (id === 'website' || id === 'redesign') oneTime += Math.round(s.base * (scope ? scope.mult : 1));else oneTime += s.base;
    });
    (state.features || []).forEach(f => {
      const fe = FEATURES.find(x => x.id === f);
      if (fe) oneTime += fe.add;
    });
    (state.needs || []).forEach(n => {
      const ne = NEEDS.find(x => x.id === n);
      if (ne) oneTime += ne.add;
    });
    if (state.timeline === 'asap') oneTime = Math.round(oneTime * 1.15);
    const round = v => Math.round(v / 50) * 50;
    oneTime = round(oneTime);
    monthly = round(monthly);
    return {
      oneTime,
      monthly,
      amount: oneTime || monthly
    };
  }
  function estimateText(state) {
    const e = calc(state);
    if (e.amount == null) return e.label;
    const parts = [];
    if (e.oneTime) {
      const hi = Math.round(e.oneTime * 1.5 / 50) * 50;
      parts.push(money(e.oneTime) + '–' + money(hi));
    }
    if (e.monthly) parts.push('from ' + money(e.monthly) + '/mo');
    return parts.join('  +  ');
  }
  function estimateRange(state) {
    const e = calc(state);
    if (e.amount == null) return null;
    return {
      low: e.oneTime,
      high: e.oneTime ? Math.round(e.oneTime * 1.5 / 50) * 50 : 0,
      monthly: e.monthly
    };
  }

  /* ---------------- UI ATOMS ---------------- */
  function toPascal(n) {
    return String(n).split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
  }
  const Icon = ({
    name,
    size = 20,
    color,
    style
  }) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;
      while (el.firstChild) el.removeChild(el.firstChild);
      try {
        const L = window.lucide;
        const node = L && L.icons && L.icons[toPascal(name)];
        if (node && L.createElement) {
          const svg = L.createElement(node);
          svg.setAttribute('width', size);
          svg.setAttribute('height', size);
          svg.style.display = 'block';
          el.appendChild(svg);
        }
      } catch (e) {}
    }, [name, size]);
    return React.createElement('span', {
      ref,
      style: {
        display: 'inline-flex',
        width: size,
        height: size,
        color,
        ...style
      }
    });
  };
  const eyebrow = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    fontSize: 12,
    color: 'var(--color-primary-active)'
  };
  const qTitle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '-0.01em',
    fontSize: 30,
    lineHeight: 1.05,
    color: 'var(--text-strong)',
    margin: '10px 0 6px'
  };
  const qSub = {
    fontSize: 16,
    color: 'var(--text-muted)',
    margin: '0 0 22px',
    maxWidth: 560,
    lineHeight: 1.5
  };
  function StepHead({
    kicker,
    title,
    sub
  }) {
    return React.createElement('div', null, kicker && React.createElement('div', {
      style: eyebrow
    }, kicker), React.createElement('h2', {
      style: qTitle
    }, title), sub && React.createElement('p', {
      style: qSub
    }, sub));
  }
  function Chip({
    selected,
    onClick,
    children,
    icon,
    desc,
    wide
  }) {
    const st = {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textAlign: 'left',
      padding: desc ? '16px 18px' : '13px 18px',
      borderRadius: 14,
      cursor: 'pointer',
      width: '100%',
      border: '2px solid ' + (selected ? 'var(--color-primary)' : 'var(--border-default)'),
      background: selected ? 'var(--teal-50)' : 'var(--surface-card)',
      color: 'var(--text-strong)',
      font: 'inherit',
      transition: 'border-color .18s, background .18s, transform .1s',
      boxShadow: selected ? 'var(--shadow-sm)' : 'none'
    };
    return React.createElement('button', {
      type: 'button',
      onClick,
      style: st
    }, icon && React.createElement('span', {
      style: {
        width: 40,
        height: 40,
        borderRadius: 10,
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: selected ? 'var(--color-primary)' : 'var(--gray-100)',
        color: selected ? 'var(--color-on-primary)' : 'var(--text-muted)'
      }
    }, React.createElement(Icon, {
      name: icon,
      size: 20
    })), React.createElement('span', {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement('span', {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15.5
      }
    }, children), desc && React.createElement('span', {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 2,
        fontWeight: 400
      }
    }, desc)), React.createElement('span', {
      style: {
        width: 22,
        height: 22,
        borderRadius: wide ? 6 : 999,
        flex: 'none',
        border: '2px solid ' + (selected ? 'var(--color-primary)' : 'var(--border-strong)'),
        background: selected ? 'var(--color-primary)' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-on-primary)'
      }
    }, selected && React.createElement(Icon, {
      name: 'check',
      size: 13
    })));
  }
  function Grid({
    children,
    min = 240,
    gap = 24
  }) {
    return React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
        gap
      }
    }, children);
  }
  function StyleSlider({
    axis,
    value,
    onChange
  }) {
    const lean = value < 40 ? 'More ' + axis.left : value > 60 ? 'More ' + axis.right : 'Balanced';
    return React.createElement('div', {
      style: {
        marginBottom: 22
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 8,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 13,
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }
    }, React.createElement('span', {
      style: {
        color: value < 45 ? 'var(--color-primary-active)' : 'var(--text-muted)'
      }
    }, axis.left), React.createElement('span', {
      style: {
        color: value > 55 ? 'var(--color-primary-active)' : 'var(--text-muted)'
      }
    }, axis.right)), React.createElement('input', {
      type: 'range',
      min: 0,
      max: 100,
      value,
      onChange: e => onChange(+e.target.value),
      style: {
        width: '100%',
        accentColor: 'var(--color-primary)',
        height: 6
      }
    }), React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        fontSize: 11,
        color: 'var(--text-subtle)'
      }
    }, React.createElement('span', null, '\u2190 less'), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        color: 'var(--color-primary-active)'
      }
    }, lean), React.createElement('span', null, 'more \u2192')));
  }
  function Swatch({
    mood,
    selected,
    onClick
  }) {
    return React.createElement('button', {
      type: 'button',
      onClick,
      style: {
        border: '2px solid ' + (selected ? 'var(--color-primary)' : 'var(--border-default)'),
        borderRadius: 14,
        padding: 12,
        background: selected ? 'var(--teal-50)' : 'var(--surface-card)',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'inherit'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        gap: 5,
        marginBottom: 10
      }
    }, mood.colors.map((c, i) => React.createElement('span', {
      key: i,
      style: {
        flex: 1,
        height: 34,
        borderRadius: 7,
        background: c,
        border: '1px solid rgba(0,0,0,.06)'
      }
    }))), React.createElement('span', {
      style: {
        display: 'block',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 14,
        color: 'var(--text-strong)'
      }
    }, mood.label), mood.mood && React.createElement('span', {
      style: {
        display: 'block',
        fontSize: 12,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, mood.mood));
  }
  function FontCard({
    font,
    selected,
    onClick
  }) {
    return React.createElement('button', {
      type: 'button',
      onClick,
      style: {
        border: '2px solid ' + (selected ? 'var(--color-primary)' : 'var(--border-default)'),
        borderRadius: 14,
        padding: '16px 18px',
        background: selected ? 'var(--teal-50)' : 'var(--surface-card)',
        cursor: 'pointer',
        textAlign: 'left',
        font: 'inherit',
        width: '100%'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 8
      }
    }, React.createElement('span', {
      style: {
        fontFamily: font.stack,
        fontWeight: font.weight,
        fontSize: 34,
        lineHeight: 1,
        color: 'var(--text-strong)',
        textTransform: font.upper ? 'uppercase' : 'none',
        letterSpacing: font.upper ? '-0.01em' : 0
      }
    }, font.word), React.createElement('span', {
      style: {
        fontFamily: 'var(--font-display)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontSize: 10,
        fontWeight: 700,
        color: 'var(--text-muted)',
        flex: 'none'
      }
    }, font.label)), React.createElement('span', {
      style: {
        display: 'block',
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 8
      }
    }, font.mood), font.tag && React.createElement('span', {
      style: {
        display: 'inline-block',
        marginTop: 8,
        fontFamily: 'var(--font-display)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontSize: 10,
        fontWeight: 700,
        color: 'var(--color-primary-active)',
        background: 'var(--teal-100)',
        borderRadius: 999,
        padding: '3px 9px'
      }
    }, font.tag));
  }
  window.EST = {
    React,
    DS,
    Button,
    Progress,
    SERVICES,
    PURPOSES,
    SCOPES,
    FEATURES,
    NEEDS,
    ASSETS,
    STYLE_AXES,
    COLOR_MOODS,
    COLOR_COLUMNS,
    FONT_DIRECTIONS,
    VIBES,
    BUDGETS,
    TIMELINES,
    hasWeb,
    hasDesign,
    money,
    calc,
    estimateText,
    estimateRange,
    Icon,
    StepHead,
    Chip,
    Grid,
    StyleSlider,
    Swatch,
    FontCard,
    eyebrow
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "estimator/estimator-core.jsx", error: String((e && e.message) || e) }); }

// estimator/estimator.jsx
try { (() => {
/* ATESSO Estimator — steps, wizard shell (immersive + sidebar layouts),
   summary + delivery, and <atesso-estimator> custom element.
   Loads after estimator-core.jsx. Exposes window.Estimator + registers the element. */
(function () {
  const E = window.EST;
  const {
    React,
    DS,
    Button,
    SERVICES,
    PURPOSES,
    SCOPES,
    FEATURES,
    NEEDS,
    STYLE_AXES,
    COLOR_MOODS,
    COLOR_COLUMNS,
    FONT_DIRECTIONS,
    ASSETS,
    VIBES,
    BUDGETS,
    TIMELINES,
    hasWeb,
    hasDesign,
    money,
    calc,
    estimateText,
    estimateRange,
    Icon,
    StepHead,
    Chip,
    Grid,
    StyleSlider,
    Swatch,
    FontCard
  } = E;
  const {
    useState,
    useEffect,
    useRef
  } = React;
  const Input = DS.Input || (p => React.createElement('input', p));
  const Textarea = DS.Textarea || (p => React.createElement('textarea', p));
  const CONTACT = {
    email: 'info@atesso.com',
    phone: '+1 888 777 1159',
    phoneNote: 'call or text (toll-free)',
    scheduler: 'https://calendar.app.google/ZqNxxUGyEFJZop7Y6'
  };
  const STEP_LABELS = {
    details: 'Your details',
    services: 'Services',
    purpose: 'Site purpose',
    scope: 'Scope',
    features: 'Features',
    needs: 'Support',
    assets: 'What you have',
    font: 'Type',
    color: 'Colors',
    style: 'Style',
    vibe: 'Feel',
    refs: 'References',
    budget: 'Budget',
    timeline: 'Timeline',
    inspiration: 'Inspiration',
    summary: 'Estimate'
  };
  const refresh = () => {
    if (window.lucide) window.lucide.createIcons();
  };

  /* ---------------- STEP DEFINITIONS ---------------- */
  const STEPS = [{
    id: 'details',
    depths: ['fast', 'standard', 'full']
  }, {
    id: 'services',
    depths: ['fast', 'standard', 'full']
  }, {
    id: 'purpose',
    depths: ['full'],
    when: hasWeb
  }, {
    id: 'scope',
    depths: ['standard', 'full'],
    when: hasWeb
  }, {
    id: 'features',
    depths: ['full'],
    when: hasWeb
  }, {
    id: 'needs',
    depths: ['full'],
    when: hasDesign
  }, {
    id: 'assets',
    depths: ['full'],
    when: hasDesign
  }, {
    id: 'font',
    depths: ['fast', 'standard', 'full']
  }, {
    id: 'color',
    depths: ['fast', 'standard', 'full']
  }, {
    id: 'style',
    depths: ['standard', 'full']
  }, {
    id: 'vibe',
    depths: ['full']
  }, {
    id: 'refs',
    depths: ['full'],
    when: hasWeb
  }, {
    id: 'budget',
    depths: ['fast', 'standard', 'full']
  }, {
    id: 'timeline',
    depths: ['standard', 'full']
  }, {
    id: 'inspiration',
    depths: ['fast', 'standard', 'full']
  }, {
    id: 'summary',
    depths: ['fast', 'standard', 'full']
  }];
  function canAdvance(id, s) {
    if (id === 'details') return !!(s.name && s.name.trim()) && /\S+@\S+\.\S+/.test(s.email || '');
    if (id === 'services') return (s.services || []).length > 0;
    if (id === 'budget') return !!s.budget;
    return true;
  }

  /* ---------------- STEP CONTENT ---------------- */
  function StepBody({
    id,
    s,
    set,
    toggle
  }) {
    switch (id) {
      case 'details':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Let's start",
          title: "Tell us who you are",
          sub: "Just the basics so we can send your estimate and follow up."
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Name",
          value: s.name || '',
          onChange: e => set({
            name: e.target.value
          }),
          placeholder: "John",
          required: true
        }), /*#__PURE__*/React.createElement(Input, {
          label: "Company / Idea",
          value: s.company || '',
          onChange: e => set({
            company: e.target.value
          }),
          placeholder: "Smith Co."
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            marginTop: 16
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Email",
          type: "email",
          value: s.email || '',
          onChange: e => set({
            email: e.target.value
          }),
          placeholder: "you@company.com",
          hint: "We'll send your ballpark estimate here.",
          required: true
        })), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 16,
            marginTop: 16
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Country",
          value: s.country || '',
          onChange: e => set({
            country: e.target.value
          }),
          placeholder: "United States",
          hint: "Optional"
        }), /*#__PURE__*/React.createElement(Input, {
          label: "City / Town",
          value: s.city || '',
          onChange: e => set({
            city: e.target.value
          }),
          placeholder: "New York",
          hint: "Optional"
        }), /*#__PURE__*/React.createElement(Input, {
          label: "State / Province",
          value: s.region || '',
          onChange: e => set({
            region: e.target.value
          }),
          placeholder: "NY",
          hint: "Optional"
        })));
      case 'services':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Step 1",
          title: "What do you need?",
          sub: "Pick everything that applies (you can choose more than one)."
        }), /*#__PURE__*/React.createElement(Grid, {
          min: 250
        }, SERVICES.map(sv => /*#__PURE__*/React.createElement(Chip, {
          key: sv.id,
          wide: true,
          icon: sv.icon,
          desc: sv.desc,
          selected: (s.services || []).includes(sv.id),
          onClick: () => toggle('services', sv.id)
        }, sv.label))));
      case 'purpose':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Your site",
          title: "What's the site for?",
          sub: "This helps us shape the structure and features."
        }), /*#__PURE__*/React.createElement(Grid, {
          min: 200
        }, PURPOSES.map(p => /*#__PURE__*/React.createElement(Chip, {
          key: p.id,
          icon: p.icon,
          selected: s.purpose === p.id,
          onClick: () => set({
            purpose: p.id
          })
        }, p.label))));
      case 'scope':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Your site",
          title: "How big is it?",
          sub: "A rough size is fine \u2014 it moves the estimate, not a commitment."
        }), /*#__PURE__*/React.createElement(Grid, {
          min: 200
        }, SCOPES.map(sc => /*#__PURE__*/React.createElement(Chip, {
          key: sc.id,
          desc: sc.sub,
          selected: s.scope === sc.id,
          onClick: () => set({
            scope: sc.id
          })
        }, sc.label))));
      case 'features':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Your site",
          title: "Any of these features?",
          sub: "Select what you'll need. Each nudges the estimate."
        }), /*#__PURE__*/React.createElement(Grid, {
          min: 220
        }, FEATURES.map(f => /*#__PURE__*/React.createElement(Chip, {
          key: f.id,
          wide: true,
          selected: (s.features || []).includes(f.id),
          onClick: () => toggle('features', f.id)
        }, f.label))));
      case 'needs':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Support",
          title: "Do you also need\u2026",
          sub: "Things we can handle for you if you don't have them."
        }), /*#__PURE__*/React.createElement(Grid, {
          min: 240
        }, NEEDS.map(n => /*#__PURE__*/React.createElement(Chip, {
          key: n.id,
          wide: true,
          desc: n.sub,
          selected: (s.needs || []).includes(n.id),
          onClick: () => toggle('needs', n.id)
        }, n.label))));
      case 'assets':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Design direction",
          title: "What do you already have?",
          sub: "Which assets exist already? Anything missing, we can create."
        }), /*#__PURE__*/React.createElement(Grid, {
          min: 200
        }, ASSETS.map(a => /*#__PURE__*/React.createElement(Chip, {
          key: a.id,
          wide: true,
          selected: (s.assets || []).includes(a.id),
          onClick: () => toggle('assets', a.id)
        }, a.label))));
      case 'style':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Design direction",
          title: "Where does your brand sit?",
          sub: "Slide toward whichever feels right. There are no wrong answers."
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            maxWidth: 560
          }
        }, STYLE_AXES.map(a => /*#__PURE__*/React.createElement(StyleSlider, {
          key: a.id,
          axis: a,
          value: s.style && s.style[a.id] != null ? s.style[a.id] : 50,
          onChange: v => set({
            style: {
              ...(s.style || {}),
              [a.id]: v
            }
          })
        }))));
      case 'font':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Design direction \xB7 type",
          title: "Which type feels like you?",
          sub: "Every typeface evokes an emotion. Pick the one that fits how you want to be seen."
        }), /*#__PURE__*/React.createElement(Grid, {
          min: 240
        }, FONT_DIRECTIONS.map(f => /*#__PURE__*/React.createElement(FontCard, {
          key: f.id,
          font: f,
          selected: s.font === f.id,
          onClick: () => set({
            font: f.id
          })
        }))));
      case 'color':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Design direction \xB7 color",
          title: "Which colors feel right?",
          sub: "Color sets the mood before a word is read. Choose the feeling you're after."
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 22,
            alignItems: 'start'
          }
        }, COLOR_COLUMNS.map(col => /*#__PURE__*/React.createElement("div", {
          key: col.key,
          style: {
            display: 'flex',
            flexDirection: 'column',
            gap: 16
          }
        }, /*#__PURE__*/React.createElement("div", {
          style: {
            fontFamily: 'var(--font-display)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontSize: 10,
            fontWeight: 700,
            color: 'var(--text-subtle)',
            paddingBottom: 2
          }
        }, col.label), COLOR_MOODS.filter(m => m.col === col.key).map(m => /*#__PURE__*/React.createElement(Swatch, {
          key: m.id,
          mood: m,
          selected: s.color === m.id,
          onClick: () => set({
            color: m.id
          })
        }))))));
      case 'vibe':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Design direction \xB7 feel",
          title: "How should it feel?",
          sub: "Choose the words that fit \u2014 up to ten."
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10
          }
        }, VIBES.map(v => {
          const on = (s.vibes || []).includes(v);
          const full = (s.vibes || []).length >= 10;
          return /*#__PURE__*/React.createElement("button", {
            key: v,
            type: "button",
            disabled: !on && full,
            onClick: () => toggle('vibes', v),
            style: {
              padding: '10px 18px',
              borderRadius: 999,
              cursor: !on && full ? 'not-allowed' : 'pointer',
              font: 'inherit',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 14,
              opacity: !on && full ? 0.4 : 1,
              border: '2px solid ' + (on ? 'var(--color-primary)' : 'var(--border-default)'),
              background: on ? 'var(--color-primary)' : 'var(--surface-card)',
              color: on ? 'var(--color-on-primary)' : 'var(--text-strong)'
            }
          }, v);
        })));
      case 'refs':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Design direction \xB7 references",
          title: "Any sites you love (or hate)?",
          sub: "Links or names \u2014 what draws you in, and what to avoid. Optional but gold."
        }), /*#__PURE__*/React.createElement("div", {
          style: {
            display: 'grid',
            gap: 16,
            maxWidth: 620
          }
        }, /*#__PURE__*/React.createElement(Input, {
          label: "Sites / brands you like",
          value: s.refLike || '',
          onChange: e => set({
            refLike: e.target.value
          }),
          placeholder: "e.g. a site whose style you admire"
        }), /*#__PURE__*/React.createElement(Input, {
          label: "Sites / brands you'd avoid",
          value: s.refDislike || '',
          onChange: e => set({
            refDislike: e.target.value
          }),
          placeholder: "e.g. a style you'd rather avoid"
        })));
      case 'budget':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Practical bits",
          title: "What's your budget?",
          sub: "Ballpark only. It helps us recommend the right scope."
        }), /*#__PURE__*/React.createElement(Grid, {
          min: 150
        }, BUDGETS.map(b => /*#__PURE__*/React.createElement(Chip, {
          key: b,
          selected: s.budget === b,
          onClick: () => set({
            budget: b
          })
        }, b))));
      case 'timeline':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Practical bits",
          title: "When do you need it?",
          sub: "Rush timelines may affect the estimate."
        }), /*#__PURE__*/React.createElement(Grid, {
          min: 180
        }, TIMELINES.map(t => /*#__PURE__*/React.createElement(Chip, {
          key: t.id,
          selected: s.timeline === t.id,
          onClick: () => set({
            timeline: t.id
          })
        }, t.label))));
      case 'inspiration':
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(StepHead, {
          kicker: "Almost there",
          title: "What's inspiring you?",
          sub: "Competitors, brands you admire, colors, must-haves, etc."
        }), /*#__PURE__*/React.createElement(Textarea, {
          value: s.words || '',
          onChange: e => set({
            words: e.target.value
          }),
          placeholder: "E.g. a few words on the look and feel you're after\u2026",
          rows: 5
        }));
      case 'summary':
        return /*#__PURE__*/React.createElement(Summary, {
          s: s
        });
      default:
        return null;
    }
  }

  /* ---------------- SUMMARY + DELIVERY ---------------- */
  function labelFor(list, id, key = 'label') {
    const o = list.find(x => x.id === id);
    return o ? o[key] : id;
  }
  function buildSummary(s) {
    const e = calc(s);
    const L = [];
    L.push('ATESSO — PROJECT INQUIRY');
    L.push('');
    L.push('Name: ' + (s.name || '') + (s.company ? '  ·  ' + s.company : ''));
    L.push('Email: ' + (s.email || ''));
    {
      const loc = [s.city, s.region, s.country].filter(Boolean).join(', ');
      if (loc) L.push('Location: ' + loc);
    }
    L.push('Services: ' + (s.services || []).map(id => labelFor(SERVICES, id)).join(', '));
    if (s.purpose) L.push('Site purpose: ' + labelFor(PURPOSES, s.purpose));
    if (s.scope) L.push('Scope: ' + labelFor(SCOPES, s.scope));
    if ((s.features || []).length) L.push('Features: ' + s.features.map(id => labelFor(FEATURES, id)).join(', '));
    if ((s.needs || []).length) L.push('Also needs: ' + s.needs.map(id => labelFor(NEEDS, id)).join(', '));
    if ((s.assets || []).length) L.push('Already has: ' + s.assets.map(id => labelFor(ASSETS, id)).join(', '));
    if (s.font) {
      const f = FONT_DIRECTIONS.find(x => x.id === s.font);
      if (f) L.push('Type direction: ' + f.label + ' (' + f.word + ' — ' + f.mood + ')');
    }
    if (s.color) {
      const c = COLOR_MOODS.find(x => x.id === s.color);
      if (c) L.push('Color mood: ' + c.label + ' (' + c.mood + ')');
    }
    if ((s.vibes || []).length) L.push('Feel: ' + s.vibes.join(', '));
    if (s.refLike) L.push('Likes: ' + s.refLike);
    if (s.refDislike) L.push('Avoid: ' + s.refDislike);
    if (s.budget) L.push('Budget: ' + s.budget);
    if (s.timeline) L.push('Timeline: ' + labelFor(TIMELINES, s.timeline));
    if (s.words) L.push('Inspiration: ' + s.words);
    L.push('');
    L.push('Estimated starting point: ' + estimateText(s));
    L.push('(Ballpark only, final quote tailored to specifications.)');
    L.push('');
    L.push('Book a consultation: ' + CONTACT.scheduler);
    return L.join('\n');
  }
  function Summary({
    s
  }) {
    const [copied, setCopied] = useState(false);
    const e = calc(s);
    const rows = [function () {
      const loc = [s.city, s.region, s.country].filter(Boolean).join(', ');
      return loc && ['Location', loc];
    }(), ['Services', (s.services || []).map(id => labelFor(SERVICES, id)).join(', ')], s.purpose && ['Purpose', labelFor(PURPOSES, s.purpose)], s.scope && ['Scope', labelFor(SCOPES, s.scope)], (s.features || []).length && ['Features', s.features.map(id => labelFor(FEATURES, id)).join(', ')], (s.needs || []).length && ['Also needs', s.needs.map(id => labelFor(NEEDS, id)).join(', ')], (s.assets || []).length && ['Already has', s.assets.map(id => labelFor(ASSETS, id)).join(', ')], s.font && ['Type direction', function () {
      const f = FONT_DIRECTIONS.find(x => x.id === s.font);
      return f ? f.label + ' — ' + f.mood : '';
    }()], s.color && ['Color mood', function () {
      const c = COLOR_MOODS.find(x => x.id === s.color);
      return c ? c.label + ' — ' + c.mood : '';
    }()], (s.vibes || []).length && ['Feel', s.vibes.join(', ')], s.refLike && ['Likes', s.refLike], s.refDislike && ['Avoid', s.refDislike], s.budget && ['Budget', s.budget], s.timeline && ['Timeline', labelFor(TIMELINES, s.timeline)]].filter(Boolean);
    const emailHref = 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent('Project inquiry — ' + (s.name || 'New')) + '&body=' + encodeURIComponent(buildSummary(s));
    const copy = () => {
      const text = buildSummary(s);
      const ok = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      };
      const fallback = () => {
        try {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.top = '0';
          ta.style.left = '0';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          ok();
        } catch (x) {
          window.prompt('Copy your summary:', text);
        }
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(ok, fallback);
        } else {
          fallback();
        }
      } catch (x) {
        fallback();
      }
    };
    const bookCall = () => {
      try {
        window.open(CONTACT.scheduler, '_blank', 'noopener');
      } catch (x) {
        location.href = CONTACT.scheduler;
      }
    };
    const rangeText = e.amount == null ? "Let's talk" : [e.oneTime ? money(e.oneTime) + '–' + money(Math.round(e.oneTime * 1.5 / 50) * 50) : null, e.monthly ? 'from ' + money(e.monthly) + '/mo' : null].filter(Boolean).join('  +  ');
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const printSheet = /*#__PURE__*/React.createElement("div", {
      className: "est-print-sheet",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      className: "est-print-head"
    }, /*#__PURE__*/React.createElement("img", {
      src: typeof window !== 'undefined' && window.ATESSO_ESTIMATOR_LOCKUP || '../assets/logo-lockup.png',
      alt: "ATESSO",
      className: "est-print-logo"
    }), /*#__PURE__*/React.createElement("div", {
      className: "est-print-meta"
    }, /*#__PURE__*/React.createElement("div", {
      className: "est-print-kicker"
    }, "Atesso Design LLC \xB7 Estimate"), /*#__PURE__*/React.createElement("div", {
      className: "est-print-date"
    }, today))), /*#__PURE__*/React.createElement("div", {
      className: "est-print-for"
    }, "Prepared for ", /*#__PURE__*/React.createElement("strong", null, s.name || '—'), s.company ? ' · ' + s.company : '', s.email ? '  ·  ' + s.email : ''), /*#__PURE__*/React.createElement("div", {
      className: "est-print-amount"
    }, /*#__PURE__*/React.createElement("span", {
      className: "est-print-amount-label"
    }, "Estimated ", e.amount == null ? '' : 'range'), /*#__PURE__*/React.createElement("span", {
      className: "est-print-amount-val"
    }, rangeText)), /*#__PURE__*/React.createElement("table", {
      className: "est-print-table"
    }, /*#__PURE__*/React.createElement("tbody", null, rows.map(([k, v]) => /*#__PURE__*/React.createElement("tr", {
      key: k
    }, /*#__PURE__*/React.createElement("th", null, k), /*#__PURE__*/React.createElement("td", null, v))), s.words && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Inspiration"), /*#__PURE__*/React.createElement("td", null, s.words)))), /*#__PURE__*/React.createElement("div", {
      className: "est-print-note"
    }, "Ballpark only, your final quote is tailored to specifications."), /*#__PURE__*/React.createElement("div", {
      className: "est-print-foot"
    }, /*#__PURE__*/React.createElement("strong", null, "ATESSO"), " \xB7 design . marketing . development", /*#__PURE__*/React.createElement("br", null), "105 West 125th St, New York, NY 10027 \xB7 ", CONTACT.phone, " \xB7 ", CONTACT.email, /*#__PURE__*/React.createElement("br", null), "Book a consultation: ", CONTACT.scheduler));
    return /*#__PURE__*/React.createElement("div", null, window.ReactDOM && window.ReactDOM.createPortal ? window.ReactDOM.createPortal(printSheet, document.body) : null, /*#__PURE__*/React.createElement(StepHead, {
      kicker: "Your estimate",
      title: "Here's your ballpark, " + (s.name || 'there'),
      sub: "A starting point based on your answers. Send it over and we'll tailor a real quote."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--gray-900)',
        borderRadius: 20,
        padding: '26px 28px',
        color: '#fff',
        marginBottom: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--teal-300)'
      }
    }, "Estimated range"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 900,
        fontSize: 44,
        lineHeight: 1.05,
        marginTop: 6
      }
    }, e.amount == null ? "Let's talk" : /*#__PURE__*/React.createElement(React.Fragment, null, e.oneTime ? /*#__PURE__*/React.createElement("span", null, money(e.oneTime), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gray-400)'
      }
    }, "\u2013"), money(Math.round(e.oneTime * 1.5 / 50) * 50)) : null, e.oneTime && e.monthly ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        color: 'var(--gray-400)'
      }
    }, '  +  ') : null, e.monthly ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        color: 'var(--gray-400)'
      }
    }, "from "), money(e.monthly), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20,
        color: 'var(--gray-400)'
      }
    }, "/mo")) : null)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: 'var(--gray-400)',
        marginTop: 8
      }
    }, "Ballpark only, your final quote is tailored to specifications.")), /*#__PURE__*/React.createElement("div", {
      style: {
        border: '1px solid var(--border-default)',
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 22
      }
    }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'grid',
        gridTemplateColumns: '150px 1fr',
        gap: 12,
        padding: '12px 18px',
        borderTop: i ? '1px solid var(--border-subtle)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--text-muted)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-strong)'
      }
    }, v))), s.words && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 18px',
        borderTop: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        fontSize: 11,
        fontWeight: 700,
        color: 'var(--text-muted)',
        display: 'block',
        marginBottom: 4
      }
    }, "Inspiration"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        color: 'var(--text-body)',
        lineHeight: 1.5
      }
    }, s.words))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center'
      },
      className: "est-actions"
    }, /*#__PURE__*/React.createElement("a", {
      href: emailHref,
      style: {
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "send",
        size: 18
      })
    }, "Send my brief to ATESSO")), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "outline",
      onClick: copy,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: copied ? 'check' : 'copy',
        size: 18
      })
    }, copied ? 'Copied!' : 'Copy summary'), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "ghost",
      onClick: () => {
        const _t = document.title;
        document.title = 'Atesso Design LLC Estimate';
        window.print();
        setTimeout(() => {
          document.title = _t;
        }, 800);
      },
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "printer",
        size: 18
      })
    }, "Print")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 18,
        paddingTop: 18,
        borderTop: '1px solid var(--border-subtle)',
        fontSize: 13.5,
        color: 'var(--text-muted)'
      },
      className: "est-actions"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 8
      }
    }, "Prefer to talk it through? ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-strong)'
      }
    }, CONTACT.email), " \xB7 ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--text-strong)'
      }
    }, CONTACT.phone), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-subtle)'
      }
    }, "(", CONTACT.phoneNote, ")")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: bookCall,
      style: {
        background: 'none',
        border: 'none',
        padding: 0,
        font: 'inherit',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        color: 'var(--color-primary-active)',
        fontWeight: 700,
        cursor: 'pointer',
        textDecoration: 'underline',
        textUnderlineOffset: 3
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 16
    }), " Book a free consultation instead"))));
  }

  /* ---------------- ESTIMATE PILL / PANEL ---------------- */
  function EstimatePill({
    s
  }) {
    const e = calc(s);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 999,
        padding: '8px 16px',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 999,
        background: 'var(--color-primary)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        fontSize: 10,
        fontWeight: 700,
        color: 'var(--text-muted)'
      }
    }, "Est."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 15,
        color: 'var(--text-strong)'
      }
    }, estimateText(s)));
  }

  /* ---------------- MAIN WIZARD ---------------- */
  function EstimatorInner(props) {
    const layout = props.layout || 'immersive';
    const depth = props.depth || 'full';
    const showEstimate = props.showEstimate !== false;
    const [s, setState] = useState({
      services: [],
      features: [],
      needs: [],
      vibes: [],
      style: {}
    });
    const [i, setI] = useState(0);
    const set = patch => setState(p => ({
      ...p,
      ...patch
    }));
    const toggle = (key, val) => setState(p => {
      const arr = p[key] || [];
      const has = arr.includes(val);
      return {
        ...p,
        [key]: has ? arr.filter(x => x !== val) : [...arr, val]
      };
    });
    const steps = STEPS.filter(st => st.depths.includes(depth) && (!st.when || st.when(s)));
    const idx = Math.min(i, steps.length - 1);
    const step = steps[idx];
    const isSummary = step.id === 'summary';
    const pct = Math.round((idx + 1) / steps.length * 100);
    useEffect(refresh);
    const next = () => {
      if (canAdvance(step.id, s) && idx < steps.length - 1) setI(idx + 1);
    };
    const back = () => {
      if (idx > 0) setI(idx - 1);
    };
    const jumpTo = id => {
      const n = steps.findIndex(st => st.id === id);
      if (n >= 0 && n <= idx) setI(n);
    };
    const ok = canAdvance(step.id, s);
    const ProgressBar = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 6,
        background: 'var(--gray-100)',
        borderRadius: 999,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        background: 'var(--color-primary)',
        borderRadius: 999,
        transition: 'width .3s cubic-bezier(.16,1,.3,1)'
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-muted)',
        flex: 'none'
      }
    }, idx + 1, "/", steps.length));
    const Nav = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 28,
        alignItems: 'center'
      },
      className: "est-actions"
    }, idx > 0 && /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: back,
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-left",
        size: 16
      })
    }, "Back"), !isSummary && /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: next,
      disabled: !ok,
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      })
    }, idx === steps.length - 2 ? 'See estimate' : 'Continue')));
    const Brand = /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: props.logoSrc || '../assets/logo-mark-transparent.png',
      alt: "",
      style: {
        height: 26
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        letterSpacing: '0.04em',
        fontSize: 18,
        color: 'var(--text-strong)'
      }
    }, "ATESSO"));
    if (layout === 'sidebar') {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) 320px',
          gap: 32,
          alignItems: 'start',
          maxWidth: 1040,
          margin: '0 auto',
          padding: 28
        },
        className: "est-root"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          marginBottom: 22
        }
      }, ProgressBar), /*#__PURE__*/React.createElement("div", {
        key: step.id,
        style: {
          minHeight: 360,
          animation: 'estIn .35s cubic-bezier(.16,1,.3,1)'
        }
      }, /*#__PURE__*/React.createElement(StepBody, {
        id: step.id,
        s: s,
        set: set,
        toggle: toggle
      })), Nav), /*#__PURE__*/React.createElement("aside", {
        style: {
          position: 'sticky',
          top: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }
      }, Brand, showEstimate && /*#__PURE__*/React.createElement("div", {
        style: {
          background: 'var(--gray-900)',
          borderRadius: 18,
          padding: 22,
          color: '#fff'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-display)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          fontSize: 10,
          fontWeight: 700,
          color: 'var(--teal-300)'
        }
      }, "Estimated from"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 30,
          marginTop: 6,
          lineHeight: 1.1
        }
      }, estimateText(s)), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12.5,
          color: 'var(--gray-400)',
          marginTop: 8,
          lineHeight: 1.45
        }
      }, "Based on your ", /*#__PURE__*/React.createElement("button", {
        type: "button",
        onClick: () => jumpTo('services'),
        style: {
          background: 'none',
          border: 'none',
          padding: 0,
          font: 'inherit',
          color: 'var(--teal-300)',
          textDecoration: 'underline',
          cursor: 'pointer',
          fontWeight: 700
        }
      }, "service picks"), ". Add or change them anytime.")), /*#__PURE__*/React.createElement("div", {
        style: {
          border: '1px solid var(--border-default)',
          borderRadius: 16,
          padding: 16
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: 'var(--font-display)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontSize: 10,
          fontWeight: 700,
          color: 'var(--text-subtle)',
          marginBottom: 8
        }
      }, "Steps \xB7 tap to revisit"), steps.map((st, n) => {
        const done = n < idx,
          current = n === idx,
          reachable = n <= idx;
        return /*#__PURE__*/React.createElement("button", {
          key: st.id,
          type: "button",
          disabled: !reachable,
          onClick: () => reachable && setI(n),
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '2px 4px',
            width: '100%',
            textAlign: 'left',
            background: 'none',
            border: 'none',
            font: 'inherit',
            cursor: reachable ? 'pointer' : 'default',
            opacity: reachable ? 1 : 0.45,
            borderRadius: 8
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            width: 18,
            height: 18,
            borderRadius: 999,
            flex: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: done ? 'var(--color-primary)' : current ? 'var(--teal-100)' : 'var(--gray-100)',
            color: done ? 'var(--color-on-primary)' : 'var(--text-muted)'
          }
        }, done ? /*#__PURE__*/React.createElement(Icon, {
          name: "check",
          size: 11
        }) : /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 10,
            fontFamily: 'var(--font-mono)'
          }
        }, n + 1)), /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: 13,
            fontWeight: current ? 700 : 500,
            color: current ? 'var(--text-strong)' : 'var(--text-muted)',
            textTransform: 'capitalize'
          }
        }, STEP_LABELS[st.id] || st.id));
      }))));
    }

    // immersive
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760,
        margin: '0 auto',
        padding: 28,
        minHeight: 520
      },
      className: "est-root"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        marginBottom: 22
      }
    }, Brand, showEstimate && !isSummary && /*#__PURE__*/React.createElement(EstimatePill, {
      s: s
    })), ProgressBar, /*#__PURE__*/React.createElement("div", {
      key: step.id,
      style: {
        marginTop: 32,
        minHeight: 440,
        animation: 'estIn .35s cubic-bezier(.16,1,.3,1)'
      }
    }, /*#__PURE__*/React.createElement(StepBody, {
      id: step.id,
      s: s,
      set: set,
      toggle: toggle
    })), Nav);
  }
  class Boundary extends React.Component {
    constructor(p) {
      super(p);
      this.state = {
        err: null
      };
    }
    static getDerivedStateFromError(err) {
      return {
        err
      };
    }
    render() {
      if (this.state.err) return React.createElement('div', {
        style: {
          padding: 40,
          fontFamily: 'var(--font-sans)',
          color: 'var(--text-body)'
        }
      }, React.createElement('h2', {
        style: {
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          color: 'var(--text-strong)'
        }
      }, 'Hmm, something hiccuped'), React.createElement('p', null, 'Please reload to start over. (' + String(this.state.err && this.state.err.message) + ')'));
      return this.props.children;
    }
  }
  function Estimator(props) {
    return React.createElement(Boundary, null, React.createElement(EstimatorInner, props));
  }

  /* ---------------- CUSTOM ELEMENT (for DC reuse) ---------------- */
  class AtessoEstimator extends HTMLElement {
    connectedCallback() {
      if (this._root) return;
      const props = {
        layout: this.getAttribute('layout') || 'immersive',
        depth: this.getAttribute('depth') || 'full',
        showEstimate: this.getAttribute('show-estimate') !== 'false',
        logoSrc: this.getAttribute('logo-src') || undefined
      };
      this._root = window.ReactDOM.createRoot(this);
      this._root.render(React.createElement(Estimator, props));
      setTimeout(refresh, 0);
    }
    disconnectedCallback() {
      if (this._root) {
        this._root.unmount();
        this._root = null;
      }
    }
  }
  if (window.customElements && !customElements.get('atesso-estimator')) {
    customElements.define('atesso-estimator', AtessoEstimator);
  }
  window.Estimator = Estimator;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "estimator/estimator.jsx", error: String((e && e.message) || e) }); }

// estimator/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "estimator/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/portal.jsx
try { (() => {
/* ATESSO client portal — workspace shell + views.
   Composes design-system primitives from window.ATESSODesignSystem_bbf0b0. */

const PDS = window.ATESSODesignSystem_bbf0b0;
const {
  Button,
  IconButton,
  Badge,
  Card,
  Tag,
  Avatar,
  AvatarGroup,
  Tabs,
  Stat,
  Divider,
  Input,
  Progress
} = PDS;
const PIcon = ({
  name,
  size = 20,
  color,
  style
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": name,
  style: {
    width: size,
    height: size,
    color,
    display: 'inline-flex',
    ...style
  }
});
function useLucideP() {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}
const p = {
  app: {
    display: 'grid',
    gridTemplateColumns: '248px 1fr',
    minHeight: '100vh',
    background: 'var(--surface-page)'
  },
  side: {
    background: 'var(--gray-900)',
    display: 'flex',
    flexDirection: 'column',
    padding: '22px 16px',
    position: 'sticky',
    top: 0,
    height: '100vh'
  },
  sideBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '4px 8px 22px'
  },
  sideWord: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    letterSpacing: '0.04em',
    fontSize: 19,
    color: '#fff'
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '11px 12px',
    borderRadius: 10,
    color: 'var(--gray-400)',
    fontFamily: 'var(--font-sans)',
    fontSize: 14.5,
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    width: '100%',
    textAlign: 'left'
  },
  navItemActive: {
    background: 'rgba(115,201,180,0.16)',
    color: '#fff'
  },
  sideLabel: {
    fontFamily: 'var(--font-display)',
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    fontSize: 10,
    fontWeight: 700,
    color: 'var(--gray-600)',
    padding: '18px 12px 8px'
  },
  sideUser: {
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 8px',
    borderTop: '1px solid rgba(255,255,255,0.08)'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    padding: '18px 32px',
    borderBottom: '1px solid var(--border-subtle)',
    background: 'rgba(247,248,247,0.9)',
    backdropFilter: 'blur(8px)',
    position: 'sticky',
    top: 0,
    zIndex: 10
  },
  topTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '-0.01em',
    fontSize: 24,
    color: 'var(--text-strong)',
    margin: 0
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: 'var(--surface-card)',
    border: '1px solid var(--border-default)',
    borderRadius: 999,
    padding: '8px 14px',
    width: 260,
    color: 'var(--text-muted)'
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    background: 'transparent',
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'var(--text-strong)',
    width: '100%'
  },
  body: {
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 1120,
    width: '100%'
  },
  statRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: 16
  },
  sectionTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 18,
    color: 'var(--text-strong)',
    margin: '0 0 2px'
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: '1.6fr 1fr',
    gap: 24,
    alignItems: 'start'
  },
  projRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  },
  fileRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    padding: '12px 4px',
    borderBottom: '1px solid var(--border-subtle)'
  },
  fileIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: 'var(--teal-100)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 'none'
  },
  actItem: {
    display: 'flex',
    gap: 12,
    padding: '10px 0'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    background: 'var(--color-primary)',
    marginTop: 6,
    flex: 'none'
  }
};

/* ---------- Sidebar ---------- */
const NAV = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'layout-dashboard'
}, {
  id: 'projects',
  label: 'Projects',
  icon: 'folder-kanban'
}, {
  id: 'files',
  label: 'Deliverables',
  icon: 'file-text'
}, {
  id: 'invoices',
  label: 'Invoices',
  icon: 'receipt'
}, {
  id: 'messages',
  label: 'Messages',
  icon: 'message-square'
}];
function Sidebar({
  view,
  onView
}) {
  useLucideP();
  return /*#__PURE__*/React.createElement("aside", {
    style: p.side
  }, /*#__PURE__*/React.createElement("div", {
    style: p.sideBrand
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "",
    style: {
      height: 28,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: p.sideWord
  }, "ATESSO")), NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    style: {
      ...p.navItem,
      ...(view === n.id ? p.navItemActive : {})
    },
    onClick: () => onView(n.id)
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: n.icon,
    size: 18
  }), " ", n.label)), /*#__PURE__*/React.createElement("div", {
    style: p.sideLabel
  }, "Workspace"), /*#__PURE__*/React.createElement("button", {
    style: p.navItem
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "settings",
    size: 18
  }), " Settings"), /*#__PURE__*/React.createElement("button", {
    style: p.navItem
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "life-buoy",
    size: 18
  }), " Support"), /*#__PURE__*/React.createElement("div", {
    style: p.sideUser
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Sandy Paige",
    size: "sm",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 13,
      color: '#fff',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Sandy Paige"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--gray-500)'
    }
  }, "ARC Consulting"))));
}

/* ---------- Topbar ---------- */
function Topbar({
  title
}) {
  useLucideP();
  return /*#__PURE__*/React.createElement("div", {
    style: p.top
  }, /*#__PURE__*/React.createElement("h1", {
    style: p.topTitle
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: p.search
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "search",
    size: 16
  }), /*#__PURE__*/React.createElement("input", {
    style: p.searchInput,
    placeholder: "Search\u2026"
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    label: "Notifications"
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "bell",
    size: 20
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(PIcon, {
      name: "plus",
      size: 16
    })
  }, "New request")));
}

/* ---------- Dashboard ---------- */
const PROJECTS = [{
  name: 'Website Redesign',
  kind: 'Web · Dev',
  pct: 72,
  due: 'Apr 18',
  team: ['Elaine', 'Chris', 'Diego'],
  status: 'On track'
}, {
  name: 'Logo Refresh',
  kind: 'Logo design',
  pct: 40,
  due: 'May 02',
  team: ['Chris', 'Renee'],
  status: 'On track'
}, {
  name: 'Promo Postcards',
  kind: 'Print',
  pct: 18,
  due: 'May 20',
  team: ['Sarah', 'Renee'],
  status: 'Planning'
}];
function statusTone(s) {
  return s === 'On track' ? 'success' : s === 'Planning' ? 'info' : s === 'At risk' ? 'warning' : 'neutral';
}
function DashboardView() {
  useLucideP();
  return /*#__PURE__*/React.createElement("div", {
    style: p.body
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Tuesday, April 8"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      textTransform: 'uppercase',
      fontSize: 32,
      color: 'var(--text-strong)',
      margin: '6px 0 0'
    }
  }, "Welcome back, Sandy")), /*#__PURE__*/React.createElement("div", {
    style: p.statRow
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    label: "Active projects",
    value: "3",
    brand: true
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    label: "Open tasks",
    value: "12"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    label: "Awaiting you",
    value: "2",
    delta: "Review needed",
    trend: "down"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    label: "Hours this month",
    value: "86",
    delta: "+14 vs plan",
    trend: "up"
  }))), /*#__PURE__*/React.createElement("div", {
    style: p.grid2
  }, /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: p.sectionTitle
  }, "Active projects"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 20px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: p.projRow
  }, PROJECTS.map(pr => /*#__PURE__*/React.createElement("div", {
    key: pr.name,
    style: {
      padding: '14px 0',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, pr.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, pr.kind, " \xB7 due ", pr.due)), /*#__PURE__*/React.createElement(Badge, {
    tone: statusTone(pr.status),
    dot: true
  }, pr.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: pr.pct,
    size: "sm"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      width: 34
    }
  }, pr.pct, "%"), /*#__PURE__*/React.createElement(AvatarGroup, null, pr.team.map(t => /*#__PURE__*/React.createElement(Avatar, {
    key: t,
    name: t,
    size: "xs"
  }))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 6px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: p.sectionTitle
  }, "Recent deliverables")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 12px'
    }
  }, [['Logo_Refresh_v3.pdf', 'file-text', '2h ago'], ['Homepage_Final.fig', 'figma', 'Yesterday'], ['Logo_Pack.zip', 'folder', '2 days ago']].map(([n, ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: p.fileRow
  }, /*#__PURE__*/React.createElement("div", {
    style: p.fileIcon
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: ic === 'figma' ? 'frame' : ic,
    size: 18,
    color: "var(--color-primary-active)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, t)), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    label: "Download"
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "download",
    size: 16
  })))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h3", {
    style: p.sectionTitle
  }, "Activity"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, ['Chris uploaded Logo Refresh v3', 'Elaine commented on the homepage', 'Invoice #1042 was paid', 'Kickoff scheduled for postcards'].map(a => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: p.actItem
  }, /*#__PURE__*/React.createElement("span", {
    style: p.dot
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-body)',
      lineHeight: 1.4
    }
  }, a))))))));
}

/* ---------- Projects ---------- */
function ProjectsView() {
  const [filter, setFilter] = React.useState('all');
  useLucideP();
  return /*#__PURE__*/React.createElement("div", {
    style: p.body
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: filter,
    onChange: setFilter,
    items: [{
      value: 'all',
      label: 'All',
      count: 3
    }, {
      value: 'active',
      label: 'Active',
      count: 3
    }, {
      value: 'done',
      label: 'Delivered',
      count: 9
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, PROJECTS.map(pr => /*#__PURE__*/React.createElement(Card, {
    key: pr.name,
    interactive: true,
    variant: "accent"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "brand"
  }, pr.kind), /*#__PURE__*/React.createElement(Badge, {
    tone: statusTone(pr.status),
    dot: true
  }, pr.status)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      color: 'var(--text-strong)',
      margin: '16px 0 4px'
    }
  }, pr.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 18
    }
  }, "Due ", pr.due), /*#__PURE__*/React.createElement(Progress, {
    label: "Progress",
    value: pr.pct,
    showValue: true
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(AvatarGroup, null, pr.team.map(t => /*#__PURE__*/React.createElement(Avatar, {
    key: t,
    name: t,
    size: "sm"
  })))))));
}

/* ---------- Files ---------- */
function FilesView() {
  useLucideP();
  const files = [['Logo_Refresh_v3.pdf', 'Logo Refresh', '4.2 MB', 'Approved', 'success'], ['Homepage_Final.fig', 'Website Redesign', '—', 'In review', 'info'], ['Logo_Pack.zip', 'Logo Refresh', '18 MB', 'Approved', 'success'], ['Postcard_Front.pdf', 'Promo Postcards', '820 KB', 'Draft', 'neutral'], ['Print_Ready_Bundle.zip', 'Promo Postcards', '32 MB', 'In review', 'info']];
  return /*#__PURE__*/React.createElement("div", {
    style: p.body
  }, /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2.2fr 1fr 0.8fr 1fr 48px',
      padding: '14px 20px',
      borderBottom: '1px solid var(--border-default)',
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      fontSize: 10.5,
      fontWeight: 700,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Name"), /*#__PURE__*/React.createElement("span", null, "Project"), /*#__PURE__*/React.createElement("span", null, "Size"), /*#__PURE__*/React.createElement("span", null, "Status"), /*#__PURE__*/React.createElement("span", null)), files.map(f => /*#__PURE__*/React.createElement("div", {
    key: f[0],
    style: {
      display: 'grid',
      gridTemplateColumns: '2.2fr 1fr 0.8fr 1fr 48px',
      alignItems: 'center',
      padding: '14px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: p.fileIcon
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "file-text",
    size: 18,
    color: "var(--color-primary-active)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, f[0])), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, f[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, f[2]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    tone: f[4]
  }, f[3])), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    label: "Download"
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "download",
    size: 16
  }))))));
}

/* ---------- Messages ---------- */
function MessagesView() {
  useLucideP();
  const thread = [{
    who: 'Chris',
    me: false,
    text: 'Morning Sandy! Just pushed v3 of the logo refresh — the new mark keeps your roots but reads much cleaner.',
    t: '9:04'
  }, {
    who: 'You',
    me: true,
    text: 'Amazing, thank you. The team loved the mint direction 🙌',
    t: '9:12'
  }, {
    who: 'Chris',
    me: false,
    text: 'Great — I\'ll prep the website handoff next. Kickoff for the postcards still good for Thursday?',
    t: '9:14'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...p.body,
      maxWidth: 780
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Chris",
    status: "online"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Chris"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "Lead Designer \xB7 Atesso"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, thread.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: m.me ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '76%',
      padding: '10px 14px',
      borderRadius: 14,
      fontSize: 14.5,
      lineHeight: 1.5,
      background: m.me ? 'var(--color-primary)' : 'var(--surface-sunken)',
      color: m.me ? 'var(--color-on-primary)' : 'var(--text-body)',
      borderBottomRightRadius: m.me ? 4 : 14,
      borderBottomLeftRadius: m.me ? 14 : 4
    }
  }, m.text), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--text-subtle)',
      margin: '4px 6px 0'
    }
  }, m.t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      padding: 16,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Write a message\u2026"
  })), /*#__PURE__*/React.createElement(Button, {
    iconLeft: /*#__PURE__*/React.createElement(PIcon, {
      name: "send",
      size: 16
    })
  }, "Send"))));
}
function InvoicesView() {
  useLucideP();
  const rows = [['#1042', 'Website redesign — deposit', '$1,200', 'Paid', 'success'], ['#1041', 'Logo refresh', '$850', 'Paid', 'success'], ['#1043', 'Promo postcards', '$2,400', 'Due Apr 30', 'warning']];
  return /*#__PURE__*/React.createElement("div", {
    style: p.body
  }, /*#__PURE__*/React.createElement("div", {
    style: p.statRow
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    label: "Paid this year",
    value: "$18k",
    brand: true
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    label: "Outstanding",
    value: "$2.4k",
    delta: "1 invoice",
    trend: "down"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    label: "Next invoice",
    value: "Apr 30"
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Stat, {
    label: "Retainer",
    value: "$1.2k/mo"
  }))), /*#__PURE__*/React.createElement(Card, {
    padded: false
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'grid',
      gridTemplateColumns: '0.7fr 2fr 1fr 1fr 48px',
      alignItems: 'center',
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, r[2]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    tone: r[4]
  }, r[3])), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    label: "Download"
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "download",
    size: 16
  }))))));
}
const TITLES = {
  dashboard: 'Dashboard',
  projects: 'Projects',
  files: 'Deliverables',
  invoices: 'Invoices',
  messages: 'Messages'
};
function PortalApp() {
  const [view, setView] = React.useState('dashboard');
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  const V = {
    dashboard: DashboardView,
    projects: ProjectsView,
    files: FilesView,
    invoices: InvoicesView,
    messages: MessagesView
  }[view];
  return /*#__PURE__*/React.createElement("div", {
    style: p.app
  }, /*#__PURE__*/React.createElement(Sidebar, {
    view: view,
    onView: setView
  }), /*#__PURE__*/React.createElement("div", {
    style: p.main
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: TITLES[view]
  }), /*#__PURE__*/React.createElement(V, null)));
}
Object.assign(window, {
  PortalApp
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/portal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
/* ATESSO marketing website — section components.
   Composes design-system primitives from window.ATESSODesignSystem_bbf0b0.
   Icons: Lucide (CDN) via <i data-lucide> + lucide.createIcons(). */

const DS = window.ATESSODesignSystem_bbf0b0;
const {
  Button,
  Badge,
  Card,
  Tag,
  Avatar,
  Tabs,
  Stat,
  Divider,
  Input,
  Textarea,
  Select,
  Dialog
} = DS;
const Icon = ({
  name,
  size = 20,
  color,
  style
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": name,
  style: {
    width: size,
    height: size,
    color,
    display: 'inline-flex',
    ...style
  }
});
function useLucide(dep) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}
const s = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 40,
    background: 'rgba(247,248,247,0.85)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--border-subtle)'
  },
  headerInner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '14px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    textDecoration: 'none'
  },
  brandWord: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    letterSpacing: '0.04em',
    fontSize: 20,
    color: 'var(--text-strong)'
  },
  nav: {
    display: 'flex',
    gap: 4
  },
  navLink: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    fontSize: 12,
    color: 'var(--text-muted)',
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: 8
  },
  navLinkActive: {
    color: 'var(--text-strong)'
  },
  hero: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '72px 32px 40px',
    display: 'grid',
    gridTemplateColumns: '1.35fr 1fr',
    gap: 48,
    alignItems: 'center'
  },
  heroInner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  },
  heroTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    textTransform: 'uppercase',
    fontSize: 68,
    lineHeight: 0.98,
    letterSpacing: '-0.02em',
    color: 'var(--text-strong)',
    margin: 0
  },
  heroSub: {
    fontSize: 19,
    lineHeight: 1.6,
    color: 'var(--text-body)',
    maxWidth: 520,
    margin: 0
  },
  heroStats: {
    display: 'flex',
    alignItems: 'center',
    gap: 28,
    marginTop: 20
  },
  heroArt: {
    display: 'flex',
    justifyContent: 'center'
  },
  heroArtCard: {
    width: '100%',
    aspectRatio: '4/5',
    maxWidth: 340,
    borderRadius: 28,
    background: 'linear-gradient(150deg,#6DCFB5,#2C7E6B)',
    boxShadow: 'var(--shadow-xl)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  trusted: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '20px 32px 56px',
    display: 'flex',
    alignItems: 'center',
    gap: 36,
    flexWrap: 'wrap'
  },
  trustedLabel: {
    fontFamily: 'var(--font-display)',
    textTransform: 'uppercase',
    letterSpacing: '0.14em',
    fontSize: 11,
    fontWeight: 700,
    color: 'var(--text-subtle)'
  },
  trustedRow: {
    display: 'flex',
    gap: 32,
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  trustedName: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 18,
    color: 'var(--gray-300)',
    letterSpacing: '0.02em'
  },
  section: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '72px 32px'
  },
  sectionHead: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    marginBottom: 40
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    textTransform: 'uppercase',
    fontSize: 40,
    letterSpacing: '-0.01em',
    color: 'var(--text-strong)',
    margin: 0
  },
  h3: {
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 24,
    color: 'var(--text-strong)',
    margin: '0 0 8px'
  },
  cardCopy: {
    fontSize: 15,
    lineHeight: 1.6,
    color: 'var(--text-muted)',
    margin: 0
  },
  serviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 20
  },
  serviceIcon: {
    width: 52,
    height: 52,
    borderRadius: 14,
    background: 'var(--teal-100)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18
  },
  workGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 20
  },
  workCard: {
    textDecoration: 'none',
    display: 'block'
  },
  workThumb: {
    aspectRatio: '4/3',
    borderRadius: 16,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end',
    padding: 16
  },
  workKind: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontSize: 11,
    color: '#fff',
    background: 'rgba(0,0,0,0.28)',
    padding: '4px 10px',
    borderRadius: 999,
    backdropFilter: 'blur(4px)'
  },
  workMeta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 4px 0'
  },
  workTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 17,
    color: 'var(--text-strong)'
  },
  quoteSection: {
    background: 'var(--gray-900)',
    padding: '88px 32px'
  },
  quoteInner: {
    maxWidth: 860,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 28
  },
  quote: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 34,
    lineHeight: 1.3,
    color: '#fff',
    margin: 0,
    letterSpacing: '-0.01em'
  },
  cta: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '80px 32px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16
  },
  ctaTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 900,
    textTransform: 'uppercase',
    fontSize: 48,
    letterSpacing: '-0.01em',
    color: 'var(--text-strong)',
    margin: 0
  },
  ctaSub: {
    fontSize: 18,
    color: 'var(--text-muted)',
    margin: 0,
    maxWidth: 460
  },
  footer: {
    background: 'var(--gray-900)'
  },
  footerInner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '48px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
    flexWrap: 'wrap'
  },
  footerCols: {
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  },
  footerLink: {
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    color: 'var(--gray-300)',
    textDecoration: 'none'
  },
  social: {
    width: 40,
    height: 40,
    borderRadius: 10,
    background: 'rgba(255,255,255,0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textDecoration: 'none'
  },
  footerBase: {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    padding: '20px 32px',
    textAlign: 'center',
    fontSize: 13,
    color: 'var(--gray-500)'
  }
};

/* ---------- Header ---------- */
function SiteHeader({
  onStart,
  onNav,
  active
}) {
  useLucide();
  const links = ['About', 'Services', 'Portfolio', 'FAQ', 'Contact'];
  return /*#__PURE__*/React.createElement("header", {
    style: s.header
  }, /*#__PURE__*/React.createElement("div", {
    style: s.headerInner
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: s.brand,
    onClick: e => {
      e.preventDefault();
      onNav('home');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "",
    style: {
      height: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: s.brandWord
  }, "ATESSO")), /*#__PURE__*/React.createElement("nav", {
    style: s.nav
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav(l.toLowerCase());
    },
    style: {
      ...s.navLink,
      ...(active === l.toLowerCase() ? s.navLinkActive : {})
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    className: "hide-sm"
  }, "Login"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onStart,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Get a quote"))));
}

/* ---------- Hero ---------- */
function Hero({
  onStart
}) {
  useLucide();
  return /*#__PURE__*/React.createElement("section", {
    style: s.hero
  }, /*#__PURE__*/React.createElement("div", {
    style: s.heroInner
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 20
    }
  }, "New York \xB7 Since 2004"), /*#__PURE__*/React.createElement("h1", {
    style: s.heroTitle
  }, "Digital", /*#__PURE__*/React.createElement("br", null), "business", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, "\u2026done.")), /*#__PURE__*/React.createElement("p", {
    style: s.heroSub
  }, "You know a good website when you see one. Atesso designs and builds affordable, compelling websites, brands and print \u2014 and we always deliver."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onStart,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Get a quote"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline"
  }, "See our work")), /*#__PURE__*/React.createElement("div", {
    style: s.heroStats
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "In business since",
    value: "2004",
    brand: true
  }), /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Based in",
    value: "NYC"
  }), /*#__PURE__*/React.createElement(Divider, {
    orientation: "vertical"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Client rating",
    value: "5\u2605"
  }))), /*#__PURE__*/React.createElement("div", {
    style: s.heroArt
  }, /*#__PURE__*/React.createElement("div", {
    style: s.heroArtCard
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "",
    style: {
      width: 120,
      filter: 'brightness(0) invert(1)'
    }
  }))));
}

/* ---------- Trusted by ---------- */
function TrustedBy() {
  const names = ['Holly Stone', 'Lobster Shack', 'Sprout Cafe', 'ARC Consulting', 'Steam Turbine', 'AH Construction'];
  return /*#__PURE__*/React.createElement("section", {
    style: s.trusted
  }, /*#__PURE__*/React.createElement("span", {
    style: s.trustedLabel
  }, "Clients we've delivered for"), /*#__PURE__*/React.createElement("div", {
    style: s.trustedRow
  }, names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: s.trustedName
  }, n))));
}

/* ---------- Services ---------- */
function Services() {
  useLucide();
  const items = [{
    icon: 'pen-tool',
    title: 'Design',
    copy: 'Graphic, web, product and instructional design that looks the part.',
    tags: ['Graphic', 'Web', 'Product', 'Instructional']
  }, {
    icon: 'code-2',
    title: 'Development',
    copy: 'WordPress, WooCommerce and custom themes built to perform.',
    tags: ['WordPress', 'WooCommerce', 'Themes']
  }, {
    icon: 'shapes',
    title: 'Branding & Print',
    copy: 'Memorable logos and print — from identities to postcards.',
    tags: ['Logo design', 'Postcards', 'Identity']
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: s.section
  }, /*#__PURE__*/React.createElement("div", {
    style: s.sectionHead
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: s.h2
  }, "A deep bench, under one roof")), /*#__PURE__*/React.createElement("div", {
    style: s.serviceGrid
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    variant: "accent",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: s.serviceIcon
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 24,
    color: "var(--color-primary-active)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: s.h3
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: s.cardCopy
  }, it.copy), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 16
    }
  }, it.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "brand"
  }, t)))))));
}

/* ---------- Work ---------- */
const WORK = [{
  title: 'Alchemy Brooklyn',
  cat: 'logo',
  kind: 'Logo · Identity',
  c: 'linear-gradient(135deg,#6DCFB5,#2C7E6B)'
}, {
  title: 'The Lobster Shack',
  cat: 'web',
  kind: 'thelobstershack.com',
  c: 'linear-gradient(135deg,#DB5A4E,#8a2f27)'
}, {
  title: 'Steam Turbine Services',
  cat: 'web',
  kind: 'steamturbineservices.com',
  c: 'linear-gradient(135deg,#2C2E35,#3A3D45)'
}, {
  title: "Eat at Joe's",
  cat: 'print',
  kind: 'Menu · Costa Rica',
  c: 'linear-gradient(135deg,#E0A23B,#b9631f)'
}, {
  title: 'El Vaquero Sign',
  cat: 'signage',
  kind: 'Signage',
  c: 'linear-gradient(135deg,#3B93B5,#235F52)'
}, {
  title: 'Lobster Shack Merch',
  cat: 'merch',
  kind: 'Glasses · Candles · Jars',
  c: 'linear-gradient(135deg,#4FBDA0,#17423A)'
}, {
  title: 'Holly Stone Postcards',
  cat: 'print',
  kind: 'Postcards',
  c: 'linear-gradient(135deg,#90DCC7,#3AA187)'
}, {
  title: 'Bragdon Insurance Ads',
  cat: 'print',
  kind: 'Print ads',
  c: 'linear-gradient(135deg,#235F52,#2C2E35)'
}, {
  title: 'Angel Armor Coating',
  cat: 'logo',
  kind: 'Logo design',
  c: 'linear-gradient(135deg,#6B6F79,#2F323A)'
}];
// Older logo/collateral pieces from the archive — surfaced per inquiry when relevant.
const ARCHIVE = ['Anjons', 'Arc', 'Bulletin Bag', '6Deck', 'Sprout', 'Lobster Tots', 'Volcano Brewing menu', 'QuikShade banner', 'Digital Mill', 'T-shirts & rashguards', 'hollystone.com'];
function Work() {
  const [filter, setFilter] = React.useState('all');
  const shown = filter === 'all' ? WORK : WORK.filter(w => w.cat === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...s.section,
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...s.sectionHead,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Portfolio highlights"), /*#__PURE__*/React.createElement("h2", {
    style: s.h2
  }, "Selected work")), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: filter,
    onChange: setFilter,
    items: [{
      value: 'all',
      label: 'All'
    }, {
      value: 'logo',
      label: 'Logos'
    }, {
      value: 'web',
      label: 'Web'
    }, {
      value: 'print',
      label: 'Print'
    }, {
      value: 'signage',
      label: 'Signage'
    }, {
      value: 'merch',
      label: 'Merch'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: s.workGrid
  }, shown.map(w => /*#__PURE__*/React.createElement("a", {
    key: w.title,
    href: "#",
    style: s.workCard,
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...s.workThumb,
      background: w.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: s.workKind
  }, w.kind)), /*#__PURE__*/React.createElement("div", {
    style: s.workMeta
  }, /*#__PURE__*/React.createElement("span", {
    style: s.workTitle
  }, w.title), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right",
    style: {
      width: 18,
      height: 18,
      color: 'var(--text-muted)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 28,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--text-muted)',
      flex: 'none'
    }
  }, "More from the archive"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ARCHIVE.map(a => /*#__PURE__*/React.createElement(Tag, {
    key: a
  }, a))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-subtle)',
      flex: 'none'
    }
  }, "Available on request")));
}

/* ---------- Testimonial ---------- */
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    style: s.quoteSection
  }, /*#__PURE__*/React.createElement("div", {
    style: s.quoteInner
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: 'var(--teal-300)'
    }
  }, "Client story \xB7 since 2004"), /*#__PURE__*/React.createElement("blockquote", {
    style: s.quote
  }, "\u201CThe redesigns made our branding recognizable in a way it had not been in the past, and effectively illustrated the dining experience we offer. Each successive season has brought us increased patronage \u2014 it remains a pleasure working with Elaine and Atesso.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Lobster Shack",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: '#fff'
    }
  }, "The Lobster Shack at Two Lights"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--gray-400)'
    }
  }, "Family-owned Maine restaurant, est. 1969")))));
}

/* ---------- Team ---------- */
const TEAM = [{
  name: 'Elaine',
  role: 'Team Leader'
}, {
  name: 'Chris',
  role: 'Lead Designer'
}, {
  name: 'Diego',
  role: 'Web / E-com Developer'
}, {
  name: 'Sarah',
  role: 'Copywriter'
}, {
  name: 'Evelyn',
  role: 'Project Manager'
}, {
  name: 'Renee',
  role: 'Production Artist'
}];
function Team() {
  return /*#__PURE__*/React.createElement("section", {
    style: s.section
  }, /*#__PURE__*/React.createElement("div", {
    style: s.sectionHead
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Meet the team"), /*#__PURE__*/React.createElement("h2", {
    style: s.h2
  }, "The people behind the work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 18
    }
  }, TEAM.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: m.name,
    size: "xl"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, m.role))))));
}

/* ---------- CTA / footer ---------- */
function SiteFooter({
  onStart
}) {
  useLucide();
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    style: s.cta
  }, /*#__PURE__*/React.createElement("h2", {
    style: s.ctaTitle
  }, "Want one as good as this?"), /*#__PURE__*/React.createElement("p", {
    style: s.ctaSub
  }, "Tell us what you need. We'll get you an affordable quote \u2014 and we always deliver."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: onStart,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Get a quote")), /*#__PURE__*/React.createElement("div", {
    style: s.footer
  }, /*#__PURE__*/React.createElement("div", {
    style: s.footerInner
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-transparent.png",
    alt: "",
    style: {
      height: 26,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...s.brandWord,
      color: '#fff'
    }
  }, "ATESSO")), /*#__PURE__*/React.createElement("div", {
    style: s.footerCols
  }, ['About', 'Services', 'Portfolio', 'FAQ', 'Contact'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: s.footerLink,
    onClick: e => e.preventDefault()
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, ['facebook', 'star', 'mail'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onClick: e => e.preventDefault(),
    style: s.social
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 18
  }))))), /*#__PURE__*/React.createElement("div", {
    style: s.footerBase
  }, "105 West 125th St, New York, NY 10027 \xB7 +1 888 777 1159 \xB7 info@atesso.com")));
}

/* ---------- Start-a-project dialog ---------- */
function StartDialog({
  open,
  onClose
}) {
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    if (open) setSent(false);
  }, [open]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(Dialog, {
    title: sent ? 'Thanks — talk soon!' : 'Get a quote',
    onClose: onClose,
    footer: sent ? /*#__PURE__*/React.createElement(Button, {
      onClick: onClose
    }, "Done") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setSent(true)
    }, "Send request"))
  }, sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "We've received your request and will get back to you with an affordable quote shortly.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Jane Rivera"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "What do you need?",
    placeholder: "Choose a service",
    options: ['Web design', 'Development', 'Logo & branding', 'Print / postcards', 'Not sure yet']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Tell us about your project",
    placeholder: "A few words on your goals, timeline and budget\u2026"
  })));
}
Object.assign(window, {
  SiteHeader,
  Hero,
  TrustedBy,
  Services,
  Work,
  Team,
  Testimonial,
  SiteFooter,
  StartDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
