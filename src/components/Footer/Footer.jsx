import style from './footer.module.scss';

export default function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.footerContent}>
                    created by <a target="_blank" href="https://myanimelist.net/profile/velocityd">velocityd</a> with ❤️
                </div>
            </footer>
        </>
    )
}
