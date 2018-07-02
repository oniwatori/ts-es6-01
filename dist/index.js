"use strict";
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var name = "Name";
        var message = name + " have a nice day!\n        asdasadsa";
        console.log(message);
        console.log("name:");
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var iterator = name_1[_i];
            console.log(iterator);
        }
    };
    return Startup;
}());
Startup.main();
//# sourceMappingURL=index.js.map