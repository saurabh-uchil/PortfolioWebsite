function changeImage() {
    document.body.classList.toggle("dark-theme");
    var icon = document.getElementById('moon');
    //if(source.localeCompare("http://127.0.0.1:5500/images/moon.png")==0){
     //   document.getElementById('moon').src="images/sun.png";
    //}else{
      //  document.getElementById('moon').src="images/moon.png";
    //}
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    }else{
        icon.src = "images/moon.png";
    }
}