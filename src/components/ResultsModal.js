
import { forwardRef,useImperativeHandle, useRef } from 'react'

const ResultModal=forwardRef(function ResultsModal({restTime,targetTime,onReset},ref){
const dialog =useRef();
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })
    const userLost  = restTime<=0
    const formattedRestTime= (restTime/1000).toFixed(2);
    const score= 100-Math.floor((restTime/1000)/targetTime*100);

    return (
        <dialog ref={dialog}  className='result-modal'>
            <h2>{userLost? 'You Lost' :`Your score is ${score}` }</h2>
            <p>The target was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRestTime} seconds left.</strong></p>
            <form method='dialog' onSubmit={onReset}>
                <button>Close</button>
            </form>
         
        </dialog>
    )
})

export default ResultModal;