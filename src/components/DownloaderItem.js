import BaseDownloaderItem from './BaseDownloaderItem';
export default {

    mixins: [ BaseDownloaderItem ],

    template: `
        <div>
            <label for="">{{ loadedString }}</label>
            <progress :value="percentage" max="1" class="progress is-primary">{{ percentageString }}</progress>
        </div>
    `,

}
