import "./Chat.css";
import {BiArrowBack} from "react-icons/bi"
import {RxDotFilled} from "react-icons/rx"
import {BsThreeDotsVertical} from "react-icons/bs"
import {IoCallOutline} from "react-icons/io5"
import {AiOutlineSend} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import {TiTick} from "react-icons/ti"
const Chats = () => {
  return (
    <>
    <div className="header2">
        <div className="online">
            <div className="back"><BiArrowBack/></div>
            <img src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            <div className="on">
                <h3>Farhan</h3>
                <p><RxDotFilled/>Online</p>
            </div>
        </div>
        <div className="call">
            <IoCallOutline/>
            <BsThreeDotsVertical/>
        </div>
    </div>
    <div className="actchat"> 
        {/* chat bubble */}
        <div className="chat-bubble">
            <div className="sender">
                <p>Lorem ipsum dolor sit amet </p>
                <br/>
                <span className="time1">10:45pm<TiTick/></span>
            </div>
             {/* Days */}
            <div className="days">
                <p>Yesterday</p>
            </div>
            <div className="receiver">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing </p>
                <br/>
                <span className="time1">10:45pm<TiTick/></span>
            </div>
            <div className="sender">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, expedita!</p>
                <br/>
                <span className="time1">11:45pm<TiTick/></span>
            </div>
            <div className="days">
                <p>Yesterday</p>
            </div>
            <div className="receiver">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                <br/>
                <span className="time1">12:45am<TiTick/></span>
            </div>
            <div className="sender">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <br/>
                <span className="time1">7:45am<TiTick/></span>
            </div>
            {/* <div className="days">
                <p>Today</p>
            </div> */}
            <div className="receiver">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim</p>
                <br/>
                <span className="time1">7:45am<TiTick/></span>
            </div>
            <div className="sender">
                <p>Lorem ipsum dolor sit amet consectetur </p>
                <br/>
                <span className="time1">7:45am<TiTick/></span>
            </div>
            <div className="days">
                <p>Today</p>
            </div>
        </div>
        {/* Search tab */}
        <div className="search-tab">
            <div className="plus"><AiOutlinePlus/></div>
            <input type="text" placeholder="enter your message"/>
            <div className="send"><AiOutlineSend/></div>
        </div>
    </div>
    
    </>
  )
}
export default Chats