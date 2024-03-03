'use strict'
let stompClient = null;
const connectingElement = document.querySelector('.connecting');

// init метод для установления соединения
const initConnect = () => {
    const socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);
}

const onConnected = () => {
    stompClient.subscribe('/topic/public', onWeatherReceived);
}

const onError = () => {
    connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
    connectingElement.style.color = 'red';
    connectingElement.hidden = false;
}

// имулируем действия отправки данных датчика на сервер
function sendWeatherData() {
    const temp = ['-24', '-1', '-10', '+12', '+2', '+1', '-5', '-20']
    const status = ['card-snow', 'card-rain', 'card-storm', 'card-sunny']
    setInterval(() => {
        if (stompClient) {
            const weatherData = {
                id: 1,
                temperature: temp[Math.floor(Math.random() * temp.length)],
                status: status[Math.floor(Math.random() * status.length)],
                city: 'Астана'
            }
            stompClient.send("/app/send.weather", {}, JSON.stringify(weatherData));
        }
    }, 3000)
}

function onWeatherReceived(payload) {
    const message = JSON.parse(payload.body);
    console.log(message)
    document.querySelector('.card').classList = `card ${message.status}`;
    document.getElementById("city").innerHTML = message.city;
    document.getElementById("temperature").innerHTML = `${message.temperature} &deg;C`;
}

initConnect()
sendWeatherData()