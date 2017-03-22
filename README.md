# @lassehaslev/vue-image-picker

> Image picker using [ @lassehaslev/vue-item-picker ](https://github.com/LasseHaslev/vue-item-picker) and [Bulma](http://bulma.io/) styling.

## Installation
Run ```npm install @lassehaslev/vue-image-picker --save``` in your project folder

## Usage
This package uses [vue-resource](https://github.com/vuejs/vue-resource), so just make sure you include it.
#### Javscript
```js
// Import vue
import Vue from 'vue';
// Make sure you add vue Resource
import VueResource from 'vue-resource';
Vue.use( VueResource );

import ImagePicker from '@lassehaslev/vue-image-picker';
Vue.use( 'image-picker', ImagePicker );
```

#### Html
```html
<image-picker url="https://jsonplaceholder.typicode.com/photos?limit=10"
:items-adaptor="imagesAdaptor"
:item-adaptor="imageAdaptor"
:selected="selectedImage"
@confirm="selectImage"
ref="imagePicker"></image-picker>
```



## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
