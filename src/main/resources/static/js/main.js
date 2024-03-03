'use strict'
let stompClient = null;

// init метод для установления соединения
const initConnect = () => {
    const socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, onConnected, onError);
}

const onConnected = () => {
    stompClient.subscribe('/topic/public', onMessageReceived);
}

const onError = () => {

}

// имулируем действия отправки данных датчика на сервер
function sendMessage() {
    setInterval(() => {
        if (stompClient) {
            const chatMessage = {
                id: 1,
                temperature: Math.floor(Math.random() * 30),
                city: 'Astana'
            }
            stompClient.send("/app/send.weather", {}, JSON.stringify(chatMessage));
        }
    }, 3000)
}

function onMessageReceived(payload) {
    const message = JSON.parse(payload.body);
    console.log(message)
    document.getElementById("city").innerHTML = `Город: ${message.city}`
    document.getElementById("temperature").innerHTML = `${message.temperature} C`
}

initConnect()
sendMessage()