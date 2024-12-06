document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();
});
document.addEventListener("keypress", (ev2)=>{
    if(ev2.key === "Enter"){ 
        document.querySelector('.send_btn').click();
    }
})
document.querySelector('.send_btn').addEventListener("click", send);

let i = 0;
let j= 0;

let comments = {};
let new_replies = {};

let add_comment_btn = false;
let btn_reply_clicked = false;
let btn_reply = "";

function send(event) {
    //event.preventDefault();
    console.log("Bouton cliqué :", event.currentTarget.classList);
    document.querySelector('.comment_enter').style.display= "none";
    document.querySelector('.add_comment').style.display= "flex";

    let userInput = document.querySelector('.comment_enter textarea').value.trim(); // Récupérer et nettoyer le contenu du textarea
    
    if (userInput) {
            //let container= document.createElement("div");
            //container.id= `container_${j}`;
            //document.querySelector('.column').appendChild(container);
                
            comments[`${j}`]= `user_comment_${j}`;
            let comment= comments[`${j}`];

            new_replies[`${j}`]= `btn_reply_${j}`;
            let new_reply= new_replies[`${j}`];
            
            if (add_comment_btn) {
                comment= createCommentElement();
                //add_comment_btn= false;
            } else {
                comment= document.querySelector('.comment_4').cloneNode(true);
            }
            
            comment.querySelector(".paragraph").innerText= userInput;
            comment.querySelector(".reply").classList.add(new_reply);
            comment.classList.add(`new_comment_${j}`);
            document.querySelector('.comment_enter textarea').value = ''; // remove textarea after sending
            
            comment.querySelector(".reply").addEventListener("click", reply_listenner);

            //document.querySelector(`#container_${j}`).replaceWith(comments[`user_comment_${j}`]);
                
            //let comment_prev= comments[`user_comment_${j-1}`];

            //document.querySelector(".div1").appendChild(comments[`user_comment_${j}`]);

            if (btn_reply_clicked) {
                //let matchingValueIndex = Object.values(new_replies).findIndex(value => event.target.classList.contains(value));
                /*if (matchingValueIndex !== -1) {

                    let matchingKey = Object.keys(new_replies)[matchingValueIndex];
                    let matchingValue = Object.values(new_replies)[matchingValueIndex];
                    console.log(`Un bouton contenant une valeur correspondante a été cliqué ! Clé : ${matchingKey}, Valeur : ${Object.values(new_replies)[matchingValueIndex]}`);
                    
                    if (matchingKey) {
                        console.log("matchingKey");
                        let replies = document.querySelector(".replies").cloneNode(true);
                        
                        //Récupération de l'élément parent du bouton reply trouvé
                        let comment_find= document.querySelector(`.${matchingValue}`).parentElement.parentElement.parentElement;// comments[`${j-1}`];

                        //let comment_find= document.getElementsByClassName(class_comment_find);
                        if (comment_find) {
                            console.log("comment_find");
                            comment_find.insertAdjacentElement('afterend', replies); // Ajouter de la cellule des nouvelles réponses;

                            let div1 = comment_find.querySelector(".div1");

                            if (div1) {
                                console.log("div1");
                                div1.innerHTML = ""; // Effacer le contenu actuel de div1
                                div1.insertAdjacentElement('beforeend', comment); // Ajouter les nouvelles réponses
                            }

                            comment.scrollIntoView({ behavior: 'smooth' }); // Faire défiler vers le commentaire
                        }
                    }
                    btn_reply_clicked= false;
                }*/   
                
                let replies = document.querySelector(".replies").cloneNode(true);
                //let comment_find= btn_reply.parentElement.parentElement.parentElement;// comments[`${j-1}`];
                
                comment_find= btn_reply.parentElement.parentElement.parentElement.parentElement;
                for (let index = 1; index < 5; index++) {
                    if (btn_reply.parentElement.parentElement.parentElement.classList.contains(`comment_${index}`)) {
                        comment_find= btn_reply.parentElement.parentElement.parentElement;
                    }
                }

                if (comment_find) {
                    console.log("parent",comment_find, btn_reply.classList);
                    
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
                /*if (btn_reply_create) {
                    //comment.remove(reply);
                    comment.querySelector(".reply").remove();
                    comment.querySelector(".buttons").appendChild(btn_reply_create);
                    console.log("btn_reply_create")
                }*/
                comment.style.width= "100%"; 
                document.querySelector('.column').insertAdjacentElement('beforeend', comment);
            }
            comment.scrollIntoView({behavior: 'smooth' }); // Faire défiler vers le commentaire
            j++;
    }
}

document.querySelector(".column").querySelectorAll(".reply").forEach((btn)=>{
    btn.addEventListener("click", reply_listenner);
});
    

let btn_reply_create="";

document.querySelector('.add_comment').addEventListener("click", ()=>{
    add_comment_btn= true;
    document.querySelector('.comment_enter').style.display= "flex";
    document.querySelector('.add_comment').style.display= "none";
    document.querySelector('.comment_enter textarea').focus();
//removeChild(childDiv)
    //btn_reply_create= document.createElement("button");
    
    //btn_reply_create.classList.add("reply");
    
    //btn_reply_create.innerText= "ReplyY";
    //btn_reply_create.id= "reply";

});

function reply_listenner(event) {
    if (event.target.classList.contains("reply")) {
        btn_reply= event.currentTarget;
        //let exists = Object.values(new_replies).includes(event.target.classList);
        //console.log(exists, "il n'y est pas");
        if (btn_reply) {
            document.querySelector('.comment_enter').style.display= "flex";
            document.querySelector('.add_comment').style.display= "none";
            document.querySelector('.comment_enter textarea').focus(); 
            console.log("btn_reply.classList");
            console.log(btn_reply.classList);
            btn_reply_clicked= true;
        }
    };
}

function createCommentElement() {
    // Créer l'élément principal du commentaire
    const comment = document.createElement("div");
    comment.className = "comment_4";

    // Section plus/moins
    const minusPlus = document.createElement("div");
    minusPlus.className = "minus_plus";

    const minusBtn = document.createElement("button");
    minusBtn.className = "minus_btn";
    minusBtn.textContent = "-";

    const account = document.createElement("span");
    account.className = "account";
    account.textContent = "0";

    const plusBtn = document.createElement("button");
    plusBtn.className = "plus_btn";
    plusBtn.textContent = "+";

    minusPlus.appendChild(minusBtn);
    minusPlus.appendChild(account);
    minusPlus.appendChild(plusBtn);

    // Contenu principal du commentaire
    const commentContent = document.createElement("div");
    commentContent.className = "comment_4_content";

    // Première ligne du commentaire
    const firstRow = document.createElement("div");
    firstRow.className = "first_row";

    const firstRowDiv = document.createElement("div");

    const img = document.createElement("img");
    img.src = "images/image-ramsesmiron.png";
    img.alt = "";

    const p1 = document.createElement("p");
    p1.className = "p1";
    p1.textContent = "juliusomo";

    const you = document.createElement("p");
    you.className = "you";
    you.textContent = "you";

    const p2 = document.createElement("p");
    p2.className = "p2";
    p2.textContent = "1 week ago";

    firstRowDiv.appendChild(img);
    firstRowDiv.appendChild(p1);
    firstRowDiv.appendChild(you);
    firstRowDiv.appendChild(p2);

    const buttons = document.createElement("div");
    buttons.className = "buttons";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.textContent = "Delete";

    const replyBtn = document.createElement("button");
    replyBtn.className = "reply";
    replyBtn.textContent = "Reply";

    // Ajouter l'événement directement
    replyBtn.addEventListener("click", (event) => {
        console.log("Bouton Reply créer cliqué !");
        if (event.target.classList.contains("reply")) {
            btn_reply= event.currentTarget;
            //let exists = Object.values(new_replies).includes(event.target.classList);
            //console.log(exists, "il n'y est pas");
            if (btn_reply) {
                document.querySelector('.comment_enter').style.display= "flex";
                document.querySelector('.add_comment').style.display= "none";
                document.querySelector('.comment_enter textarea').focus(); 
                console.log("btn_reply.classList");
                console.log(btn_reply.classList);
                btn_reply_clicked= true;
            }
        }; 
    });

    buttons.appendChild(deleteBtn);
    buttons.appendChild(replyBtn);

    firstRow.appendChild(firstRowDiv);
    firstRow.appendChild(buttons);

    // Ajouter le paragraphe
    const paragraph = document.createElement("p");
    paragraph.className = "paragraph";

    // Assembler le contenu principal du commentaire
    commentContent.appendChild(firstRow);
    commentContent.appendChild(paragraph);

    // Assembler le commentaire principal
    comment.appendChild(minusPlus);
    comment.appendChild(commentContent);
    
    return comment;
}


document.querySelectorAll(".plus_btn").forEach(btn => {
    btn.addEventListener("click", (event)=>{
        event.preventDefault();
        let parent_btn = event.currentTarget.parentElement;
        parent_btn.querySelector(".minus_plus span").innerText = i += 1;
    });
});
document.querySelectorAll(".minus_btn").forEach(btn => {
    btn.addEventListener("click", (event)=>{
        event.preventDefault();
        let parent_btn = event.currentTarget.parentElement;
        if (i > 0) {parent_btn.querySelector(".minus_plus span").innerText= i-=1;}
    });
});

document.querySelector(".body").addEventListener("click", (event) => {
    if (event.target === document.querySelector(".body")) {
        document.querySelector('.comment_enter').style.display= "none";
    }
})