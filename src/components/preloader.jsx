import React from 'react';
import { useEffect } from 'react';
import preLoaderAnim from '../animation/Animation';
import '../components/preloader.css'
import loader from '../assets/loader.svg'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'


const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim();
    }, []);

    return (
        <div className='preloader'>
            <h1 className='font-bolder flex justify-center items-center gap-3 '>Todo App <span><BsFillJournalBookmarkFill/></span></h1>
            <div className="text-container">
                <span style={{color:'aqua'}}>Innovations,</span>
                <span>Creations,</span>
                <span style={{color:'aqua'}}>Developments</span><br />
                <span style={{textAlign:'center'}}>Let's move towards <br /><span style={{color:'aqua', textAlign:'center'}}>The Future!</span></span>
            </div>
            <span style={{display:'flex', flexDirection:'row', alignItems:'center', fontSize:'20px', textAlign:'left', color:'aqua'}}>Loading<img src={loader} alt="Loader" /></span>
        </div>
    )
}

export default PreLoader