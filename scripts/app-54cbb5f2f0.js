!function(){"use strict";angular.module("app",["ngRoute","ui.bootstrap"])}(),function(){"use strict";function a(){}angular.module("app").controller("HomeController",a)}(),function(){"use strict";function a(){function a(){var a=this;a.isNavCollapsed=!0}var n={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{},controller:a,controllerAs:"nc",bindToController:!0};return n}angular.module("app").directive("navbarHeader",a)}(),function(){"use strict";function a(){}angular.module("app").controller("MainController",a)}(),function(){"use strict";function a(a,n){a.when("/",{templateUrl:"app/components/home/home.html",controller:"HomeController",controllerAs:"home"}).otherwise({redirectTo:"/"}),n.html5Mode(!0)}a.$inject=["$routeProvider","$locationProvider"],angular.module("app").config(a)}(),function(){"use strict";angular.module("app")}(),function(){"use strict";function a(a){a.debugEnabled(!0)}a.$inject=["$logProvider"],angular.module("app").config(a)}(),angular.module("app").run(["$templateCache",function(a){a.put("app/components/home/home.html","<div class=jumbotron><h1>Hello, world!</h1><p>Bacon ipsum dolor amet cupim venison biltong alcatra, cow landjaeger porchetta pig pork chop. Capicola corned beef pork, ball tip spare ribs t-bone landjaeger andouille beef filet mignon meatloaf turducken hamburger. Andouille pork brisket kevin meatball jowl t-bone turkey sirloin. Bacon drumstick biltong ham rump brisket tri-tip sausage spare ribs hamburger. Strip steak picanha kevin capicola cupim. Ground round kielbasa prosciutto bresaola boudin, shank alcatra burgdoggen venison. Prosciutto short ribs pork belly, pork pork loin boudin ribeye doner pig kielbasa ham porchetta andouille.</p></div>"),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-inverse" role=navigation><div class=navbar-header><button type=button class=navbar-toggle ng-click="nc.isNavCollapsed = !nc.isNavCollapsed"><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=#><span class="glyphicon glyphicon-sunglasses" aria-hidden=true></span></a></div><div class="collapse navbar-collapse" uib-collapse=nc.isNavCollapsed><ul class="nav navbar-nav"><li><a href=#>Link 1</a></li><li role=separator class=divider></li><li><a href=#>Link 2</a></li></ul></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-54cbb5f2f0.js.map
