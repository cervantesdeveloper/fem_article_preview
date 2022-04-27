((d)=>{
    const 
    $ShareButton = d.querySelector(".article__share-button"),
    $ShareMenu = d.querySelector(".article__share");

    $ShareButton.addEventListener("click", e=>{
        $ShareMenu.classList.toggle("hidden");
        $ShareButton.classList.toggle("active-button");
    })

})(document);




