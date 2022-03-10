let ws_btcusdt = new  WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let btcusdt_element = document.getElementById('btcusdt_price');
let previous_btcusdt_price = null;

//este bloque o funcion se ejecuta cada vez que se recibe un mensaje de la api
ws_btcusdt.onmessage = (event) =>
{
    let new_price = JSON.parse(event.data); //obtener el nuevo precio
    let price = parseFloat(new_price.p).toFixed(2); //convertir a dos decimales
    btcusdt_element.innerHTML =  price; //mostrar el nuevo precio
    btcusdt_element.style.color = !previous_btcusdt_price || price == previous_btcusdt_price ? 'black' : price > previous_btcusdt_price ? 'green' : 'red';  
    previous_btcusdt_price = price;
};

//---------------------------------------------------------

let ws_ethusdt = new  WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let ethusdt_element = document.getElementById('ethusdt_price');
let previous_ethusdt_price = null;

//este bloque o funcion se ejecuta cada vez que se recibe un mensaje de la api
ws_ethusdt.onmessage = (event) =>
{
    let new_price = JSON.parse(event.data); //obtener el nuevo precio
    let price = parseFloat(new_price.p).toFixed(2); //convertir a dos decimales
    ethusdt_element.innerHTML =  price; //mostrar el nuevo precio
    ethusdt_element.style.color = !previous_ethusdt_price || price == previous_ethusdt_price ? 'black' : price > previous_ethusdt_price ? 'green' : 'red';  
    previous_ethusdt_price = price;
};

//---------------------------------------------------------

