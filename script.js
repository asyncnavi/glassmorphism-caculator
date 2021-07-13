let screen = document.getElementById("screen");
let btns = document.querySelectorAll(".btn");
screen.value = "";

btns.forEach(btn => {
	let key = btn.innerText;
	btn.addEventListener("click", () => {
		console.log(key);
		if (key == "AC") {
			screen.value = "";
		} else if (key == "C") {
			let c_str = screen.value;
			screen.value = c_str.slice(0, c_str.length - 1);
		} else if (key == "=") {
			screen.value = eval(screen.value);
		} else {
			screen.value += key;
		}
	});
});
