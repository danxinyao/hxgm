export default {
	name: 'PgHud',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'icon-loading'
        },
        content: {
            type: String,
            default: ''
        }
    }
}