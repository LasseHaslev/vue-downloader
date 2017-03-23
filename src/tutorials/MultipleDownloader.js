import Downloader from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">
                        Multiple downloader
                    </h3>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="container">
                        <div class="button is-primary is-fullwidth" @click="download">Start download</div>
                        <downloader :multiple="true" name="Beautiful pictures" :items="images" ref="downloader"></downloader>
                    </div>
                </div>
            </section>
        </div>
    `,

    data() {
        return {
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
