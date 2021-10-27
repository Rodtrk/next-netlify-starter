
import Script from 'next/script'
export default function Vis() {
  return (
	  <>
 	  <div id="contain">

		<h1>AUDIO VIS</h1>
		<button id="cl">Start</button>
		<canvas id="Aux"></canvas>
		<audio id="aud" controls></audio>
		<input type="file" id="upload" accept="audio/*"/>
	  </div>
	  <Script async type="text/javascript" src="https://github.com/Rodtrk/next-netlify-starter/blob/main/public/visual.js"/>
	  </>
  )
}
