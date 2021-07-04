import {React  , useEffect , useRef} from 'react'
import './Inputs.css';


export default function Inputs() {
    const myRef = useRef();
    useEffect(()=>{
      myRef.current.focus()
    })
    
    function ContectInfo (e){
      console.log(e.target.value);
    
    }

    return (
        <div>
            <div className='contactForm'>



                <form className='contactForm'>



                    <div>
                        <label>Full Name :</label>
                        <input type="text" name="user_name" className="MyInput" ref={myRef} required />

                    </div>



                    <div>
                        <label>Email :</label>
                        <input type="email" name="user_email" className="MyInput" required />
                    </div>



                    <div>
                        <label>Message :</label>
                        <textarea name="message" className="MyInput" required />
                    </div>



                    <select name="cars" id="cars">
                        <option value="Manager">Manager</option>
                        <option value="Employee">Employee</option>
                    </select>



                    <div>
                        <button className="ContectBtn" onClick={ContectInfo}>Send</button>
                    </div>



                </form>

            </div>
        </div>
    )
}
