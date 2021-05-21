//import {useState, useEffect} from "react";
import { Image, Dimmer, Loader, Header, Grid, Button, Item } from "semantic-ui-react";
import saveDate from './images/Save_The_Date.png'
import placeholder from './images/placeholder.png'

const shortDesc = `Etiam pellentesque augue vel massa maximus, non condimentum tellus efficitur. Vivamus tempus sagittis consequat. 
Ut vitae nunc vel libero varius ultricies eu quis quam. In dictum ut urna sit amet.`

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque euismod ligula et dapibus. Quisque velit nisi, condimentum in orci vel, ornare vestibulum risus. 
Phasellus ac tristique elit. Sed interdum vel enim cursus tempor. Aenean aliquam pellentesque mauris, eu dignissim magna consequat id. Pellentesque lobortis nisi est, vitae viverra erat aliquet vitae. 
Aenean in ipsum id felis facilisis congue in facilisis est. Vivamus felis est, interdum sit amet urna nec, commodo dictum ligula. Proin eleifend dapibus porta.`

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
            <Grid divided='vertically'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Image src={saveDate} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Header as='h2' content='Bringing People and Data Together' subheader={shortDesc} />
                        <Button color='orange' content='REGISTER NOW' href='/register' />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Header as='h2' content='Benefits of attending the meeting' subheader={shortDesc} />
                    <Item.Group divided>
                        <Item>
                            <Item.Image src={placeholder} />
                            <Item.Content header='Something awesome' description={description} />
                        </Item>
                        <Item>
                            <Item.Image src={placeholder} />
                            <Item.Content header='Another cool thing' description={description} />
                        </Item>
                        <Item>
                            <Item.Image src={placeholder} />
                            <Item.Content header='This is the best part' description={description} />
                        </Item>
                    </Item.Group>
                </Grid.Row>
            </Grid>
        </div>
    );
}

export default Home;