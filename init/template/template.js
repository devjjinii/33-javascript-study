const data = [
    {
        name : 'starbucks',
        order : true,
        items : ['americano', 'milk', 'green-tea']
    },
    {
        name : 'coffee-bean',
        order : true
    }
]

// tagged template literals 
function fn(tags, name, items) {
    console.log(tags);
    if(typeof items === "undefined") {
        items = "주문 가능한 상품이 없습니다."
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}
data.forEach((v) => {
    const template = fn`<div>welcomes~ ${v.name}</div>
    <h2>주문가능목록 : ${v.items}</h2>`
    console.log(template)
})


