export function showNotification(translations) {
	const newElement = document.createElement("div");
    const sectionToAppend = document.querySelector(".content-section .section-typing");
	newElement.classList.add("notification-container");
	sectionToAppend.appendChild(newElement);

	const newAlert = document.createElement("p");
	newAlert.classList.add("alert-text");
	newElement.appendChild(newAlert);
	newAlert.innerHTML = translations.swichtLangAlert;

	setTimeout(() => {
		newElement.remove();
	}, 4000);
}