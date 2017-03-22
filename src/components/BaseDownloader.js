import ItemProps from './mixins/ItemProps';
import DownloaderItem from './DownloaderItem';

export default {

    mixins: [ ItemProps ],

    props: {
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

    data() {
        return {
            downloading: 0,
            downloaded: 0,
            isDownloading: false,
        };
    },

    methods: {
        download() {
            this.downloading = this.downloaded = 0;
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

            // console.log([this.downloaded, this.items.length]);

            if (this.downloaded == this.items.length) {
                this.wrapUp();
            }
        },

        wrapUp() {
            console.log('All done!');
        }
    },

    components: {
        DownloaderItem,
    }

}
