var initialState = [
    {
        id: 1,
        name: 'I phone X',
        image: 'https://vnn-imgs-f.vgcloud.vn/2018/07/10/16/hinh-anh-iphone-x-plus-voi-3-camera-sau-khien-cac-fan-phat-cuong-1.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 5
    },
    {
        id: 2,
        name: 'Sony Z5 Premium',
        image: 'https://vnreview.vn/image/14/41/79/1441791.jpg',
        description: 'Sản phẩm do Sony sản xuất',
        price: 400,
        inventory: 8,
        rating: 3
    },
    {
        id: 3,
        name: 'Oppo F1s',
        image: 'https://cdn.tgdd.vn/Files/2016/08/05/869827/oppof1s3.jpg',
        description: 'Sản phẩm do Oppo sản xuất',
        price: 450,
        inventory: 15,
        rating: 4
    }
];
const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}
export default products;