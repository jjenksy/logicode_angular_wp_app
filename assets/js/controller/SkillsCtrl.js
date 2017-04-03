/**
 * Created by jenksy on 4/1/17.
 */


(function () {
    angular
        .module('wpAngularTheme')
        .controller( 'SkillsCtrl',SkillsCtrl);

    SkillsCtrl.$inject = ['$scope'];

    function SkillsCtrl($scope) {

        $scope.labels =["Javascript", "CSS", "Angular", "Spring Boot", "Game Dev", "Java", "Software Development","Git"];

        $scope.data = [
            [90, 80, 90, 90, 90, 80, 90, 90]
        ];

        $scope.options ={
            responsive: true,
            title: {
                display: true,
                text: 'Custom Chart Title'
            },

            legend: {
                display: true,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }

        }

    }
}());