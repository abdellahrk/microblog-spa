
export default class Api {
    constructor(baseUrl) {
        this.baseUrl = 'https://microblog.ddev.site/api';
    }

    getBlogPosts() {
        return fetch(this.baseUrl+'/blog/all', {}).then(res => res.json())
    }
}