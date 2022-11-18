import propTypes from "prop-types"
import s from './statisticsItem.module.css'

function StatisticsItem({label, percentage}) {
    return (
            <li className={s.item} >
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}</span>
            </li>
    )

}

export default StatisticsItem

StatisticsItem.propTypes = {
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired
}