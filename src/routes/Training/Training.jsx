import './training.css'
import training from '../../assets/images/training.jpg'


export const Training = () => 
{
  return(
    <div className='training'>

    <h1 className='training-title'>Upcoming Trainings</h1>
    <img className='training-img' src={training} alt='Vehicle and generator training'></img>

    <p className='venue'> Venue: Center for Energy Research and Development, OAU</p>

    <p className='date'> Date: 27th - 30th November, 2023 || 4th - 7th December 2023</p>

    <p className='regLink'>Use this <a href='https://ztenig.com/training'>link</a> to register </p>
  
      </div>
  )
}

