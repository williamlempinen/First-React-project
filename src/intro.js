import React from "react";

const Intro = (props) => {
    return (
        <div>
            <p>
                This is my first react app! I have learned a ton about <a href="https://reactjs.org/">React</a> by completing exercises (not certification projects yet) at <a href="https://www.freecodecamp.org/">freeCodeCamp.org</a> and at <a href="https://www.udemy.com/">Udemy.com. </a>
                Allthough freeCodeCamps FrontEnd technologies -course also taught me how to include <a href="https://redux.js.org/">Redux</a> with your React app, I think that I have to still learn more about it before I can implement it to my own projects. However, I do understand what purpose does Redux have and why it is good to include it in your projects, especially when your applications grow in size and have multiple stateful components.
            </p>
            <p>
                I think that I now know the key principles on developing with React. This project was build on 15.1.2023. Current date is: { props.date }
            </p>
        </div>
    );
}

export default Intro;