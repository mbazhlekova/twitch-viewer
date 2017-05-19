import React from 'react';
import axios from 'axios';
import async from 'async';

export default class Streaming extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            twitchData: [],
            channels: []
        }
    }

    streamUrl(params) {
        return `https://api.twitch.tv/kraken/streams/${params}/?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm`;
    }

    channelUrl(params) {
        return `https://api.twitch.tv/kraken/channels/${params}/?client_id=5j0r5b7qb7kro03fvka3o8kbq262wwm`;
    }

    componentDidMount() {
        const streamUrl = this.streamUrl;
        const channelUrl = this.channelUrl;
        const userarr = [
            "ESL_SC2",
            "OgamingSC2",
            "cretetion",
            "freecodecamp",
            "storbeck",
            "habathcx",
            "RobotCaleb",
            "noobs2ninjas"
        ];
        async.parallel({
            twitchData(cb) {
                async.map(userarr, (name, callback) => {
                    axios(streamUrl(name)).then(({data: {
                            stream
                        }}) => callback(null, Object.assign({}, {
                        name
                    }, stream)))
                }, cb)

            },
            channels(cb) {
                async.map(userarr, (name, callback) => {
                    axios(channelUrl(name)).then(({data}) => callback(null, data))
                }, cb)
            }
        }, (err, {twitchData, channels}) => {
            this.setState({
                twitchData,
                channels
            }, () => console.log(this.state));
        })
    }

    render() {
        return (<DisplayStreamers streams={this.state.twitchData}/>)
    }
}

class DisplayStreamers extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="container">
            <div className="cards">
                {this.props.streams && this.props.streams.filter(x => x)
                    .map((e, i) => {
                        if (e.channel) 
                            return <a key={i} className="card" href={e.channel.url || ''}>
                                <img src={e.channel.logo}/>
                                <h2>{e.channel.display_name}</h2>
                                <h3>{e.channel.game}</h3>
                            </a>
                        else 
                            return <a key={i} className="card" href="">
                                <img className="offline" src={require('../../images/offline.jpg')}/>
                                <h2>{e.name}</h2>
                                <h3>offline</h3>
                            </a>

                    })}
            </div>
        </div>
    }
}