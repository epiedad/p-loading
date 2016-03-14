# P-Loading
P-Loading is a powerful, and intuitive jQuery plugin, for faster and easier web development, created by Jose Zuniga, which allows you to include an elegant responsive loading mask with many options of how to customize it.

>How many projects need a loading mask and how many times we create the same functionality again, and again?
>Don't repeat yourself, use P-Loading.

### What's included

```
p-loading/
├── css/
│   ├── p-loading.css
│   ├── p-loading.min.css
└── js/
    ├── p-loading.js
    └── p-loading.min.js
```

### Quick start

We provide compiled CSS and JS (p-loading.*), as well as compiled and minified CSS and JS (p-loading.min.*).

Start including the Javascript at the bottom of the body tag:

```
 <!-- jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.1.min.js"></script>

<!-- P-Loading JS -->
<script type="text/javascript" src="js/p-loading.min.js"></script>
```

Then include the CSS file in the head tag:

```
<link rel="stylesheet" type="text/css" href="css/p-loading.min.css" />
```


## Documentation
### Actions
The property "action" of the settings object that is passed as parameter to the ploading plugin, allows us to 
##### Show spinner
Use this for show the loading mask in the selected jQuery element.
This will create all the markup of the mask. 
```
$('#test').ploading({action: 'show'});
```
##### Hide spinner
Use this for hide the loading mask in the selected jQuery element.
The markup of the mask will be only hidden. 
```
$('#test').ploading({action: 'hide'});
```

##### Destroy spinner
Use this for destroy the markup of the loading mask. As consecuence the loading mask will disapear.
```
$('#test').ploading({action: 'destroy'});
```

### Plugin settings
Here're the plugin settings: 
```
$('#test').ploading({
    action: 'show',                                  //Action to execute (show, hide, destroy)
    containerHTML: '<div/>',                         //HTML of the container
    containerAttrs: {},                              //Container Attributes and custom attributes (class,id,for,etc)
    containerClass: 'p-loading-container',           //Container CSS classes
    spinnerHTML: '<div/>',                           //HTML of the spinner
    spinnerAttrs: {},                                //Spinner Attributes and custom attributes (class,id,for,etc)
    spinnerClass: 'p-loading-spinner piano-loader',  //Spinner CSS classes
    onShowContainer: undefined,                      //A function to execute when the container get displayed
    onHideContainer: undefined,                      //A function to execute when the container get hidden
    onDestroyContainer: undefined,                    //A function to execute when the container is destroyed
    hideAnimation: defaultHideAnimation,             //A function to hide the container 
    showAnimation: defaultShowAnimation,             //A function to show the container
    destroyAfterHide: false,                         //Destoy the container after it gets hidden
    idPrefix: 'loader',                              //ID prefix of the container
    pluginNameSpace: 'p-loader',                     //Namespace of the plugin used in the data attribute of the selected node
    maskHolder: true                                 //Add the p-loading-mask class to the selected node
})
``` 

The plugin settings also can be defined using the public variable:
```
$.fn.ploading.defaults = {

};
```
#### containerHTML
Receives a string with the desired HTML that will be used as the "loading mask" container. Example:
```
containerHTML: '<div class="my-custom-container"></div>';
```

#### containerAttrs
Receives an object with the desired attributes that will be used in the "loading mask" container. Example:
```
containerAttrs: {
    id: 'myId',
    customAtribute: '12'
};
```
Note: it uses the jQuery .attr() function.

#### containerClass
Receives a string with the desired CSS classes that will have the "loading mask" container. Example:
```
containerClass: 'my-custom-container';
```

#### spinnerHTML
Receives a string with the desired HTML that will be used as the "spinner". Example:
```
spinnerHTML: 'p-loading-spinner piano-loader';
```

#### spinnerAttrs
Receives an object with the desired attributes that will be used in the spinner. Example:
```
spinnerAttrs: {
    id: 'myId',
    customAtribute: '12'
};
```
Note: it uses the jQuery .attr() function.

#### spinnerClass
Receives a string with the desired CSS classes that will have the " loading mask"container. Example:
```
spinnerClass: 'my-custom-spinner fa-spin fa-spinner';
```

#### onShowContainer ($container, $selectedNode)
Receives a function (callback) that will be execute when the container is displayed. Example:
```
//Params
$container: "jQuery object of loading mask container"
$selectedNode: "jQuery object of selected HTML element, e.g: $('.this-element').ploading(..."
```
```
onShowContainer: function ($container, $selectedNode) {
    console.log('the loading mask is displayed');
};
```

#### onHideContainer ($container, $selectedNode)
Receives a function (callback) that will be execute when the container is hidden. Example:
```
//Params
$container: "jQuery object of loading mask container"
$selectedNode: "jQuery object of selected HTML element, e.g: $('.this-element').ploading(..."
```
```
onHideContainer: function ($container, $selectedNode) {
    console.log('the loading mask is hidden');
};
```

#### onDestroyContainer ($selectedNode)
Receives a function (callback) that will be execute when the container is destroyed. Example:
```
//Params
$selectedNode: "jQuery object of selected HTML element, e.g: $('.this-element').ploading(..."
```
```
onDestroyContainer: function ($selectedNode) {
    console.log('the loading mask is hidden');
};
```

#### hideAnimation ($container, $selectedNode)
Receives a function that will represent the hide process of the "loading mask" container. Useful when you want to customize the hide animation. Example:
```
//Params
$container: "jQuery object of loading mask container"
$selectedNode: "jQuery object of selected HTML element, e.g: $('.this-element').ploading(..."
```
```
hideAnimation: function ($container, $selectedNode) {
    $container.fadeOut();
};
```
Note: .fadeOut() is used by default as hide animation.

#### showAnimation ($container, $selectedNode)
Receives a function that will represent the show process of the "loading mask" container. Useful when you want to customize the show animation. Example:
```
//Params
$container: "jQuery object of loading mask container"
$selectedNode: "jQuery object of selected HTML element, e.g: $('.this-element').ploading(..."
```
```
showAnimation: function ($container, $selectedNode) {
    $container.fadeIn();
};
```
Note: .fadeIn() is used by default as show animation.

#### destroyAfterHide
Receives a string with a boolean value. If the value is true, then, the "loading mask"s HTML will be destroyed everytime it gets hidden. Example:
```
destroyAfterHide: true;
```

#### idPrefix
Receives a string that will be used as the prefix that is added to the random id of the "loading mask" container. Example:
```
idPrefix: 'loader;
//E.g: result: <div id="loader4234234"></div>
```

#### pluginNameSpace
Receives a string that will be used as the namespace that the plugin uses for save data in the selected HTML node (using jQuery .data() ). Example:
```
pluginNameSpace: 'p-loader';
```

#### maskHolder
Receives a boolean value. If the value is true, then, the plugin will add a css class (p-loading-element-mask) to the selected HTML node. Example:
```
maskHolder: true;
```
### Default Spinners
By default, P-loading includes 3 spinners http://projects.lukehaas.me/css-loaders/ that are based on CSS3 animations (We named them). Feel free to add support to others spinners.

We recommend you to define the spinnerClass in the public defaults variable of the P-lodiang plugin.
Example:
```
$.fn.ploading.defaults = {
    spinnerClass: 'your-spinner-class'
};
```


![alt tag](http://s8.postimg.org/7on1qvi05/spinners.png "Spinners")

Note: depending of your project CSS styles, you may modify the CSS of the P-loading plugin.

#### Piano spinner
Inside the plugin settings, define the spinnerClass as piano-spinner. Example
```
spinnerClass: 'piano-spinner'
```

#### Bubbling spinner
Inside the plugin settings, define the spinnerClass as piano-spinner. Example
```
spinnerClass: 'bubbling-spinner'
```

#### Bubble ride spinner
Inside the plugin settings, define the spinnerClass as piano-spinner. Example
```
spinnerClass: 'bubble-ride-spinner'
```
#### Are you using Font Awesome?
Use the Font Awesome icons as a spinner, adding the next settings to your plugin:

```
$.fn.ploading.defaults = {
    spinnerHTML: '<i></i>',
    spinnerClass: 'fa fa-spinner fa-spin p-loading-fontawesome'
};
```
Replace "fa-spinner" for the Font Awesome's animation you want.
Replace fa-sping for the Font Awesome's icon you want.

The default class for handle Font Awesome icons is: "p-loading-fontawesome".

## Contributing
  Feel free to contribute.

## Creators
 * Thanks to all the contributors.
 * [Jose Zuniga Marin](https://github.com/joseshiru).
 * CSS Loaders https://github.com/lukehaas/css-loaders
## Copyright and license

[MIT License](https://github.com/joseshiru/p-loading/blob/master/LICENSE)
