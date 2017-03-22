import downloadjs from 'downloadjs';
import axios from 'axios';
export default {

    props: {
        url: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        'download-function': {
            type: Function,
            default() {
                var self = this;
                return axios.get( this.url, {
                    onDownloadProgress: function( event ) {
                        self.onProgress( event.loaded, event.total );
                    },
                    responseType: 'blob',
                } );
            }
        },
        'auto-download': {
            type: Boolean,
            default: false,
        },
        'download-file': {
            type: Boolean,
            default: true,
        },

        'on-progress': {
            type: Function,
            default( loaded, total ) {
                this.loaded = loaded;
                this.total = total;
                this.percentage = this.loaded / this.total;

                this.$emit( 'progress', {
                    loaded: this.loaded,
                    total: this.total,
                    percentage: this.percentage,
                } );
            },
        },
        'on-complete': {
            type: Function,
            default( loaded, total ) {
                this.loaded = loaded;
                this.total = total;
                this.percentage = this.loaded / this.total;

                this.$emit( 'progress', {
                    loaded: this.loaded,
                    total: this.total,
                    percentage: this.percentage,
                } );
            },
        }
    },

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
                var response = {
                    file: item,
                    filename: self.name,
                };
                self.$emit( 'completed', response );
                if (self.downloadFile) {
                    downloadjs( response.file.data, response.filename );
                }
            } ).catch( function(error) {
                self.$emit( 'error', error )
            } );
        },
    },
    // Url
    // Name
    // Filename

}
