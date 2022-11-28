import React, {useCallback, useEffect, useState} from "react";
import getAllPartners from "Services/Partners";
import Loader from "Components/Loader";

const StoresList = () => {

  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = useCallback(async () => {
    setIsLoading(true);

    const partners = await getAllPartners();

    setTimeout(()=> {
      setStores(partners || []);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    loadData().then();
  }, [loadData]);

  return <section id="why-us" className="why-us section-bg">
    <div className="container">
      <Loader isLoading={isLoading} />

      <div className="row">
        {
          !isLoading && stores.map((store) => {
            return (
              <div key={String(store.detail.id)} className="col-lg-2 col-sm-3 col-3 mb-3">
                <div className="card-store-item">
                  <img src={store.image} className="card-img-top" alt="..."/>
                  <div className="card-icon-store">
                    <i className="" style={{fontSize: 14}}>{store.detail.discount || 10}%</i>
                  </div>
                  {/*<div className="card-body" style={{ paddingTop: 0 }}>*/}
                  {/*  <h5 className="card-title">*/}
                  {/*    <a href={store.url_target} style={{fontSize: 18}}>{store.detail.name}</a>*/}
                  {/*  </h5>*/}
                  {/*</div>*/}
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