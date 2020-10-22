import React, { useState, useEffect, useCallback } from 'react';
import ReactMapGL, { Marker, Popup, NavigationControl, FullscreenControl } from "react-map-gl";
import filesize from "filesize";
import axios from "axios";

const fullscreenControlStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const navStyle = {
    position: 'absolute',
    top: 36,
    left: 0,
    padding: '10px'
};

export default function Map() {
    const [viewport, setViewport] = useState({
        latitude: 33,
        longitude: 20,
        zoom: 1.5,
    });
    const [hosts, setHosts] = useState([]);
    const [selectedHost, setSelectedHost] = useState(null);
    // const [aliveHost1, setAliveHost1] = useState([]);
    // const [aliveHost2, setAliveHost2] = useState([]);
    // let max = 0;
    const size = 20;

    async function fetchNumberPages() {
        let urlNumberOfHosts = `https://hostmetadata.hse.storewise.tech/sia/host/?version__ge=1.4.2.1&page=1`
        let data = await axios.get(urlNumberOfHosts);
        let count = 0;

        count=data.data.meta.count;

        //Always round up if > 0.1
        if(count%10<5){
            return Math.round(count/10)+1;
        }
        else{
            return Math.round(count/10);
        }
    }
    
    
    const fetchData = useCallback (async () => {
        await fetchNumberPages().then(pagesNumber=>{
            for (let currentPage = 1; currentPage < pagesNumber; currentPage++) {
                let url = `https://hostmetadata.hse.storewise.tech/sia/host/?version__ge=1.4.2.1&page=${currentPage}`
                let data = axios.get(url);
                [...Array(10)].forEach((_, i) => {
                    data.then(res=>{
                        setHosts(old => [...old, res.data.data[i]]);
                        // fetchAlive(res.data.data[i].public_key_string);
                    });
                });
            }
        }).catch(e => {
            console.log(e);
        })
    }, [setHosts]); 

    // function fetchAlive(hostKey){
    //     Swagger(spec).then(cli => {
    //         cli.apis.default.getResult({hostKey}).then((res) => {
    //             setAliveHost1(old => [...old, new Date(res.body.shift().timestamp).getTime()]);
    //             setAliveHost2(old => [...old, hostKey]);
    //             // console.log(res.body.shift());
    //         })
    //     })
    // }

    // const fetchAlive = async(hostKey) => {
    //     let url = `https://alivecheck.hse.storewise.tech/${hostKey}`
    //     let data = await axios.get(url);
    //     setAliveHost1(old => [...old, new Date(data.data[0].timestamp).getTime()]);
    //     setAliveHost2(old => [...old, hostKey]);
    //     // console.log(data.data[0].timestamp);
    // }

    // function getHostKeyUpdatedLast(){
    //     max = Math.max(...aliveHost1);
    //     if(isFinite(max)){
    //         // console.log(aliveHost2[aliveHost1.indexOf(max)])
    //         return aliveHost2[aliveHost1.indexOf(max)];
    //     }
    // }       

    useEffect(() => {
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedHost(null);
            }
        }
        window.addEventListener("keydown", listener);

        fetchData();
        
        // const interval = setInterval(fetchData, 10000);
        // let interval = setInterval(() => alert("2seconds"), 2000);
          
        // return () => clearInterval(interval);
        
        // document.getElementById("footer").style.display = "none";
        // document.getElementById("footer-bar").style.display = "none";
    }, [fetchData]);

    return (
        <section id="map">
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/storewise/ckacmcnbk24be1ipfq4g2jk4a"
                    onViewportChange={viewport => {
                        setViewport(viewport);
                    }}
                    minZoom={1}
                    maxZoom={18}
                    width="100%"
                    height="100%"
                    scrollZoom={false}
                    onClick={() =>  setSelectedHost(null)}
                >
                    <Marker
                        latitude={70}
                        longitude={135}>
                        <h4 className="map-title d-flex flex-column text-center">Datacenters
                            {/* <span>
                                Providers
                            </span> */}
                        </h4>
                    </Marker>
                    {
                        hosts.map(host => (
                            <Marker
                                key={host.id}
                                latitude={host.latitude}
                                longitude={host.longitude}
                            >
                                <button
                                    style={{ background: "transparent", border: "none", transform: `translate(${-size / 2}px,${-size}px)` }}
                                    onClick={e => {
                                        e.preventDefault();
                                        setSelectedHost(host);
                                    }}
                                >
                                    {/* {host.public_key_string===getHostKeyUpdatedLast() ? <div className="circle pulse-host"></div> : <div className="circle"></div>} */}
                                    <div className="circle"/>
                                </button>
                            </Marker>
                        ))
                    }

                    {selectedHost ? (
                        <Popup
                            latitude={selectedHost.latitude}
                            longitude={selectedHost.longitude}
                            onClose={() => {
                                setSelectedHost(null);
                            }}
                        >
                            <div>
                                <h6 className="popup-title mb-0">
                                    {selectedHost.country}&#59; {selectedHost.city}
                                </h6>
                                <p className="popup-subtitle mb-0">
                                    Space Available: {filesize(selectedHost.remaining_storage, { round: 0 }, 1000)}
                                </p>
                            </div>
                        </Popup>) : null
                    }
                    <div style={fullscreenControlStyle}>
                        <FullscreenControl />
                    </div>
                    <div style={navStyle}>
                        <NavigationControl
                            showCompass={false}
                        />
                    </div>
                </ReactMapGL>
        </section>
    );
}