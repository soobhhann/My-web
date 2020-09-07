import React, { useState, useEffect } from "react";
import "./about.css";

const About = () => {
  const [Lang, setLang] = useState("en")

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  switch (Lang) {
    case "en":
      return (
        <section className="about-sec">
          <div className="lang">
            <span
              onClick={() => setLang("fa")}
              style={
                Lang === "fa" ? { background: "#68b0ab", color: "#faf3dd" } : {}
              }
            >
              persian
            </span>
            <span
              onClick={() => setLang("en")}
              style={
                Lang === "en" ? { background: "#68b0ab", color: "#faf3dd" } : {}
              }
            >
              English
            </span>
          </div>

          <main className="main-content container">
            <p className="content">
              I am Sobhan Esfandiari, born on April 20, 2000, I am a student of
              industrial accounting and I am interested in the world of
              technology, especially website design and development. I started
              the web world with SEO and optimizing websites. I did SEO for
              almost a year until I realized that I could build a website much
              easier than I thought, and yes, of course I first felt that the
              website I had was working. It needs a series of facilities! So I
              started researching and learning about the web, and after a month
              I was able to design my first template that I had written with
              blank HTML and CSS. After a few months, I started learning the
              beautiful language of JavaScript.After a few courses and also
              doing a few mini-projects, I went to the React js library, which
              was also full of wonders and cool things.Now I try to get ahead of
              everyone by improving my work and create new things that no one
              has done before
            </p>
          </main>
        </section>
      );

    case "fa":
      return (
        <section className="about-sec">
          <div className="lang">
            <span
              onClick={() => setLang("fa")}
              style={
                Lang === "fa" ? { background: "#68b0ab", color: "#faf3dd" } : {}
              }
            >
              persian
            </span>
            <span
              onClick={() => setLang("en")}
              style={
                Lang === "en" ? { background: "#68b0ab", color: "#faf3dd" } : {}
              }
            >
              English
            </span>
          </div>

          <main className="main-content container">
            <p
              className="content"
              style={{ fontFamily: "Vazir", direction: "rtl" }}
            >
              من سبحان اسفندیاری متولد 20 فروردین 79 هستم دانشجوی رشته حسابداری
              صنعتی و علاقه مند به دنیای تکنولوژی مخصوصا طراحی و توسعه وبسایت
              هستم . دنیای وب رو با سئو و بهینه سازی کردن وبسایت ها شروع کردم به
              مدت تقریبا یک سال سئو انجام دادم تا اینکه فهمیدم میتونم خیلی ساده
              تر از اون چیزی که فکر میکردم یک وبسایت بسازم و بله البته که اولش
              احساس کردم وبسایتی که دارم روش کار میکنم یه سری امکانات نیاز داره!
              پس شروع کردم به پرس و جو کردن و یادگیری در زمینه وب و بعد از یک
              ماه تونستم اولین قالب خودم رو طراحی کنم که با اچ تی ام ال و سی اس
              اس خالی نوشته بودم. بعد از گذشت چندماه شروع به یادگیری زبان زیبای
              جاوا اسکریپت کردم.بعد از گذروندن چند دوره و همینطور انجام چند مینی
              پروژه به سراغ کتابخونه ریکت رفتم که اونجا هم پر از عجایب و چیزای
              باحال بود الانم سعی دارم با بهتر کردن کار خودم از همه جلو بزنم و
              چیزای جدیدی خلق کنم که کسی تا حالا نکرده
            </p>
          </main>
        </section>
      );

    default:
      break;
  }
};

export default About;
