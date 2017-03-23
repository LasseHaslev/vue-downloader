# @lassehaslev/vue-downloader

## Installation
Run ```npm install @lassehaslev/vue-downloader --save``` in your project folder

## Usage

#### Javscript
```js
// Import vue
import Vue from 'vue';

import Downloader from '@lassehaslev/vue-downloader';
Vue.use( 'downloader', Downloader );
```

#### Html
```html
<!-- single downloader -->
<downloader
    url="http://localhost:1337/download" 
    name="my-cat.jpg"
    ref="downloader"></downloader>
<button @click.prevent="$refs.downloader.download();"></button>

<!-- Multiple downloader -->
<downloader
    :multiple="true"
    name="Beautiful pictures"
    :items="[
        {
            name: 'valley-sky-99551.jpeg',
            filename: 'valley-sky-99551.jpeg',
            url: 'http://localhost:1337/files/image.jpg',
        },
        {
            name: 'pexels-photo-298872.jpeg',
            filename: 'pexels-photo-298872.jpeg',
            url: 'http://localhost:1337/files/image-1.jpg',
        },
        {
            name: 'pexels-photo-23978.jpg',
            filename: 'pexels-photo-23978.jpg',
            url: 'http://localhost:1337/files/image-2.jpg',
        },
        {
            name: 'pexels-photo-198395.jpeg',
            filename: 'pexels-photo-198395.jpeg',
            url: 'http://localhost:1337/files/image-3.jpg',
        },
    ]"
    ref="multiDownload"></downloader>
<button @click.prevent="$refs.multiDownload.download();"></button>
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
