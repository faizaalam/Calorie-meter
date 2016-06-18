var app = angular.module('myApp' , ['ngMaterial']);


app.controller('mainController' , ['$scope' ,'$mdPainLessToast', function($scope, $mdPainLessToast){
  $scope.title = 'Ramadan Calorie Meter';
  $scope.promo = 'Count your calories';

  $scope.items = [
    {
      name: 'Lemon Juice',
    	calories: 10,
    	cover: 'http://le-mugs.com/wp-content/themes/mugs/images/1a.png',
    	count: 0,
      checked: false
    },
        {
      name: 'Halim',
    	calories: 100000,
    	cover: 'http://le-mugs.com/wp-content/themes/mugs/images/1b.png',
    	count: 0,
      checked: false
    },
        {
      name: 'Apple',
    	calories: 200,
    	cover: 'http://le-mugs.com/wp-content/themes/mugs/images/3a.png',
    	count: 0,
      checked: false
    },
        {
      name: 'Mango',
    	calories: 500,
    	cover: 'http://le-mugs.com/wp-content/themes/mugs/images/1c.png',
    	count: 0,
      checked: false
    },
    {
      name: 'Beguni',
    	calories: 110,
    	cover: 'images/beguni.jpg',
    	count: 0,
      checked: false
    },
        {
      name: 'Bora',
    	calories: 108,
    	cover: 'http://le-mugs.com/wp-content/themes/mugs/images/1b.png',
    	count: 0,
      checked: false
    },
        {
      name: 'Boro Baper Pola',
    	calories: 2000,
    	cover: 'http://le-mugs.com/wp-content/themes/mugs/images/3a.png',
    	count: 0,
      checked: false
    },
        {
      name: 'Burger',
    	calories: 5,
    	cover: 'images/burger.jpg',
    	count: 0,
      checked: false
    },
    {
  name: 'Jilapi',
  calories: 180,
  cover: 'http://le-mugs.com/wp-content/themes/mugs/images/1b.png',
  count: 0,
  checked: false
},
    {
  name: 'Boot',
  calories: 200,
  cover: 'http://le-mugs.com/wp-content/themes/mugs/images/3a.png',
  count: 0,
  checked: false
},
{
name: 'Boot',
calories: 200,
cover: 'http://le-mugs.com/wp-content/themes/mugs/images/3a.png',
count: 0,
checked: false
},
{
name: 'Boot',
calories: 200,
cover: 'http://le-mugs.com/wp-content/themes/mugs/images/3a.png',
count: 0,
checked: false
},
{
name: 'Boot',
calories: 200,
cover: 'http://le-mugs.com/wp-content/themes/mugs/images/3a.png',
count: 0,
checked: false
},
{
name: 'Boot',
calories: 200,
cover: 'http://le-mugs.com/wp-content/themes/mugs/images/3a.png',
count: 0,
checked: false
},
{
name: 'Boot',
calories: 200,
cover: 'http://le-mugs.com/wp-content/themes/mugs/images/3a.png',
count: 0,
checked: false
},
{
name: 'Boot',
calories: 200,
cover: 'http://le-mugs.com/wp-content/themes/mugs/images/3a.png',
count: 0,
checked: false
},
    {
  name: 'Ice Cream',
  calories: 500,
  cover: 'http://le-mugs.com/wp-content/themes/mugs/images/1c.png',
  count: 0,
  checked: false
}
  ];
  $scope.plusOne = function(index) {
  	$scope.items[index].count += 1;
	};
  $scope.minusOne = function(index){
   $scope.items[index].count -= 1 ;
  };
  $scope.checkboxModel = {
       value : false,
 };
  $scope.total = function() {
        var total = 0;
        angular.forEach($scope.items, function(item) {
            total += item.count * item.calories;
        })

        return total;
    };
    $scope.show1 = function() {
      $mdPainLessToast.show('1 Item added to calorie counter')
    };
    $scope.myVar = false;
    $scope.myVarTrue = true;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
        $scope.myVarTrue = !$scope.myVarTrue;
    };
    $scope.show2 = function() {
      $mdPainLessToast.show('1 Item deleted from calorie counter')
    };
    $scope.myVar = false;
    $scope.myVarTrue = true;
    $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
        $scope.myVarTrue = !$scope.myVarTrue;
    };
}]);



app.service('$mdPainLessToast', function($mdToast) {
  return {
    show: function(content) {
    return $mdToast.show(
      $mdToast.simple()
        .content(content)
        .position('fixed')
        .hideDelay(61000)
    )}
  };
})
