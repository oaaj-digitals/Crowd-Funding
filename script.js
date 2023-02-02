//open & close modal functions 

let closesModal = (closeBtn, modalEle ) => {
    // close with close btn
    Close = () =>  {
        modalEle.style.display = "none"; 
        closeBtn.removeEventListener('click', Close);
        window.removeEventListener("keyup", escClose);
        modalEle.removeEventListener ("click", Close);

        console.log ("close");
    }
    closeBtn.addEventListener('click', Close);

    // close with escape key
    escClose = (e) =>  { 
        if (e.key == "Escape") {
            Close();
        }
    }
    window.addEventListener("keyup", escClose);

    // close with clicking outside the modal box

}

let opensModal = (openBtn, CloseBtn, modalEle) => {
    openBtn.addEventListener("click", function() {
        modalEle.style.display = "flex";
        closesModal(CloseBtn, modalEle);
    })
}

// end of open & close modal functions 


// "back the project" modal events

let btpOpenBtn = document.getElementById("BTP-btn");
let btpCloseBtn = document.getElementById("btp-modal-close-btn");
let btpModalEle = document.getElementById("btp-modal");


opensModal (btpOpenBtn, btpCloseBtn, btpModalEle); //opens modal box


let radioEles = document.querySelectorAll(".radioElement");

radioEles.forEach(element => {
    element.addEventListener("click", () => {
                // console.log(element);
        cardEle = element.parentElement.parentElement.parentElement;
        console.log(cardEle.childNodes[5]);
        cardEle.childNodes[5].style.display = "flex";
    })
});


// console.log(checkboxEles);


// end of "back the project" modal events




// Bookmark event

// let bookmarkBtn = document.getElementById("bookmark-btn");

// bookmarkBtn.addEventListener('click', function() {
//     console.log("Done");
// })

// //Back project modal event

// let pledgeSelected = document.querySelectorAll('.card-checkbox');

// console.log(pledgeSelected)


