angular.module('starter.controllers', [])

app.controller("LoginController", function($scope, $firebaseAuth, $location) {

$scope.login = function(username, password) {
  var fbAuth = $firebaseAuth(fb);
  fbAuth.$authWithPassword({
    email: username,
    password: password
  }).then(function(authData) {
      $location.path("/pelis");
  }).catch(function(error){
    console.error("ERROR" + error);
  });
}

$scope.register = function(username, password) {
  var fbAuth = $firebaseAuth(fb);
  fbAuth.$createUser({email: username, 
    password: password
  }).then(function() {
    return fbAuth.$authWithPassword({
    email: username,
    password: password
  });
  }).then(function(authData){
     $location.path("/pelis");
    }).catch(function(error){
    console.error("ERROR" + error);
  });
}

});

app.controller("PeliController", function($scope, $firebaseObject, $ionicPopup) {

$scope.list = function(){
  fbAuth = fb.getAuth();
  if(fbAuth){
    var syncObject = $firebaseObject(fb.child("users/" + fbAuth.uid));
    syncObject.$bindTo($scope, "data");
  }
}

$scope.create = function(){
 $ionicPopup.prompt({
  title: 'enter a new PELI item',
  inputType: 'text'
 })
 .then(function(result){
  if(result !== ""){
    if($scope.data.hasOwnProperty("Pelis") !== true){
       $scope.data.pelis = [];
    }
    $scope.data.pelis.push({title: result});
  }else{
    console.log("Action not completed");
  }
 
 });

}

});

app.controller('DashCtrl', function($scope) {})

app.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

app.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});
