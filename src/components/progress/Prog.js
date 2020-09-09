import React, { useState, useEffect } from "react";
import "./prog.css";

const Prog = ({ done, title }) => {
  const [Style, setStyle] = useState({});

    useEffect(() => {
        const Scroll = e =>{
            let scl = e.target.documentElement.scrollTop
            if(scl > 230 && scl < 1000){
                const newStyle ={
                    width: done,
                    opacity: 1
                }
                setStyle(newStyle)
            }else {
                const newStyle = {
                    width: 0,
                    opacity: 0.3
                }
                setStyle(newStyle)
            }
        }
        window.addEventListener("scroll", Scroll)

        return () =>{
          window.removeEventListener("scroll", Scroll)
        }
    }, [done]);


  return (
    <div className="skills-list">
      <h4>{title}</h4>
      <div className="prog">
        <div style={Style} className="prog-bar">
          <h4>{done}</h4>
        </div>
      </div>
    </div>
  );
};
export default Prog;
