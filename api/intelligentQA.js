import request from '../utils/request.js'

export const selectMenuByKeyword = (data) => {
    return new request({
        url: './menu/selectMenuByKeyword',
        method: 'post',
        data: data
    });
}
