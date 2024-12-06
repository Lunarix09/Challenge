document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault();
});
document.querySelector('button[type="submit"]').addEventListener("click", (event)=>{
    event.preventDefault();
    if (document.querySelector("#first_name").value === "") {
        document.querySelector("#first_name").style.borderColor="hsl(0, 66%, 54%)";
        document.querySelector(".first_name_container .p_error").style.display="block";
    };
    if (document.querySelector("#last_name").value === "") {
        document.querySelector("#last_name").style.borderColor="hsl(0, 66%, 54%)";
        document.querySelector(".last_name_container .p_error").style.display="block";
    };
    if (!regexp.test(document.querySelector("#email").value)) {
        document.querySelector("#email").style.borderColor="hsl(0, 66%, 54%)";
        document.querySelector(".email_container .p_error").style.display="block";
    };
    if (document.querySelector("#message").value === "") {
        document.querySelector("#message").style.borderColor="hsl(0, 66%, 54%)";
        document.querySelector(".message_container .p_error").style.display="block";
    };
    if (document.querySelector("#general_enquiry").checked === false && document.querySelector("#support_request").checked === false) {
        document.querySelector(".query_type_container_1 .p_error").style.display="block";
    };
    if (document.querySelector('input[type="checkbox"]').checked === false) {
        document.querySelector(".consent_1 .p_error").style.display="block";
    }
    let first_name= document.querySelector("#first_name").value;
    let last_name= document.querySelector("#last_name").value;
    let email_address= document.querySelector("#email").value;
    let message= document.querySelector("#message").value;
    let consentment= "";
    if (document.querySelector('input[type="checkbox"]').checked === true) {
        consentment= "I consent to being contacted by the team";
    } else {consentment= "I don't consent to being contacted by the team";}

    if (document.querySelector("#first_name").value !== "" && document.querySelector("#last_name").value !== "" && regexp.test(document.querySelector("#email").value) && document.querySelector("#message").value !== "") {
        function sending_message(){
            event.preventDefault();
            let mailto= `mailto: ${email_address} ?subject= ${query_type} &body= Hey i'm ${first_name} ${last_name}, and ${consentment}. ${message}`;
            location.href= mailto;
            setTimeout(() => {
                document.querySelector(".message_sent").style.display="flex";
                setTimeout(() => {
                    document.querySelector(".message_sent").style.display="none";
                }, 5000);
            }, 3000);
        }sending_message(email_address,query_type, consentment , last_name,first_name , message);
    }else{
        document.querySelector(".form_container").style.height= "88%";
        document.querySelector(".form_container").style.top= "6%";
        if (window.innerWidth < 451) {
            document.querySelector(".form_container").style.height= "690px";
            document.querySelector(".form_container").style.top= "5px";
        }
    }
});

let query_type= "";
let regexp= new RegExp("^[a-zA-Z0-9&._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]")

document.querySelector("#first_name").addEventListener("change", ()=>{
    if (document.querySelector("#first_name").value !== "") {
        document.querySelector("#first_name").style.borderColor="hsl(0, 0%, 0%)";
        document.querySelector(".first_name_container .p_error").style.display="none";
    }
});
document.querySelector("#last_name").addEventListener("change", ()=>{
    if (document.querySelector("#last_name").value !== "") {
        document.querySelector("#last_name").style.borderColor="hsl(186, 15%, 59%)";
        document.querySelector(".last_name_container .p_error").style.display="none";
    }
});
document.querySelector("#email").addEventListener("change", ()=>{
    if (regexp.test(document.querySelector("#email").value)) {
        document.querySelector("#email").style.borderColor="hsl(186, 15%, 59%)";
        document.querySelector(".email_container .p_error").style.display="none";
    }
});
document.querySelector(".radio_1").addEventListener("click", ()=>{
    document.querySelector(".query_type_container_1 .p_error").style.display="none";
    document.querySelector(".radio_1").style.backgroundColor="hsl(148, 38%, 91%)";
    document.querySelector(".radio_1 label").style.color="hsl(169, 82%, 27%)";
    document.querySelector(".radio_2 label").style.color="hsl(186, 15%, 59%)";
    document.querySelector(".radio_2").style.backgroundColor="transparent";
    query_type= document.querySelector("#general_enquiry").value;
    document.querySelector(".radio_1").style.borderColor="hsl(169, 82%, 27%)";
    document.querySelector(".radio_2").style.borderColor="hsl(186, 15%, 59%)";
});

document.querySelector(".radio_2").addEventListener("click", ()=>{
    document.querySelector(".query_type_container_1 .p_error").style.display="none";
    query_type= document.querySelector("#support_request").value;
    document.querySelector(".radio_2").style.borderColor="hsl(169, 82%, 27%)";
    document.querySelector(".radio_1").style.borderColor="hsl(186, 15%, 59%)";
    document.querySelector(".radio_2").style.backgroundColor="hsl(148, 38%, 91%)";
    document.querySelector(".radio_1").style.backgroundColor="transparent";
    document.querySelector(".radio_2 label").style.color="hsl(169, 82%, 27%)";
    document.querySelector(".radio_1 label").style.color="hsl(186, 15%, 59%)";
});
document.querySelector("#message").addEventListener("change", ()=>{
    if (document.querySelector("#message").value !== "") {
        document.querySelector("#message").style.borderColor="hsl(186, 15%, 59%)";
        document.querySelector(".message_container .p_error").style.display="none";
    }
});
document.querySelector('input[type="checkbox"]').addEventListener("change", ()=>{
    if (document.querySelector('input[type="checkbox"]').checked === true) {
        document.querySelector(".consent_1 .p_error").style.display="none";}
})