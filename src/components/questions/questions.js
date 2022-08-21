import "./questions.css"
import { useContext, useState } from "react";
import Question from "../ques/ques";
import { faqData } from "../../data/data";

const Questions = (props) => {
    const [close , setClose] = useState(!props.selectedState);
    const [quesList, setQuesList] = useState(faqData[props.topic]);
    const [searchedQues, setSearchedQues] = useState("");

    const search = () => {
        const ques = document.getElementById("search-ques").value.trim().toLowerCase();
        setQuesList(faqData[props.topic].filter((data) => {
            return data.question.toLowerCase().includes(ques);
        }))

        // setTopics(topicList);
    }

    return (
        <div className={close ? "questions-box hidden": "questions-box"}>
            <div className="title">
                What's On your Mind?
            <span onClick={() => {
                setClose(true)
                props.stateHandler()}}>
                <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </span>
            </div>

            <div class="input-group mb-3 sticky">
            <input onChange = {(e) => {
                setSearchedQues(e.target.value);
                search();
            }} id="search-ques" value={searchedQues} type="text" class="form-control" placeholder="Search For Topic" aria-label="Search For Topic" aria-describedby="basic-addon2"/>
            {/* <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" onClick={search}>Button</button>
            </div> */}
        </div>

            <div className="ques-box">
                {
                    quesList.map((data) => {
                        return <Question quesText={data.question} quesDesc={data.answer} />
                    })
                }                
            </div>
        </div>
    )
}

export default Questions;