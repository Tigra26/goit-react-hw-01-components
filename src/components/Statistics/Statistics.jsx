import s from './statistics.module.css';
import StatisticsItem from "./StatisticsItem";
import propTypes from 'prop-types';


function Statistics({ statistics, title }) {

    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}
            <ul className={s.statList}>
            {statistics.map(item => (
                <StatisticsItem
                    key={item.id}
                    label={item.label}
                    percentage={item.percentage}               
                />
            ))}
            </ul>
        </section>
    )
}

 Statistics.propTypes = {
    title: propTypes.string,
    statistics: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            label: propTypes.string.isRequired,
            percentage: propTypes.number.isRequired,
        }).isRequired,
        ).isRequired,
 };

export default Statistics;