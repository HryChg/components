import React from 'react';
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import faker from "faker";


const App = () => {
    return (
        <div className={"ui container comments"}>
            <CommentDetail author={"Sam"}
                           timeAgo={"Today at 4:45pm"}
                           content={"Nice Blog Post!"}
                           avatar={faker.image.avatar()}
            />
            <CommentDetail author={"Alix"}
                           timeAgo={"Today at 2:00pm"}
                           content={"Blog More! We love you!"}
                           avatar={faker.image.avatar()}
            />
            <CommentDetail author={"BJ"}
                           timeAgo={"Yesterday at 5:00pm"}
                           content={"That is just your opinion ~~ "}
                           avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));