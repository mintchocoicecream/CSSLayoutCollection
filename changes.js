const existImg = document.getElementById("image00");
const items = document.getElementsByClassName("item");
const itemsList = [];

for(var i = 0; i <= 14; i++){
    itemsList.push(items[i]);
};

itemsList.forEach((item) => {
    item.addEventListener('mouseover', function(){
        if(item.id === "flexPoster"){
            existImg.setAttribute('src', 'dest/img/flexPoster.jpg');
        }else if(item.id === "gridPoster01"){
            existImg.setAttribute('src', 'dest/img/gridPoster01.jpg');
        }else if(item.id === "gridPoster02") {
            existImg.setAttribute('src', 'dest/img/gridPoster02.jpg');
        }else if(item.id === "gridPoster03") {
            existImg.setAttribute('src', 'dest/img/gridPoster03.jpg');
        }else if(item.id === "gridPoster04") {
            existImg.setAttribute('src', 'dest/img/gridPoster04.jpg');
        }else if(item.id === "curryCafe") {
            existImg.setAttribute('src', 'dest/img/curryCafe.jpg');
        }else if(item.id === "gallery") {
            existImg.setAttribute('src', 'dest/img/gallery.jpg');
        }else if(item.id === "gridColors") {
            existImg.setAttribute('src', 'dest/img/gridColors.jpg');
        }else if(item.id === "gridSite") {
            existImg.setAttribute('src', 'dest/img/gridSite.jpg');
        }else if(item.id === "besthorrorscenes") {
            existImg.setAttribute('src', 'dest/img/besthorrorscenes.jpg');
        }else if(item.id === "paintBox") {
            existImg.setAttribute('src', 'dest/img/paintBox.jpg');
        }else if(item.id === "10X19") {
            existImg.setAttribute('src', 'dest/img/10X19.jpg');
        }else if(item.id === "zoo") {
            existImg.setAttribute('src', 'dest/img/zoo.jpg');
        }else if(item.id === "schwartz") {
            existImg.setAttribute('src', 'dest/img/schwartz.jpg');
        }else if(item.id === "tolv") {
            existImg.setAttribute('src', 'dest/img/tolv.jpg');
        };
    });
});
