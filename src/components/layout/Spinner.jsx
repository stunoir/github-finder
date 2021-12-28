import SpinnerImg from './assets/loading.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img width={100} className='text-center mx-auto' src={SpinnerImg} alt='Loading...'></img>
    </div>
  )
}

export default Spinner
