import BaseDownloader from './BaseDownloader';
export default {

    mixins: [ BaseDownloader ],

    template: `
        <div>
            <modal ref="modal">
                <div class="box">

                    <div v-if="multiple">

                        <h1 class="title">{{ name }} {{ items.length == downloaded ? '(Downloaded)' : ''}}</h1>
                        <h4 class="subtitle">{{ downloaded }} of {{ items.length }} downloaded.</h4>
                        <progress class="progress is-primary" :class="{ 'is-success': items.length == downloaded }" :value="downloaded" :max="items.length"></progress>

                        <div v-for="( item, index ) in items" v-show="shouldHide( index )">
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
                    <div v-else>
                        <downloader-item
                            :url="url"
                            :name="name"
                            :download-function="downloadFunction"
                            :on-progress="onProgress"
                            :on-complete="onComplete"
                            ref="downloader"
                        ></downloader-item>
                    </div>
                </div>
            </modal>
        </div>
    `,

}
