import react from 'react'
import CloseIcon from '@material-ui/icons/Close';
function Slote({time,id,remove}){
    return(
        <div>   <div onClick={()=>{
            remove(id)
        }} className="sloteclose">
                    <CloseIcon />
                </div>
            <div className="slote">
                <h5>{time}</h5>
            </div>
        </div>
    )
}

export default Slote