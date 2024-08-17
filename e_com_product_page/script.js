function show_hide_cart_popup(){
    document.querySelector(".cart .fa-cart-shopping").addEventListener("click",()=>{
        document.querySelector(".cart .cart_content_popup_bacground").classList.add("active");
    });
    document.querySelector(".cart .cart_content_popup_bacground").addEventListener("click", (event) => {
        if (event.target === document.querySelector(".cart .cart_content_popup_bacground")) {
            document.querySelector(".cart .cart_content_popup_bacground").classList.remove("active");
        }
    })
}show_hide_cart_popup()
function show_hide_left_side_popup(){
    document.querySelector(".both_sides .left_side .main_images img").addEventListener("click",()=>{
        if (window.innerWidth > 800) {
            document.querySelector(".left_side_popup_background").classList.add("active");
        }
    });
    document.querySelector(".left_side_popup_background").addEventListener("click", (event) => {
        if (event.target === document.querySelector(".left_side_popup_background")) {
            document.querySelector(".left_side_popup_background").classList.remove("active");
        }
    })
    document.querySelector(".close_button_container .fa-xmark").addEventListener("click", () => {
        document.querySelector(".left_side_popup_background").classList.remove("active");
    })
}show_hide_left_side_popup();
document.querySelector(".side_bar .close_button_container").addEventListener("click", () => {
    document.querySelector(".side_bar").classList.remove("active");
});
document.querySelector(".fa-bars_container").addEventListener("click", () => {
    document.querySelector(".side_bar").classList.add("active");
});

let main_images_img = document.querySelector(".left_side .main_images img");
let popup_main_images_img = document.querySelector(".left_side_popup .popup_main_images img");
let navigation_buttons = document.querySelectorAll(".navigation_buttons button");
let array_of_main_images = ["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"];
let i = 0;

navigation_buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.classList.contains("navigation_button_previous")) {
            i-=1;
            if (array_of_main_images[i] === undefined){i=3};
        }
        if (button.classList.contains("navigation_button_next")) {
            i+=1;
            if (array_of_main_images[i] === undefined){i=0};        
        }
        popup_main_images_img.src = array_of_main_images[i];
        main_images_img.src = array_of_main_images[i];
    });
})

document.querySelectorAll(".left_side .thubnails_images span").forEach(thumbnails_images => {
    thumbnails_images.addEventListener("click", () => { 
        if (thumbnails_images.classList.contains("thubnail_4_container")) {
            main_images_img.src = array_of_main_images[3];
            document.querySelector(".thubnail_4_container img").style.opacity= 0.3;
            document.querySelector(".thubnail_1_container img").style.opacity= 1;
            document.querySelector(".thubnail_3_container img").style.opacity= 1;
            document.querySelector(".thubnail_2_container img").style.opacity= 1;
            document.querySelector(".thubnail_4_container").classList.add("span_active");
            document.querySelector(".thubnail_3_container").classList.remove("span_active");
            document.querySelector(".thubnail_2_container").classList.remove("span_active");
            document.querySelector(".thubnail_1_container").classList.remove("span_active");
        };
        if (thumbnails_images.classList.contains("thubnail_3_container")) {
            main_images_img.src = array_of_main_images[2];
            document.querySelector(".thubnail_3_container img").style.opacity= 0.3;
            document.querySelector(".thubnail_1_container img").style.opacity= 1;
            document.querySelector(".thubnail_2_container img").style.opacity= 1;
            document.querySelector(".thubnail_4_container img").style.opacity= 1;
            document.querySelector(".thubnail_3_container").classList.add("span_active");
            document.querySelector(".thubnail_4_container").classList.remove("span_active");
            document.querySelector(".thubnail_2_container").classList.remove("span_active");
            document.querySelector(".thubnail_1_container").classList.remove("span_active");
        };
        if (thumbnails_images.classList.contains("thubnail_2_container")) {
            main_images_img.src = array_of_main_images[1];
            document.querySelector(".thubnail_2_container img").style.opacity= 0.3;
            document.querySelector(".thubnail_1_container img").style.opacity= 1;
            document.querySelector(".thubnail_3_container img").style.opacity= 1;
            document.querySelector(".thubnail_4_container img").style.opacity= 1;
            document.querySelector(".thubnail_2_container").classList.add("span_active");
            document.querySelector(".thubnail_4_container").classList.remove("span_active");
            document.querySelector(".thubnail_3_container").classList.remove("span_active");
            document.querySelector(".thubnail_1_container").classList.remove("span_active");
        };
        if (thumbnails_images.classList.contains("thubnail_1_container")) {
            main_images_img.src = array_of_main_images[0];
            document.querySelector(".thubnail_1_container img").style.opacity= 0.3;
            document.querySelector(".thubnail_2_container img").style.opacity= 1;
            document.querySelector(".thubnail_3_container img").style.opacity= 1;
            document.querySelector(".thubnail_4_container img").style.opacity= 1;
            document.querySelector(".thubnail_1_container").classList.add("span_active");
            document.querySelector(".thubnail_4_container").classList.remove("span_active");
            document.querySelector(".thubnail_3_container").classList.remove("span_active");
            document.querySelector(".thubnail_2_container").classList.remove("span_active");
        };
    });
});
document.querySelector(".cart_content_popup .fa-trash-can").addEventListener("click", () =>{
    i=0;
    document.querySelector(".cart .sneakers_number").innerText= i;
    document.querySelector(".cart .sneaker_total_price").innerText= "$"+(i * 125).toFixed(2);
    document.querySelector(".cart .cart_exponent").innerText= i;
    document.querySelector(".minus_plus span").innerText= i;
    document.querySelector(".cart_content_popup .empty_cart").style.display= "block";
    document.querySelector(".cart_content_popup .unempty_cart").style.display= "none";
    if (i === 0) { document.querySelector(".cart .cart_exponent").style.display= "none";}
});
document.querySelector(".minus_plus .minus_button").addEventListener("click", () => {
    if (i > 0) {document.querySelector(".minus_plus span").innerText= i-=1;}
});
document.querySelector(".minus_plus .plus_button").addEventListener("click", () =>{
        document.querySelector(".minus_plus span").innerText= i+=1;
});
document.querySelector(".aligned_buttons .add_to_cart").addEventListener("click", () =>{
    document.querySelector(".cart .cart_exponent").innerText= i;
    document.querySelector(".cart .sneakers_number").innerText= i;
    document.querySelector(".cart .sneaker_total_price").innerText= "$"+(i * 125).toFixed(2);
    if (i > 0) {
        document.querySelector(".cart_content_popup .empty_cart").style.display= "none";
        document.querySelector(".cart_content_popup .unempty_cart").style.display= "block";
    }
    if (i === 0) { document.querySelector(".cart .cart_exponent").style.display= "none";}
    if (i !== 0){document.querySelector(".cart .cart_exponent").style.display= "flex"};
});if (i === 0) { document.querySelector(".cart .cart_exponent").style.display= "none"};