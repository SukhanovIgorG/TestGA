import { message } from "../../shared"

import styles from './MessageInChat.module.scss'

interface MessageProps {
  message: message,
  isOwner: boolean
}

export const MessageInChat = (props: MessageProps) => {
  const { message, isOwner } = props
  const { from, text, time } = message

  return (
    <div className={isOwner ? styles.message_container : styles.message_container_owner}><p>{text}</p><span>{from.name}</span><span>{time}</span></div>
  )
}