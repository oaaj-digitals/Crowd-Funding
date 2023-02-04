//open & close modal functions

let closesModal = (closeBtn, modalEle) => {
	// close with close btn
	Close = () => {
		modalEle.style.display = "none";
		closeBtn.removeEventListener("click", Close);
		window.removeEventListener("keyup", escClose);
		modalEle.removeEventListener("click", Close);

		console.log("close");
	};
	closeBtn.addEventListener("click", Close);

	// close with escape key
	escClose = (e) => {
		if (e.key == "Escape") {
			Close();
		}
	};
	window.addEventListener("keyup", escClose);

	// close with clicking outside the modal box
};

let opensModal = (openBtn, CloseBtn, modalEle) => {
	openBtn.addEventListener("click", function () {
		modalEle.style.display = "flex";
		closesModal(CloseBtn, modalEle);
	});
};

// end of open & close modal functions

// "back the project" modal events

let btpOpenBtn = document.getElementById("BTP-btn");
let btpCloseBtn = document.getElementById("btp-modal-close-btn");
let btpModalEle = document.getElementById("btp-modal");

opensModal(btpOpenBtn, btpCloseBtn, btpModalEle); //opens modal box

//
let radioEles = document.querySelectorAll(".radioElement");
let closeCardForm = (radioList) => {
	// function to close the pledge form
	radioList.forEach((radio) => {
		if (radio.checked == false) {
			let cardEle = radio.parentElement.parentElement.parentElement;
			let cardForm = cardEle.childNodes[5];
			if (typeof cardForm !== "undefined") {
				cardForm.style.display = "none";
			}
		}
	});
};

let openCardForm = (selectedRadio) => {
	// function to open the pledge form
	selectedCard = selectedRadio.parentElement.parentElement.parentElement;
	let cardForm = selectedCard.childNodes[5];
	if (typeof cardForm !== "undefined") {
		cardForm.style.display = "flex";
	}
};

radioEles.forEach((element) => {
	// adds event listener to all the card radio btn
	element.addEventListener("click", () => {
		closeCardForm(radioEles);
		openCardForm(element);
	});
});

// card pledge submission event

// submit-btn card-btn & submission modal
let submitBtn = document.querySelectorAll(".submit-btn.card-btn");

let subtmitModalEle = document.getElementById("submit-modal");

submitBtn.forEach((btn) => {
	let submitOpenBtn = btn;
	let submitCloseBtn = document.getElementById("submit-modal-close-btn");

	// closesModal(btpCloseBtn, btpModalEle);
	opensModal(submitOpenBtn, submitCloseBtn, subtmitModalEle);

	// btn.addEventListener("click", (e) => {
	// 	e.preventDefault();
	// 	let inputDivEle = btn.previousElementSibling;
	// 	let inputValue;
	// 	if (inputDivEle !== null) {
	// 		let inputEle = inputDivEle.childNodes[3];
	// 		inputValue = inputEle.value;
	// 	} else {
	// 		inputValue = 0;
	// 	}
	// 	console.log(inputValue);
	// });
});

// close success btn

let gotItBtn = document.querySelector(".got-it-btn");
closesModal(gotItBtn, subtmitModalEle);

// end of card pledge submission event

// end of "back the project" modal events

// Bookmark event

let bookmarkBtn = document.getElementById("bookmark-btn");

bookmarkBtn.addEventListener("click", () => {
	let text = bookmarkBtn.childNodes[3];

	if (bookmarkBtn.classList.contains("bookmarked")) {
		bookmarkBtn.classList.remove("bookmarked");

		text.innerHTML = "bookmark";
	} else {
		bookmarkBtn.classList.add("bookmarked");
		text.innerHTML = "bookmarked";
	}

	console.log(text);
});

// end of Bookmark event

//menu icon

let menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", () => {
	let menu = document.getElementById("nav-div");
	// console.log(menu);
	if (menu.style.display == "flex") {
		menu.style.display = "none";
		menuIcon.classList.add("fa-bars");
		menuIcon.classList.remove("fa-angle-up");
	} else {
		menu.style.display = "flex";
		menuIcon.classList.remove("fa-bars");
		menuIcon.classList.add("fa-angle-up");
	}
});
