import React, {useEffect} from "react";
import "./clock.css";

const Clock = () => {
    function initLocalClocks(dalje, hoursHtml, minutesHtml, secondsHtml) {
        let date = new Date();
        let seconds = date.getSeconds();
        let minutes = date.getMinutes();
        let hours = date.getHours();
        let hours_osaX, hours_osaY, minutes_osaX, minutes_osaY, seconds_osaX, seconds_osaY;
        dalje.minPre = dalje.minPre || minutes * 6;
        if (seconds === 0) {
            dalje.sec += 1;
            dalje.minPre = minutes * 6;
        }
        let hands = [{hand: "hours", angle: hours * 30 + minutes / 2}, {
            hand: "minutes", angle: dalje.minPre
        }, {
            hand: "seconds", angle: dalje.sec * 360 + seconds * 6
        }];
        // console.log(
        //   `${hours}:${minutes}:${seconds}`,
        //   hands[0].angle.toFixed(2),
        //   hands[1].angle.toFixed(2),
        //   hands[2].angle.toFixed(2)
        // );
        hoursHtml.style.transform = `rotateZ(${hands[0].angle}deg)`;
        minutesHtml.style.transform = `rotateZ(${hands[1].angle}deg)`;
        secondsHtml.style.transform = `rotateZ(${hands[2].angle}deg)`;
        hours_osaX = 6 * Math.cos((hands[0].angle / 180) * Math.PI);
        hours_osaY = -3 * Math.sin((hands[0].angle / 180) * Math.PI);
        minutes_osaX = 6 * Math.cos((hands[1].angle / 180) * Math.PI);
        minutes_osaY = -3 * Math.sin((hands[1].angle / 180) * Math.PI);
        seconds_osaX = 7 * Math.cos((hands[2].angle / 180) * Math.PI);
        seconds_osaY = -6 * Math.sin((hands[2].angle / 180) * Math.PI);
        hoursHtml.style.boxShadow = `${hours_osaX}px ${hours_osaY}px 2px 0px rgba(0,0,0,0.3)`;
        minutesHtml.style.boxShadow = `${minutes_osaX}px ${minutes_osaY}px 2px 0px rgba(0,0,0,0.3)`;
        secondsHtml.style.boxShadow = `${seconds_osaX}px ${seconds_osaY}px 2px 0px rgba(0,0,0,0.4)`;
    }

    useEffect(() => {
        let hoursHtml = document.querySelector(".hours");
        let minutesHtml = document.querySelector(".minutes");
        let secondsHtml = document.querySelector(".seconds");
        let dalje = {sec: 0, minPre: null};
        setInterval(() => {
            initLocalClocks(dalje, hoursHtml, minutesHtml, secondsHtml);
        }, 1000);
    }, []);
    return (<section className="clock-container">
        <article className="clock simple">
            <div className="hours-container">
                <div className="hours"/>
            </div>
            <div className="minutes-container">
                <div className="minutes"/>
            </div>
            <div className="seconds-container">
                <div className="seconds"/>
            </div>
        </article>
    </section>);
};
export default Clock;
