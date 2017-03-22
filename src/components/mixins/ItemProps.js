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
            default( item ) {
                var self = this;
                var response = {
                    file: item,
                    filename: self.name,
                };
                self.$emit( 'completed', response );
                if (self.downloadFile) {
                    console.log(item);
                    downloadjs( response.file.data, response.filename );
                }
            },
        },
    },
}
