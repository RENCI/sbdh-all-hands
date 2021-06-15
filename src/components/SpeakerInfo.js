import { useParams } from "@reach/router"
import {useState, useEffect} from "react";

import { Header, Loader } from 'semantic-ui-react'

function SpeakerInfo() {
    const params = useParams()
    const [query, setQuery] = useState()
    const [speakerInfo, setSpeakerInfo] = useState(null)

    useEffect(() => {
        console.log(params.speakerSlug)
        setQuery(`
        {
            postWithSlug: speakerCollection( where: {
              slug_contains: "${params.speakerSlug}"
            }) {
              items {
                speakerName
                speakerPic {url}
                speakerTitle
                org
                bio {
                  json
                }
                isTrackCaptain
                presentationsCollection {
                  total
                }
              }
            }
        }`)
    }, [params.speakerSlug]) 
    

    useEffect(() => {
        if (!query) return
        console.log(query)
        window.fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
                Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_CONTENT}`
            },
            body: JSON.stringify(query)
        })
        .then( res => res.json())
        .then(({data, err}) => {
            if (err) {
                console.error(err)
            }

            setSpeakerInfo(data.postWithSlug.items[0])
            console.log(data.postWithSlug.items[0])
        })
    }, [query])

    if (!speakerInfo) {
        return (
            <div className="page-contain">
                <Header as='h1' className="page-title" textAlign='center' content="Speaker Bio" />
                <Loader inverted indeterminate size="big" content='Loading' />
            </div>
        )
    }

    return (
        <div className="page-contain">
            <Header as='h1' className="page-title" textAlign='center' content={speakerInfo.speakerName} />
            <pre>{JSON.stringify(params, null, 2)}</pre>
        </div>
    )
}

export default SpeakerInfo;