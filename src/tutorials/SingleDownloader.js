import Downloader from '../index';
export default {
    template: `
        <div>
            <section class="section">
                <div class="container">
                    <h3 class="title is-2">
                        Single downloader
                    </h3>
                </div>
            </section>
            <section class="hero is-light">
                <div class="hero-body">
                    <div class="container">
                    <div class="columns">
                        <div class="column is-4-tablet is-2-desktop">
                            <div class="button is-primary is-fullwidth" @click="download">Start download</div>
                        </div>
                        <div class="column">
                            <downloader url="http://localhost:1337/download" name="my-cat.jpg" ref="downloader"></downloader>
                        </div>
                    </div>
                    </div>
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
