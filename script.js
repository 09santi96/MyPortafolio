//https://javascriptobfuscator.com/
var availableLanguages = ['spanish', 'english'];
var currentLangIndex = 0;
var translations = {};

const sectionToAppend = document.querySelector(".content-section .section-typing");

//import modules
import { showActionUser } from './includes/modules/showActionUser.js';
import { eventEnter } from './includes/modules/eventEnter.js';
import { usageMemory } from './includes/modules/usageMemory.js';
import { toggleFullScreen } from './includes/modules/toggleFullScreen.js';
import { security } from './includes/modules/security.js';
import { showNotification } from './includes/modules/showNotification.js';
import { configUser } from './includes/modules/configUser.js';
import { writeVisitors } from './includes/modules/writeVisitors.js';
import { loadGame } from './includes/modules/loadGame.js';

/////////////////////CARGA EL ARCHIVO JSON AL OBJETO ////////////////////////
function loadTranslations(Index) {
	return new Promise((resolve, reject) => {
	  var url = 'includes/jsonFiles/' + availableLanguages[Index] + '.json';
	  var xhr = new XMLHttpRequest();
	  xhr.open('GET', url, true);
	  xhr.onload = function() {
		translations = JSON.parse(xhr.responseText);
		resolve(translations);
	  };
	  xhr.onerror = function() {
		reject(alert('Error de red al cargar las traducciones.'+ xhr.status));
	  };
	  xhr.send();
	})
	.then((translations) => {
		//SHOW DIV MEMORY
		usageMemory(translations);
	})
  }
////////////////////////////////////////////////////////////////////////

////////////////////////CHANGE LANGUAGE////////////////////////////
const toggleLangBtn = document.getElementById("toggleLang");
toggleLangBtn.addEventListener("click", () => {
	currentLangIndex++;
	if (currentLangIndex >= availableLanguages.length) {
		currentLangIndex = 0;
	}
	loadTranslations(currentLangIndex);
	deleteAllChildElement();
	initWeb();
	showNotification(translations);
}); 
////////////////////////////////////////////////////////////////////////

////////////////////ENTER COMMANDS/////////////////////////////////
document.addEventListener("keydown", function(event) {
	eventEnter(event, translations, createTypingElement,deleteAllChildElement,initWeb, loadGame);
});
///////////////////////////////////////////////////////////////////

////////////////// DELETE ELEMENT//////////////////////////////////
function deleteAllChildElement(){
	while (sectionToAppend.firstChild) {
		sectionToAppend.removeChild(sectionToAppend.firstChild);
	}
}
////////////////////////////////////////////////////////////////////////

//////////////////////// CREATE TEXT WITH TYPING EFECT /////////////////////////
function createTypingElement(classElement, textInput) {
	const newElement = document.createElement("p");
	newElement.classList.add(classElement);
	sectionToAppend.appendChild(newElement);
	newElement.innerHTML = "";
	let i = 0;

	const typingInterval = setInterval(() => {

		if(textInput.charAt(i) === '\u000a'){
			newElement.insertAdjacentHTML("beforeend", '<br>');
		};//INSERT BREAKLINES

	  if (i === textInput.length) {
		clearInterval(typingInterval);
		const cursor = newElement.querySelector(".cursor");
		if(cursor){
		cursor.remove();
		}
		showActionUser();
		return;
	  }

	  newElement.innerHTML += textInput.charAt(i++);
	  const cursor = newElement.querySelector(".cursor");
		if(cursor){
		cursor.remove();
		}
	  newElement.insertAdjacentHTML("beforeend", '<span class="cursor"></span>');
	}, 50);
}
////////////////////////////////////////////////////////////////////////


////////////////////////OPEN CONFIG FOR USER ////////////////////////
document.getElementById("idconfigUserBtn").addEventListener("click", () => {
	configUser();
});
////////////////////////////////////////////////////////////////////

////////////////////////BUTTON FULLSCREEN////////////////////////
document.getElementById("fullscreen").addEventListener("click", () => {
	toggleFullScreen();
});
///////////////////////////////////////////////////////////////////

///////////////////////// FUNC INIT WEB /////////////////////////////
function initWeb() {
	loadTranslations(currentLangIndex);
	document.querySelector(".terminal").classList.add("init");
		setTimeout(() => {
			document.querySelector(".classWelcome").style.display = "";
			setTimeout(() => {
				document.querySelector(".classWelcome").style.animation = "none";
				document.querySelector(".config").style.display = "block";
				createTypingElement("typing-text", translations.textWelcome);
			}, 2000);
			document.querySelector(".terminal").classList.remove("init");
		}, 2000);
};
///////////////////////////////////////////////////////////////////

///////////////////////// SWICHT STYLES /////////////////////////////
const toggleStyleBtn = document.getElementById("toggleStyle");
const headTag = document.getElementsByTagName('head')[0];
const styleTag = document.createElement("style");
var actualTheme = 0;
const arrayThemes = [":root {--fallout-green: #5dfd00;--fallout-bg-grey-green: #137e3ecc;--fallout-bg-dark-grey: #14271a;--fallout-bg-light-grey: #02170a;--fallout-bg-black: #0c0101;--fallout-text-black: #000000;--fallout-text-green: #5dfd00;--shadows-color:#88a77c;--shadows-icon-color:#d1a179;}",
":root{--fallout-green: #000000;--fallout-bg-grey-green: #ffffffcc;--fallout-bg-dark-grey: #616161;--fallout-bg-light-grey: #4b4b4b;--fallout-bg-black: #0c0101;--fallout-text-black: #ffffff;--fallout-text-green: #000000;--shadows-color:#ffffff;--shadows-icon-color:#a3a3a3;}",
":root{--fallout-green:#00ffea;--fallout-bg-grey-green:#E11299;--fallout-bg-dark-grey:#9A208C;--fallout-bg-light-grey: #f19fe2;--fallout-bg-black:#000000;--fallout-text-black:#000000;--fallout-text-green:#00ffea;--shadows-color:#37005e;--shadows-icon-color:#4fcad3;}",
":root{--fallout-green:#ffd900;--fallout-bg-grey-green:#0F6292;--fallout-bg-dark-grey:#0075b9;--fallout-bg-light-grey:#0fb300;--fallout-bg-black: #000000;--fallout-text-black:#0F6292;--fallout-text-green:#ffd900;--shadows-color:#867200;--shadows-icon-color:#00eeff;}"];

function setDefaultStyle() {
styleTag.innerHTML = arrayThemes[actualTheme];
headTag.appendChild(styleTag);
}

toggleStyleBtn.addEventListener("click", () => {
	actualTheme++;
	if (actualTheme >= arrayThemes.length) {
		actualTheme = 0;
	}
	styleTag.innerHTML = arrayThemes[actualTheme];
	headTag.appendChild(styleTag);
});
///////////////////////////////////////////////////////////////////

///////////////////////// RUN /////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
	writeVisitors();
	setDefaultStyle();
	security();
	initWeb();
});
///////////////////////////////////////////////////////////////////


/////////////////////////RESOLUTION OF DISPLAY CHECK/////////////////////////
/* var resolution = window.innerWidth + " x " + window.innerHeight;
document.getElementById("resolucion").innerHTML = resolution; */