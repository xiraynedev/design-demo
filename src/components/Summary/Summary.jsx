import './summary.scss';

export default function Summary() {
    return (
        <div className='summary'>
            <header>
                <h1>Summary</h1>
            </header>
            <main>
                <div className='account-number'>
                    <h1>Account Number</h1>
                    <h2>654217</h2>
                </div>
                <div className='transactions-limit'>
                    <h1>Transactions Limit</h1>
                    <h2>24</h2>
                </div>
            </main>
        </div>
    )
}
