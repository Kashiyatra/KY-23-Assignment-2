import Topic from "../topic/topic_card";
import Questions from "../questions/questions";
import "./main.css"
import { useState } from "react";
import { topicList} from "../../data/data";
import {motion} from "framer-motion"

const Main = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [topicSelected, setTopicSelected] = useState("");
    const [topics, setTopics] = useState(topicList);
    const [searchedTopic, setSearchedTopic] = useState("");

    const search = () => {
        const topic = document.getElementById("search-topic").value.trim().toLowerCase();
        setTopics(topicList.filter((data) => {
            return data.toLowerCase().includes(topic);
        }))

        // setTopics(topicList);
    }

    const buttonVariants = {
        hover : {
            scale: 1.05,
            transition: {
                yoyo: Infinity,
                type: "spring",
                damping: 15
            }
        }
    }

    return (
        <div className="main-box">
            <div className="search-bar">
                <div class="input-group mb-3 sticky">
                    <input onChange={(e) => {
                        setSearchedTopic(e.target.value);
                        search();
                    }} id="search-topic" type="text" value={searchedTopic} class="form-control" placeholder="Search For Topic" aria-label="Search For Topic" aria-describedby="basic-addon2"/>
                </div>
            </div>
            <ul>
                {
                    topics.map((topic) => {
                        return <motion.div variants={buttonVariants} whileHover="hover">
                            <li onClick={() => {
                                setIsSelected(true);
                                setTopicSelected(topic);
                            }}><Topic topic_title={topic} /></li>
                        </motion.div>
                    })
                }
            </ul>
            {isSelected ? <Questions topic={topicSelected} selectedState={isSelected} stateHandler={() => setIsSelected(false)}/> : ""}
        </div>
    )
}

export default Main;