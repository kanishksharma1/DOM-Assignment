
//  Q-1 :- SOLUTION 

document.querySelector(".side-bar .crayons-card .crayons-subtitle-2").innerHTML = "Ineuron"
'Ineuron'
document.querySelector(".side-bar .crayons-card p").innerHTML = "I write code"
'I write code'


//  Q-2 :- SOLUTION 

let arr1 = [ ]
for (let i = 0; i <= 6; i++) {
    arr1.push(document.body.querySelectorAll(".main .as-imagegrid .as-imagegrid--7up .row .as-imagegrid-item a .as-imagegrid-item-title ")[i].innerText)
}
console.log(arr1);


// Q-4 :- SOLUTION 

document.body.querySelector(".root div div div .contact-us #contactUs .contactUs--wrapper .contactUs--content .contactUs--inner .contactUs--item .item--subtitle").innerText = "+91 6366256689";

// Q-09 :- SOLUTION

document.body.querySelector(".page-wrapper .main-wrapper .section_header .header_viewport-80 .padding-global .container-medium .padding-section-medium .text-align-center .text-color-white").style.color = "Red" 

document.body.querySelector(".page-wrapper .main-wrapper .section_header .header_viewport-80 .padding-global .container-medium .padding-section-medium .text-align-center .text-color-white").style.fontFamily = "MonoSpace"


//Q-10 :- SOLUTION

document.addEventListener("mouseover", ( ) => {
document.body.querySelector(".tex2jax_ignore #gatsby-focus-wrapper .page-wrapper .default-layout #content-start .landing-page .container .landing-top .row .col-lg-8 .btn-cta-big .login-btn-text").style.backgroundColor = "Red" });

// Q-12 :- SOLUTION 

document.body.querySelector(".logged-in .application-main main .container-md .js-braintree-encrypt .btn-primary").style.backgroundColor = "Blue"

//Q-20 :- SOLUTION 

document.body.querySelector("#oc-wrapper #oc-container .root .aem-Grid  .responsivegrid .aem-Grid .productcard .index__three-products-1-mb .section-box .desc" ).style.color = "Orange"









