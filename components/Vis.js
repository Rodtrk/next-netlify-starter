

export default function Vis() {
  return (
 	<div id="contain">

		<h1>AUDIO VIS</h1>
		<button id="cl">Start</button>
		<canvas id="Aux"></canvas>
		<audio id="aud" controls></audio>
		<input type="file" id="upload" accept="audio/*"/>
	</div>
  )
}
