var app = angular.module("bookmark");

app.controller('BookmarkListCtrl', ['NgTableParams','$scope', '$http',
	function(NgTableParams, $scope, $http){
		$scope.listBookmark = new NgTableParams({}, {
			getData: function(params) {
				return $http.get('http://localhost:8080/bookmark-ws/api/bookmark').then(function(response) {
		          params.total(response.data.inlineCount); // recal. page nav controls
		          return response.data.results;
		        });
			}
		});
	}
]);