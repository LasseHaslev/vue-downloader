import BaseDownloaderItem from './BaseDownloaderItem';
export default {

    mixins: [ BaseDownloaderItem ],

    template: `
        <div>
            <p><strong>{{ name }}</strong></p>
            <p><small>{{ loadedString }}</small></p>
            <progress :value="percentage" max="1" class="progress is-primary">{{ percentageString }}</progress>
        </div>
    `,

}
