const sections = document.querySelectorAll(".section");
const pageContainer = document.getElementById("page-container");

let currentSectionIndex = 0;

function scrollToSection(index) {
	if (index < 0 || index > sections.length - 1) {
		return;
	}

	currentSectionIndex = index;
	pageContainer.style.transform = `translateY(-${currentSectionIndex * 100}%)`;
}

function scrollUp() {
	scrollToSection(currentSectionIndex - 1);
}

function scrollDown() {
	scrollToSection(currentSectionIndex + 1);
}

window.addEventListener("keydown", event => {
	switch (event.key) {
		case "ArrowUp":
			scrollUp();
			break;
		case "ArrowDown":
			scrollDown();
			break;
		default:
			return;
	}
});

let startY = null;

function handleTouchStart(event) {
	startY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
	if (startY === null) {
		return;
	}

	const diff = event.changedTouches[0].clientY - startY;

	if (diff > 0) {
		scrollUp();
	} else {
		scrollDown();
	}

	startY = null;
}

window.addEventListener("touchstart", handleTouchStart);
window.addEventListener("touchend", handleTouchEnd);
