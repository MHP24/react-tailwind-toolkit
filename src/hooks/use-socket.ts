import { useEffect, useState } from 'react'
import { io, type Socket } from 'socket.io-client'

type Session = {
  socket?: Socket
  isOnline: boolean
}

export const useSocket = (serverUrl: string) => {
  const [session, setSession] = useState<Session>({
    socket: undefined,
    isOnline: false
  })
  const { socket } = session

  // * On unmount the socket connection will be closed
  useEffect(() => {
    return () => {
      session.socket?.disconnect()
    }
  }, [session])

  // * Connector, the authentication it's optional (used to identify the connection by unique id)
  // * without focusing on socketId, (id generated and validated by server before connection)
  // * requires your own business logic to handle the extra header
  const connect = (authentication = '') => {
    const ioSession = io(serverUrl, {
      extraHeaders: {
        authentication
      }
    }).connect()

    setSession({
      ...session,
      socket: ioSession,
      isOnline: true
    })
  }

  const disconnect = () => {
    socket?.disconnect()
  }

  // * Event handlers (listener and emitter)
  const on = <T>(event: string, callback: (data: T) => void) => {
    socket?.on(event, callback)
  }

  const emit = <T>(event: string, data: T) => {
    socket?.emit(event, data)
  }

  return {
    on,
    emit,
    connect,
    session,
    disconnect
  }
}
