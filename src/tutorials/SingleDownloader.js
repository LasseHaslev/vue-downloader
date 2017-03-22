import Downloader from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">
                        Image picker
                    </h3>
                    <h4 class="subtitle is-4">Single Downloader</h4>
        <br>


                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <downloader url="http://localhost:1337/download" name="my-cat.jpg" ref="downloader"></downloader>
                    <div class="button is-primary" @click="download">Start download</div>
                </div>
            </section>
        </div>
    `,

    methods: {
        download() {
            console.log( this.$refs.downloader.download() );
        }
    },

    components: {
        Downloader,
    }
}
