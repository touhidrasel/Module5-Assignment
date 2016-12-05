(function(){
    "use strict";

    angular.module("public")
        .controller("MyinfoController", MyinfoController);
        //console.log("my info");
    MyinfoController.$inject = ["ApiPath","menuInfo"];
    function MyinfoController(ApiPath, menuInfo){

        var $ctrl = this;
        menuInfo.basePath = ApiPath;
        $ctrl.feedback = menuInfo;
        console.log(menuInfo);

    }

})();
