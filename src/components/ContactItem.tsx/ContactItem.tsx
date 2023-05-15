import { User } from '../../shared'

import styles from './ContactItem.module.scss'

interface ContactItemProps {
  user: User
}

export const ContactItem = (props: ContactItemProps) => {

  const { user } = props
  const { avatar = 'https://webmg.ru/wp-content/uploads/2022/06/i-226-1.jpeg', name, tel } = user
  return (
    <div className={styles.container}>
      <div className={styles.avatar_container}>
        <img className={styles.avatar} src={avatar === '#' ? 'https://webmg.ru/wp-content/uploads/2022/06/i-226-1.jpeg' : "#"} alt="аватар" />
      </div>
      <p className={styles.name_container}>{name}</p>
    </div>
  )
}