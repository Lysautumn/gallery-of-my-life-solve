const app = angular.module('myApp', []);

app.controller('GalleryController', function() {
    console.log('GalleryController loaded');

    let gallery = this;

    gallery.photos = placeholder.data;

    gallery.toggleDesc = toggleDesc;

    gallery.addLikes = addLikes;

    function toggleDesc(image) {
        image.showText = !image.showText;
    }

    function addLikes(image) {
        image.likes = image.likes + 1;
    }
    
});