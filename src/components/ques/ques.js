import { useState } from "react";
import "./ques.css"

const Question = (props) => {
    const [isSelected, setIsSelected] = useState(0);

    return (
        <div class="card m-2">
        <div class="card-body p-1">
            <h5 class="card-title">
                {props.quesText}
                <span className="plus" onClick={() => setIsSelected(!isSelected)}>
                    <button type="button" class="close" aria-label="Close">
                        <span aria-hidden="true">{isSelected ? "-" : "+"}</span>
                    </button>
                </span>
            </h5>
            
            <p class={isSelected ? "card-text ml-3" : "card-text ml-3 hidden"}>{props.quesDesc}</p>
        </div>
        </div>
    )
}

export default Question;