
import Script from 'next/script'
export default function Vis() {
  return (
	  <>
 	  <div id="contain">
		<h1>[-About Me-]</h1>
                <p style="color: #686478;">Zhyll@</p> 
		<button id="cl">Start</button>
                <p><b>Magic</b> is believing in yourself</p>
		<canvas id="Aux"></canvas>
		<audio id="aud" controls></audio>
		<input type="file" id="upload" accept="audio/*"/>
	  </div>
	  <Script async type="text/javascript" src="./visual.js"/>
	  </>
  )
}
