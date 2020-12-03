import './card.styles.css';

export const Card = param => (
    <div className='card-container'>
        <img src={`https://robohash.org/${param.monster.id}?set=set2&size=180x180`} alt='monster'/>
        <h2>{param.monster.name}</h2>
        <p>{param.monster.email}</p>
    </div>
)