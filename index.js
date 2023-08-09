// Filter image by using clicked the button from the name

function filterItem(event){
    const buttonClicked = event.target;
    document.querySelector(".active").classList.remove("active");
    buttonClicked.classList.add("active");
    var buttonDataName = buttonClicked.dataset.name;
    
    const cardData = document.querySelectorAll(".filterable_images .card");
    for(var i=0; i<cardData.length; i++){
        cardData[i].classList.remove("hide");
        if(cardData[i].dataset.name !== buttonDataName && buttonDataName !== "all"){
            cardData[i].classList.add("hide");
        }
    }
}

// Preview an full screen image in a box

const Preview = document.querySelector(".preview-image");
const Shadow = document.querySelector(".shadow");

function closePreview(){
    Preview.classList.remove("show");
    Shadow.classList.remove("show");
}

function openPreview(event){
    const preview = event.target;
    const sourceImage = preview.src;
    const attributeImage = preview.alt;
    const PreviewImage = document.querySelector(".image-box img");
    PreviewImage.src = sourceImage;
    const PreviewTitle = document.querySelector(".title p");
    PreviewTitle.innerText = attributeImage;
    Preview.classList.add("show");
    Shadow.classList.add("show");
}