const $ = document.querySelector.bind(document)
let component = ""
const user = {
    id: 20,
    username: 'Nguyễn Quang Bảo',

}
const product = [{
    id: 10,
    name: 'lợn tươi'
}, {
    id: 11,
    name: "lợn non"
}, ]
const info = {
    facebook: 'https://facebook.com/boolean201',
}
const HEADER = (user) => {
    return `<h1>hello ${user.username}</h1>`
}
const MAIN = (product) => {
    let core = ""
    product.map((item) => {
        core += `<ul><li>${item.name}</li></ul>`
    })
    return core
}
const FOOTER = (info) => {

    return `<h1 style="text-align : center;">hello ${info.facebook}</h1>`

}
const allComponent = () => {
    const html = [{
        key: 'header',
        data: HEADER(user)
    }, {
        key: 'main',
        data: MAIN(product)
    }, {
        key: 'footer',
        data: FOOTER(info)
    }, ]
    return html
}
const render = () => {
    let core = ""
    allComponent().map(item => {
        core += item.data
    }).join("")
    return core
}
console.log(render());
$('#root').innerHTML = render()