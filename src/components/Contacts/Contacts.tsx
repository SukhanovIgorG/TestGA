import { ReactNode } from 'react';
import { message } from '../../shared/messages';
import { Chat } from '../Chat';
import { ContactItem } from '../ContactItem.tsx/ContactItem';

import styles from './Contacts.module.scss';

const testArrayMessages: Array<message> = [
  {
    from: { name: 'user', tell: 89995559966 },
    to: { name: 'other user', tell: 89995559977 },
    text: 'lorem ipsum dolor sit amet',
    time: new Date().toLocaleString()
  }, {
    from: { name: 'other user', tell: 89995559977 },
    to: { name: 'user', tell: 89995559966 },
    text: 'lorem ipsum dolor sit amet',
    time: new Date().toLocaleString()
  }
]

interface ContactsProps {
  children?: ReactNode;
}

const ContactList = [{ name: "Boris", tel: 89995558877, avatar: "#" }, { name: "Dima", tel: 89995668877, avatar: "#" }, { name: "Gosha", tel: 89995558866, avatar: "#" }]

export const Contacts = ({ children }: ContactsProps) => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_list}>
        {ContactList.map((contact) => (<ContactItem user={contact} key={contact.tel}></ContactItem>))}
      </div>
      <div className={styles.chat}>
        <Chat messages={testArrayMessages}></Chat>
      </div>
    </section>
  );
}
