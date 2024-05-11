import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

const SOCKET_URL = 'http://localhost:8080/notifications'

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
    this.stompClient.connect(
      { Authorization: `Bearer ${this.token}` },
      this.onConnected.bind(this)
    )
  }

  onConnected() {
    this.stompClient.subscribe(
      '/topic/notifications',
      this.onNotificationReceived.bind(this)
    )
  }

  onNotificationReceived(payload) {
    console.log('Received notification:', payload.body)
  }

  subscribeToNotifications(callback) {
    if (this.stompClient && this.stompClient.connected) {
      const subscription = this.stompClient.subscribe(
        '/topic/notifications',
        callback
      )
      return subscription
    }
    return null
  }
}

export default new NotificationService()
