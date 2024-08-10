// Fonction pour calculer la mensualité
function calculateMonthlyPayment(principal, annualRate, years) {
    const monthlyRate = annualRate / 12 / 100; // Convertir le taux d'intérêt annuel en taux mensuel
    const numberOfPayments = years * 12; // Nombre total de paiements
    // Calcul de la mensualité
    let monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    let totalPaid= monthlyPayment * numberOfPayments;

    p1_span_monthly_repayements.innerText= formatter.format(monthlyPayment.toFixed(2)) //.toLocaleString(en-EN);
    results_h1_span_total_repayements.innerText= formatter.format(totalPaid.toFixed(2))//.toLocaleString(en-EN);
    console.log(monthlyPayment.toFixed(2), totalPaid.toFixed(2));
};

// Utilisation de Intl.NumberFormat pour le formatage des nombres
const formatter = new Intl.NumberFormat('en-US');
let mortage_amount_input= document.querySelector(".mortage_amount");
let mortage_term_input= document.querySelector(".mortage_term");
let interest_rate_input= document.querySelector(".interest_rate");
let repayement_radio= document.querySelector("#repayement");
let interest_only_radio= document.querySelector("#interest_only");
let p1_span_monthly_repayements= document.querySelector(".p1 span");
let results_h1_span_total_repayements= document.querySelector(".results h1 span");
let regexp= new RegExp("^[0-9.]+$");

function test_funct() {
    if(mortage_amount_input.value !=="" && regexp.test(mortage_amount_input.value) && mortage_term_input.value !=="" && regexp.test(mortage_term_input.value) && interest_rate_input.value !=="" && regexp.test(interest_rate_input.value)){return true} return false
}

document.querySelector(".firstblock form").addEventListener("submit",(event)=>{
    event.preventDefault();
});

document.querySelector(".clear").addEventListener("click", ()=>{
    location.reload() 
});

document.querySelector(".fifthrow .radiospan_2_2").addEventListener("click",()=>{
    document.querySelector(".radiospan_2_2").classList.remove("radiospan_2");
    document.querySelector(".radiospan_1_1").classList.remove("radiospan_focus");
    document.querySelector(".radiospan_2_2").classList.add("radiospan_focus");
    document.querySelector(".radiospan_1_1").classList.add("radiospan_1");
    interest_only_radio.checked=true;
    repayement_radio.checked=false;
    document.querySelector(".p_error_3").style.display="none";
});

document.querySelector(".fifthrow .radiospan_1_1").addEventListener("click",()=>{
    document.querySelector(".radiospan_1_1").classList.remove("radiospan_1");
    document.querySelector(".radiospan_2_2").classList.remove("radiospan_focus");
    document.querySelector(".radiospan_1_1").classList.add("radiospan_focus");
    document.querySelector(".radiospan_2_2").classList.add("radiospan_2");
    repayement_radio.checked= true;
    interest_only_radio.checked=false;
    document.querySelector(".p_error_3").style.display="none";
});

function validation(){
    if (mortage_amount_input.value ==="" || !regexp.test(mortage_amount_input.value)) {
        document.querySelector(".p_error").style.display="block"; 
        document.querySelector(".secondrow_1").style.borderColor="hsl(4, 69%, 50%)";
        document.querySelector(".fa_sterling_container").style.color="#f5f5f5";
        document.querySelector(".fa_sterling_container").style.backgroundColor="hsl(4, 69%, 50%)";
        document.querySelector(".results_interest_only").style.display="none";
        document.querySelector(".secondblock_2_1").style.display="none";
    }else{
        document.querySelector(".p_error").style.display="none"; 
        document.querySelector(".secondrow_1").style.borderColor="#b1bcc1";
        document.querySelector(".fa_sterling_container").style.color="#1a374e";
        document.querySelector(".fa_sterling_container").style.backgroundColor="#e3f4fc";
    };

    if (mortage_term_input.value ==="" || !regexp.test(mortage_term_input.value)) {
        document.querySelector(".p_error_1").style.display="block";
        document.querySelector(".thirdrow_1").style.borderColor="hsl(4, 69%, 50%)";
        document.querySelector(".thirdrow_1 .p_years").style.color="#f5f5f5";
        document.querySelector(".thirdrow_1 .p_years").style.backgroundColor="hsl(4, 69%, 50%)";
        document.querySelector(".results_interest_only").style.display="none";
        document.querySelector(".secondblock_2_1").style.display="none";
    }else{
        document.querySelector(".p_error_1").style.display="none";
        document.querySelector(".thirdrow_1").style.borderColor="#b1bcc1";
        document.querySelector(".thirdrow_1 .p_years").style.color="#1a374e";
        document.querySelector(".thirdrow_1 .p_years").style.backgroundColor="#e3f4fc";
    };

    if (interest_rate_input.value ==="" || !regexp.test(interest_rate_input.value)) {
        document.querySelector(".p_error_2").style.display="block"; 
        document.querySelector(".fourthrow_1").style.borderColor="hsl(4, 69%, 50%)";
        document.querySelector(".fa-light_container").style.color="#f5f5f5";
        document.querySelector(".fa-light_container").style.backgroundColor="hsl(4, 69%, 50%)";
        document.querySelector(".results_interest_only").style.display="none";
        document.querySelector(".secondblock_2_1").style.display="none";
    }else{
        document.querySelector(".p_error_2").style.display="none"; 
        document.querySelector(".fourthrow_1").style.borderColor="#b1bcc1"
        document.querySelector(".fa-light_container").style.color="#1a374e";
        document.querySelector(".fa-light_container").style.backgroundColor="#e3f4fc";
    };

    if (interest_only_radio.checked === false && repayement_radio.checked === false) {
        document.querySelector(".p_error_3").style.display="block";
    } 
    if (interest_only_radio.checked === true || repayement_radio.checked === true) {
        document.querySelector(".p_error_3").style.display="none";
    }
    
};
mortage_amount_input.addEventListener("mouseover", ()=>{
    document.querySelector(".secondrow_1").style.borderColor="#1a374e";
})
mortage_amount_input.addEventListener("mouseout", ()=>{
    document.querySelector(".secondrow_1").style.borderColor="#b1bcc1";
})
mortage_amount_input.addEventListener("focus", ()=>{
    document.querySelector(".secondrow_1").style.borderColor="#e4ee37";
    document.querySelector(".fa_sterling_container").style.backgroundColor="#e4ee37";
    document.querySelector(".fa_sterling_container").style.color="#1a374e";
})
mortage_amount_input.addEventListener("blur", ()=>{
    document.querySelector(".secondrow_1").style.borderColor="#b1bcc1";
    document.querySelector(".fa_sterling_container").style.backgroundColor="#e3f4fc";
})
mortage_amount_input.addEventListener("change", ()=>{
    if (mortage_amount_input.value !=="" && regexp.test(mortage_amount_input.value)) {
        document.querySelector(".p_error").style.display="none"; 
        document.querySelector(".secondrow_1").style.borderColor="#b1bcc1";
        document.querySelector(".fa_sterling_container").style.color="#1a374e";
        document.querySelector(".fa_sterling_container").style.backgroundColor="#e3f4fc";
    }
});

mortage_term_input.addEventListener("mouseover", ()=>{
    document.querySelector(".thirdrow_1").style.borderColor="#1a374e";
})
mortage_term_input.addEventListener("mouseout", ()=>{
    document.querySelector(".thirdrow_1").style.borderColor="#b1bcc1";
})
mortage_term_input.addEventListener("focus", ()=>{
    document.querySelector(".thirdrow_1").style.borderColor="#e4ee37";
    document.querySelector(".thirdrow_1 .p_years").style.backgroundColor="#e4ee37";
    document.querySelector(".thirdrow_1 .p_years").style.color="#1a374e";
})
mortage_term_input.addEventListener("blur", ()=>{
    document.querySelector(".thirdrow_1").style.borderColor="#b1bcc1";
    document.querySelector(".thirdrow_1 .p_years").style.backgroundColor="#e3f4fc";
})
mortage_term_input.addEventListener("change", ()=>{
    if (mortage_term_input.value !=="" && regexp.test(mortage_term_input.value)) {
        document.querySelector(".p_error_1").style.display="none";
        document.querySelector(".thirdrow_1").style.borderColor="#b1bcc1";
        document.querySelector(".thirdrow_1 .p_years").style.color="#1a374e";
        document.querySelector(".thirdrow_1 .p_years").style.backgroundColor="#e3f4fc";
    }
});

interest_rate_input.addEventListener("mouseover", ()=>{
    document.querySelector(".fourthrow_1").style.borderColor="#1a374e";
})
interest_rate_input.addEventListener("mouseout", ()=>{
    document.querySelector(".fourthrow_1").style.borderColor="#b1bcc1";
})
interest_rate_input.addEventListener("focus", ()=>{
    document.querySelector(".fourthrow_1").style.borderColor="#e4ee37";
    document.querySelector(".fa-light_container").style.backgroundColor="#e4ee37";
    document.querySelector(".fa-light_container").style.color="#1a374e";
})
interest_rate_input.addEventListener("blur", ()=>{
    document.querySelector(".fourthrow_1").style.borderColor="#b1bcc1";
    document.querySelector(".fa-light_container").style.backgroundColor="#e3f4fc";
})
interest_rate_input.addEventListener("change", ()=>{
    if (interest_rate_input.value !=="" && regexp.test(interest_rate_input.value)) {
        document.querySelector(".p_error_2").style.display="none"; 
        document.querySelector(".fourthrow_1").style.borderColor="#b1bcc1"
        document.querySelector(".fa-light_container").style.color="#1a374e";
        document.querySelector(".fa-light_container").style.backgroundColor="#e3f4fc";
    }
});
document.querySelector(".calculate").addEventListener("click", (event)=>{
    event.preventDefault();
    validation();
    if (repayement_radio.checked === true && test_funct() ) {
        document.querySelector(".secondblock_1").style.display="none";
        document.querySelector(".secondblock_2").style.display="block";
        document.querySelector(".secondblock_2_1").style.display="block";
        document.querySelector(".results_interest_only").style.display="none";
        console.log(mortage_amount_input.value, interest_rate_input.value, mortage_term_input.value);
        calculateMonthlyPayment(mortage_amount_input.value, interest_rate_input.value ,mortage_term_input.value);
    }
    if (interest_only_radio.checked === true && test_funct() ) {
        document.querySelector(".secondblock_1").style.display="none";
        document.querySelector(".secondblock_2").style.display="block";
        document.querySelector(".secondblock_2_1").style.display="none";
        document.querySelector(".results_interest_only").style.display= "block";
        document.querySelector(".secondblock_2_1").style.display="none";
        let interest= ((interest_rate_input.value * mortage_amount_input.value * 25)/100).toFixed(2);
        //let options= {minimumFractionDigits: 2, maximumFractionDigits: 2};
        //let interest_1= interest.toLocaleString("en-En", options);
        console.log(interest);
        document.querySelector(".results_interest_only span").innerText= formatter.format(interest);
    }
});
