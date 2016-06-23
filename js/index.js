var app = angular.module('myApp', ['ngMaterial']);


app.controller('mainController', ['$scope', '$mdPainLessToast', function($scope, $mdPainLessToast) {
  $scope.title = 'Ramadan Calorie Meter';
  $scope.promo = 'Count your calories';

  $scope.items = [{
    name: 'Juice',
    calories: 17,
    cover: 'images/juice.jpg',
    count: 0,
    amount: '1 glass'
  }, {
    name: 'Fruits',
    calories: 30,
    cover: 'images/appetizer-1386743_1920.jpg',
    count: 0,
    amount: '1 bowl'
  }, {
    name: 'Pakora',
    calories: 30,
    cover: 'images/10-Best-Chicken-Pakora-Recipes-You-Must-Try2.jpg',
    count: 0,
    amount: '1 piece'
  }, {
    name: 'Beguni',
    calories: 35,
    cover: 'images/Crispy Greek Fried Eggplant recipe (Melitzanes tiganites).jpg',
    count: 0,
    amount: '1 piece'
  }, {
    name: 'Chola',
    calories: 364,
    cover: 'images/Chola-chickpea.jpg',
    count: 0,
    amount: '1 bowl'
  }, {
    name: 'Dates',
    calories: 12,
    cover: 'images/dates-2.jpg',
    count: 0,
    amount: '1 piece'
  }, {
    name: 'Halim',
    calories: 500,
    cover: 'images/HALIM.jpg',
    count: 0,
    amount: '1 bowl'
  }, {
    name: 'Jilapi',
    calories: 120,
    cover: 'images/jalebi-recipe-easy.jpg',
    count: 0,
    amount: '1 piece'
  }, {
    name: 'Alur Chop',
    calories: 170,
    cover: 'images/DSC03887.JPG',
    count: 0,
    amount: '1 piece'
  }, {
    name: 'Sandwich',
    calories: 340,
    cover: 'images/club-215639_1920.jpg',
    count: 0,
    amount: '1 piece'
  }, {
    name: 'Muri',
    calories: 17,
    cover: 'images/img_0340.jpg',
    count: 0,
    amount: '1 bowl'
  }, {
    name: 'Doi Bora',
    calories: 250,
    cover: 'images/dsc_0580.jpg',
    count: 0,
    amount: '1 bowl'
  }, {
    name: 'Shingara',
    calories: 300,
    cover: 'images/10258031_10151972850996746_8288722981410546476_o.jpg',
    count: 0,
    amount: '1 piece'
  }, {
    name: 'Khichuri',
    calories: 300,
    cover: 'images/khichdi-recipe.jpg',
    count: 0,
    amount: '1 bowl'
  }, {
    name: 'Noodles',
    calories: 221,
    cover: 'images/spaghetti-660748_1920.jpg',
    count: 0,
    amount: '1 bowl'
  }, {
    name: 'Fried Chicken',
    calories: 320,
    cover: 'images/fried-chicken-250863_1920.jpg',
    count: 0,
    amount: '1 piece'
  }];
  $scope.plusOne = function(index) {
    $scope.items[index].count += 1;
  };
  $scope.minusOne = function(index) {
    $scope.items[index].count -= 1;
  };
  $scope.checkboxModel = {
    value: false,
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

app.controller('AppCtrl', ['$scope', function($scope) {
  $scope.user = {};

  $scope.activities = [
    "Not Active", "Moderately Active", "Very Active",
  ];
  $scope.ageGroup = ['2-3', '4-8', '9-13', '14-18', '19-30', '31-50', '51 and older'];

//   $scope.calorieNeedboy = [
//     {
//       gender: Male,
//     activity: 'Not Active',
//     {
//       age: 2 - 3,
//
//       calorie_needed: 1000-1200
//     }, {
//       age: 4 - 8,
//
//       calorie_needed: 1200-1400
//     }, {
//       age: 9 - 13,
//
//       calorie_needed: 1600-2000
//     }, {
//       age: 14 - 18,
//
//       calorie_needed: 2000-2400
//     }, {
//       age: 19 - 30,
//
//       calorie_needed: 2400-2600
//     }, {
//       age: 30-51,
//
//       calorie_needed: 2200-2400
//     },
//
//     {
//       age: 51 and older,
//
//       calorie_needed: 2000-2200
//     }
//   },
//   {
//     gender: Male,
//   activity: 'Moderately Active',
//   {
//     age: 2 - 3,
//
//     calorie_needed: 1000-1400
//   }, {
//     age: 4 - 8,
//
//     calorie_needed: 1400-1600
//   }, {
//     age: 9 - 13,
//
//     calorie_needed: 1800-2200
//   }, {
//     age: 14 - 18,
//
//     calorie_needed: 2400-2800
//   }, {
//     age: 19 - 30,
//
//     calorie_needed: 2600-2800
//   }, {
//     age: 30-51,
//
//     calorie_needed: 2400-2600
//   },
//
//   {
//     age: 51 and older,
//
//     calorie_needed: 2200-2400
//   }
// },
// {
//   gender: Male,
// activity: 'Very Active',
// {
//   age: 2 - 3,
//
//   calorie_needed: 1000-1400
// }, {
//   age: 4 - 8,
//
//   calorie_needed: 1600-2000
// }, {
//   age: 9 - 13,
//
//   calorie_needed: 2000-2600
// }, {
//   age: 14 - 18,
//
//   calorie_needed: 2800-3200
// }, {
//   age: 19 - 30,
//
//   calorie_needed: 3000
// }, {
//   age: 30-51,
//
//   calorie_needed: 2800-3000
// },
//
// {
//   age: 51 and older,
//
//   calorie_needed: 2400-2800
// }
// }
//
//   ];
//
//   $scope.calorieNeedgirl = [
//     {
//       gender: Feale,
//     activity: 'Not Active',
//     {
//       age: 2 - 3,
//
//       calorie_needed: 1000-1200
//     }, {
//       age: 4 - 8,
//
//       calorie_needed: 1200-1400
//     }, {
//       age: 9 - 13,
//
//       calorie_needed: 1600-2000
//     }, {
//       age: 14 - 18,
//
//       calorie_needed: 2000-2400
//     }, {
//       age: 19 - 30,
//
//       calorie_needed: 2400-2600
//     }, {
//       age: 30-51,
//
//       calorie_needed: 2200-2400
//     },
//
//     {
//       age: 51 and older,
//
//       calorie_needed: 2000-2200
//     }
//   },
//   {
//     gender: Female,
//   activity: 'Moderately Active',
//   {
//     age: 2 - 3,
//
//     calorie_needed: 1000-1400
//   }, {
//     age: 4 - 8,
//
//     calorie_needed: 1400-1600
//   }, {
//     age: 9 - 13,
//
//     calorie_needed: 1800-2200
//   }, {
//     age: 14 - 18,
//
//     calorie_needed: 2400-2800
//   }, {
//     age: 19 - 30,
//
//     calorie_needed: 2600-2800
//   }, {
//     age: 30-51,
//
//     calorie_needed: 2400-2600
//   },
//
//   {
//     age: 51 and older,
//
//     calorie_needed: 2200-2400
//   }
// },
// {
//   gender: Female,
// activity: 'Very Active',
// {
//   age: 2 - 3,
//
//   calorie_needed: 1000-1400
// }, {
//   age: 4 - 8,
//
//   calorie_needed: 1600-2000
// }, {
//   age: 9 - 13,
//
//   calorie_needed: 2000-2600
// }, {
//   age: 14 - 18,
//
//   calorie_needed: 2800-3200
// }, {
//   age: 19 - 30,
//
//   calorie_needed: 3000
// }, {
//   age: 30-51,
//
//   calorie_needed: 2800-3000
// },
//
// {
//   age: 51 and older,
//
//   calorie_needed: 2400-2800
// }
// }
//
//   ];

}]);



app.service('$mdPainLessToast', function($mdToast) {
  return {
    show: function(content) {
      return $mdToast.show(
        $mdToast.simple()
        .content(content)
        .position('fixed')
        .hideDelay(61000)
      )
    }
  };
})
