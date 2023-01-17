import React, { useState, useEffect, Fragment } from 'react';
import JobList from './components/JobList';
import Loading from './components/Loading';
import ItemFiltered from './components/ItemFiltered';
import BackgroundTop from './components/BackgroundTop';

import './App.css';


function App() {

  let [dataJob, setDataJob] = useState([]);
  let [loading, setLoading] = useState(true);
  let [dataFail, setDataFail] = useState(false);

  useEffect(() => {
    fetch('./data.json').then(e => {
      if (!e.status) {
        setDataFail(true);
        return;
      }
      return e.json();
    })
      .then(datas => {
        setDataJob(datas);
      })
      .catch(err => {
        setDataFail(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);



  return (
    <Fragment>
      <div className="App">
        <BackgroundTop />
        {/* input filter */}
        <section className="container-filtered">
          <div className="inner-filtered">
            <div className="list-filtered">
              <ItemFiltered />
            </div>
            <button className="clear-filtered">
              clear
            </button>
          </div>
        </section>

        {/* job list */}
        <section className="container-job-list">
          {
            (loading) ? <Loading />
              :
              (dataFail) ?
                <p style={{ textAlign: 'center' }}>Oops ada yang salah</p>
                :
                (
                  <div className="inner-job-list">
                    {
                      dataJob.map(e => {
                        return <JobList
                          key={e.id}
                          company={e.company}
                          logo={e.logo}
                          position={e.position}
                          level={e.level}
                          postedAt={e.postedAt}
                          contract={e.contract}
                          role={e.role}
                          location={e.location}
                          languages={e.languages}
                          tools={e.tools}
                          New={e.new}
                          featured={e.featured} />;
                      })
                    }
                  </div>
                )}
        </section>
      </div>
    </Fragment>
  );
}
export default App;
