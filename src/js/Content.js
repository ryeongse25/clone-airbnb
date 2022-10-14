import React, {useState} from 'react';
import SlideRoom from './SlideRoom.js';
import '../sass/Content.scss';
import NewSlide from './NewSlide.js';
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers.js';

const Content = () => {

    const [list, setList] = useState([[{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}]]);

    const onClick = (title) => {
        if (title == '기상천외한 숙소') {
            setList([[{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}], [{title: "Abiansemal, 인도네시아"}, {img: 'room2.jpeg'}, {star: '1.00'}]]);
        } else if (title == '국립공원') {
            setList([[{title: "Sindun-myeon, Icheon-si, 한국"}, {img: 'room1.jpeg'}, {star: '2.00'}], [{title: "Sindun-myeon, Icheon-si, 한국"}, {img: 'room1.jpeg'}, {star: '2.00'}], [{title: "Sindun-myeon, Icheon-si, 한국"}, {img: 'room1.jpeg'}, {star: '2.00'}], [{title: "Sindun-myeon, Icheon-si, 한국"}, {img: 'room1.jpeg'}, {star: '2.00'}], [{title: "Sindun-myeon, Icheon-si, 한국"}, {img: 'room1.jpeg'}, {star: '2.00'}], [{title: "Sindun-myeon, Icheon-si, 한국"}, {img: 'room1.jpeg'}, {star: '2.00'}], [{title: "Sindun-myeon, Icheon-si, 한국"}, {img: 'room1.jpeg'}, {star: '2.00'}], [{title: "Sindun-myeon, Icheon-si, 한국"}, {img: 'room1.jpeg'}, {star: '2.00'}], [{title: "Sindun-myeon, Icheon-si, 한국"}, {img: 'room1.jpeg'}, {star: '2.00'}], [{title: "Sindun-myeon, Icheon-si, 한국"}, {img: 'room1.jpeg'}, {star: '2.00'}]]);
        }
    }

    return (
        <div>
            <NewSlide function={onClick}/>
            <div className="content">
                <div className="container">
                    <div className="rooms">
                        {list.map((dict, idx) => {
                            return <SlideRoom key={idx+1} title={dict[0].title} img={dict[1].img} star={dict[2].star}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;