import {login as ajax} from 'services'

export default {
	data() {
		return {
		}
	},
	methods: {
        login() {
            this.$router.push('/queryfact')
        },
        //发送红包
        sendRedPack() {
        	ajax.sendRedPack().then((result) => {

        	})
        }
	}
}