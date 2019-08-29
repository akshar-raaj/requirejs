requirejs(["app/two", "app/three", "vendor/jquery"], function (two, three, jquery) {
    two.sayTwo();
    console.log(jquery.sum(2, 3));
});
