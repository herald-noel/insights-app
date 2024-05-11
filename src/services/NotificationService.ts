import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

const SOCKET_URL = 'http://localhost:8080/our-websocket'

class NotificationService {
  stompClient: Stomp.Client
  token: string | null

  constructor() {
    this.initializeWebSocketConnection()
    this.token = localStorage.getItem('token')
  }

  initializeWebSocketConnection() {
    const socket = new SockJS(SOCKET_URL)
    this.stompClient = Stomp.over(socket)
    this.stompClient.connect({}, this.onConnected.bind(this))
  }

  onConnected() {
    this.stompClient.subscribe(
      '/topic/messages',
      this.onNotificationReceived.bind(this)
    )
  }

  onNotificationReceived(payload) {
    console.log('Received notification:', payload.body)
  }

  sendMessage(message: string) {
    console.log('sending message')
    this.stompClient.send(
      '/ws/message',
      {},
      JSON.stringify({ messageContent: message })
    )
  }
}

export default new NotificationService()
