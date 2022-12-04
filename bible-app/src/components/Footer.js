// Footer Component

const Footer = () => {
    return (
        <footer style={styles.container}>
            <div style={styles.brand}>
                <h3>The Word</h3>
                <p>Little bit of inormation about the app and stuff here.</p>
                <div>
                    <ul style={styles.social}>
                        <li>
                            FB
                        </li>
                        <li>
                            TW
                        </li>
                        <li>
                            LI
                        </li>
                        <li>
                            YT
                        </li>
                    </ul>
                </div>
            </div>
            <div style={styles.links}>
                <div>
                    <h3>Products</h3>
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
                    <h3>Services</h3>
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
                    <h3>Resources</h3>
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
        background: '#aaa',
        display: 'flex',
        justifyContent: 'space-around'
    },
    social: {
        padding: '0',
        listStyle: 'none',
        display: 'flex',
        gap: '2%'
    },
    list: {
        padding: '0',
        listStyle: 'none'
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