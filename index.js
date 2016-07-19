
const backgroundColor = '#2c3e50'
const foregroundColor = '#ecf0f1'
const cursorColor = foregroundColor
const borderColor = backgroundColor

const colors = [
  backgroundColor,
  '#e74c3c', // red
  '#2ecc71', // green
  '#f1c40f', // yellow
  '#3498db', // blue
  '#8e44ad', // pink
  '#56b6c2', // cyan
  '#bdc3c7', // light gray
  '#95a5a6', // medium gray
  '#e74c3c', // red
  '#2ecc71', // green
  '#f1c40f', // yellow
  '#3498db', // blue
  '#8e44ad', // pink
  '#56b6c2', // cyan
  '#ffffff', // white
  foregroundColor
]

exports.decorateConfig = config => {
  console.log('Hi mom!')

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        top: 0;
        right: 0;
        left: 0;
      }
      .tabs_list {
        background-color: #21252b !important;
        border-bottom-color: rgba(0,0,0,.15) !important;
      }
      .tab_tab.tab_active {
        font-weight: 500;
        background-color: ${backgroundColor};
        border-color: rgba(0,0,0,.27) !important;
      }
      .tab_tab.tab_active::before {
        border-bottom-color: ${backgroundColor};
      }
    `
  })
}
