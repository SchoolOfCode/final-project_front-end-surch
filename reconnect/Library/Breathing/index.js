import { nanoid } from 'nanoid';

let breathing = [
    {imgUrl:'https://i.ytimg.com/an_webp/F28MGLlpP90/mqdefault_6s.webp?du=3000&sqp=CPu0s5cG&rs=AOn4CLC8hI5wVLXqGXMvzD8CV_p2R3ixdw',
     videoUrl:'https://www.youtube.com/watch?v=F28MGLlpP90',
     title:'15 Minute Deep breathing Exercise | City of Hope'},

     {imgUrl:'https://i.ytimg.com/vi/tEmt1Znux58/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB-6lH2zKCDoNNyCBZ6Ma8lDDBWkQ',
     videoUrl:'https://www.youtube.com/watch?v=tEmt1Znux58',
     title:'Box breathing relaxation technique: how to calm feelings of stress or anxiety'}

]

breathing.forEach(e => {e.id=nanoid();
                        e.isFavourite=false;});

export default breathing;

