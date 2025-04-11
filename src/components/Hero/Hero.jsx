import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {

  const text = "Hi, I'm Saurabh";
  const [displayText, setDisplayText] = useState("");
//   const speed = 150; 


  useEffect(() => {
    let i = 0;
    
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1)); 
      i++;
      if (i === text.length) clearInterval(interval);  
    }, 150);

        return () => clearInterval(interval);
    },[])




    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{displayText}</h1>
            <p className={styles.description}>
                I'm a full-stack developer and I have strong programming skills in C, C++, and JavaScript. I have a good understanding of subjects like Data Structures, DBMS, and Operating Systems.
            </p>
            <a href="mailto.anyemail@email.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/sourabh.png")} alt="Hero image of me" className ={styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}