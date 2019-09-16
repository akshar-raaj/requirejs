## What is requirejs

Requirejs is a module loader. It enables writing modularized code which is tidy and maintainable.

Modularized code ensures that the global namespace isn't polluted.

## Traditional approach

Let's assume there is an index.html which needs five different functions. There could be dependence among these functions.

    // one.js
    function sayOne() {
        console.log("saying one");
    }

    // two.js
    // This is dependent on sayOne
    function sayTwo() {
        sayOne();
        console.log("saying two");
    }

    // three.js
    function sayThree() {
        jQuery.find();
        console.log("saying three");
    }

    /* index.html */
    <body>
        <p>something</p>
        <script src="jquery.js"></script>
        <script src="one.js"></script> /* ensure that one.js is included before two.js */
        <script src="two.js"></script>
        <script src="three.js"></script>
    </body>

This is prone to breaking. requirejs fixed this.

## Requirejs way

    <body>
        <script data-main="scripts/main.js" src="scripts/require.js"></script>
    </body>
