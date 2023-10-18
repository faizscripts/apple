import Image from 'next/image';
import LoaderGif from '../public/loader.gif'

export default function Loader() {
   return(
       <div className='loader'>
           <Image src={LoaderGif} alt="loader" height='40' width='40'></Image>
       </div>
   )
}
