/**
 * Created by jenksy on 4/1/17.
 */


(function () {
    angular
        .module('wpAngularTheme')
        .controller( 'SkillsCtrl',SkillsCtrl);

    SkillsCtrl.$inject = ['$scope'];

    function SkillsCtrl($scope) {

        $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

        $scope.data = [
            [65, 59, 90, 81, 56, 55, 40],
            [28, 48, 40, 19, 96, 27, 100]
        ];

    }
}());