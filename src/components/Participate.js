import { Header, Divider, Button } from 'semantic-ui-react'

function Participate() {
    return (
        <div className="page-contain">
            <Header as='h1' className="page-title" textAlign='center' content="Get Involved" />
            <Divider hidden />

            <p style={{fontSize: "1.2rem"}}>
                In addition to presentations and networking opportunities, the South Hub All Hands offers a chance for community members to connect on our virtual booth floor.
            </p>
            <p style={{fontSize: "1.2rem"}}>
                Nonprofit, government, and academic organizations can host an informational booth to highlight your program or project free of charge.
            </p>
            <p style={{fontSize: "1.2rem"}}>
                Industry organizations are able to sponsor the event, which gives you access to an informational booth to highlight your products and services, along with the opportunity to have your logos displayed in presentations and on our Airmeet virtual meeting software.
            </p>

            <Divider hidden />
            <Button color='orange' href="mailto:amiller@renci.org?subject=South Hub All Hands Involvement Inquiry" content="Contact Us for More Information" />

        </div>
    )
}

export default Participate;