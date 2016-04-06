(function() {
	var app = angular.module('task2', []);

	app.controller('TabContoller', ['$scope', function($scope) {
		this.items = [{title: 'Tab 1', active: true},
					 {title: 'Tab 2', active: false}/*,
					 {title: 'Tab 3', active: false},
					 {title: 'Tab 4', active: false},
					 {title: 'Tab 5', active: false},
					 {title: 'Tab 6', active: false}*/];

		this.content = {text:'Content of ' +  this.items[0].title};

		var items = this.items;
		var content = this.content;

		this.onTabActivatedFunc = function(item) {
			for (var i = 0; i < items.length; i++) {
				items[i].active = false;
			}
			item.active = true;
			content.text = "Content of " + item.title;
		};
	}]);

	app.directive('tabs', function () {
		return {
			restrict: 'E',
			transclude: true,
			scope: {
				items: '=',
				content: '=',
				onTabActivated: "&",
			},
			templateUrl: 'tabs-template.html'
		};
	}); 

})();