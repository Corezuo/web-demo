var myApp = angular.module('myApp', []);
/**
 * This controller is used to adjust the template component
 * @param $scope
 * @param $http
 */
myApp.controller('myCtrl', ['$scope', '$http', function ($scope, $http) {
    // 加载全部系统组件
    var param = {
        url: "data/system-component.json",
        sCallback: function (res) {
            var data = angular.copy(res.data.modules),
                modules = [],
                componentEnableStaus = {};
            for (var i = 0; i < data.length; i++) {
                var module = data[i];
                for (var j = 0; j < module.components.length; j++) {
                    var component = module.components[j];
                    if (component.component) {
                        module.components[j] = component.component;
                    }
                    // 组件默认禁用
                    componentEnableStaus[module.components[j].id] = false;
                }
                modules.push(module);
            }
            $scope.modules = modules;
            $scope.componentEnableStaus = componentEnableStaus;
            $scope.systemComponent = res.data.modules;
        }
    };
    baseRequest($http, param);

    // 加载模板预览组件
    param = {
        url: "data/preview-component-custom.json",
        sCallback: function (res) {
            $scope.templateModules = res.data;
        }
    };
    baseRequest($http, param);

    /**
     * 初始化组件启用状态
     * @param previewComponent 预览组件
     */
    function initComponentStatus (previewComponent) {
        var componentEnableStaus = $scope.componentEnableStaus;
        for (var i = 0; i < previewComponent.length; i++) {
            var module = previewComponent[i];
            for (var j = 0; j < module.rows.length; j++) {
                var row = module.rows[j];
                for (var n = 0; n < row.components.length; n++) {
                    var component = row.components[n];
                    if (component.component) {
                        componentEnableStaus[component.component.systemComponentId] = true;
                    } else {
                        componentEnableStaus[component.systemComponentId] = true;
                    }
                }
            }
        }
        $scope.componentEnableStaus = componentEnableStaus;
    }

    /**
     * 切换组件启用状态
     * @param componentId 组件id
     * @param showStatus  true-启用， false-禁用
     */
    $scope.doSwitchComponent = function (componentId, showStatus) {
        var componentEnableStaus = $scope.componentEnableStaus;
        componentEnableStaus[componentId] = !showStatus;
        $scope.componentEnableStaus = componentEnableStaus;
    };
}]);

/**
 * This controller is used to adjust the template component style
 * @param $scope
 * @param $http
 */
myApp.controller('previewCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.isFlag = true;
    $scope.getSystemComponent = function () {
        $scope.isFlag = false;
    }
}]);
