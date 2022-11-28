import React, {useCallback, useEffect, useState} from "react";
import getAllPartners from "Services/Partners";
import Loader from "Components/Loader";
import btnSaibaMais from "assets/img/btn-saiba-mais.png";

const StoresList = () => {

  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = useCallback(async () => {
    setIsLoading(true);

    let partners = await getAllPartners();

    if ((partners || []).length > 4) {
      partners = partners.slice(0, 4);
    }

    setTimeout(() => {
      setStores(partners || []);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    loadData().then();
  }, [loadData]);

  return <>
    <div className="img-bg-horizontal">
      <h1 className={"text-center fw-bold"} style={{
        color: '#000',
        paddingTop: 10
      }}>CATEGORIAS E DESCONTOS</h1>
      <Loader isLoading={isLoading}/>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
        {
          !isLoading && stores.map((store) => {
            return (
              <div key={String(store.detail.id)}>
                <div className="card-store-item">
                  <img src={store.image} className={"img-store"} alt="..."/>
                  <div className="card-icon">
                    <i className="" style={{fontSize: 20}}>{store.detail.discount || 10}%</i>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <br/>
    </div>
    <br/>
    <div className={"flex flex-row justify-content-center"} style={{
      display: 'flex',
    }}>
      <a href="https://pay.kiwify.com.br/YNycH7R" className={"btn-action"}>
        <img src={btnSaibaMais} alt="Clique aqui..."/>
      </a>
    </div>
    <br/>
  </>
}

export default StoresList;