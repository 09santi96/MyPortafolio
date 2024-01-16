export function eventEnter(event,translations, createTypingElement,deleteAllChildElement,initWeb, loadGame){
    const SelectTextAreaUser = document.querySelector(".user-input");
	
	if (event.key === "Enter") {
		event.preventDefault();
		const commandClean = SelectTextAreaUser.value.replace(/\s+/g, '');
		SelectTextAreaUser.remove();
		
		if(commandClean == "-help" || commandClean == "-ayuda"){
			createTypingElement("answer-typing", translations.showHelp);

		}else if(commandClean == "-aboutMe" || commandClean == "-sobreMi"){
			createTypingElement("answer-typing", translations.aboutMe);

		}else if(commandClean == "-clear" || commandClean == "-limpiar"){
			deleteAllChildElement();
			initWeb();
            
		}else if(commandClean == "-juegos" || commandClean == "-games"){
			deleteAllChildElement();
			loadGame();
		
		}else{
			createTypingElement("answer-typing", translations.errorMsg);
		}
	}
}