import axios from 'axios';
import ItemProps from './mixins/ItemProps';
export default {

    mixins: [ ItemProps ],

    data() {
        return {
            percentage: 0,
            loaded: 0,
            total: 0,
        }
    },

    computed: {
        loadedString: function() {


            if ( ! this.total ) {
                return 'Waiting...';
            }
            var completed = this.loaded == this.total ? ' (completed)' : '';

            return this.formatBytes( this.loaded, 1 ) +  ' of ' + this.formatBytes( this.total, 1 ) + completed;
        },

        percentageString: function() {
            return this.percentage * 100 + '%'   
        }
    },

    mounted() {
        if (this.autoDownload) {
            this.download();
        }
    },

    methods: {
        formatBytes(bytes,decimals) {
            if(bytes == 0) return '0 Byte';
            var k = 1000; // or 1024 for binary
            var dm = decimals + 1 || 3;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        },
        download() {
            this.loaded = this.percentage = 0;
            var self = this;
            this.downloadFunction().then( function( item ) {
                self.onComplete( item );
            } ).catch( function(error) {
                self.$emit( 'error', error )
            } );
        },
    },
    // Url
    // Name
    // Filename

}
