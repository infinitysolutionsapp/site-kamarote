import React from "react";
import {range} from "lodash";

const StoresList = () => {

  const stores = range(1, 12, 1).map(() => {
    return {
      name: 'Loja',
      url_logo: '',
      url_target: '#home',
      percent: 10,
    }
  });

  return <section id="why-us" className="why-us section-bg">
    <div className="container">
      <div className="row">
        {
          stores.map((store) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-6 d-flex align-items-stretch">
                <div className="card">
                  <img src="assets/img/hero-bg1.jpg" className="card-img-top" alt="..."/>
                  <div className="card-icon">
                    <i className="" style={{fontSize: 20}}>{store.percent}%</i>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href={store.url_target}>{ store.name }</a>
                    </h5>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  </section>
}

export default StoresList;