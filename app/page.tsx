import {Hero} from '@/components'
export default function Home() {
  return (
  <>
  {/* <main className='h-screen -z-10'> */}
<Hero/>

<button className='btn m-5'>Applying Tailwind Classes</button>
<button className='btn m-5 hover:bg-yellow-400 text-pink-600'>Btn with yellow hover</button>

  {/* </main> */}
  
  </>
  )
}
