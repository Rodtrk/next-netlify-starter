
import Script from 'next/script'
export default function Vis() {
  return (
	  <>
 	  <div id="contain">
		<h1>[-About Me-]</h1>
                <p class="2">Zhyll@</p> 
		<button id="cl">Start</button>
                <p class="1"><b>Magic</b> is believing in yourself</p>
		<canvas id="Aux"></canvas>
		<audio id="aud" controls></audio>
		<input type="file" id="upload" accept="audio/*"/>
	  </div>
	  <Script async type="text/javascript" src="./visual.js"/>
	  </>
  )
}
