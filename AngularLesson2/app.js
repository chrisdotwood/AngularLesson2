/// <reference path="C:\Local Repositories\Interview practice\AngularLesson2\AngularLesson2\angular.js" />

angular.module("flipApp", [])
    .controller("flipController", function ($scope, $http) {
        $scope.title = "Flip - Reading Log";

        $scope.people;
        $scope.loading;

        $http.get("http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true&delay=2")
            .success(function (data) {
                $scope.people = data;
                $scope.$emit("UNLOAD");
            });

        $scope.$on("LOAD", function () { $scope.loading = true });
        $scope.$on("UNLOAD", function () { $scope.loading = false });

        $scope.$emit("LOAD");

    });