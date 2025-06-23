function Loader() {

    return (

        <div id="poker_loading" className="relative !z-[99999] loading-wrap w-[40vw] h-[24vw] text-[3.2vw] rounded-[1.33333vw] [box-shadow:0_.8vw_2.66667vw_0_rgba(0,_0,_0,_.5)]" >
            <div className="loading-circle relative left-[-14px] w-[18.66667vw] h-[8.5vw]">
                <div className='circle  circle1'>
                </div>
                <div className='circle circle2'>
                </div>
            </div>
            <p>Loading...</p>
        </div>
    )

}

export default Loader;