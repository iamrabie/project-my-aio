const Title = ({color , size , text}) => {

    const titleSize = {
        small:'text-xl',
        large:'text-6xl'
    }


    console.log('size :'  , titleSize[size]);

    return(
        <>
        <p className={`p-0 m-0 ${titleSize[size]}`}>{text}</p>
        </>
    );
}

export default Title;