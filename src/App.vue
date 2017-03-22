<template>
    <div id="app">
        <section class="section">
            <div class="container">
                <h3 class="title is-1">
                    <a href="https://github.com/LasseHaslev/vue-item-picker">
                        @lassehaslev/vue-item-picker
                    </a>
                </h3>
            </div>
        </section>

        <multiple-downloader></multiple-downloader>
        <single-downloader></single-downloader>

        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container is-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SingleDownloader from './tutorials/SingleDownloader';
import MultipleDownloader from './tutorials/MultipleDownloader';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        SingleDownloader,
        MultipleDownloader,
    }
}
</script>
