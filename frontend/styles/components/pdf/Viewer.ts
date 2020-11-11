
import { css, SerializedStyles } from '@emotion/core'

const canvasHeight: number = 85
const A4Ratio: number = 210 / 297 // A4 width to height ratio
const canvasWidth: number = 85 * A4Ratio

const viewer: SerializedStyles = css`
  position: fixed;
  top: 48%;
  left: 75%;
  margin-top: ${canvasHeight / (-2)}vh;
  margin-left: calc((${canvasWidth} * (-1vh)) / 2);
  height: ${canvasHeight};
  width: calc(${canvasWidth} * 1vh);
  
.react-pdf__Page__canvas {
  height: 85vh !important;
  width: calc(85vh * 0.71) !important; /* 0.71 is A4 page scale ratio. */
}

.react-pdf__Page__textContent {
  display: none;
}

.previous-pdf,
.next-pdf {
  position: absolute;
}
.previous-pdf {
  z-index: 5;
}

.next-pdf {
  z-index: 10;
}

.my-node-enter {
  opacity: 0;
}
.my-node-enter-active {
  opacity: 1;
  transition: opacity 2500ms;
}
.my-node-exit {
  opacity: 1;
}
.my-node-exit-active {
  opacity: 0;
  transition: opacity 2500ms;
}

.actions-top {
  display: flex;
  justify-content: space-between;
 padding-bottom: 0.5rem
}

`

export default viewer