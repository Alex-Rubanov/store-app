import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Refrigerators'},
            {id: 2, name: 'Smartphones'}
        ];
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Apple'}
        ];
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 1500, rating: 5, img: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-max-graphite-back.png?v=26'},
            {id: 2, name: 'Iphone 12 pro', price: 1500, rating: 5, img: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-max-graphite-back.png?v=26'},
            {id: 3, name: 'Iphone 12 pro', price: 1500, rating: 5, img: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-max-graphite-back.png?v=26'},
            {id: 4, name: 'Iphone 12 pro', price: 1500, rating: 5, img: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-max-graphite-back.png?v=26'},
            {id: 5, name: 'Iphone 12 pro', price: 1500, rating: 5, img: 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-max-graphite-back.png?v=26'}
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }
}