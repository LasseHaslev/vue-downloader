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

        <single-downloader></single-downloader>
        <multiple-downloader></multiple-downloader>
        <selectable-multiple-downloader></selectable-multiple-downloader>

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
import SelectableMultipleDownloader from './tutorials/SelectableMultipleDownloader';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        SingleDownloader,
        MultipleDownloader,
        SelectableMultipleDownloader,
    }
}
</script>
