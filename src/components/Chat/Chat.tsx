import { MessageInChat } from '../MessageInChat'
import { message } from '../../shared'

import styles from './Chat.module.scss'

interface ChatProps {
  messages: Array<message>
}

export const Chat = (props: ChatProps) => {
  const { messages } = props
  return (
    <div className={styles.message_list}>
      {messages.map((message, index) =>
        (<MessageInChat message={message} key={index} isOwner={index % 2 === 1 ? true : false} />)
      )
      }
    </div>
  )
}