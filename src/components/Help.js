import styles from '../styles/help.module.css';

function Help() {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.userhelp}>
                <h3 className={styles.helptitle}> Help for users</h3>
                <h4>Creating an account?</h4>
                <p> Creating an account reads your login information from the same fields you log in from (Username, Password).
                    Just type in the credentials you want and press Create account, then you can immediately login with that account.</p>
                <h4>Having issues viewing your order history?</h4>
                <p> If you can't see your previous orders for some reason and would like to see them, please contact us through Microsoft Teams: Valtteri Ekoluoma, Valtteri Hietala or Joel Hyyppä</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.adminhelp}>
                <h3 className={styles.helptitle}> Help for admin </h3>
                <h4>Restaurant creation not working?</h4>
                <p> If creation gives you errors, please wait a moment and try again. If it happens again please contact us through Microsoft Teams: Valtteri Ekoluoma, Valtteri Hietala or Joel Hyyppä</p>
                <h4>Having problems creating admin account?</h4>
                <p> While creating a new account you need to click on admin account box, fill the text fields and click create account.
                    If that didn't work, please contact us through Microsoft Teams: Valtteri Ekoluoma, Valtteri Hietala or Joel Hyyppä</p>
                <h4>Help creating products?</h4>
                <p> We implemented our product creation in a little bit different way. You need to write it with an "-"" between the food names. For example you could do "Pizza-Pasta" and that gives you two menu items.
                    Adding the price work the same way, but you need to match the price with the item name""10-15", now pizza costs 10 euros and pasta costs 15. 
                </p>
            </div>
        </div>
        </>
    )
}

export default Help;