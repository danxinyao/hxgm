export default {
	data() {
		return {
		}
	},
	methods: {
        // 提示框
        hud(val) {
            if (val == 'loading') {
                this.util.msg.loading()
                setTimeout(() => {
                    this.util.msg.close()
                }, 2000)
            }
            else if (val == 'success') {
                this.util.msg.success('正确')
            }
            else if (val == 'error') {
                this.util.msg.error('错误')
            }
            else {
                this.util.msg.close()
            }
        }
	}
}