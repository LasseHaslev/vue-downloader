import BaseDownloader from './BaseDownloader';
export default {

    mixins: [ BaseDownloader ],

    template: `
        <div>
            <downloader-item
                v-for="( item, index ) in items"
                :key="item.url"
                :url="item.url"
                :name="item.name"
                :filename="item.name"
                :ref="'downloader'"
                :download-file="false"
                @downloaded="onDownloaded"
            ></downloader-item>
        </div>
    `,

}
