import Summary from './Summary';
import Hero from './Hero';
function Page(){
    return(
        <div className='md:flex md:flex-row rounded-4xl bg-white md:w-11/12 md:shadow-xl w-full xl:w-1/2'>
            <Hero></Hero>
            <Summary></Summary>
        </div>
    )
}
export default Page;