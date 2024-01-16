export function usageMemory(translations) {
	const divElement = document.getElementById("memoryNum");
	const paragraph = document.createElement("p");

	setInterval(() => {
		var memory = performance.memory;
		var memoryUsed = (memory.usedJSHeapSize / 1048576).toFixed(3);
		var memoryMax = (memory.jsHeapSizeLimit / 1048576).toFixed(0);
		paragraph.textContent = `${translations.memoryTextOne} ${memoryUsed} ${translations.memoryTextTwo} ${memoryMax} megabytes`;
	}, 2000);

	if (divElement.querySelectorAll("p").length === 0) {
		divElement.appendChild(paragraph);

	}else if(divElement.querySelectorAll("p").length === 1){
		divElement.innerHTML = '';
		divElement.appendChild(paragraph);
	}
}