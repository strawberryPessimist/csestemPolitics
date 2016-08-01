var bills = [
 {
    title_without_number: "Social Security Equity Act of 1993"

 },
 {
    title_without_number: "To establish the Commission on the Social Status of Black Men and Boys, to study and make recommendations to address social problems affecting Black men and boys."
 },
 {
    title_without_number: "To delay for one year the release of the Overall Hospital Quality Star Ratings, and for other purposes."
 },
 {
    title_without_number: "To amend the Occupational Safety and Health Act of 1970 to require employers to provide menstrual hygiene products for employees."
 },
 {
    title_without_number: "To amend the Consumer Financial Protection Act of 2010 to establish requirements relating to rent-to-own transactions, and for other purposes."
 }
];


angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('petitionCtrl', function($scope) {

})
   
.controller('myGovernmentCtrl', function($scope) {

})
   
.controller('profileCtrl', function($scope) {

})
   
.controller('changePasswordCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('whatSNewCtrl', function($scope) {

})
   
.controller('allBillsCtrl', function($scope) {
    $scope.billOne = bills[0].title_without_number;
    $scope.billTwo = bills[1].title_without_number;
    $scope.billThree = bills[2].title_without_number;
    $scope.billFour = bills[3].title_without_number;
})
 