import { activities } from "../../utils";
import './activities.scss';

export default function Activities() {

    return (
        <div className='activities'>
            <header>
                <h1>Activities</h1>
            </header>
            <main>
                <ul>
                    {
                        activities.map(activity => {
                            return <li key={activity.id}>
                                <span>{activity.name}</span>
                                <span>-${activity.cost}</span>
                            </li>
                        })
                    }
                </ul>
            </main>
            <footer>
                <button>View More</button>
            </footer>
        </div>
    )
}
