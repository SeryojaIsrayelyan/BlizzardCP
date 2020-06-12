let az = false;
function arajinzapusk(){
	 // var el = document.createElement("DIV");
  // el.classList.add("disk");
  //  el.id = idd;

  var cont = document.createElement("DIV");
  document.body.appendChild(cont);
  cont.style.width = "1000px";
  cont.style.height = "800px";
  cont.style.margin = "50px auto";
  cont.style.display = "flex";
  cont.style.justifyContent = "center";
  cont.style.alignItems = "center";
  var main = document.createElement("DIV");
  cont.appendChild(main);
  main.style.width = "900px";
  main.style.height = "700px";
  main.style.display = "flex";
  main.style.boxShadow= "0 8px 8px 0 rgba(0, 0, 0, 0.4)";
   var textDiv = document.createElement("DIV");
   var Image = document.createElement("DIV");
   main.appendChild(textDiv);
   main.appendChild(Image);
   Image.style.width = "50%";
   Image.style.height = "700px";
   Image.style.background = "url('Images/exdriving.jpg')";
    Image.style.backgroundPosition = "center";
    Image.style.backgroundSize = "420px 650px";
    Image.style.backgroundRepeat = "no-repeat";	
   textDiv.style.width = "50%";
   textDiv.style.height = "700px";
   var menu = document.createElement("DIV");
   textDiv.appendChild(menu);
   menu.style.width = "100%";
   menu.style.height = "12%";
   menu.style.display = "flex";
   menu.style.alignItems = "center";
   var logo = document.createElement("img");
   var logolink = document.createElement("a");
   var menuabout = document.createElement("a");
   var menutravels = document.createElement("a");
   var menuprices = document.createElement("a");
   menu.appendChild(logolink);
   logolink.appendChild(logo);
   logolink.href="index.html";
   logo.style.width = "100px";
   logo.style.height = "70px";
   logo.src = "Images/logo.png";
   logo.style.marginLeft = "20px";
   menu.appendChild(menuabout);
   menu.appendChild(menutravels);
   menu.appendChild(menuprices);
   menuabout.style.marginLeft="50px";
   menuabout.innerHTML = "About Us";
   menuabout.style.color = "green";
   menuabout.href="#";
   menuabout.onmouseover = function(){menuabout.style.color = "black";}
   menuabout.onmouseup = function(){menuabout.style.color = "green";}
   menutravels.style.marginLeft="30px";
   menutravels.innerHTML = "Travelings";
   menutravels.style.color = "green";
    menutravels.href="#";
   menuprices.style.marginLeft="30px";
   menuprices.innerHTML = "Prices";
   menuprices.style.color = "green";
    menuprices.href="#";
   var text = document.createElement("DIV");
   textDiv.appendChild(text);
   var maintext = document.createElement("DIV");
   text.appendChild(maintext);
   text.style.width = "100%";
   text.style.height = "80%";
   text.style.marginTop = "30px";
   text.style.display = "flex";
   text.style.justifyContent = "center";
   maintext.style.width = "75%";
   maintext.style.height = "100%";
   maintext.style.padding = "20px";
   maintext.style.marginTop = "30px";
   var title = document.createElement("H1");
   var titletext = document.createTextNode(""); 
    title.appendChild(titletext); 
    maintext.appendChild(title);
    title.innerHTML = "DRIVING <br> THROUGH <br> CANYONS";

   	   var author = document.createElement("H3");
   var authortext = document.createTextNode(""); 
    author.appendChild(authortext); 
    maintext.appendChild(author);
    author.style.marginTop = "10px";
    author.innerHTML = "By <u> Michael </u> in <u> nature </u>";
       var description = document.createElement("p");
   var descriptiontext = document.createTextNode(""); 
    description.appendChild(descriptiontext); 
    maintext.appendChild(description);
    description.style.marginTop = "60px";
    description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.";


}
if (!az){
	arajinzapusk();
	az = !az;
}
