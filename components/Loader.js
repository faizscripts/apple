import LoaderGif from '../public/Spinner-1s-200px.gif'
import Image from 'next/image';
export default function Loader() {
   return(
       <div className='loader'>
           <Image src={LoaderGif} height='300' width='300'></Image>
       </div>
   )
}