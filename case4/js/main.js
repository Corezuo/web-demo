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
                    // 默认启用
                    componentEnableStaus[module.components[j].id] = true;
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
 * Register style filters
 */
myApp.filter("filterStyle", function () {
    return function (input) {
        var valueStyleStr = "";
        if ("valueStyle" in input && input.valueStyle != null && input.valueStyle !== "") {
            var valueStyle = JSON.parse(input.valueStyle);
            angular.forEach(valueStyle, function (value, key) {
                valueStyleStr += humpToLine(key) + ":" + value + ";";
            });
        }
        if ("width" in input && input.width != null && input.width !== "") {
            valueStyleStr += "width:" + input.width + "%;";
        }
        return valueStyleStr;
    }
});

/**
 * This controller is used to adjust the template component style
 * @param $scope
 * @param $http
 */
myApp.controller('previewCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.doTemplateActive = function (templateComponent) {
        console.log("moduleId: ", templateComponent.moduleId);
        console.log("componentId: ", templateComponent.id);
        if (templateComponent.valueStyle == null || templateComponent === "") {
            templateComponent.valueStyle = {};
        }

        // Todo: 通过位置，找到指定组件。将其加边框，通过缓存，剔除上一个元素的边框。
        var valueStyle = JSON.parse(templateComponent.valueStyle);
        if (valueStyle.hasOwnProperty("border") && valueStyle.hasOwnProperty("backgroundColor")) {
            delete valueStyle.border;
            delete valueStyle.backgroundColor;
        } else {
            valueStyle.border = "1px solid orange";
            valueStyle.backgroundColor = "rgba(247, 248, 74, 0.67)";
        }
        templateComponent.valueStyle = JSON.stringify(valueStyle);
    };

    var param = {
        url: "data/system-component.json",
        sCallback: function (res) {
            var modules = res.data.modules;
            var moduleId = 4;
            var componentId = 559;

            angular.forEach(modules, function (value, key) {
                if (value.moduleId === moduleId) {
                    angular.forEach(value.components, function (value, key) {
                        // text
                        if (!(value.hasOwnProperty("component") && value.component != null && value.component !== "")) {
                            if (value.id === componentId) {
                                console.log("componentName: ", value.label);
                            }
                        }
                        // category
                        if (value.hasOwnProperty("category") && value.category != null && value.category !== "") {
                            var category = value.category;
                            if (category.id === componentId) {
                                console.log("componentName: ", category.label);
                            }
                        }
                        // tableTitle
                        if (value.hasOwnProperty("tableTitle") && value.tableTitle != null && value.tableTitle !== "") {
                            var tableTitle = value.tableTitle;
                            if (tableTitle.id === componentId) {
                                console.log("componentName: ", tableTitle.label);
                            }
                        }
                        // thead
                        if (value.hasOwnProperty("thead") && value.thead != null && value.thead !== "") {
                            angular.forEach(value.thead.tableRowSet.columnSet, function (value, key) {
                                if (value.id === componentId) {
                                    console.log("componentName", value.label);
                                }
                            })
                        }
                        // tbody
                        if (value.hasOwnProperty("tbody") && value.tbody != null && value.tbody !== "") {
                            angular.forEach(value.tbody.tableRowSet, function (value, key) {
                                angular.forEach(value.columnSet, function (value, key) {
                                    if (value.id === componentId) {
                                        console.log("componentName: ", value.label);
                                    }
                                });
                            })
                        }
                    });
                }
            });
        }
    };
    baseRequest($http, param);
}]);
