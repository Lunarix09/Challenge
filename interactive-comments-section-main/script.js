document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();
});
document.addEventListener("keydown", (ev2) => {
    if (ev2.ctrlKey && ev2.key === "ArrowRight") {
        ev2.preventDefault(); // Empêche l'action par défaut du navigateur (Enregistrer la page)
        document.querySelector('.send_btn').click();
    }
});
document.querySelector('.send_btn').addEventListener("click", send);

let j= 5;

let comments = {};
let new_replies = {};

let add_comment_btn = false;
let btn_reply_clicked = false;
let btn_reply = "";

function send(event) {
    //event.preventDefault();
    console.log("Bouton cliqué :", event.currentTarget.classList);

    let userInput = document.querySelector('.comment_enter textarea').value.trim(); // Récupérer et nettoyer le contenu du textarea
    
    if (userInput) {
            //let container= document.createElement("div");
            //container.id= `container_${j}`;
            //document.querySelector('.column').appendChild(container);
            
            let date = new Date(); // Date
                let day = date.getDate();// Jour du mois (1-31);

            if (btn_update_clicked && btn_update_parent) {
                console.log(userInput);
                btn_update_parent.querySelector(".paragraph").textContent= userInput;
                btn_update_parent.querySelector(".p2").innerText= 0 + " day(s) ago";
                
                btn_update_parent.scrollIntoView({behavior: 'smooth' }); // Faire défiler vers le commentaire
                
                btn_update_parent="";
                btn_update_clicked= false;
            } else {
                let comment= "";
                
                if (add_comment_btn) {
                    comment= createCommentElement();
                    add_comment_btn= false;
                } else {
                    console.log("cons", document.querySelector(".comment_4:not(.new)"));
                    comment= document.querySelector(".comment_4:not(.new)").cloneNode(true);
                }                
                
                comment.querySelector(".p2").innerText= day + " day(s) ago";

                comment.querySelector(".paragraph").innerText= userInput;
                comment.querySelector(".reply").classList.add(`reply_${j}`);
                comment.classList.add(`comment_${j}`);
                
                comment.querySelector(".reply").addEventListener("click", btn_reply_listener);

                if (btn_reply_clicked) {
                    
                    let replies = document.querySelector(".replies").cloneNode(true);
                    
                    if (window.innerWidth <= 451) {
                        comment_find= btn_reply.parentElement.parentElement;
                    } else {
                        comment_find= btn_reply.parentElement.parentElement.parentElement.parentElement;
                    }
                    
                    for (let index = 1; index < 5; index++) {
                        if (btn_reply.parentElement.parentElement.parentElement.classList.contains(`comment_${index}`)) {
                            comment_find= btn_reply.parentElement.parentElement.parentElement;
                        }
                    }

                    if (comment_find) {
                        
                        let replies_cell= comment_find.closest(".replies");
                        if (replies_cell) {

                            comment_find.parentElement.insertAdjacentElement("beforeend", comment); // Ajouter de la cellule des nouvelles réponses;
                        } else {

                            comment_find.insertAdjacentElement("afterend", replies); // Ajouter de la cellule des nouvelles réponses;
                            let div1 = replies.querySelector(".div1");

                            console.log("div1");
                            div1.innerHTML = ""; // Effacer le contenu actuel de div1
                            div1.insertAdjacentElement("beforeend", comment); // Ajouter les nouvelles réponses
                        }
                    }
                    btn_reply_clicked = false;
                    btn_reply = "";
                    replies_cell="";
                } else {

                    comment.style.width= "100%"; 
                    document.querySelector('.column').insertAdjacentElement('beforeend', comment);
                }
                comment.scrollIntoView({behavior: 'smooth' }); // Faire défiler vers le commentaire
                anothers_btns(comment);
                j++;
        }
    }
    hide_popup();
}

document.querySelector(".column").querySelectorAll(".reply").forEach((btn)=>{
    btn.addEventListener("click", btn_reply_listener);
});

document.querySelector('.add_comment').addEventListener("click", ()=>{
    add_comment_btn= true;

    document.querySelector('.pop_up').classList.add("active");
    setTimeout(() => {
        document.querySelector(".comment_enter").classList.add("fadeIn");
    }, 1);

    document.querySelector('.add_comment').classList.remove("rotateOut");
    document.querySelector('.add_comment').classList.add("rotateIn");

    document.querySelector('.comment_enter textarea').focus();
});

function btn_reply_listener(event) {
    if (event.target.classList.contains("reply")) {
        btn_reply= event.currentTarget;

        if (btn_reply) {
            document.querySelector('.add_comment').classList.remove("rotateOut");
            document.querySelector('.add_comment').classList.add("rotateIn");
            document.querySelector('.pop_up').classList.add("active");
            setTimeout(() => {
                document.querySelector(".comment_enter").classList.add("fadeIn");
            }, 1);

            document.querySelector('.comment_enter textarea').focus();
            btn_reply_clicked= true;
        }
    };
}

function createCommentElement() {
    // Créer l'élément principal du commentaire
    let comment = document.createElement("div");
    comment.className = "comment_4 new";

    // Section plus/moins
    let minusPlus = document.createElement("div");
    minusPlus.className = "minus_plus";

    let minusBtn = document.createElement("button");
    minusBtn.className = "minus_btn";
    minusBtn.textContent = "-";

    let account = document.createElement("span");
    account.className = "account";
    account.textContent = "0";

    let plusBtn = document.createElement("button");
    plusBtn.className = "plus_btn";
    plusBtn.textContent = "+";

    minusPlus.appendChild(minusBtn);
    minusPlus.appendChild(account);
    minusPlus.appendChild(plusBtn);

    // Contenu principal du commentaire
    let commentContent = document.createElement("div");
    commentContent.className = "comment_4_content";

    // Première ligne du commentaire
    let firstRow = document.createElement("div");
    firstRow.className = "first_row";

    let firstRowDiv = document.createElement("div");

    let img = document.createElement("img");
    img.src = "images/image-ramsesmiron.png";
    img.alt = "";

    let p1 = document.createElement("p");
    p1.className = "p1";
    p1.textContent = "juliusomo";

    let you = document.createElement("p");
    you.className = "you";
    you.textContent = "you";

    let p2 = document.createElement("p");
    p2.className = "p2";
    p2.textContent = "1 day(s) ago";

    firstRowDiv.appendChild(img);
    firstRowDiv.appendChild(p1);
    firstRowDiv.appendChild(you);
    firstRowDiv.appendChild(p2);

    let buttons = document.createElement("div");
    buttons.className = "buttons";

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = `<img src="images/icon-delete.svg">Delete`;

    let updateBtn = document.createElement("button");
    updateBtn.className = "update";
    updateBtn.innerHTML = `<img src="images/icon-edit.svg">Update`;

    let replyBtn = document.createElement("img");
    replyBtn.className = "reply";
    replyBtn.src="images/icon-reply.svg";

    // Ajouter l'événement "reply"
    replyBtn.addEventListener("click", btn_reply_listener);

    // Ajouter l'événement "delete"
    deleteBtn.addEventListener("click", (event) => {
        console.log("det");
        
        let delete_btn= event.currentTarget;
        let delete_btn_parent= delete_btn.closest(".div1");
        let delete_btn_parent1= delete_btn.parentElement.parentElement.parentElement.parentElement;
        if (window.innerWidth <= 945) {
            delete_btn_parent1= delete_btn.parentElement.parentElement.parentElement;
        }

        let n1= parseInt(delete_btn_parent1.querySelector(".p2").innerText, 10);
        if (n1 > 3) {

            document.querySelector('.delete_popup').classList.add("active", "fadein");
            document.querySelector('.delete_popup .div2').classList.add("fadeIn1");
            document.querySelector(".delete_y").addEventListener("click", () => {
                console.log("y");
                if (delete_btn_parent && delete_btn_parent.childNodes.length == 1) {
                    delete_btn_parent.closest(".replies").remove();
                }else{
                    delete_btn_parent1.remove();
                };
                hide_delete_popup();
            })
            document.querySelector(".delete_n").addEventListener("click", () => {
                console.log("n");
                hide_delete_popup();
            })
        }
    });

    buttons.appendChild(deleteBtn);
    buttons.appendChild(updateBtn);
    buttons.appendChild(replyBtn);

    firstRow.appendChild(firstRowDiv);
    firstRow.appendChild(buttons);

    // Ajouter le paragraphe
    let paragraph = document.createElement("p");
    paragraph.className = "paragraph";
    paragraph.textContent = "hdyddststst  tdr -trsts trtst fgt dt tt";

    // Assembler le contenu principal du commentaire
    commentContent.appendChild(firstRow);
    commentContent.appendChild(paragraph);

    // Assembler le commentaire principal
    comment.appendChild(minusPlus);
    comment.appendChild(commentContent);

    // Ajouter des boutons supplémentaires avec une autre fonction si nécessaire
    anothers_btns(comment);

    return comment;
}
let btn_update_clicked= false;
let btn_update_parent="";

function anothers_btns(x) {
    function hide_delete_popup() {
        document.querySelector('.delete_popup .div2').classList.add("fadeOut2");
        setTimeout(() => {
            document.querySelector('.delete_popup').classList.add("fadeOut1");
        }, 100);
        setTimeout(() => {
            document.querySelector('.delete_popup .div2').classList.remove("fadeIn1", "fadeOut2");
            document.querySelector('.delete_popup').classList.remove("fadein" ,"fadeOut1", "active");
        }, 200);        
    };

    x.querySelector(".delete").addEventListener("click", (event) => {
        
        let delete_btn= event.currentTarget;
        let delete_btn_parent= delete_btn.closest(".div1");
        let delete_btn_parent1= delete_btn.parentElement.parentElement.parentElement.parentElement;
        if (window.innerWidth <= 945) {
            delete_btn_parent1= delete_btn.parentElement.parentElement.parentElement;
        }

        let n1= parseInt(delete_btn_parent1.querySelector(".p2").innerText, 10);
        if (n1 > 3) {
            document.querySelector('.delete_popup').classList.add("active", "fadein");
            document.querySelector('.delete_popup .div2').classList.add("fadeIn1");
            document.querySelector(".delete_y").addEventListener("click", () => {
                console.log("y");
                if (delete_btn_parent && delete_btn_parent.childNodes.length == 1) {
                    delete_btn_parent.closest(".replies").remove();
                }else{
                    delete_btn_parent1.remove();
                };
                hide_delete_popup();
            })
            document.querySelector(".delete_n").addEventListener("click", () => {
                console.log("n");
                hide_delete_popup();
            })
        }else{alert("You can't delete an comment/reply who has been dated today.")}
    });
    
    let parent_btn = "";
    x.querySelectorAll(".plus_btn").forEach(btn => {
        btn.addEventListener("click", (event)=>{
            event.preventDefault();
            parent_btn = event.currentTarget.parentElement;
            let n= parseInt(parent_btn.querySelector(".minus_plus span").innerText, 10);
            parent_btn.querySelector(".minus_plus span").innerText = n + 1;
            parent_btn ="";
        });
    });

    x.querySelectorAll(".minus_btn").forEach(btn => {
        btn.addEventListener("click", (event)=>{
            event.preventDefault();
            parent_btn = event.currentTarget.parentElement;
            let n= parseInt(parent_btn.querySelector(".minus_plus span").innerText, 10);
            if (n > 0) {parent_btn.querySelector(".minus_plus span").innerText= n - 1;}
            parent_btn ="";
        });
    });

    x.querySelector(".update").addEventListener("click", (event)=>{
            let btn_update= event.currentTarget;
            if (btn_update) {
                document.querySelector('.add_comment').classList.remove("rotateOut");
                document.querySelector('.add_comment').classList.add("rotateIn");
                document.querySelector('.pop_up').classList.add("active");
                setTimeout(() => {
                    document.querySelector(".comment_enter").classList.add("fadeIn");
                }, 1);
                document.querySelector('.comment_enter textarea').focus(); 
                btn_update_parent= btn_update.parentElement.parentElement.parentElement.parentElement;
                
                document.querySelector('.pop_up textarea').value= btn_update_parent.querySelector(".paragraph").textContent;
                
                btn_update_clicked= true;
            }
    });

}anothers_btns(document);

function hide_popup() {
    document.querySelector('.comment_enter textarea').value =""; // remove textarea after sending
    document.querySelector(".comment_enter").classList.add("fadeOut");
    setTimeout(() => {
        document.querySelector('.pop_up').classList.remove("active");
        document.querySelector('.add_comment').classList.remove("rotateIn");
        document.querySelector('.add_comment').classList.add("rotateOut");
        document.querySelector(".comment_enter").classList.remove("fadeOut","fadeIn");
    }, 550);
};

function hide_delete_popup() {
    
    document.querySelector('.delete_popup .div2').classList.add("fadeOut2");
    setTimeout(() => {
        document.querySelector('.delete_popup').classList.add("fadeOut1");
    }, 100);
    setTimeout(() => {
        document.querySelector('.delete_popup .div2').classList.remove("fadeIn1", "fadeOut2");
        document.querySelector('.delete_popup').classList.remove("fadein" ,"fadeOut1", "active");
    }, 225);
    
};

document.querySelector(".close_btn").addEventListener("click", hide_popup);

document.querySelector(".pop_up").addEventListener("click", (event) => {
    if (event.target == document.querySelector(".pop_up")) {hide_popup()}
})

let mediaQuery = window.matchMedia("(max-width: 675px)");

function adjustResponsives(mediaQuery) {
    for (let index = 1; index < 15; index++) {
        let cmt = document.querySelector(`.comment_${index}`);
        if (!cmt) continue; // Passer à l'itération suivante si le commentaire n'existe pas

        let responsivesDiv = cmt.querySelector(".responsives");
        let minusPlus = cmt.querySelector(".minus_plus");
        let reply = cmt.querySelector(".reply");
        let buttons = reply.parentElement.closest(".buttons");

        if (buttons) {
            reply = buttons;
        }
        if (mediaQuery.matches) {
            // Si écran < 450px : créer ou ajouter dans .responsives
            if (!responsivesDiv) {
                responsivesDiv = document.createElement("div");
                responsivesDiv.className = "responsives";
                cmt.appendChild(responsivesDiv);
            }
            // Déplacer les éléments dans .responsives
            if (minusPlus) responsivesDiv.appendChild(minusPlus);
            if (reply) responsivesDiv.appendChild(reply);
        } else {
            // Si écran >= (value)px : remettre les éléments à leur place d'origine
            if (responsivesDiv) {
                if (minusPlus) cmt.insertAdjacentElement("afterbegin", minusPlus);
                if (reply) cmt.querySelector(".first_row").appendChild(reply);
                responsivesDiv.remove(); // Supprimer le conteneur .responsives
            }
        }
    }
}
// Ajouter l'écouteur de changement
mediaQuery.addEventListener("change", () => adjustResponsives(mediaQuery));

// Appeler la fonction une première fois pour vérifier l'état initial
adjustResponsives(mediaQuery);

let previousLength = document.querySelectorAll(".comment_1, .comment_2, .comment_3, .comment_4").length;

setInterval(() => {
    let currentLength = document.querySelectorAll(".comment_1, .comment_2, .comment_3, .comment_4").length;
    if (currentLength !== previousLength) {
        previousLength = currentLength;
        adjustResponsives(mediaQuery); // Appeler la fonction si le nombre a changé
    }
}, 50); // Vérifier toutes les 50 ms