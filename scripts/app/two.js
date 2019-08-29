define(["app/one"], function (one) {
    const sayTwo = function () {
        one.sayOne();
        console.log("saying two");
    };
    return {
        sayTwo: sayTwo
    };
});
