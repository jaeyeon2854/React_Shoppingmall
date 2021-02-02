import fetch from 'node-fetch'
import config from "../config.js";

const success = (req, res) => {
    return res.json({
        message: 'Success'
    })
}

const fail = (req, res) => {
    return res.json({
        message: 'Failed'
    })
}

const cancel = (req, res) => {
    return res.json({
        message: 'Canceled'
    })
}

const singleTest = async (req, res) => {
    const item = req.body
    const data = []
    for (let property in item) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(item[property]);
        data.push(encodedKey + "=" + encodedValue);
    }
    const bodyData = data.join('&')
    const response = await fetch('https://kapi.kakao.com/v1/payment/ready', {
        method: 'POST',
        headers: {
            'Authorization': `KakaoAK ${config.kakaoAdminKey}`,
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        body: bodyData,
    })
    const resp = await response.json()
    res.json({ redirect_url: resp.next_redirect_pc_url })
}

export default { success, fail, cancel, singleTest }