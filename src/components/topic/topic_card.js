import "./topic.css"

const Topic = (props) => {
    return (
        <div class="card bg-dark text-black">
            <div class="card-img-overlay">
                <h5 class="card-title">{props.topic_title}</h5>
            </div>
        </div>
        
    )
}

export default Topic;