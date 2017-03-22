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
                        <downloader url="http://localhost:1337/download" name="my-cat.jpg" ref="downloader"></downloader>
                        <pre>{{ images }}</pre>
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
                    url: 'https://static.pexels.com/photos/99551/hot-air-balloon-valley-sky-99551.jpeg',
                },
                {
                    name: 'pexels-photo-298872.jpeg',
                    filename: 'pexels-photo-298872.jpeg',
                    url: 'https://static.pexels.com/photos/298872/pexels-photo-298872.jpeg',
                },
                {
                    name: 'pexels-photo-23978.jpg',
                    filename: 'pexels-photo-23978.jpg',
                    url: 'https://static.pexels.com/photos/23978/pexels-photo-23978.jpg',
                },
                {
                    name: 'pexels-photo-198395.jpeg',
                    filename: 'pexels-photo-198395.jpeg',
                    url: 'https://static.pexels.com/photos/198395/pexels-photo-198395.jpeg',
                },
            ],
        };
    },

    methods: {
        download() {
            console.log( this.$refs.downloader.download() );
        }
    },

    components: {
        Downloader,
    }
}
