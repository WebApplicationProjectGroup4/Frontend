import styles from '../styles/help.module.css';

function Help() {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.userhelp}>
                <h3 className={styles.helptitle}> Help for users</h3>
                <h4>Problem with delivery?</h4>
                <p> If you are having problems with delivery for example, the food arrived alot later than estimated time.
                    Please contact us through email: woltinveli@support.com</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.adminhelp}>
                <h3 className={styles.helptitle}> Help for admin </h3>
                <h4>Restaurant creation not working?</h4>
                <p> If creation gives you errors, please wait a moment and try again. If it happens again contact us at woltinveli@support.com.</p>
                <h4>Having problems creating admin account?</h4>
                <p> While creating a new account you need to click on admin account box, fill the text fields and click create account.
                    If that didn't work, please contact us at woltinveli@support.com.</p>
            </div>
        </div>
        </>
    )
}

export default Help;