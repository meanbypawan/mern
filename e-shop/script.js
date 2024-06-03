function HeaderComponent(){
    var mainDiv = document.getElementById("main");  

    var headerContainer = document.createElement("div");
    headerContainer.setAttribute("class","bg-danger d-flex justify-content-around");
    headerContainer.setAttribute("style","height:60px;");
    
    var logoDiv = document.createElement("div");
    logoDiv.setAttribute("style","width:15%; border: 1px solid white;height:60px");
    logoDiv.setAttribute("class","d-flex justify-content-center align-items-center");

    var h1 = document.createElement("h1");
    h1.innerHTML = "<label class='text-dark'>E</label><small class='text-light'>-shop</small>";
    logoDiv.appendChild(h1);

    var searchDiv = document.createElement("div");
    searchDiv.setAttribute("style","width:60%; border: 1px solid black;height:60px");
    searchDiv.setAttribute("class"," d-flex justify-content-center align-items-center");
    var searchInput = document.createElement("input");
    searchInput.setAttribute("placeholder","Search product by title");
    searchInput.setAttribute("style","width:90%;");
    searchDiv.appendChild(searchInput);


    var optionDiv = document.createElement("div");
    optionDiv.setAttribute("style","width:15%; border: 1px solid white;height:60px");
 
    headerContainer.appendChild(logoDiv);
    headerContainer.appendChild(searchDiv);
    headerContainer.appendChild(optionDiv);

    mainDiv.appendChild(headerContainer);
}