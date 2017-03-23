import downloadjs from 'downloadjs';
import jszip from 'jszip';
import ItemProps from './mixins/ItemProps';
import DownloaderItem from './DownloaderItem';

import { Modal } from '@lassehaslev/vue-modal';

export default {

    mixins: [ ItemProps ],

    props: {
        'hide-downloaded': {
            type: Boolean,
            default: true,
        },
        url: {
            type: String,
            default: null,
        },
        name: {
            type: String,
            default: 'download',
        },
        multiple: {
            type: Boolean,
            default: false,
        },
        items: {
            type: Array,
            default() {
                return [];
            },
        },
        // how many downloads can be downloaded at the same time
        'num': {
            type: Number,
            default: 1,
        },
    },

    mounted() {
        if (!this.multiple && this.autoDownload) {
            this.download();
        }
    },

    data() {
        return {
            downloading: 0,
            downloaded: 0,
            isDownloading: false,

            zip: null,
        };
    },

    methods: {
        download() {
            if (this.multiple) {
                this.downloadMultiple();
            }
            else {

                this.$refs.modal.open();
                this.$refs.downloader.download();
            }
        },
        downloadMultiple() {
            this.$refs.modal.open();
            this.downloading = this.downloaded = 0;

            // Prepare zip file
            this.zip = jszip();

            var length = Math.min( this.num, this.$refs.downloader.length );


            // console.log(length);
            // Loop through all files
            for (var i = 0, len = length; i < len; i++) {
                this.downloadNext();
            }
            // Check how many downloads
            // Download each
            // Zip folder and download
        },

        downloadNext() {
            this.$refs.downloader[this.downloading].download();
            this.downloading++;
        },

        onDownloaded( item ) {
            if ( this.downloading < this.items.length ) {
                // Add to folder
                // When one is down continue to next
                this.downloadNext();
            }
            this.downloaded++;

            // Add file to zip
            this.zip.file( item.filename, item.file.data );

            if (this.downloaded == this.items.length) {
                this.wrapUp();
            }
        },

        wrapUp() {
            var self = this;
            this.zip.generateAsync({type:"blob"})
                .then(function (blob) {
                    downloadjs( blob, self.name + '.zip' )
                });
        },

        shouldHide( index ) {
            if (!this.hideDownloaded) {
                return true;
            }
            return this.downloaded < index;
        },
    },

    components: {
        DownloaderItem,
        Modal,
    }

}
