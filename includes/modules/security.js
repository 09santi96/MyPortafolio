export function security() {
	document.addEventListener('contextmenu', event => event.preventDefault());

	document.addEventListener('keydown', function(event) {
			if (event.key === 'F12') {
				event.preventDefault();
			}
		});
		document.addEventListener("devtoolschange", function(event) {
			if (event.detail.isOpen) {
				window.close();
			}
	});
}