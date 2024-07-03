import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles['corteargentino-logo']}>
                <span></span>
            </div>
            <div className={styles.copyright}>
                <p>© 2015 - 2024 <b>Corte Argentino</b></p>
            </div>
            <div className={styles.designed}>
                <p>Designed by <a target='_blank' href='https://www.edmundoalvarez.com.ar'>Edmundo Alvarez</a></p>
            </div>

        </footer>
    );
}

export default Footer;