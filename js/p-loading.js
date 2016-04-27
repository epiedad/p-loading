/*!
 * jQuery Plugin P-loading v1.0.1
 * https://github.com/joseshiru/p-loading/
 *
 * Released under the MIT license
 *
 */

(function ( $ ) {
 
     $.fn.ploading = function( options ) {
        var $pluginElement       = this;
        var pluginTask           = {};
        var pluginPublicAction   = {};
        var pluginPrivateAction  = {};
        var settings;

        pluginTask.definePluginSettings = function () {
            var defaults;            //Default settings
            var defaultShowAnimation;//Default animation for show the loading
            var defaultHideAnimation;//Default animation for hide the loading
            
            //Param $container is the container of the loading
            defaultHideAnimation = function ($container, $selectedNode) {
                $container.hide();
            };
            defaultShowAnimation = function ($container, $selectedNode) {
                $container.show();
            };

            //Default settings.
            defaults = {
                action: 'show',                                  //Action to execute
                containerHTML: '<div/>',                         //HTML of the container
                containerAttrs: {},                              //Container Attributes and custom attributes (class,id,for,etc)
                containerClass: 'p-loading-container',           //Container CSS classes
                spinnerHTML: '<div/>',                           //HTML of the spinner
                spinnerAttrs: {},                                //Spinner Attributes and custom attributes (class,id,for,etc)
                spinnerClass: 'p-loading-spinner piano-spinner', //Spinner CSS classes
                onShowContainer: undefined,                      //A function to execute when the container get displayed
                onHideContainer: undefined,                      //A function to execute when the container get hidden
                onDestroyContainer: undefined,                    //A function to execute when the container is destroyed
                hideAnimation: defaultHideAnimation,             //A function to hide the container 
                showAnimation: defaultShowAnimation,             //A function to show the container
                destroyAfterHide: false,                         //Destoy the container after it gets hidden
                idPrefix: 'loader',                              //ID prefix of the container
                pluginNameSpace: 'p-loader',                     //Namespace of the plugin used in the data attribute of the selected node
                maskHolder: true                                 //Add the p-loading-mask class to the selected node
            };

            settings = $.extend(defaults, $.fn.ploading.defaults, options );
        };

        pluginTask.definePrivateActions = function () {
            pluginPrivateAction.buildPluginMarkup = function () {
                var renderPlugin;
                var buildPlugin = {};

                buildPlugin.$container = function () {
                    var containerHTML = settings.containerHTML;
                    var $container = $(containerHTML);
                    var randomNumberId = Math.round(new Date().getTime() + (Math.random() * 100));
                    var containerId = settings.idPrefix + randomNumberId;

                    $pluginElement.data(settings.pluginNameSpace + 'id', containerId);
                    $container.prop('id',containerId);
                    $container.attr(settings.containerAttrs);
                    $container.addClass(settings.containerClass);

                    return $container;
                };

                buildPlugin.$spinner = function () {
                    var spinnerHTML = settings.spinnerHTML;
                    var $spinner = $(spinnerHTML);

                    $spinner.attr(settings.spinnerAttrs);
                    $spinner.addClass(settings.spinnerClass);

                    return $spinner;
                };

                renderPlugin = function () {
                    var $container = buildPlugin.$container();
                    var $spinner = buildPlugin.$spinner();

                    $container.append($spinner);
                    //Prevent to display the container without the desire animation
                    $container.hide();

                    $pluginElement.prepend($container);
                };

                renderPlugin();
            };

            pluginPrivateAction.utils = function (utilsSettings) {
                var utilsAction = {};

                utilsAction.getContainerId = function () {
                    var containerId = $pluginElement.data(settings.pluginNameSpace + 'id');

                    return containerId;
                };

                return utilsAction[utilsSettings.action]();
           };
        };

        pluginTask.definePublicActions = function () {
            
            pluginPublicAction.destroy = function () {
                var containerId = pluginPrivateAction.utils({action: 'getContainerId'});
                var $container = $('#' + containerId);

                $container.remove();
                $pluginElement.removeData(settings.pluginNameSpace + 'id');

                if (settings.onDestroyContainer) {
                    settings.onDestroyContainer();
                }
            };

            pluginPublicAction.show = function () {
                //Get the container ID of the last plugin's usage in the current element.  
                var containerId = pluginPrivateAction.utils({action: 'getContainerId'});
                var containerExist = $('#' + containerId).length === 0 ? false : true;
                var $container;

                if (containerId && containerExist) {
                    $container = $('#' + containerId);
                    $container.show();
                } else {
                    pluginPrivateAction.buildPluginMarkup();
                    containerId = pluginPrivateAction.utils({action: 'getContainerId'});
                    $container = $('#' + containerId);
                }

                settings.showAnimation($container, $pluginElement);

                if (settings.maskHolder) {
                    $pluginElement.addClass('p-loading-element-mask');
                }

                if (settings.onShowContainer) {
                    settings.onShowContainer();
                }
            };

            pluginPublicAction.hide = function () {
                //Get the container ID of the last plugin's usage in the current element.  
                var containerId = pluginPrivateAction.utils({action: 'getContainerId'});
                var $container = $( '#' + containerId);

                settings.hideAnimation($container, $pluginElement);

                if (settings.maskHolder) {
                    $pluginElement.removeClass('p-loading-element-mask');
                }

                if (settings.onHideContainer) {
                    settings.onHideContainer();
                }

                if (settings.destroyAfterHide) {
                    pluginPublicAction.destroy();
                }
            };            
        };

        pluginTask.runPlublicAction = function () {
            //Refresh the settings of the plugin, in case there're new values
            pluginTask.definePluginSettings();
            pluginPublicAction[settings.action]();
        };

        pluginTask.initialize = function () {
            pluginTask.definePluginSettings();
            pluginTask.definePrivateActions();
            pluginTask.definePublicActions();
            pluginTask.runPlublicAction();
        };

        pluginTask.initialize();
        
        return $pluginElement;
    };
 
}( jQuery ));