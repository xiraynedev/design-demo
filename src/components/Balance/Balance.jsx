import './_balance.scss'

export default function Balance() {
    return (
        <div className='balance'>
            <header>
                <div className="date">
                    <h1>Balance</h1>
                    <h2>July 30th, 2020</h2>
                </div>
                <div className="percentage">
                    <h1>2%
                        <svg style={{width: '24px', height: '24px'}} viewBox='0 0 24 24'>
                            <path fill='#fff'
                                  d='M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z'/>
                        </svg>
                    </h1>
                </div>
            </header>
            <footer>
                <h1>
                    <span>$</span>
                    <span>54,246</span>
                </h1>
            </footer>
        </div>
    )
}