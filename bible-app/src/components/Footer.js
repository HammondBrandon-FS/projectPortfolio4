// Footer Component

// Images
import FB from '../images/fbLogo.png';
import TW from '../images/twLogo.png';
import LI from '../images/liLogo.png';
import YT from '../images/ytLogo.png';
import IG from '../images/igLogo.png';

const Footer = () => {
    return (
        <footer style={styles.container}>
            <div style={styles.brand}>
                <h3 style={styles.title}>The Word</h3>
                <p style={styles.para}>We are the connection that the congregation has been missing. Small Groups, Pastors, Worship Leaders, and Individuals can all utilize our product and even grow in their spiritual journey.</p>
                <div>
                    <ul style={styles.social}>
                        <li>
                            <img src={FB} alt='facebook logo' />
                        </li>
                        <li>
                            <img src={TW} alt='twitter logo' />
                        </li>
                        <li>
                            <img src={LI} alt='linked in logo' />
                        </li>
                        <li>
                            <img src={YT} alt='youtube logo' />
                        </li>
                        <li>
                            <img src={IG} alt='instagram logo' />
                        </li>
                    </ul>
                </div>
            </div>
            <div style={styles.links}>
                <div>
                    <h3 style={styles.title}>Products</h3>
                    <ul style={styles.list}>
                        <li>
                            Product 1
                        </li>
                        <li>
                            Product 2
                        </li>
                        <li>
                            Product 3
                        </li>
                        <li>
                            Product 4
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 style={styles.title}>Services</h3>
                    <ul style={styles.list}>
                        <li>
                            Service 1
                        </li>
                        <li>
                            Service 2
                        </li>
                        <li>
                            Service 3
                        </li>
                        <li>
                            Service 4
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 style={styles.title}>Resources</h3>
                    <ul style={styles.list}>
                        <li>
                            News
                        </li>
                        <li>
                            Blog
                        </li>
                        <li>
                            Videos
                        </li>
                        <li>
                            FAQs
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

const styles = {
    container: {
        padding: '0 8%',
        background: '#806A57',
        display: 'flex',
        justifyContent: 'space-around'
    },
    title: {
        color: '#FEF6C2',
        fontSize: '1.5em',
        marginBottom: '0'
    },
    para: {
        color: '#fff',
        padding: '3% 0',
        margin: '0'
    },
    social: {
        padding: '0',
        listStyle: 'none',
        display: 'flex',
        gap: '5%'
    },
    list: {
        padding: '0',
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        color: '#fff'
    },
    brand: {
        width: '40%'
    },
    links: {
        width: '30%',
        display: 'flex',
        justifyContent: 'space-between'
    }
}