export function showActionUser() {
	const TextAreaUser = document.createElement("textarea");
	TextAreaUser.rows = 1;
	TextAreaUser.classList.add("user-input");
	document.querySelector(".content-section .section-typing").appendChild(TextAreaUser);

	setInterval(() => {
		TextAreaUser.focus();
	}, 500);

	TextAreaUser.addEventListener("input", function() {
		TextAreaUser.style.width = 'auto';
		TextAreaUser.style.height = 'auto';
		TextAreaUser.style.width = `${TextAreaUser.scrollWidth}px`;
		TextAreaUser.style.height = `${TextAreaUser.scrollHeight}px`;
		// Ajusta el ancho y alto del input basado en el número de caracteres
	});
}