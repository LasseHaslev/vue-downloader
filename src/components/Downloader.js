import BaseDownloader from './BaseDownloader';
export default {

    mixins: [ BaseDownloader ],

    template: `
        <div>
            <label for="">{{ loadedString }}</label>
            <progress :value="percentage" max="1" class="progress is-primary">{{ percentageString }}</progress>
        </div>
    `,

}
