
app.controller('KeyController', function($scope, $ionicPopup) {
    $scope.keylist=[];
    $scope.requestButton = function(event){
        if($scope.editMode){
            var xPos = event.pageX - $('#keys').offset().left;
            var yPos = event.pageY - $('#keys').offset().top;

            console.log("requesting at: x "+xPos+" | "+yPos);
            $scope.enterKey(xPos, yPos);
        }
    }
    $scope.sendKey = function(index){
        if(!$scope.editMode){
            console.log("sending key: "+$scope.keylist[index].val)
            sendMsg('key', $scope.keylist[index].val);
        }
    }

    $scope.enterKey = function(xPos,yPos) {
        $scope.data = {};
        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            template: '<input type="text" ng-model="data.key">',
            title: 'Create Key with Value:',
            subTitle: 'Please a letter',
            scope: $scope,
            buttons: [
            { text: 'Cancel' },
            {
                text: '<b>Save</b>',
                type: 'button-positive',
                onTap: function(e) {
                    if (!$scope.data.key) {
                        //don't allow the user to close unless he enters wifi password
                        e.preventDefault();
                    } else {
                        console.log("2"+$scope.data.key);
                        $scope.keylist.push({val:$scope.data.key,x: xPos, y: yPos});
                    }
                }
            }
            ]
        });
    }
})


app.directive("keyCollection", function(){
    /*var keytemplate="";
      for(i = 0; i < keylist.length; i++){
      keytemplate += "<button style='position:absolute;left:"+keylist[i].x+"px;top:"+keylist[i].y+"px>"+keylist[i].val+"</button>";
      console.log(keytemplate);
      }
      */
    return {
        template : "<button class='keyButton' ng-repeat='ele in keylist' ng-mousedown='sendKey($index)' style='position:absolute;left:{{ele.x}}px;top:{{ele.y}}px'><p ng-click='gogo()'>{{ele.val}}</p></button>"
    };
})
