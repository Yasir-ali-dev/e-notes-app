import React from 'react';
import {AiOutlineSend,AiOutlineStar,AiOutlineCheck} from "react-icons/ai";
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const MainPage = () => {
  return (
    <div className='main-content'>
        <Sidebar/>
        <main className='main'>
            <div className="notes">
                <div className="note">
                    <h3>Neural Networks</h3>
                    <div className="group-btn">
                        <button className='btn-svg'>
                            <AiOutlineSend/>
                        </button>
                        <button className='btn-svg'>
                            <AiOutlineStar/> 
                        </button>
                        <button className='btn-svg'>
                            <AiOutlineCheck/>
                        </button>
                    </div>
                </div>
                <div className="note">
                    <h3>Saphiens</h3>
                    <div className="group-btn">
                        <button className='btn-svg'>
                            <AiOutlineSend/>
                        </button>
                        <button className='btn-svg'>
                            <AiOutlineStar/> 
                        </button>
                        <button className='btn-svg'>
                            <AiOutlineCheck/>
                        </button>
                    </div>
                </div>
                <div className="note">
                    <h3>The Crime</h3>
                    <div className="group-btn">
                        <button className='btn-svg'>
                            <AiOutlineSend/>
                        </button>
                        <button className='btn-svg'>
                            <AiOutlineStar/> 
                        </button>
                        <button className='btn-svg'>
                            <AiOutlineCheck/>
                        </button>
                    </div>
                </div>
                
            </div>
            <img src={require("../assets/softwaredv.webp")} alt="image_" />
        </main>
    </div>
  )
}

export default MainPage;