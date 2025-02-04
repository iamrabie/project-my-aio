const Stats = ({total , title}) => {
    return(
        <>
        <div className="stats-container">
            <p className="text-[54px] font-bold text-blue-400">{total}</p>
            <p className="text-white font-semibold text-sm">{title}</p>
        </div>
        </>
    );
}


export default Stats;