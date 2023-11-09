
document.addEventListener("DOMContentLoaded",function(){
    let search = document.getElementById("searchButton");
    let result = document.getElementById("result");
    let superName = document.getElementById("superNames");
    const heroRequest = new XMLHttpRequest();

    function printHeroes(){
        if (heroRequest.readyState === XMLHttpRequest.DONE){
            if (heroRequest.status === 200){
                let heroList = heroRequest.responseText;
                result.innerHTML = heroList;
            }
            else{
                alert("A mistake was made with my code.");
            }
        }
    }

    search.addEventListener("click",function(){
        let nameText = superName.value;
        nameText = nameText.trim();
        heroRequest.onreadystatechange = printHeroes;
        heroRequest.open("GET","http://localhost/info2180-lab4/superheroes.php?query="+nameText);
        heroRequest.send();
    })
})


