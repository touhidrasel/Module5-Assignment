(function(){
    "use strict";

    angular.module("public")
        .controller("SignUpController", SignUpController);

    SignUpController.$inject = ["$scope","MenuService"];
    function SignUpController($scope, MenuService){

        var signup = this;
        signup.sendFeedback = function(){

           MenuService.getFavoriteDish($scope.feedback.favorite)
            .then(function(result){
               $scope.feedback.menuItem= result;
               $scope.error = false;
               MenuService.setInfo($scope.feedback);
              // console.log($scope.feedback);
            })
            .catch(function (err){
                $scope.error = true;
            });
            return true;
        };
    }

})();
