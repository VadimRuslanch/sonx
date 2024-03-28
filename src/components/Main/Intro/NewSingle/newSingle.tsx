'use client'
import styles from './newSingle.module.sass'
import React, {useState} from "react";
import Link from "next/link";

function newSingle() {

    // function fetchSpotify() {
    //     fetch('https://accounts.spotify.com/api/token', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/x-www-form-urlencoded',
    //         },
    //         body: 'grant_type=client_credentials&client_id=7b2a3ffaed0046cfa44a751df0164c5c&client_secret=33e3794b50b54cbd92535e0d5e1c62b7',
    //     })
    //         .then(res => {
    //             if (res.ok) {
    //                 return res.json()
    //             }
    //         })
    //         .then(res => {
    //             console.log(res)
    //         })
    // }
    // https://open.spotify.com/artist/7FNCy9QOqzv3hGWhkqSpVQ
    return (
        <>
            <div className={styles.songContainer}>
                <div className={styles.songInfo}>
                    <h1 className={styles.title}>New single ‘Gleb Petrov’ out NOW</h1>
                    <Link className={styles.link} href='src/components/Main/Intro/NewSingle#'/>
                </div>
                <div className={styles.background}/>
            </div>
        </>
    )
}

export default newSingle