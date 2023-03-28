var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector(".video");
	video.autoplay = false;
	video.loop = false; 
});

function updateVolume() {
	let volume = document.querySelector("#volume"); 
	volume.innerHTML = video.volume * 100 + "%";
}
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play(); 
	updateVolume(); 
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
}); 

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate -= 0.1; // 10% slow down
	console.log("Speed is " + video.playbackRate); 
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video"); 
	video.playbackRate += 0.1; // 10% speed up
	console.log("Speed is " + video.playbackRate); 
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead"); 
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0; 
	}
	else {
		video.currentTime += 10; 
	}
	console.log("Video current time is " + video.currentTime); 
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		console.log("Unmute"); 
		video.muted = false; 
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		console.log("Mute");
		video.muted = true; 
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100; 
	updateVolume(); 
	console.log("The current value is " + video.volume); 
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool"); 
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool"); 
});






