import Image from 'next/image';
import LoaderGif from '../public/loader.gif'

export default function Loader() {
   return(
       <div className='loader'>
           <Image src={LoaderGif} alt="loader" height='300' width='300'></Image>
       </div>
   )
}
