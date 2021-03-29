// Getting elements's reference from HTML
let body = document.querySelector("body");
let pacoImg = document.getElementById("paco");
let emotion = document.getElementById("emotion");
let acceptBtn = document.getElementById("accept-btn");
let rejectBtn = document.getElementById("reject-btn");
let submitBtn = document.getElementById("submit-btn");
let rejectArea = document.getElementById("rejectarea");
let toastContainer = document.getElementById("toast-container");
let toast = document.getElementById("toast");

acceptBtn.addEventListener("click", () => {
	body.classList.remove("rejectgradient");
	body.classList.add("acceptgradient");

	pacoImg.classList.remove("paco-sad");
	emotion.src = "./assets/bright.gif";
	emotion.classList.add("opaque");

	rejectArea.classList.remove("visible");

	acceptBtn.setAttribute("disabled", "true");
	rejectBtn.removeAttribute("disabled");

	if (submitBtn.hasAttribute("disabled")) {
		submitBtn.removeAttribute("disabled");
	}
});

rejectBtn.addEventListener("click", () => {
	body.classList.remove("acceptgradient");
	body.classList.add("rejectgradient");

	pacoImg.classList.add("paco-sad");
	emotion.src = "./assets/tears.gif";
	emotion.classList.add("opaque");

	rejectArea.classList.toggle("visible");

	rejectBtn.setAttribute("disabled", "true");
	acceptBtn.removeAttribute("disabled");

	if (!submitBtn.hasAttribute("disabled") && rejectArea.value.trim().length === 0) {
		submitBtn.setAttribute("disabled", "true");
	}
});

rejectArea.addEventListener("keyup", () => {
	const reason = rejectArea.value;

	if (reason.trim().length > 0) {
		submitBtn.removeAttribute("disabled");
	} else {
		submitBtn.setAttribute("disabled", "true");
	}
});

const callAPI = (event, rejectReason) => {
	event.preventDefault();
	submitBtn.setAttribute("disabled", "true");

	if (rejectReason && rejectBtn.hasAttribute("disabled")) console.log(rejectReason);

	toast.classList.add("bounceToast");
	toastContainer.classList.add("fadeInOut");

	setTimeout(() => {
		submitBtn.removeAttribute("disabled");
		toast.classList.remove("bounceToast");
		toastContainer.classList.remove("fadeInOut");
	}, 4000);
};
