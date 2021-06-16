import { useParams } from "@reach/router"
import { useState, useEffect } from "react";

import { Header, Loader, Image, Icon } from 'semantic-ui-react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'

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
                speakerPic {
                    url
                    title
                }
                speakerTitle
                org
                bio {
                  json
                }
                isTrackCaptain
                trackName
                presentationsCollection {
                  total
                }
              }
            }
        }`)
    }, [params.speakerSlug]) 
    

    useEffect(() => {
        if (!query) return

        console.log("<=== This is the query ===>", query)

        window.fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON",
                Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_CONTENT}`
            },
            body: JSON.stringify({query})
        })
        .then(res => res.json())
        .then(({data, err}) => {
            if (err) {
                console.error(err)
            }

            setSpeakerInfo(data.postWithSlug.items[0])
            console.log("<=== This is the post info ===>", data.postWithSlug.items[0])
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

    //  USE THIS TO FORMAT THE CONTENT THAT COMES FROM THE RICH TEXT EDITOR FIELD
    const RICHTEXT_OPTIONS = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
            [INLINES.HYPERLINK]: (node, children) => <a href={node.data.uri} target="_blank" rel="noopenner noreferrer" className="bio-links">{children}</a>
        }
    }

    return (
        <div className="page-contain">
            {/* <Header as='h1' className="page-title" textAlign='center' content={speakerInfo.speakerName} /> */}
            
            <Header as='h1'>
                <Header.Content className="bio-title">{speakerInfo.speakerName}</Header.Content>
                <Header.Subheader className="sub-head">{`${speakerInfo.speakerTitle},`} <strong>{speakerInfo.org}</strong></Header.Subheader>
                {speakerInfo.isTrackCaptain ? 
                    <Header.Subheader className="sub-head">
                        <Icon disabled name="star"  color="orange" title="Track Captain" />{speakerInfo.trackName}
                    </Header.Subheader> 
                    : null}
            </Header>
            <Image src={speakerInfo.speakerPic.url} alt={speakerInfo.speakerPic.title} size="medium" floated="left" rounded bordered />

            {documentToReactComponents(speakerInfo.bio.json, RICHTEXT_OPTIONS)}

            {/* <p><strong>Presentations:</strong> {speakerInfo.presentationsCollection.total}</p> */}
            {/* <pre>{JSON.stringify(params, null, 2)}</pre> */}
        </div>
    )
}

export default SpeakerInfo;