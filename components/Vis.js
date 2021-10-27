
import styles from './Vis.css'
export default function Vis() {
  return (
    <>
	<body className="{style.Vis"}>
	<div id="contain">

		<h1>AUDIO VIS</h1>
		<button id="cl">Start</button>
		<canvas id="Aux"></canvas>
		<audio id="aud" controls></audio>
		<input type="file" id="upload" accept="audio/*"/>
	</div>


        <script type="text/javascript">

	let audio  = new Audio();
	audio.src  = "closeeye.mp3";
	const audioContext = new AudioContext();
	const cont = document.getElementById('contain');
	const butt = document.getElementById('cl');
	const aud  = document.getElementById('aud');
	const can  = document.getElementById("Aux");
	can.width  = window.innerWidth;
	can.height = window.innerHeight;

	const ctx  = can.getContext('2d');
	let audioS;
	let analy;

	cont.addEventListener("click", function(){
		audio.play();
		audioS = audioContext.createMediaElementSource(audio);
		analy = audioContext.createAnalyser();
		audioS.connect(analy);
		analy.connect(audioContext.destination);
		analy.fftSize = 64;
		const bufferLength = analy.frequencyBinCount;
		const dataArray = new Uint8Array(bufferLength);

		const barW = can.width / bufferLength ;
		let barHeight = 1;
		let x;

		function getRandomColour(){
		  var red = Math.floor(Math.random()* 255);
		  var green = Math.floor(Math.random() * 255);
		  var blue = Math.floor(Math.random() * 255);

		  return "rgb("+red+","+green+"," +blue+" )";  
		}

		function animate()
		{
			x = 0;
			ctx.clearRect(0,0, can.width , can.height);
			analy.getByteFrequencyData(dataArray);
			for(let i =0;i< bufferLength;i++)
			{
				barHeight = dataArray[i] + Math.random() * 2;
				ctx.fillStyle = "white";
				ctx.strokeStyle = getRandomColour() ;
				//ctx.fillRect(x ,can.height - barHeight, 10 , barHeight);
				ctx.strokeRect(x, can.height - barHeight , 19 , barHeight);
				ctx.fill();
				x+= barW;
			}
			requestAnimationFrame(animate);

		}
		animate();


	});
</script>
	</body>
    </>
  )
}
