//import {useState, useEffect} from "react";
import { Image, Dimmer, Loader, Header, Grid, Button } from "semantic-ui-react";
import saveDate from './images/Save_The_Date.png'

function Home() {
    //const [page, setPage] = useState();
    
    // useEffect(() => {
    //   const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE}/environments/dev/entries/675icwBOH7n4kdrJTLeiT?access_token=${process.env.CONTENTFUL_CONTENT}`

    //   const fetchData = async () => {
    //     try {
    //         const response = await fetch(url);
    //         const json = await response.json();
    //         console.log(json);
    //         setPage(json.fields)
    //     } catch (error) {
    //     console.log("error", error);
    //     }
    // };

    // fetchData()
    // }, []);

    // if (!page) {
    //     return (
    //         <Dimmer active inverted>
    //             <Loader inverted content='Loading' />
    //         </Dimmer>
    //     )
    // }

    return  (
        <div className='pageContain'>
            {/* <Image src={page.headerImage.url} alt="main-image" />
            <p>{page.pageTitle}</p>
            <div>{page.description}</div> */}
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={saveDate} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header as='h2' content='Bringing People and Data Together' subheader='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint similique eaque quam repellendus dolore vel quas architecto ea excepturi alias cum, quis quae aliquam repudiandae ad laboriosam nobis quaerat! Nihil?' />
                        <Button color='orange' content='REGISTER NOW' href='/register' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default Home;