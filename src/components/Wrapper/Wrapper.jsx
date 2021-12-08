import Balance from "../Balance/Balance";
import Activities from "../Activities/Activities";
import PaymentDue from "../PaymentDue/PaymentDue";
import Summary from "../Summary/Summary";
import './wrapper.scss';

export default function Wrapper() {
    return (
        <div className='wrapper'>
            <Balance/>
            <PaymentDue/>
            <Activities/>
            <Summary/>
        </div>
    )
}
