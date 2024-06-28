import styles from './Intro.module.css';

function Intro() {
    return (
        <section className={styles.intro}>
            <div className={styles.image}>
                <picture>
                    <img src="./images/carne.jpg" alt="Carne de Corte Argentino." />
                </picture>
            </div>
            <div className={styles.txt}>
                <div>
                    <div className={styles.logo}>
                        <h1>Corte Argentino</h1>
                    </div>
                    <h2>High Quality meat from <span>Argentina</span></h2>
                    <p>You can find us in three countries across the Americas.</p>
                    <button>See more</button>
                </div>
            </div>
        </section>
    );
}

export default Intro;