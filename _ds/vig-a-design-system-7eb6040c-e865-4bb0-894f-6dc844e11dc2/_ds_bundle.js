/* @ds-bundle: {"format":3,"namespace":"VigADesignSystem_7eb604","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardBody","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"FilterBar","sourcePath":"components/data/FilterBar.jsx"},{"name":"FilterChip","sourcePath":"components/data/FilterBar.jsx"},{"name":"Legend","sourcePath":"components/data/Legend.jsx"},{"name":"ProgressMeter","sourcePath":"components/data/ProgressMeter.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/SegmentedControl.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"19e4a68eab9c","components/core/Badge.jsx":"af68b516f6c6","components/core/Button.jsx":"d10bba3f74a5","components/core/Card.jsx":"ae133bcf9677","components/core/Divider.jsx":"3d1786dd5618","components/core/IconButton.jsx":"1d9a8a4c8870","components/core/Tag.jsx":"916eafaa3685","components/data/BarChart.jsx":"cd3458f92a07","components/data/DataTable.jsx":"c0c45c4ef35b","components/data/FilterBar.jsx":"9977bdf3dfb4","components/data/Legend.jsx":"67f9eb412ab8","components/data/ProgressMeter.jsx":"86dd488877f0","components/data/Sparkline.jsx":"8c9acded3365","components/data/StatCard.jsx":"35ba9defd37f","components/feedback/Banner.jsx":"0a0e0560934b","components/feedback/Dialog.jsx":"77835a56762b","components/feedback/Toast.jsx":"f05688ae703c","components/feedback/Tooltip.jsx":"9b17da2bac80","components/forms/Checkbox.jsx":"5ab018f6f382","components/forms/Field.jsx":"878752f3df18","components/forms/Input.jsx":"0551c21ffd86","components/forms/Radio.jsx":"a8d38b32eb74","components/forms/Select.jsx":"dd7fde35cbfb","components/forms/Switch.jsx":"78fb11724e27","components/forms/Textarea.jsx":"1f0766a7acbf","components/navigation/Breadcrumb.jsx":"d8dda29e03d7","components/navigation/SegmentedControl.jsx":"858c6b6456f1","components/navigation/Tabs.jsx":"b49df044dc44","ui_kits/dashboard/AppShell.jsx":"6e94c33b854e","ui_kits/dashboard/data.jsx":"27700080bccc","ui_kits/dashboard/views.jsx":"1707feff146d","ui_kits/icons.jsx":"74017fc214e1","ui_kits/mobile/Mobile.jsx":"3e07d5c214ab","ui_kits/mobile/ios-frame.jsx":"be3343be4b51","ui_kits/profile/Profile.jsx":"df68e179a51a","ui_kits/profile/data.jsx":"6a28ed29d1b3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VigADesignSystem_7eb604 = window.VigADesignSystem_7eb604 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — person/entity image with initials fallback.
 * size: xs | sm | md | lg ; square for institutions.
 */
function Avatar({
  src = null,
  name = '',
  size = 'md',
  square = false,
  className = '',
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  const cls = ['v-avatar', `v-avatar--${size}`, square ? 'v-avatar--square' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status / category label.
 * tone: neutral | info | success | warning | danger | accent | solid
 */
function Badge({
  tone = 'neutral',
  dot = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['v-badge', `v-badge--${tone}`, dot ? 'v-badge--dot' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Vigía Button — primary action control.
 * variant: primary | accent | secondary | ghost | danger | quiet
 * size: sm | md | lg
 */
function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  block = false,
  as = 'button',
  className = '',
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ['v-btn', `v-btn--${variant}`, `v-btn--${size}`, block ? 'v-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "v-btn__ico"
  }, icon) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "v-btn__ico"
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container. Compose with CardHeader / CardBody or use `pad`.
 * elevation: default | flat | raised
 */
function Card({
  elevation = 'default',
  interactive = false,
  pad = false,
  className = '',
  children,
  ...rest
}) {
  const cls = ['v-card', elevation === 'flat' ? 'v-card--flat' : elevation === 'raised' ? 'v-card--raised' : '', interactive ? 'v-card--interactive' : '', pad ? 'v-card__pad' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
function CardHeader({
  title,
  actions = null,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-card__head', className].filter(Boolean).join(' ')
  }, rest), title ? /*#__PURE__*/React.createElement("h3", {
    className: "v-card__title"
  }, title) : children, actions ? /*#__PURE__*/React.createElement("div", null, actions) : null);
}
function CardBody({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-card__body', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardBody });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Divider — horizontal (default) or vertical rule. */
function Divider({
  vertical = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("hr", _extends({
    className: ['v-divider', vertical ? 'v-divider--v' : '', className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — compact control holding a single icon.
 * variant: default | solid ; size: sm | md | lg
 */
function IconButton({
  variant = 'default',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  const cls = ['v-iconbtn', variant === 'solid' ? 'v-iconbtn--solid' : '', `v-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — removable filter / metadata chip. Optional color swatch.
 */
function Tag({
  swatch = null,
  onRemove = null,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['v-tag', className].filter(Boolean).join(' ')
  }, rest), swatch ? /*#__PURE__*/React.createElement("span", {
    className: "v-tag__swatch",
    style: {
      background: swatch
    }
  }) : null, children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "v-tag__x",
    "aria-label": "Quitar",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "13",
    height: "13",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** BarChart — simple vertical bars. data: [{label, value, color?}] */
function BarChart({
  data = [],
  height = 140,
  formatValue = null,
  className = '',
  ...rest
}) {
  const max = Math.max(...data.map(d => d.value), 1);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-bars', className].filter(Boolean).join(' '),
    style: {
      height: height + 26
    }
  }, rest), data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "v-bars__col",
    key: d.label ?? i
  }, /*#__PURE__*/React.createElement("div", {
    className: "v-bars__bar",
    style: {
      height: Math.round(d.value / max * height),
      background: d.color || 'var(--blue-500)'
    },
    title: `${d.label}: ${formatValue ? formatValue(d.value) : d.value}`
  }), /*#__PURE__*/React.createElement("span", {
    className: "v-bars__lab"
  }, d.label))));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DataTable — presentational table. `columns` define cells; `rows` are records.
 * A column: { key, label, numeric?, render?(row), width? }.
 */
function DataTable({
  columns = [],
  rows = [],
  hover = true,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-table-wrap', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("table", {
    className: ['v-table', hover ? 'v-table--hover' : ''].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: c.numeric ? 'v-num' : '',
    style: c.width ? {
      width: c.width
    } : undefined
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row.id ?? i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: [c.numeric ? 'v-num' : '', c.primary ? 'v-table__primary' : ''].filter(Boolean).join(' ')
  }, c.render ? c.render(row) : row[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/FilterBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** FilterBar — horizontal container for filter chips & controls. */
function FilterBar({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-filterbar', className].filter(Boolean).join(' ')
  }, rest), children);
}

/** FilterChip — toggleable filter pill with optional count. */
function FilterChip({
  active = false,
  count = null,
  icon = null,
  onClick = () => {},
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-pressed": active,
    className: ['v-chip', className].filter(Boolean).join(' '),
    onClick: onClick
  }, rest), icon, children, count != null ? /*#__PURE__*/React.createElement("span", {
    className: "v-chip__count"
  }, count) : null);
}
Object.assign(__ds_scope, { FilterBar, FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/FilterBar.jsx", error: String((e && e.message) || e) }); }

// components/data/Legend.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Legend — color key for charts. items: [{label, color}] */
function Legend({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-legend', className].filter(Boolean).join(' ')
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    className: "v-legend__item",
    key: it.label ?? i
  }, /*#__PURE__*/React.createElement("span", {
    className: "v-legend__sw",
    style: {
      background: it.color
    }
  }), it.label)));
}
Object.assign(__ds_scope, { Legend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Legend.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ProgressMeter — labeled progress / execution bar (0–100). */
function ProgressMeter({
  label = null,
  value = 0,
  max = 100,
  tone = 'default',
  displayValue = null,
  className = '',
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fillCls = tone === 'default' ? '' : `v-meter__fill--${tone}`;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-meter', className].filter(Boolean).join(' ')
  }, rest), label != null || displayValue != null ? /*#__PURE__*/React.createElement("div", {
    className: "v-meter__top"
  }, label != null ? /*#__PURE__*/React.createElement("span", {
    className: "v-meter__label"
  }, label) : /*#__PURE__*/React.createElement("span", null), displayValue != null ? /*#__PURE__*/React.createElement("span", {
    className: "v-meter__val"
  }, displayValue) : /*#__PURE__*/React.createElement("span", {
    className: "v-meter__val"
  }, Math.round(pct), "%")) : null, /*#__PURE__*/React.createElement("div", {
    className: "v-meter__track",
    role: "progressbar",
    "aria-valuenow": Math.round(pct),
    "aria-valuemin": 0,
    "aria-valuemax": 100
  }, /*#__PURE__*/React.createElement("div", {
    className: ['v-meter__fill', fillCls].filter(Boolean).join(' '),
    style: {
      width: pct + '%'
    }
  })));
}
Object.assign(__ds_scope, { ProgressMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressMeter.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sparkline — compact trend line. */
function Sparkline({
  values = [],
  width = 120,
  height = 32,
  color = 'var(--blue-500)',
  fill = true,
  strokeWidth = 1.75,
  className = '',
  ...rest
}) {
  if (!values.length) return null;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const stepX = width / (values.length - 1 || 1);
  const pts = values.map((v, i) => [i * stepX, height - (v - min) / span * (height - 4) - 2]);
  const line = pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `0,${height} ${line} ${width},${height}`;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    width: width,
    height: height,
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: "none"
  }, rest), fill ? /*#__PURE__*/React.createElement("polygon", {
    points: area,
    fill: color,
    opacity: "0.12"
  }) : null, /*#__PURE__*/React.createElement("polyline", {
    points: line,
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ARROW = {
  up: /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5M5 12l7-7 7 7"
  }),
  down: /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12l7 7 7-7"
  }),
  flat: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  })
};

/** StatCard — a single headline metric with trend. */
function StatCard({
  label,
  value,
  delta = null,
  direction = 'flat',
  note = null,
  icon = null,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-stat', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "v-stat__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v-stat__label"
  }, label), icon ? /*#__PURE__*/React.createElement("span", {
    className: "v-stat__ico"
  }, icon) : null), /*#__PURE__*/React.createElement("div", {
    className: "v-stat__value"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "v-stat__foot"
  }, delta != null ? /*#__PURE__*/React.createElement("span", {
    className: `v-stat__delta v-stat__delta--${direction}`
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "13",
    height: "13",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ARROW[direction]), delta) : null, note ? /*#__PURE__*/React.createElement("span", {
    className: "v-stat__note"
  }, note) : null));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01M11 12h1v4h1"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4m0 4h.01M10.3 3.9 2.4 17.5A1.8 1.8 0 0 0 4 20h16a1.8 1.8 0 0 0 1.6-2.5L13.7 3.9a1.9 1.9 0 0 0-3.4 0Z"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5m0 3h.01M12 3l9 16H3l9-16Z"
  })
};

/** Inline contextual message bound to a page region. */
function Banner({
  tone = 'info',
  title = null,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-banner', `v-banner--${tone}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "v-banner__ico"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[tone])), /*#__PURE__*/React.createElement("div", {
    className: "v-banner__body"
  }, title ? /*#__PURE__*/React.createElement("p", {
    className: "v-banner__title"
  }, title) : null, children));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Modal dialog. Render conditionally; `open` controls visibility. */
function Dialog({
  open = true,
  title = null,
  onClose = null,
  footer = null,
  className = '',
  children,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "v-dialog__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-dialog', className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "v-dialog__head"
  }, title ? /*#__PURE__*/React.createElement("h2", {
    className: "v-dialog__title"
  }, title) : /*#__PURE__*/React.createElement("span", null), onClose ? /*#__PURE__*/React.createElement("button", {
    className: "v-iconbtn v-iconbtn--sm",
    "aria-label": "Cerrar",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))) : null), /*#__PURE__*/React.createElement("div", {
    className: "v-dialog__body"
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    className: "v-dialog__foot"
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  info: /*#__PURE__*/React.createElement("path", {
    d: "M12 8h.01M11 12h1v4h1"
  }),
  success: /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7"
  }),
  warning: /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4m0 4h.01M10.3 3.9 2.4 17.5A1.8 1.8 0 0 0 4 20h16a1.8 1.8 0 0 0 1.6-2.5L13.7 3.9a1.9 1.9 0 0 0-3.4 0Z"
  }),
  danger: /*#__PURE__*/React.createElement("path", {
    d: "M12 8v5m0 3h.01M12 3l9 16H3l9-16Z"
  })
};
const COLOR = {
  info: 'var(--blue-600)',
  success: 'var(--green-600)',
  warning: 'var(--gold-700)',
  danger: 'var(--red-600)'
};

/** Transient notification surface. */
function Toast({
  tone = 'info',
  title = null,
  onClose = null,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-toast', tone !== 'info' ? `v-toast--${tone}` : '', className].filter(Boolean).join(' '),
    role: "alert"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "v-toast__ico",
    style: {
      color: COLOR[tone]
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[tone])), /*#__PURE__*/React.createElement("div", {
    className: "v-toast__body"
  }, title ? /*#__PURE__*/React.createElement("p", {
    className: "v-toast__title"
  }, title) : null, children), onClose ? /*#__PURE__*/React.createElement("button", {
    className: "v-iconbtn v-iconbtn--sm",
    "aria-label": "Cerrar",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tooltip — wraps a trigger; shows `label` on hover/focus. */
function Tooltip({
  label,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['v-tooltip', className].filter(Boolean).join(' '),
    tabIndex: 0
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    className: "v-tooltip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. */
function Checkbox({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['v-check', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "v-check__box"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 7"
  }))), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — label / hint / error wrapper for form controls.
 */
function Field({
  label,
  htmlFor,
  required = false,
  hint = null,
  error = null,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-field', className].filter(Boolean).join(' ')
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    className: "v-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "v-field__req"
  }, "*") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    className: "v-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "v-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input. Pass `icon` for a leading glyph, `invalid` for error state. */
function Input({
  icon = null,
  invalid = false,
  className = '',
  ...rest
}) {
  const input = /*#__PURE__*/React.createElement("input", _extends({
    className: ['v-input', invalid ? 'v-input--invalid' : '', className].filter(Boolean).join(' ')
  }, rest));
  if (!icon) return input;
  return /*#__PURE__*/React.createElement("span", {
    className: "v-inputgroup"
  }, /*#__PURE__*/React.createElement("span", {
    className: "v-inputgroup__ico"
  }, icon), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio with label — give all options the same `name`. */
function Radio({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['v-radio', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "v-radio__dot"
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select with custom caret. Pass `options` or `children`. */
function Select({
  options = null,
  invalid = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "v-selectwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: ['v-select', invalid ? 'v-input--invalid' : '', className].filter(Boolean).join(' ')
  }, rest), options ? options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  }) : children), /*#__PURE__*/React.createElement("span", {
    className: "v-selectwrap__caret"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch with optional label. */
function Switch({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['v-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "v-switch__track"
  }), label ? /*#__PURE__*/React.createElement("span", null, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input. */
function Textarea({
  invalid = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ['v-textarea', invalid ? 'v-textarea--invalid' : '', className].filter(Boolean).join(' ')
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Breadcrumb trail. Last item renders as current (no link). */
function Breadcrumb({
  items = [],
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ['v-crumbs', className].filter(Boolean).join(' '),
    "aria-label": "Ruta"
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, last ? /*#__PURE__*/React.createElement("span", {
      className: "v-crumbs__current",
      "aria-current": "page"
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#'
    }, it.label), !last ? /*#__PURE__*/React.createElement("span", {
      className: "v-crumbs__sep",
      "aria-hidden": "true"
    }, "/") : null);
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Segmented control — compact toggle between 2–4 options. */
function SegmentedControl({
  items = [],
  value,
  onChange = () => {},
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-segtabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), items.map(t => {
    const id = typeof t === 'string' ? t : t.id;
    const label = typeof t === 'string' ? t : t.label;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": value === id,
      className: "v-segtab",
      onClick: () => onChange(id)
    }, label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline tabs. Controlled via `value` + `onChange`. */
function Tabs({
  items = [],
  value,
  onChange = () => {},
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['v-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, rest), items.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    role: "tab",
    "aria-selected": value === t.id,
    className: "v-tab",
    onClick: () => onChange(t.id)
  }, t.label, t.count != null ? /*#__PURE__*/React.createElement("span", {
    className: "v-tab__count"
  }, t.count) : null)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AppShell.jsx
try { (() => {
/* Vigía dashboard — app shell (sidebar + topbar). window.DashShell */
(function () {
  const {
    Avatar,
    IconButton,
    Badge,
    SegmentedControl
  } = window.VigADesignSystem_7eb604;
  const I = window.VIcons;
  const NAV = [{
    id: 'resumen',
    label: 'Resumen',
    icon: 'Home'
  }, {
    id: 'contratos',
    label: 'Contratos',
    icon: 'FileText',
    count: 312
  }, {
    id: 'congreso',
    label: 'Congreso',
    icon: 'Landmark'
  }, {
    id: 'presupuesto',
    label: 'Presupuesto',
    icon: 'Wallet'
  }, {
    id: 'reportes',
    label: 'Reportes',
    icon: 'Flag'
  }];
  function Sidebar({
    active,
    onNav
  }) {
    return React.createElement('aside', {
      style: ss.aside
    }, React.createElement('div', {
      style: ss.brand
    }, React.createElement('img', {
      src: '../../assets/vigia-logo-inverse.svg',
      alt: 'Vigía',
      height: 30
    })), React.createElement('nav', {
      style: ss.nav
    }, NAV.map(n => {
      const Icon = I[n.icon];
      const on = active === n.id;
      return React.createElement('button', {
        key: n.id,
        onClick: () => onNav(n.id),
        style: {
          ...ss.navItem,
          ...(on ? ss.navItemOn : null)
        }
      }, React.createElement('span', {
        style: {
          display: 'inline-flex',
          fontSize: 18,
          color: on ? 'var(--gold-300)' : 'rgba(255,255,255,.55)'
        }
      }, React.createElement(Icon)), React.createElement('span', {
        style: {
          flex: 1,
          textAlign: 'left'
        }
      }, n.label), n.count != null ? React.createElement('span', {
        style: ss.navCount
      }, n.count) : null);
    })), React.createElement('div', {
      style: ss.asideFoot
    }, React.createElement('div', {
      style: ss.dataNote
    }, React.createElement('span', {
      style: {
        display: 'inline-flex',
        color: 'var(--gold-300)',
        fontSize: 15
      }
    }, React.createElement(I.Eye)), React.createElement('div', null, React.createElement('div', {
      style: {
        fontWeight: 600,
        color: '#fff',
        fontSize: 12
      }
    }, 'Datos abiertos'), React.createElement('div', {
      style: {
        fontSize: 11,
        color: 'rgba(255,255,255,.5)'
      }
    }, 'Fuente: SECOP · DNP')))));
  }
  function Topbar({
    scope,
    onScope,
    query,
    onQuery
  }) {
    return React.createElement('header', {
      style: ss.top
    }, React.createElement('div', {
      style: ss.searchWrap
    }, React.createElement('span', {
      style: ss.searchIco
    }, React.createElement(I.Search, {
      size: 18
    })), React.createElement('input', {
      style: ss.search,
      placeholder: 'Buscar contratos, políticos, entidades…',
      value: query,
      onChange: e => onQuery(e.target.value)
    })), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, React.createElement(SegmentedControl, {
      value: scope,
      onChange: onScope,
      items: ['Nación', 'Departamento', 'Municipio']
    }), React.createElement('div', {
      style: {
        position: 'relative',
        display: 'inline-flex'
      }
    }, React.createElement(IconButton, {
      label: 'Notificaciones'
    }, React.createElement(I.Bell)), React.createElement('span', {
      style: ss.dot
    })), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        paddingLeft: 6
      }
    }, React.createElement(Avatar, {
      name: 'Ciudadana',
      size: 'sm'
    }), React.createElement('div', {
      style: {
        lineHeight: 1.2
      }
    }, React.createElement('div', {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-strong)'
      }
    }, 'Ciudadana'), React.createElement('div', {
      style: {
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, 'Cuenta verificada')))));
  }
  function AppShell({
    active,
    onNav,
    scope,
    onScope,
    query,
    onQuery,
    children
  }) {
    return React.createElement('div', {
      style: ss.root
    }, React.createElement(Sidebar, {
      active,
      onNav
    }), React.createElement('div', {
      style: ss.main
    }, React.createElement(Topbar, {
      scope,
      onScope,
      query,
      onQuery
    }), React.createElement('div', {
      style: ss.content
    }, children)));
  }
  const ss = {
    root: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--surface-page)',
      fontFamily: 'var(--ui-font)'
    },
    aside: {
      width: 'var(--sidebar-width)',
      flex: 'none',
      background: 'var(--blue-900)',
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0,
      height: '100vh'
    },
    brand: {
      padding: '22px 22px 18px'
    },
    nav: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      padding: '6px 12px',
      flex: 1
    },
    navItem: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '10px 12px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.78)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      fontFamily: 'inherit',
      cursor: 'pointer',
      transition: 'background .14s, color .14s'
    },
    navItemOn: {
      background: 'rgba(255,255,255,.10)',
      color: '#fff',
      fontWeight: 600
    },
    navCount: {
      fontSize: 11,
      fontVariantNumeric: 'tabular-nums',
      background: 'var(--gold-400)',
      color: 'var(--neutral-900)',
      borderRadius: '999px',
      padding: '1px 7px',
      fontWeight: 700
    },
    asideFoot: {
      padding: 16
    },
    dataNote: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      background: 'rgba(255,255,255,.06)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 12px'
    },
    main: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    },
    top: {
      height: 'var(--topbar-height)',
      flex: 'none',
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      padding: '0 24px',
      position: 'sticky',
      top: 0,
      zIndex: 10
    },
    searchWrap: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      maxWidth: 460
    },
    searchIco: {
      position: 'absolute',
      left: 13,
      color: 'var(--text-subtle)',
      display: 'inline-flex'
    },
    search: {
      width: '100%',
      height: 40,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '0 14px 0 38px',
      fontFamily: 'inherit',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)',
      background: 'var(--surface-sunken)',
      outline: 'none'
    },
    dot: {
      position: 'absolute',
      top: 8,
      right: 8,
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--red-500)',
      border: '1.5px solid var(--surface-card)'
    },
    content: {
      padding: '28px 32px',
      maxWidth: 'var(--container-full)',
      width: '100%',
      margin: '0 auto'
    }
  };
  window.DashShell = {
    AppShell
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/data.jsx
try { (() => {
/* Vigía dashboard — mock data (fictional; for design only). window.DashData */
(function () {
  const fmtCOP = n => '$' + n.toLocaleString('es-CO');
  const sectors = [{
    label: 'Salud',
    value: 42,
    color: 'var(--viz-1)'
  }, {
    label: 'Educación',
    value: 38,
    color: 'var(--viz-2)'
  }, {
    label: 'Defensa',
    value: 27,
    color: 'var(--viz-3)'
  }, {
    label: 'Vías',
    value: 31,
    color: 'var(--viz-4)'
  }, {
    label: 'Vivienda',
    value: 19,
    color: 'var(--viz-6)'
  }, {
    label: 'Cultura',
    value: 11,
    color: 'var(--viz-7)'
  }];
  const entities = [{
    label: 'Min. Salud',
    value: 86,
    tone: 'success'
  }, {
    label: 'Min. Educación',
    value: 64,
    tone: 'default'
  }, {
    label: 'Min. Transporte',
    value: 38,
    tone: 'warning'
  }, {
    label: 'INVÍAS',
    value: 19,
    tone: 'danger'
  }, {
    label: 'Min. Vivienda',
    value: 52,
    tone: 'default'
  }];
  const contracts = [{
    id: 'C-2026-0847',
    ent: 'Secretaría de Salud',
    dep: 'Antioquia',
    amount: 48230500000,
    method: 'Sin licitación',
    status: 'En riesgo',
    tone: 'danger'
  }, {
    id: 'C-2026-0612',
    ent: 'INVÍAS',
    dep: 'Nación',
    amount: 1097640118000,
    method: 'Contratación directa',
    status: 'Sin licitación',
    tone: 'warning'
  }, {
    id: 'C-2026-0488',
    ent: 'Min. Educación',
    dep: 'Nación',
    amount: 312905330000,
    method: 'Licitación pública',
    status: 'Al día',
    tone: 'success'
  }, {
    id: 'C-2026-0455',
    ent: 'Alcaldía de Cali',
    dep: 'Valle',
    amount: 18420900000,
    method: 'Mínima cuantía',
    status: 'Auditado',
    tone: 'info'
  }, {
    id: 'C-2026-0390',
    ent: 'Gobernación',
    dep: 'Atlántico',
    amount: 9905120000,
    method: 'Licitación pública',
    status: 'Al día',
    tone: 'success'
  }, {
    id: 'C-2026-0377',
    ent: 'EPM',
    dep: 'Antioquia',
    amount: 220410000000,
    method: 'Contratación directa',
    status: 'En riesgo',
    tone: 'danger'
  }, {
    id: 'C-2026-0301',
    ent: 'Min. Defensa',
    dep: 'Nación',
    amount: 76012000000,
    method: 'Régimen especial',
    status: 'En revisión',
    tone: 'warning'
  }, {
    id: 'C-2026-0288',
    ent: 'Alcaldía de Medellín',
    dep: 'Antioquia',
    amount: 14209500000,
    method: 'Licitación pública',
    status: 'Al día',
    tone: 'success'
  }];
  const politicians = [{
    id: 1,
    name: 'Lucía Fernández',
    role: 'Senadora',
    party: 'Coalición Verde',
    color: 'var(--viz-3)',
    attendance: 94,
    votes: 128,
    alerts: 0
  }, {
    id: 2,
    name: 'Carlos Mejía',
    role: 'Representante a la Cámara',
    party: 'Partido Azul',
    color: 'var(--viz-1)',
    attendance: 71,
    votes: 96,
    alerts: 2
  }, {
    id: 3,
    name: 'Ana Rojas',
    role: 'Senadora',
    party: 'Movimiento Ciudadano',
    color: 'var(--viz-7)',
    attendance: 88,
    votes: 140,
    alerts: 1
  }, {
    id: 4,
    name: 'Diego Torres',
    role: 'Representante a la Cámara',
    party: 'Partido Rojo',
    color: 'var(--viz-4)',
    attendance: 59,
    votes: 64,
    alerts: 3
  }, {
    id: 5,
    name: 'Marta Quintero',
    role: 'Senadora',
    party: 'Coalición Verde',
    color: 'var(--viz-3)',
    attendance: 97,
    votes: 152,
    alerts: 0
  }, {
    id: 6,
    name: 'Jorge Salinas',
    role: 'Representante a la Cámara',
    party: 'Movimiento Ciudadano',
    color: 'var(--viz-7)',
    attendance: 80,
    votes: 110,
    alerts: 1
  }];
  const budgetTrend = [38, 41, 39, 44, 47, 45, 52, 58, 61, 64, 70, 74];
  window.DashData = {
    fmtCOP,
    sectors,
    entities,
    contracts,
    politicians,
    budgetTrend
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/views.jsx
try { (() => {
/* Vigía dashboard — views. window.DashViews */
(function () {
  const V = window.VigADesignSystem_7eb604;
  const {
    StatCard,
    BarChart,
    Legend,
    ProgressMeter,
    FilterBar,
    FilterChip,
    DataTable,
    Badge,
    Button,
    Sparkline,
    Avatar,
    IconButton
  } = V;
  const I = window.VIcons;
  const D = window.DashData;
  function PageHeader({
    eyebrow,
    title,
    sub,
    actions
  }) {
    return React.createElement('div', {
      style: hs.head
    }, React.createElement('div', null, eyebrow ? React.createElement('div', {
      className: 'vigia-eyebrow',
      style: {
        marginBottom: 6
      }
    }, eyebrow) : null, React.createElement('h1', {
      style: hs.title
    }, title), sub ? React.createElement('p', {
      style: hs.sub
    }, sub) : null), actions ? React.createElement('div', {
      style: {
        display: 'flex',
        gap: 10,
        flex: 'none'
      }
    }, actions) : null);
  }
  function Panel({
    title,
    action,
    children,
    style
  }) {
    return React.createElement('section', {
      style: {
        ...ps.panel,
        ...style
      }
    }, title || action ? React.createElement('div', {
      style: ps.head
    }, React.createElement('h3', {
      style: ps.title
    }, title), action || null) : null, React.createElement('div', {
      style: ps.body
    }, children));
  }

  /* ---------------- Resumen ---------------- */
  function ResumenView({
    onOpenContract
  }) {
    const cols = contractCols(onOpenContract);
    return React.createElement('div', null, React.createElement(PageHeader, {
      eyebrow: 'Presupuesto general de la nación · 2026',
      title: 'Resumen nacional',
      sub: 'Cómo se asigna, ejecuta y contrata el dinero público. Datos actualizados al 14 de junio de 2026.',
      actions: [React.createElement(Button, {
        key: 'b1',
        variant: 'secondary',
        icon: React.createElement(I.Download)
      }, 'Exportar'), React.createElement(Button, {
        key: 'b2',
        variant: 'primary',
        icon: React.createElement(I.Bell)
      }, 'Seguir tablero')]
    }), React.createElement('div', {
      style: gs.stats
    }, React.createElement(StatCard, {
      label: 'Presupuesto 2026',
      value: '$1,48 B',
      delta: '+12,4%',
      direction: 'up',
      note: 'vs. 2025',
      icon: React.createElement(I.Wallet)
    }), React.createElement(StatCard, {
      label: 'Ejecución',
      value: '74%',
      delta: '−3,8%',
      direction: 'down',
      note: 'bajo lo esperado',
      icon: React.createElement(I.PieChart)
    }), React.createElement(StatCard, {
      label: 'Contratos en riesgo',
      value: '312',
      delta: '+48',
      direction: 'down',
      note: 'último mes',
      icon: React.createElement(I.AlertTriangle)
    }), React.createElement(StatCard, {
      label: 'Reportes ciudadanos',
      value: '1.204',
      delta: '+96',
      direction: 'up',
      note: 'esta semana',
      icon: React.createElement(I.Flag)
    })), React.createElement('div', {
      style: gs.twocol
    }, React.createElement(Panel, {
      title: 'Gasto por sector',
      action: React.createElement(Button, {
        variant: 'ghost',
        size: 'sm',
        iconRight: React.createElement(I.ChevronRight)
      }, 'Detalle')
    }, React.createElement(BarChart, {
      height: 168,
      formatValue: v => v + '%',
      data: D.sectors
    }), React.createElement('div', {
      style: {
        marginTop: 18
      }
    }, React.createElement(Legend, {
      items: D.sectors.map(s => ({
        label: s.label,
        color: s.color
      }))
    }))), React.createElement(Panel, {
      title: 'Ejecución por entidad'
    }, React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, D.entities.map((e, i) => React.createElement(ProgressMeter, {
      key: i,
      label: e.label,
      value: e.value,
      tone: e.tone
    }))))), React.createElement(Panel, {
      title: 'Contratos que requieren atención',
      style: {
        marginTop: 20
      },
      action: React.createElement(FilterBar, null, React.createElement(FilterChip, {
        active: true,
        count: 312
      }, 'En riesgo'), React.createElement(FilterChip, {
        count: 1204
      }, 'Adjudicados'))
    }, React.createElement(DataTable, {
      columns: cols,
      rows: D.contracts.slice(0, 5)
    })));
  }

  /* ---------------- Contratos ---------------- */
  function ContratosView({
    query,
    onOpenContract
  }) {
    const [filter, setFilter] = React.useState('todos');
    const q = (query || '').toLowerCase();
    let rows = D.contracts.filter(c => !q || c.ent.toLowerCase().includes(q) || c.id.toLowerCase().includes(q) || c.dep.toLowerCase().includes(q));
    if (filter === 'riesgo') rows = rows.filter(c => c.tone === 'danger');
    if (filter === 'revision') rows = rows.filter(c => c.tone === 'warning');
    const cols = contractCols(onOpenContract);
    return React.createElement('div', null, React.createElement(PageHeader, {
      eyebrow: 'Contratación pública · SECOP II',
      title: 'Contratos',
      sub: q ? `Resultados para “${query}”` : 'Explora la contratación de entidades públicas en todo el país.',
      actions: React.createElement(Button, {
        variant: 'secondary',
        icon: React.createElement(I.Download)
      }, 'Descargar CSV')
    }), React.createElement('div', {
      style: {
        marginBottom: 16
      }
    }, React.createElement(FilterBar, null, React.createElement(FilterChip, {
      active: filter === 'todos',
      count: D.contracts.length,
      onClick: () => setFilter('todos')
    }, 'Todos'), React.createElement(FilterChip, {
      active: filter === 'riesgo',
      icon: React.createElement(I.AlertTriangle, {
        size: 15
      }),
      onClick: () => setFilter('riesgo')
    }, 'En riesgo'), React.createElement(FilterChip, {
      active: filter === 'revision',
      onClick: () => setFilter('revision')
    }, 'En revisión'))), rows.length ? React.createElement(DataTable, {
      columns: cols,
      rows
    }) : React.createElement('div', {
      style: empty
    }, 'Sin contratos que coincidan con tu búsqueda.'));
  }

  /* ---------------- Congreso ---------------- */
  function CongresoView({
    followed,
    onFollow
  }) {
    return React.createElement('div', null, React.createElement(PageHeader, {
      eyebrow: 'Senado y Cámara de Representantes',
      title: 'Congreso',
      sub: 'Asistencia, votaciones y alertas de los congresistas. Sigue a quienes te representan.'
    }), React.createElement('div', {
      style: gs.cards
    }, D.politicians.map(p => React.createElement(PoliticianCard, {
      key: p.id,
      p,
      followed: followed.has(p.id),
      onFollow
    }))));
  }
  function PoliticianCard({
    p,
    followed,
    onFollow
  }) {
    return React.createElement('div', {
      style: pc.card
    }, React.createElement('div', {
      style: {
        display: 'flex',
        gap: 13,
        alignItems: 'center'
      }
    }, React.createElement(Avatar, {
      name: p.name,
      size: 'lg'
    }), React.createElement('div', {
      style: {
        minWidth: 0
      }
    }, React.createElement('div', {
      style: pc.name
    }, p.name), React.createElement('div', {
      style: pc.role
    }, p.role), React.createElement('span', {
      style: {
        ...pc.party,
        color: p.color
      }
    }, React.createElement('span', {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: p.color
      }
    }), p.party))), React.createElement('div', {
      style: pc.stats
    }, React.createElement(Stat, {
      k: 'Asistencia',
      v: p.attendance + '%'
    }), React.createElement(Stat, {
      k: 'Votaciones',
      v: p.votes
    }), React.createElement(Stat, {
      k: 'Alertas',
      v: p.alerts,
      danger: p.alerts > 0
    })), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8
      }
    }, React.createElement(Button, {
      variant: followed ? 'secondary' : 'primary',
      size: 'sm',
      block: true,
      icon: followed ? React.createElement(I.Check) : React.createElement(I.Plus),
      onClick: () => onFollow(p.id)
    }, followed ? 'Siguiendo' : 'Seguir'), React.createElement(IconButton, {
      label: 'Ver perfil',
      variant: 'default'
    }, React.createElement(I.ArrowRight))));
  }
  function Stat({
    k,
    v,
    danger
  }) {
    return React.createElement('div', null, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 20,
        color: danger ? 'var(--red-600)' : 'var(--text-strong)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, v), React.createElement('div', {
      style: {
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, k));
  }

  /* ---------------- Placeholder ---------------- */
  function Placeholder({
    title,
    sub
  }) {
    return React.createElement('div', null, React.createElement(PageHeader, {
      title,
      sub
    }), React.createElement('div', {
      style: {
        ...empty,
        textAlign: 'center',
        padding: '56px 24px'
      }
    }, React.createElement('div', {
      style: {
        color: 'var(--text-subtle)',
        display: 'inline-flex',
        marginBottom: 10
      }
    }, React.createElement(I.Clock, {
      size: 26
    })), React.createElement('div', null, 'Vista de demostración — sin datos en esta maqueta.')));
  }
  function contractCols(onOpen) {
    return [{
      key: 'id',
      label: 'Código',
      render: r => React.createElement('span', {
        style: {
          fontFamily: 'var(--data-font)',
          fontSize: 12,
          color: 'var(--text-muted)'
        }
      }, r.id)
    }, {
      key: 'ent',
      label: 'Entidad',
      primary: true
    }, {
      key: 'dep',
      label: 'Territorio'
    }, {
      key: 'method',
      label: 'Modalidad',
      render: r => React.createElement('span', {
        style: {
          color: 'var(--text-muted)',
          fontSize: 13
        }
      }, r.method)
    }, {
      key: 'amount',
      label: 'Monto',
      numeric: true,
      render: r => D.fmtCOP(r.amount)
    }, {
      key: 'status',
      label: 'Estado',
      render: r => React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.status)
    }, {
      key: 'go',
      label: '',
      render: r => React.createElement(Button, {
        variant: 'ghost',
        size: 'sm',
        onClick: () => onOpen(r)
      }, 'Ver')
    }];
  }
  const hs = {
    head: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 20,
      marginBottom: 22,
      flexWrap: 'wrap'
    },
    title: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0,
      letterSpacing: '-0.02em'
    },
    sub: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-sm)',
      margin: '6px 0 0',
      maxWidth: '64ch'
    }
  };
  const ps = {
    panel: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    },
    head: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 14,
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    },
    title: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0
    },
    body: {
      padding: 20
    }
  };
  const gs = {
    stats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginBottom: 20
    },
    twocol: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 20
    },
    cards: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 16
    }
  };
  const pc = {
    card: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    },
    name: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)'
    },
    role: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginBottom: 5
    },
    party: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      fontWeight: 600
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10,
      padding: '14px 0',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  };
  const empty = {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)',
    padding: '28px',
    color: 'var(--text-muted)',
    fontSize: 'var(--text-sm)'
  };
  window.DashViews = {
    ResumenView,
    ContratosView,
    CongresoView,
    Placeholder
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/views.jsx", error: String((e && e.message) || e) }); }

// ui_kits/icons.jsx
try { (() => {
/* Vigía — shared icon set (Lucide-derived paths, ISC license).
 * Consistent 24px stroke icons used across all UI kits. Exposed as window.VIcons.
 * Usage: <VIcons.Search size={18} />  (size defaults to 1em / inherits font-size)
 */
(function () {
  const S = ({
    size,
    children,
    ...p
  }) => React.createElement('svg', {
    viewBox: '0 0 24 24',
    width: size || '1em',
    height: size || '1em',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...p
  }, children);
  const p = d => React.createElement('path', {
    d,
    key: d
  });
  const make = (...nodes) => props => React.createElement(S, props, nodes);
  const VIcons = {
    Search: make(React.createElement('circle', {
      cx: 11,
      cy: 11,
      r: 7,
      key: 'c'
    }), p('m21 21-4.3-4.3')),
    Home: make(p('M3 10.5 12 3l9 7.5'), p('M5 9.5V21h14V9.5')),
    Wallet: make(p('M3 7a2 2 0 0 1 2-2h13v4'), p('M3 7v10a2 2 0 0 0 2 2h15V7H3Z'), p('M16 12h.01')),
    Landmark: make(p('M3 21h18'), p('M5 21V10'), p('M19 21V10'), p('M9 21V10'), p('M15 21V10'), p('M3 10 12 4l9 6')),
    FileText: make(p('M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z'), p('M14 3v5h5'), p('M9 13h6'), p('M9 17h6')),
    Gavel: make(p('m14.5 12.5-8 8a2.1 2.1 0 0 1-3-3l8-8'), p('m16 16 6-6'), p('m8 8 6-6'), p('m9 7 8 8'), p('m21 11-8-8')),
    Users: make(p('M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'), React.createElement('circle', {
      cx: 9,
      cy: 7,
      r: 4,
      key: 'c'
    }), p('M22 21v-2a4 4 0 0 0-3-3.87'), p('M16 3.13a4 4 0 0 1 0 7.75')),
    Bell: make(p('M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9'), p('M10.3 21a1.94 1.94 0 0 0 3.4 0')),
    Download: make(p('M12 3v12'), p('m7 11 5 4 5-4'), p('M5 21h14')),
    Upload: make(p('M12 21V9'), p('m7 13 5-4 5 4'), p('M5 3h14')),
    Filter: make(p('M3 5h18l-7 8v6l-4-2v-4z')),
    ChevronRight: make(p('m9 6 6 6-6 6')),
    ChevronDown: make(p('m6 9 6 6 6-6')),
    ChevronLeft: make(p('m15 6-6 6 6 6')),
    ArrowUp: make(p('M12 19V5'), p('m5 12 7-7 7 7')),
    ArrowDown: make(p('M12 5v14'), p('m5 12 7 7 7-7')),
    ArrowRight: make(p('M5 12h14'), p('m12 5 7 7-7 7')),
    Check: make(p('M20 6 9 17l-5-5')),
    AlertTriangle: make(p('M10.3 3.9 1.8 18.5A2 2 0 0 0 3.5 21.5h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z'), p('M12 9v4'), p('M12 17h.01')),
    Eye: make(p('M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z'), React.createElement('circle', {
      cx: 12,
      cy: 12,
      r: 3,
      key: 'c'
    })),
    ExternalLink: make(p('M15 3h6v6'), p('M10 14 21 3'), p('M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6')),
    MapPin: make(p('M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'), React.createElement('circle', {
      cx: 12,
      cy: 10,
      r: 3,
      key: 'c'
    })),
    Flag: make(p('M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1Z'), p('M4 22v-7')),
    Plus: make(p('M12 5v14'), p('M5 12h14')),
    X: make(p('M6 6l12 12'), p('M18 6 6 18')),
    Settings: make(React.createElement('circle', {
      cx: 12,
      cy: 12,
      r: 3,
      key: 'c'
    }), p('M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 6.7 19.4l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 3 13.9H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 7.3l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.6 1.6 0 0 0 10 4.6V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 2.7 1.1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z')),
    Menu: make(p('M3 6h18'), p('M3 12h18'), p('M3 18h18')),
    Share: make(p('M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7'), p('M16 6l-4-4-4 4'), p('M12 2v14')),
    Bookmark: make(p('M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1Z')),
    TrendingUp: make(p('M22 7 13.5 15.5 8.5 10.5 2 17'), p('M16 7h6v6')),
    TrendingDown: make(p('M22 17 13.5 8.5 8.5 13.5 2 7'), p('M16 17h6v-6')),
    Scale: make(p('M12 3v18'), p('M6 7h12'), p('m6 7-3 7h6Z'), p('m18 7-3 7h6Z'), p('M7 21h10')),
    PieChart: make(p('M21 12A9 9 0 1 1 12 3v9Z'), p('M21 12a9 9 0 0 0-9-9v9Z')),
    Clock: make(React.createElement('circle', {
      cx: 12,
      cy: 12,
      r: 9,
      key: 'c'
    }), p('M12 7v5l3 2')),
    Dots: make(React.createElement('circle', {
      cx: 12,
      cy: 12,
      r: 1,
      key: 'a'
    }), React.createElement('circle', {
      cx: 19,
      cy: 12,
      r: 1,
      key: 'b'
    }), React.createElement('circle', {
      cx: 5,
      cy: 12,
      r: 1,
      key: 'c'
    })),
    Info: make(React.createElement('circle', {
      cx: 12,
      cy: 12,
      r: 9,
      key: 'c'
    }), p('M12 11v5'), p('M12 7.5h.01'))
  };
  window.VIcons = VIcons;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/Mobile.jsx
try { (() => {
/* Vigía — mobile app screens. window.Mobile */
(function () {
  const V = window.VigADesignSystem_7eb604;
  const {
    Badge,
    Tag,
    Avatar,
    Button,
    Sparkline,
    ProgressMeter
  } = V;
  const I = window.VIcons;
  const fmt = n => '$' + n.toLocaleString('es-CO');
  const alerts = [{
    ent: 'Secretaría de Salud',
    dep: 'Antioquia',
    amount: 48230500000,
    tone: 'danger',
    tag: 'Sin licitación'
  }, {
    ent: 'EPM',
    dep: 'Antioquia',
    amount: 220410000000,
    tone: 'danger',
    tag: 'Contratación directa'
  }, {
    ent: 'Min. Transporte',
    dep: 'Nación',
    amount: 76012000000,
    tone: 'warning',
    tag: 'En revisión'
  }];
  const people = [{
    id: 1,
    name: 'Lucía Fernández',
    role: 'Senadora',
    party: 'Coalición Verde',
    color: 'var(--viz-3)',
    att: 94
  }, {
    id: 2,
    name: 'Carlos Mejía',
    role: 'Cámara',
    party: 'Partido Azul',
    color: 'var(--viz-1)',
    att: 71
  }, {
    id: 3,
    name: 'Ana Rojas',
    role: 'Senadora',
    party: 'Mov. Ciudadano',
    color: 'var(--viz-7)',
    att: 88
  }, {
    id: 4,
    name: 'Diego Torres',
    role: 'Cámara',
    party: 'Partido Rojo',
    color: 'var(--viz-4)',
    att: 59
  }];
  const TABS = [{
    id: 'inicio',
    label: 'Inicio',
    icon: 'Home'
  }, {
    id: 'buscar',
    label: 'Buscar',
    icon: 'Search'
  }, {
    id: 'seguidos',
    label: 'Seguidos',
    icon: 'Bookmark'
  }, {
    id: 'reportar',
    label: 'Reportar',
    icon: 'Flag'
  }];
  function Header({
    title,
    sub
  }) {
    return React.createElement('div', {
      style: m.header
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement('img', {
      src: '../../assets/vigia-logo.svg',
      alt: 'Vigía',
      height: 24
    }), React.createElement('div', {
      style: {
        position: 'relative',
        display: 'inline-flex',
        color: 'var(--text-muted)'
      }
    }, React.createElement(I.Bell, {
      size: 22
    }), React.createElement('span', {
      style: m.bdot
    }))), title ? React.createElement('h1', {
      style: m.h1
    }, title) : null, sub ? React.createElement('p', {
      style: m.sub
    }, sub) : null);
  }
  function MiniStat({
    k,
    v,
    delta,
    dir,
    spark
  }) {
    return React.createElement('div', {
      style: m.mini
    }, React.createElement('div', {
      style: m.miniK
    }, k), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
      }
    }, React.createElement('div', {
      style: m.miniV
    }, v), spark ? React.createElement(Sparkline, {
      values: spark,
      width: 48,
      height: 20,
      color: 'var(--blue-500)'
    }) : null), delta ? React.createElement('div', {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: dir === 'down' ? 'var(--red-600)' : 'var(--green-600)'
      }
    }, delta) : null);
  }
  function AlertCard({
    a,
    onOpen
  }) {
    return React.createElement('button', {
      style: m.alert,
      onClick: onOpen
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8
      }
    }, React.createElement('span', {
      style: m.alertEnt
    }, a.ent), React.createElement(Badge, {
      tone: a.tone,
      dot: true
    }, a.tag)), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8
      }
    }, React.createElement('span', {
      style: m.money
    }, fmt(a.amount)), React.createElement('span', {
      style: m.dep
    }, React.createElement(I.MapPin, {
      size: 13
    }), ' ', a.dep)));
  }
  function PersonRow({
    p,
    following,
    onFollow
  }) {
    return React.createElement('div', {
      style: m.prow
    }, React.createElement(Avatar, {
      name: p.name,
      size: 'md'
    }), React.createElement('div', {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, React.createElement('div', {
      style: m.pname
    }, p.name), React.createElement('div', {
      style: m.pmeta
    }, React.createElement('span', {
      style: {
        width: 7,
        height: 7,
        borderRadius: 2,
        background: p.color,
        display: 'inline-block'
      }
    }), p.role + ' · ' + p.party)), React.createElement(Button, {
      variant: following ? 'secondary' : 'primary',
      size: 'sm',
      onClick: onFollow
    }, following ? React.createElement(I.Check) : React.createElement(I.Plus)));
  }
  function Screen({
    tab,
    followed,
    onFollow,
    onOpen
  }) {
    if (tab === 'inicio') {
      return React.createElement('div', {
        style: m.body
      }, React.createElement(Header, {
        title: 'Hola 👋',
        sub: 'Esto está pasando con el dinero público hoy.'
      }), React.createElement('div', {
        style: m.pill
      }, React.createElement(I.Search, {
        size: 17
      }), React.createElement('span', {
        style: {
          color: 'var(--text-subtle)'
        }
      }, 'Buscar contrato, político…')), React.createElement('div', {
        style: m.grid2
      }, React.createElement(MiniStat, {
        k: 'Presupuesto 2026',
        v: '$1,48 B',
        delta: '+12,4%',
        dir: 'up',
        spark: [38, 44, 47, 52, 61, 70, 74]
      }), React.createElement(MiniStat, {
        k: 'Ejecución',
        v: '74%',
        delta: '−3,8%',
        dir: 'down'
      })), React.createElement(SectionTitle, {
        t: 'En riesgo cerca de ti',
        extra: 'Antioquia'
      }), React.createElement('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        }
      }, alerts.map((a, i) => React.createElement(AlertCard, {
        key: i,
        a,
        onOpen: () => onOpen(a)
      }))), React.createElement(SectionTitle, {
        t: 'Tu Congreso'
      }), React.createElement('div', {
        style: m.card
      }, people.slice(0, 3).map((p, i) => React.createElement(React.Fragment, {
        key: p.id
      }, i > 0 ? React.createElement('div', {
        style: m.sep
      }) : null, React.createElement(PersonRow, {
        p,
        following: followed.has(p.id),
        onFollow: () => onFollow(p.id)
      })))));
    }
    if (tab === 'buscar') {
      return React.createElement('div', {
        style: m.body
      }, React.createElement(Header, {
        title: 'Buscar'
      }), React.createElement('div', {
        style: m.pill
      }, React.createElement(I.Search, {
        size: 17
      }), React.createElement('span', {
        style: {
          color: 'var(--text-body)'
        }
      }, 'congreso')), React.createElement('div', {
        style: {
          display: 'flex',
          gap: 8,
          marginBottom: 4
        }
      }, React.createElement(Tag, {
        swatch: 'var(--viz-3)'
      }, 'Coalición Verde'), React.createElement(Tag, null, 'Antioquia')), React.createElement(SectionTitle, {
        t: 'Congresistas',
        extra: people.length + ' resultados'
      }), React.createElement('div', {
        style: m.card
      }, people.map((p, i) => React.createElement(React.Fragment, {
        key: p.id
      }, i > 0 ? React.createElement('div', {
        style: m.sep
      }) : null, React.createElement(PersonRow, {
        p,
        following: followed.has(p.id),
        onFollow: () => onFollow(p.id)
      })))));
    }
    if (tab === 'seguidos') {
      const list = people.filter(p => followed.has(p.id));
      return React.createElement('div', {
        style: m.body
      }, React.createElement(Header, {
        title: 'Seguidos',
        sub: 'Te avisaremos de nuevas votaciones y contratos.'
      }), list.length ? React.createElement('div', {
        style: m.card
      }, list.map((p, i) => React.createElement(React.Fragment, {
        key: p.id
      }, i > 0 ? React.createElement('div', {
        style: m.sep
      }) : null, React.createElement(PersonRow, {
        p,
        following: true,
        onFollow: () => onFollow(p.id)
      })))) : React.createElement('div', {
        style: m.emptyState
      }, React.createElement('div', {
        style: {
          color: 'var(--text-subtle)',
          marginBottom: 10,
          display: 'inline-flex'
        }
      }, React.createElement(I.Bookmark, {
        size: 28
      })), React.createElement('div', {
        style: {
          fontWeight: 600,
          color: 'var(--text-strong)',
          marginBottom: 4
        }
      }, 'Aún no sigues a nadie'), React.createElement('div', {
        style: {
          fontSize: 13,
          color: 'var(--text-muted)'
        }
      }, 'Sigue congresistas desde Buscar o Inicio.')));
    }
    // reportar
    return React.createElement('div', {
      style: m.body
    }, React.createElement(Header, {
      title: 'Reportar',
      sub: 'Viste algo irregular con dinero público. Cuéntanos.'
    }), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, React.createElement(MField, {
      label: '¿Qué tipo de irregularidad?'
    }, React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, ['Contrato', 'Obra inconclusa', 'Conflicto de interés', 'Otro'].map((t, i) => React.createElement('span', {
      key: t,
      style: {
        ...m.chip,
        ...(i === 0 ? m.chipOn : null)
      }
    }, t)))), React.createElement(MField, {
      label: 'Entidad o responsable'
    }, React.createElement('div', {
      style: m.input
    }, 'Secretaría de Salud — Antioquia')), React.createElement(MField, {
      label: 'Describe lo que viste'
    }, React.createElement('div', {
      style: {
        ...m.input,
        height: 88,
        color: 'var(--text-subtle)'
      }
    }, 'La obra fue adjudicada sin licitación y lleva 8 meses detenida…')), React.createElement(Button, {
      variant: 'primary',
      block: true,
      icon: React.createElement(I.Upload)
    }, 'Enviar reporte anónimo'), React.createElement('p', {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        textAlign: 'center',
        margin: 0
      }
    }, 'Tu identidad está protegida.')));
  }
  function MField({
    label,
    children
  }) {
    return React.createElement('div', null, React.createElement('div', {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-strong)',
        marginBottom: 7
      }
    }, label), children);
  }
  function SectionTitle({
    t,
    extra
  }) {
    return React.createElement('div', {
      style: m.secTitle
    }, React.createElement('span', null, t), extra ? React.createElement('span', {
      style: {
        fontSize: 12,
        fontWeight: 500,
        color: 'var(--text-muted)',
        fontFamily: 'var(--ui-font)'
      }
    }, extra) : null);
  }
  function TabBar({
    tab,
    onTab
  }) {
    return React.createElement('div', {
      style: m.tabbar
    }, TABS.map(t => {
      const Icon = I[t.icon];
      const on = tab === t.id;
      return React.createElement('button', {
        key: t.id,
        onClick: () => onTab(t.id),
        style: {
          ...m.tab,
          color: on ? 'var(--blue-600)' : 'var(--text-subtle)'
        }
      }, React.createElement(Icon, {
        size: 22
      }), React.createElement('span', {
        style: {
          fontSize: 10.5,
          fontWeight: on ? 700 : 500
        }
      }, t.label));
    }));
  }
  function App({
    initial
  }) {
    const [tab, setTab] = React.useState(initial || 'inicio');
    const [followed, setFollowed] = React.useState(new Set([1]));
    const onFollow = id => setFollowed(p => {
      const n = new Set(p);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });
    return React.createElement('div', {
      style: m.app
    }, React.createElement('div', {
      style: m.scroll
    }, React.createElement(Screen, {
      tab,
      followed,
      onFollow,
      onOpen: () => {}
    })), React.createElement(TabBar, {
      tab,
      onTab: setTab
    }));
  }
  const m = {
    app: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page)',
      fontFamily: 'var(--ui-font)'
    },
    scroll: {
      flex: 1,
      overflow: 'auto'
    },
    body: {
      padding: '6px 18px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    },
    header: {
      paddingTop: 8
    },
    h1: {
      fontFamily: 'var(--font-display)',
      fontSize: 28,
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '14px 0 0',
      letterSpacing: '-0.02em'
    },
    sub: {
      fontSize: 14,
      color: 'var(--text-muted)',
      margin: '5px 0 0',
      lineHeight: 1.45
    },
    bdot: {
      position: 'absolute',
      top: -1,
      right: -1,
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--red-500)',
      border: '1.5px solid var(--surface-page)'
    },
    pill: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 999,
      padding: '11px 16px',
      fontSize: 14,
      color: 'var(--text-subtle)'
    },
    grid2: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 11
    },
    mini: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 14,
      boxShadow: 'var(--shadow-xs)'
    },
    miniK: {
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      color: 'var(--text-muted)',
      marginBottom: 6
    },
    miniV: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums',
      lineHeight: 1
    },
    secTitle: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 600,
      color: 'var(--text-strong)',
      marginTop: 2
    },
    alert: {
      textAlign: 'left',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 14,
      boxShadow: 'var(--shadow-xs)',
      cursor: 'pointer',
      fontFamily: 'inherit'
    },
    alertEnt: {
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontSize: 14
    },
    money: {
      fontFamily: 'var(--data-font)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    },
    dep: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontSize: 12,
      color: 'var(--text-muted)'
    },
    card: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xs)',
      padding: '4px 14px'
    },
    prow: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 0'
    },
    pname: {
      fontWeight: 600,
      color: 'var(--text-strong)',
      fontSize: 14
    },
    pmeta: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 1
    },
    sep: {
      height: 1,
      background: 'var(--border-subtle)'
    },
    emptyState: {
      textAlign: 'center',
      padding: '40px 20px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)'
    },
    input: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '11px 13px',
      fontSize: 13.5,
      color: 'var(--text-body)'
    },
    chip: {
      fontSize: 13,
      fontWeight: 500,
      padding: '7px 13px',
      borderRadius: 999,
      border: '1px solid var(--border-default)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)'
    },
    chipOn: {
      background: 'var(--blue-500)',
      borderColor: 'var(--blue-500)',
      color: '#fff'
    },
    tabbar: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '9px 6px 30px'
    },
    tab: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      flex: 1
    }
  };
  window.Mobile = {
    App
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/Mobile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mobile/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mobile/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/profile/Profile.jsx
try { (() => {
/* Vigía — politician profile: nav, hero, sections. window.Prof */
(function () {
  const V = window.VigADesignSystem_7eb604;
  const {
    Avatar,
    Badge,
    Button,
    Tag,
    Tabs,
    Breadcrumb,
    BarChart,
    Legend,
    ProgressMeter,
    Sparkline,
    Banner,
    DataTable,
    IconButton
  } = V;
  const I = window.VIcons;
  const D = window.ProfData;
  function TopNav() {
    const links = ['Inicio', 'Congreso', 'Contratos', 'Presupuesto', 'Reportes'];
    return React.createElement('header', {
      style: ns.nav
    }, React.createElement('div', {
      style: ns.inner
    }, React.createElement('img', {
      src: '../../assets/vigia-logo.svg',
      alt: 'Vigía',
      height: 28
    }), React.createElement('nav', {
      style: ns.links
    }, links.map((l, i) => React.createElement('a', {
      key: l,
      href: '#',
      style: {
        ...ns.link,
        ...(i === 1 ? ns.linkOn : null)
      }
    }, l))), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, React.createElement(IconButton, {
      label: 'Buscar'
    }, React.createElement(I.Search)), React.createElement(Button, {
      variant: 'secondary',
      size: 'sm'
    }, 'Iniciar sesión'))));
  }
  function Hero({
    following,
    onFollow
  }) {
    const p = D.person;
    return React.createElement('section', {
      style: hs.hero
    }, React.createElement('div', {
      style: hs.band
    }), React.createElement('div', {
      style: hs.row
    }, React.createElement('div', {
      style: {
        display: 'flex',
        gap: 22,
        alignItems: 'flex-end'
      }
    }, React.createElement('div', {
      style: hs.avatarRing
    }, React.createElement(Avatar, {
      name: p.name,
      size: 'lg',
      style: {
        width: 96,
        height: 96,
        fontSize: 30
      }
    })), React.createElement('div', null, React.createElement('div', {
      className: 'vigia-eyebrow',
      style: {
        marginBottom: 6
      }
    }, p.role), React.createElement('h1', {
      style: hs.name
    }, p.name), React.createElement('div', {
      style: hs.meta
    }, React.createElement(Tag, {
      swatch: p.partyColor
    }, p.party), React.createElement(Meta, {
      icon: 'MapPin',
      label: p.region
    }), React.createElement(Meta, {
      icon: 'Clock',
      label: 'Desde ' + p.since
    }), React.createElement(Meta, {
      icon: 'Scale',
      label: 'Comisión ' + p.commission
    })))), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 10,
        flex: 'none'
      }
    }, React.createElement(Button, {
      variant: following ? 'secondary' : 'primary',
      icon: following ? React.createElement(I.Check) : React.createElement(I.Bell),
      onClick: onFollow
    }, following ? 'Siguiendo' : 'Seguir'), React.createElement(IconButton, {
      label: 'Compartir',
      variant: 'default'
    }, React.createElement(I.Share)))), React.createElement('div', {
      style: hs.stats
    }, React.createElement(StatTile, {
      k: 'Asistencia',
      v: p.stats.attendance + '%',
      spark: [88, 90, 86, 92, 94, 93, 94]
    }), React.createElement(StatTile, {
      k: 'Votaciones',
      v: p.stats.votes
    }), React.createElement(StatTile, {
      k: 'Proyectos radicados',
      v: p.stats.projects
    }), React.createElement(StatTile, {
      k: 'Alertas activas',
      v: p.stats.alerts,
      ok: p.stats.alerts === 0
    })));
  }
  function Meta({
    icon,
    label
  }) {
    const Icon = I[icon];
    return React.createElement('span', {
      style: hs.metaItem
    }, React.createElement(Icon, {
      size: 14
    }), label);
  }
  function StatTile({
    k,
    v,
    spark,
    ok
  }) {
    return React.createElement('div', {
      style: hs.tile
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between'
      }
    }, React.createElement('div', {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 26,
        color: ok ? 'var(--green-600)' : 'var(--text-strong)',
        fontVariantNumeric: 'tabular-nums'
      }
    }, v), spark ? React.createElement(Sparkline, {
      values: spark,
      width: 60,
      height: 22,
      color: 'var(--green-500)'
    }) : null), React.createElement('div', {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, k));
  }

  /* ---- sections ---- */
  function Panel({
    title,
    children,
    action
  }) {
    return React.createElement('section', {
      style: sx.panel
    }, React.createElement('div', {
      style: sx.phead
    }, React.createElement('h3', {
      style: sx.ptitle
    }, title), action || null), React.createElement('div', {
      style: {
        padding: 20
      }
    }, children));
  }
  function PerfilSection() {
    return React.createElement('div', {
      style: sx.grid
    }, React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, React.createElement(Panel, {
      title: 'Trayectoria'
    }, React.createElement('p', {
      style: sx.prose
    }, D.person.bio)), React.createElement(Panel, {
      title: 'Financiación de campaña',
      action: React.createElement(Badge, {
        tone: 'success',
        dot: true
      }, 'Declarado')
    }, React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 13
      }
    }, D.donors.map((d, i) => React.createElement('div', {
      key: i
    }, React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
        marginBottom: 5
      }
    }, React.createElement('span', {
      style: {
        color: 'var(--text-body)',
        fontWeight: 500
      }
    }, d.name), React.createElement('span', {
      style: {
        fontFamily: 'var(--data-font)',
        color: 'var(--text-strong)',
        fontWeight: 600
      }
    }, D.fmt(d.amount))), React.createElement('div', {
      style: sx.track
    }, React.createElement('div', {
      style: {
        height: '100%',
        width: d.share + '%',
        background: d.color,
        borderRadius: 999
      }
    }))))))), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, React.createElement(Panel, {
      title: 'Patrimonio declarado',
      action: React.createElement('span', {
        style: {
          fontSize: 12,
          color: 'var(--text-muted)'
        }
      }, 'millones COP')
    }, React.createElement(BarChart, {
      height: 130,
      formatValue: v => '$' + v + 'M',
      data: D.patrimonio.map(y => ({
        label: y.year,
        value: y.value,
        color: 'var(--viz-3)'
      }))
    })), React.createElement(Banner, {
      tone: 'info',
      title: 'Sobre estos datos'
    }, 'La información proviene de declaraciones oficiales y registros públicos. Verifica en la fuente antes de citar.')));
  }
  function VotacionesSection() {
    const cols = [{
      key: 'title',
      label: 'Proyecto',
      primary: true
    }, {
      key: 'date',
      label: 'Fecha',
      render: r => React.createElement('span', {
        style: {
          color: 'var(--text-muted)',
          fontSize: 13
        }
      }, r.date)
    }, {
      key: 'vote',
      label: 'Su voto',
      render: r => React.createElement(Badge, {
        tone: r.tone,
        dot: true
      }, r.vote)
    }, {
      key: 'result',
      label: 'Resultado',
      render: r => React.createElement('span', {
        style: {
          fontSize: 13,
          color: 'var(--text-body)'
        }
      }, r.result)
    }];
    return React.createElement(Panel, {
      title: 'Votaciones recientes',
      action: React.createElement(Button, {
        variant: 'ghost',
        size: 'sm',
        iconRight: React.createElement(I.ChevronRight)
      }, 'Ver todas')
    }, React.createElement(DataTable, {
      columns: cols,
      rows: D.votes
    }));
  }
  function PatrimonioSection() {
    return React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, React.createElement(Panel, {
      title: 'Evolución del patrimonio',
      action: React.createElement('span', {
        style: {
          fontSize: 12,
          color: 'var(--text-muted)'
        }
      }, 'millones COP')
    }, React.createElement(BarChart, {
      height: 200,
      formatValue: v => '$' + v + 'M',
      data: D.patrimonio.map(y => ({
        label: y.year,
        value: y.value,
        color: 'var(--viz-3)'
      }))
    }), React.createElement('p', {
      style: {
        ...sx.prose,
        marginTop: 16,
        marginBottom: 0
      }
    }, 'El patrimonio declarado creció 52% entre 2022 y 2026. Las variaciones pueden deberse a salarios, inversiones o ajustes de valoración.')));
  }
  const ns = {
    nav: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    },
    inner: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 30,
      padding: '0 28px'
    },
    links: {
      display: 'flex',
      gap: 24,
      flex: 1,
      marginLeft: 14
    },
    link: {
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      color: 'var(--text-muted)',
      textDecoration: 'none'
    },
    linkOn: {
      color: 'var(--text-strong)',
      fontWeight: 600
    }
  };
  const hs = {
    hero: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden',
      position: 'relative'
    },
    band: {
      height: 8,
      background: 'linear-gradient(90deg, var(--blue-700), var(--green-500) 60%, var(--gold-400))'
    },
    row: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 24,
      padding: '24px 28px 22px',
      flexWrap: 'wrap'
    },
    avatarRing: {
      padding: 4,
      background: 'var(--surface-card)',
      borderRadius: '50%',
      marginTop: -52,
      boxShadow: 'var(--shadow-md)'
    },
    name: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: '0 0 10px',
      letterSpacing: '-0.02em'
    },
    meta: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap'
    },
    metaItem: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 13,
      color: 'var(--text-muted)'
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      borderTop: '1px solid var(--border-subtle)'
    },
    tile: {
      padding: '16px 22px',
      borderRight: '1px solid var(--border-subtle)'
    }
  };
  const sx = {
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    },
    panel: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)',
      overflow: 'hidden'
    },
    phead: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-subtle)'
    },
    ptitle: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-lg)',
      fontWeight: 600,
      color: 'var(--text-strong)',
      margin: 0
    },
    prose: {
      color: 'var(--text-body)',
      fontSize: 'var(--text-base)',
      lineHeight: 1.7,
      margin: 0
    },
    track: {
      height: 9,
      background: 'var(--neutral-100)',
      borderRadius: 999,
      overflow: 'hidden'
    }
  };
  window.Prof = {
    TopNav,
    Hero,
    PerfilSection,
    VotacionesSection,
    PatrimonioSection
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/profile/Profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/profile/data.jsx
try { (() => {
/* Vigía — politician profile mock data (fictional). window.ProfData */
(function () {
  const fmt = n => '$' + n.toLocaleString('es-CO');
  const person = {
    name: 'Lucía Fernández Arango',
    role: 'Senadora de la República',
    party: 'Coalición Verde',
    partyColor: 'var(--viz-3)',
    region: 'Antioquia',
    since: '2022',
    commission: 'Quinta · Medio Ambiente',
    bio: 'Abogada ambiental y exconcejal de Medellín. En el Senado ha impulsado proyectos de transparencia en contratación y protección de páramos. Esta ficha reúne información pública de fuentes oficiales.',
    stats: {
      attendance: 94,
      votes: 128,
      projects: 17,
      alerts: 0
    }
  };
  const votes = [{
    id: 1,
    title: 'Ley de transparencia en contratación pública',
    date: '12 jun 2026',
    vote: 'A favor',
    tone: 'success',
    result: 'Aprobado'
  }, {
    id: 2,
    title: 'Reforma al sistema de regalías',
    date: '04 jun 2026',
    vote: 'En contra',
    tone: 'danger',
    result: 'Aprobado'
  }, {
    id: 3,
    title: 'Protección de páramos y fuentes hídricas',
    date: '28 may 2026',
    vote: 'A favor',
    tone: 'success',
    result: 'Aprobado'
  }, {
    id: 4,
    title: 'Presupuesto general 2026',
    date: '20 may 2026',
    vote: 'Ausente',
    tone: 'neutral',
    result: 'Aprobado'
  }, {
    id: 5,
    title: 'Modificación al código electoral',
    date: '11 may 2026',
    vote: 'A favor',
    tone: 'success',
    result: 'Archivado'
  }];
  const patrimonio = [{
    year: '2022',
    value: 820
  }, {
    year: '2023',
    value: 910
  }, {
    year: '2024',
    value: 1040
  }, {
    year: '2025',
    value: 1180
  }, {
    year: '2026',
    value: 1245
  }];
  const donors = [{
    name: 'Aportes individuales',
    amount: 420000000,
    color: 'var(--viz-3)',
    share: 48
  }, {
    name: 'Fondo del partido',
    amount: 280000000,
    color: 'var(--viz-1)',
    share: 32
  }, {
    name: 'Anticipo estatal',
    amount: 130000000,
    color: 'var(--viz-2)',
    share: 15
  }, {
    name: 'Crédito',
    amount: 45000000,
    color: 'var(--viz-6)',
    share: 5
  }];
  window.ProfData = {
    fmt,
    person,
    votes,
    patrimonio,
    donors
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/profile/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardBody = __ds_scope.CardBody;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.FilterBar = __ds_scope.FilterBar;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.Legend = __ds_scope.Legend;

__ds_ns.ProgressMeter = __ds_scope.ProgressMeter;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
