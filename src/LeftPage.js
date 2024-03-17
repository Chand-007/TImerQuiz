import {FaBookReader} from 'react-icons/fa'
import {CgDanger} from 'react-icons/cg'
import './LeftPage.css'
import { Questions } from './Questions'

const LeftPage=({question})=>{
    return(
        <div className='container'>
        <h1>TURING</h1>
        <div className='WorkIcon'>
        <FaBookReader/>
        </div>
        <h2 className='SectionHeading'>Work Experience Analysis</h2>
        <p className='QuestionStatus'>Questions {question.id} of {Questions.length}</p>
        <div className='questioncontainer'>
            <p class='question'>
                {question.question}
            </p>
        </div>
        <div className='BannerContainer'>
            <div className='Dangericon'>
                <CgDanger/>
            </div>
            <div className='SecondContainer'>
            <p className='heading-two'>
                Quick Note
            </p>
            <p className='content-two'>
                If the question is same as last one or blank, Please click on "Reload Question" 
            </p>
            </div>
           
        </div>
        <div className='ButtonContainer'>
            <button className='reload'>Reload Question</button>
            <button className='report'>Report a Problem</button>
        </div>
        </div>
    )
}

export default LeftPage