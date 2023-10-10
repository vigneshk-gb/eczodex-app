
import HeroHome from '@/components/hero/HeroHome'
import Sidebar from '@/components/sidebar/Sidebar'
import Image from 'next/image'


const styles = {
  appWrapper: `w-[85%] h-screen mx-auto flex`,
  dummyContainer: `w-[22.43rem] h-screen rounded-r-[1rem] appearence-none`,
}


export default function Home() {
  return (
   <div className={styles.appWrapper}>
    <div className={styles.dummyContainer}>
    </div>
    <Sidebar/>
    <HeroHome/>
   </div>
  )
}
    