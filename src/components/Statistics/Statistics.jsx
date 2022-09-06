import PropTypes from 'prop-types';
import s from './statistics.module.css';

const Statistics = ({title, stats}) => {
    return (
        <section className={s.container}>
            <h2 className={s.title}>{title}</h2>
            <ul className={s.statList}>
                {stats.map(stat => (
                    <li className={s.statItem} key={stat.id}>
                        <span>{stat.label}</span>
                        <span>{stat.percentage}%</span>
                    </li>))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default Statistics