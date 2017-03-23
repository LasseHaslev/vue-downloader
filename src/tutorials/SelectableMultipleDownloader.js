import Downloader from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">
                        Selectable multiple downloader
                    </h3>
                    <p>Show how to use as a selectable downloads.</p>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="container">
                        <table class="table">
                            <tr v-for="( item, index ) in images">
                                <td>
                                    <input type="checkbox" name="" v-model="downloadable" :value="index">
                                </td>
                                <td>{{ item.name }}</td>
                            </tr>
                        </table>
                        <downloader :multiple="true" name="Selected images" :items="downloadableFiles" ref="downloader"></downloader>
                        <div class="button is-primary is-fullwidth" @click="download">Start download</div>
                    </div>
                </div>
            </section>
        </div>
    `,

    computed: {
        downloadableFiles() {
            var self = this;
            return this.images.filter( function( item, index ) {
                return self.downloadable.indexOf( index ) != -1;
            } );
        }
    },

    data() {
        return {
            downloadable: [],
            images: [
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
            ],
        };
    },

    methods: {
        download() {
            // console.log( this.$refs.downloader );
            this.$refs.downloader.download();
        }
    },

    components: {
        Downloader,
    }
}
