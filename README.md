# @lassehaslev/vue-downloader

## Installation
Run ```npm install @lassehaslev/vue-downloader --save``` in your project folder

## Usage
This package uses [vue-resource](https://github.com/vuejs/vue-resource), so just make sure you include it.
#### Javscript
```js
// Import vue
import Vue from 'vue';
// Make sure you add vue Resource
import VueResource from 'vue-resource';
Vue.use( VueResource );

import ImagePicker from '@lassehaslev/vue-downloader';
Vue.use( 'downloader', ImagePicker );
```

#### Html
```html
<downloader url="https://jsonplaceholder.typicode.com/photos?limit=10"
:items-adaptor="imagesAdaptor"
:item-adaptor="imageAdaptor"
:selected="selectedImage"
@confirm="selectImage"
ref="imagePicker"></downloader>
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
