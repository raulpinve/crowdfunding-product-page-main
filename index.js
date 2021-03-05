
var buttonBackThisProject = document.getElementById("button-back-this-project");
var modalBackThisProject = document.getElementById("modal-back-this-project");
var modalCardCheckbox = document.getElementsByClassName("modal-card-checkbox");
var modalSmall = document.getElementById("modal-small");
var modalSmallButton = document.getElementById("modal-small-button");


var closeModalBackThisProject = document.getElementById("close-modal-back-this-project");

buttonBackThisProject.addEventListener("click", function(){
   
    modalBackThisProject.style.display = "Block";

})

for(i = 0; i < modalCardCheckbox.length; i ++){ 

    if(modalCardCheckbox[i].nodeName === "INPUT"){

        modalCardCheckbox[i].addEventListener("change", function(e){

            var id= e.target.id.substr(9);
            var checkbox = document.getElementById("checkbox_" + id);        
            
            // Selected elements
            var card =document.getElementById("card_" + id);   
            var cardForm = document.getElementById("modal_card_form_" + id);

            if(checkbox.checked){               
                //Add modal-card-selected class        
                card.classList.add("modal-card-selected");

                //Show form modal-card                 
                cardForm.style.display = "block";
            }else{
                //remove modal-card-selected class        
                card.classList.remove("modal-card-selected");

                //hide form modal-card                 
                cardForm.style.display = "none";
            }                    

        })
       
    }    

}


//  Close Modals 

closeModalBackThisProject.addEventListener("click", function(){
    modalBackThisProject.style.display = "none";
})
modalSmallButton.addEventListener("click", function(){
    modalSmall.style.display = "none";
})


// Close any modal 
document.body.addEventListener("click", function(e){
    if(e.target.className == "modal"){
        modalBackThisProject.style.display="none";
        modalSmall.style.display ="none";
    }
})

document.body.addEventListener("keyup", function(e){
    if(e.key === "Escape"){ 
        modalBackThisProject.style.display="none";
        modalSmall.style.display ="none";
    }
})


// Form pledge
var buttonSubmitCard = document.getElementsByClassName("button-submit-card");

for(i = 0; i < buttonSubmitCard.length; i++){
    
    if(buttonSubmitCard[i].nodeName === "INPUT" && buttonSubmitCard[i].type == "submit"){
        
        buttonSubmitCard[i].addEventListener("click", function(e){

            e.preventDefault();

            // var id = e.target.dataset.idCard;

            modalBackThisProject.style.display = "none";
            modalSmall.style.display = "block";
            
        })

    }

}

//Change color svg 
var bookmark = document.getElementById("bookmark");

bookmark.addEventListener("click", function(){

    var circleBookMark = document.querySelector("#bookmark-circle");
    var pathBookMark = document.querySelector("#bookmark-path");
    var spanBookmark = document.querySelector("#bookmark span");

    if(bookmark.classList.contains("bookmark-selected")){            

        circleBookMark.style.fill = '#2F2F2F';
        pathBookMark.style.fill = '#B1B1B1';
        spanBookmark.style.color = 'var(--darkGray)';
        bookmark.classList.remove("bookmark-selected");

    }else{

        circleBookMark.style.fill = 'var(--darkCyan)';
        pathBookMark.style.fill = 'white';
        spanBookmark.style.color = 'var(--darkCyan)';
        bookmark.classList.add("bookmark-selected");

    } 
})