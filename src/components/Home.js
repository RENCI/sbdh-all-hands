import {useState, useEffect} from "react";
import { Image, Dimmer, Loader } from "semantic-ui-react";

function Home() {
    const [page, setPage] = useState();
    
    useEffect(() => {
      const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/dev/entries/675icwBOH7n4kdrJTLeiT?access_token=${process.env.CONTENTFUL_CONTENT}`

      const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setPage(json.fields)
        } catch (error) {
        console.log("error", error);
        }
    };

    fetchData()
    }, []);

    if (!page) {
        return (
            <Dimmer active inverted>
                <Loader inverted content='Loading' />
            </Dimmer>
        )
    }

    return  (
        <div>
            <Image src={page.headerImage.url} alt="main-image" />
            <p>{page.pageTitle}</p>
            <div>{page.description}</div>
        </div>
    );
}

export default Home;