import BaseDownloader from './BaseDownloader';
export default {

    mixins: [ BaseDownloader ],

    template: `
        <div>
            <modal ref="modal">
                <div class="box">

                    <h1 class="title">{{ name }} {{ items.length == downloaded ? '(Downloaded)' : ''}}</h1>
                    <progress class="progress is-primary" :class="{ 'is-success': items.length == downloaded }" :value="downloaded" :max="items.length"></progress>

                    <div v-for="( item, index ) in items">
                        <hr>
                        
                        <downloader-item
                            :key="item.url"
                            :url="item.url"
                            :name="item.name"
                            :filename="item.name"
                            :ref="'downloader'"
                            :download-file="false"
                            @downloaded="onDownloaded"
                        ></downloader-item>
                    </div>
                </div>
            </modal>
        </div>
    `,

}
