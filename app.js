
document.addEventListener("DOMContentLoaded",function(){
    let search = document.getElementById("searchButton");
    const heroRequest = new XMLHttpRequest();

    function printHeroes(){
        if (heroRequest.readyState === XMLHttpRequest.DONE){
            if (heroRequest.status === 200){
                let heroList = heroRequest.responseText;
                alert(heroList);
            }
            else{
                alert("A mistake was made with my code.");
            }
        }
    }

    search.addEventListener("click",function(){
        heroRequest.onreadystatechange = printHeroes;
        heroRequest.open("GET","http://localhost/info2180-lab4/superheroes.php")
        heroRequest.send();
    })
})


