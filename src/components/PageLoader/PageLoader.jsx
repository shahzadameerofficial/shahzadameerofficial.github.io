import { CircularProgress } from '@mui/material'
import styles from './PageLoader.module.css'
function PageLoader() {
  return (
    <div className={styles.loader}>
        <CircularProgress />
    </div>
  )
}

export default PageLoader