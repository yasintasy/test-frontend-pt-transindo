const JobList = (
    {
        company,
        logo,
        New,
        featured,
        position,
        role,
        level,
        postedAt,
        contract,
        location,
        languages,
        tools
    }
) => {


    return (
        <div className="item-job" >
            <div className="img-title-job-mobile">
                <img src={logo} alt="" />
            </div>
            <div className="job-list">
                <div className="line-job"></div>
                <div className="job-description job-item">
                    <div className="job-img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="job-detail">
                        <div className="status-job">
                            {company}
                            {
                                (New && featured) ?
                                    <>
                                        <div className="status-new">new!</div>
                                        <div className="status-featured">featured!</div>
                                    </>
                                    :
                                    (New) && <div className="status-new">new!</div>
                            }
                        </div>
                        <p className="title-job">{position}</p>
                        <div className="time-job">
                            <p className="time">{postedAt}</p>
                            <div className="circle"></div>
                            <p className="contrac">{contract}</p>
                            <div className="circle"></div>
                            <p className="location">{location}</p>
                        </div>
                    </div>
                </div>
                <div className="job-category job-item" >
                    <button className="btn-filter">{role}</button>
                    <button className="btn-filter" >{level}</button>
                    {
                        languages.map((e, i) => {
                            return <button key={i} className="btn-filter">{e}</button>;
                        })
                    }
                    {
                        tools.map((e, i) => {
                            return <button key={i} className="btn-filter">{e}</button>;
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default JobList;