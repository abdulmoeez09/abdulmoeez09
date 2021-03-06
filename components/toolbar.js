import styles from '../styles/Toolbar.module.css'
import { useRouter } from 'next/router'
export const Toolbar = () => {
  const router = useRouter()
  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>HOME</div>
      <div onClick={() => router.push('/feed/1')}>Feed</div>
      <div onClick={() => router.push('/eom')}>EOM</div>
      <div
        onClick={() =>
          (window.location.href = 'https://twitter.com/AbdulMo19002182')
        }
      >
        Twitter
      </div>
    </div>
  )
}
