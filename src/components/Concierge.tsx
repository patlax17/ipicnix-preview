"use client";
import React, { useState } from 'react';
import styles from './Concierge.module.css';

export default function Concierge() {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(s => s + 1);

    return (
        <section className={styles.section} id="concierge">
            <div className={styles.container}>
                <div className={styles.header}>
                    <p className="subtitle">Let Us Begin</p>
                    <h2 className="display-text">The Concierge</h2>
                </div>

                <div className={styles.formContainer}>
                    <div className={styles.progress}>
                        <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>01</div>
                        <div className={styles.line}></div>
                        <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>02</div>
                        <div className={styles.line}></div>
                        <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>03</div>
                    </div>

                    <div className={styles.formBody}>
                        {step === 1 && (
                            <div className="fade-in">
                                <h3 className={styles.question}>What is the emotion you wish to evoke?</h3>
                                <div className={styles.options}>
                                    <button onClick={nextStep} className={styles.optionBtn}>Spoil Them</button>
                                    <button onClick={nextStep} className={styles.optionBtn}>Say Yes</button>
                                    <button onClick={nextStep} className={styles.optionBtn}>A Timeless Escape</button>
                                    <button onClick={nextStep} className={styles.optionBtn}>Just Because</button>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="fade-in">
                                <h3 className={styles.question}>When and where shall we set the scene?</h3>
                                <div className={styles.inputs}>
                                    <div className={styles.inputGroup}>
                                        <label>Date</label>
                                        <input type="date" className={styles.input} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Hotel / Location</label>
                                        <input type="text" placeholder="e.g. The Plaza, NYC" className={styles.input} />
                                    </div>
                                    <button onClick={nextStep} className={styles.nextBtn}>Continue</button>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="fade-in">
                                <h3 className={styles.question}>How may we reach you?</h3>
                                <div className={styles.inputs}>
                                    <input type="text" placeholder="Name" className={styles.input} />
                                    <input type="email" placeholder="Email Address" className={styles.input} />
                                    <button className={styles.submitBtn}>Request Experience</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
