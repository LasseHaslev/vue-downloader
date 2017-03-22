export default {

    props: {
        url: {
            type: String,
            required: true,
        },

        'show-adaptor': {
            type: Function,
            default( item ) {
                return item;
            },
        },
    },
}
