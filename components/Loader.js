import LoaderGif from '../public/Spinner-1s-200px.gif'
import Image from 'next/image';
export default function Loader() {
   return(
       <div className='loader'>
           <Image src={LoaderGif} alt="loader" height='300' width='300'></Image>
       </div>
   )
}
