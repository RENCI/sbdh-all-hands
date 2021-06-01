import { Header, Divider, List, Item, Icon } from "semantic-ui-react";

function Conduct() {
    return (
        <div className="page-contain">
            <Header as='h1' className="page-title" textAlign='center' content="Code of Conduct" />
            <Divider hidden />
            <p style={{fontSize: "1.2rem"}}>
                All South Big Data Hub events are dedicated to providing a safe and enjoyable experience for everyone regardless of gender, gender identity, gender expression, sexual orientation, disability, physical appearance, body size, race, religion, national origin, operating system or text editor of choice. We do not tolerate harassment of conference participants in any form.
            </p>
            <p style={{fontSize: "1.2rem"}}>
                If a participant, including but not limited to attendees, speakers, sponsors, exhibitors, staff, and volunteers, engages in harassing behavior, the conference organizers may take any action they deem appropriate, including warning the offender or expelling the offender from the conference with no refund. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of the conference staff immediately.
            </p>
            <p style={{fontSize: "1.2rem"}}>
                All participants (and guests) are required to abide by this Code of Conduct. This Code of Conduct applies to all South Big Data Hub events.
            </p>
           
            <Header content="Expected Behavior" />
            <List bulleted className="conduct-list">
                <List.Item>All participants are treated with respect and consideration, valuing a diversity of views and opinions</List.Item>
                <List.Item>Be considerate, respectful, and collaborative</List.Item>
                <List.Item>Communicate openly with respect for others, critiquing ideas rather than individuals and gracefully accepting criticism</List.Item>
                <List.Item>Acknowledging the contributions of others</List.Item>
                <List.Item>Avoid personal attacks directed toward other participants</List.Item>
                <List.Item>Be mindful of your surroundings and of your fellow participants</List.Item>
                <List.Item>Alert South Big Data Hub conference staff and suppliers/vendors if you notice a dangerous situation or someone in distress</List.Item>
            </List>
           
            <Header content="Unacceptable Behavior includes, but is not limited to:" />
            <List bulleted className="conduct-list">
                <List.Item>Harassment, intimidation, or discrimination in any form</List.Item>
                <List.Item>Physical or verbal abuse by anyone to anyone, including repeated use of pronouns other than those requested</List.Item>
                <List.Item>Unwelcome sexual attention or advances</List.Item>
                <List.Item>Personal attacks directed at other guests, members, participants, etc.</List.Item>
                <List.Item>Publishing others’ private information, such as a physical or electronic address, without explicit permission</List.Item>
                <List.Item>Alarming, intimidating, threatening, or hostile comments or conduct</List.Item>
                <List.Item>Threatening or stalking anyone, including a participant</List.Item>
                <List.Item>Inappropriate use of sexual language, nudity, or sexual imagery in any ​​venue, including online workshops, meetings, or gatherings, Twitter and other online media</List.Item>
                <List.Item>Other conduct which could reasonably be considered inappropriate in a professional setting</List.Item>
            </List>
            
            <Header content="Consequences and Enforcement" />
            <List bulleted className="conduct-list">
                <List.Item>Anyone requested to stop unacceptable behavior is expected to comply immediately</List.Item>
                <List.Item>South Big Data Hub staff may take action deemed necessary and appropriate, including immediate removal from the event or program without warning or refund</List.Item>
                <List.Item>South Big Data Hub reserves the right to prohibit attendance at a future event, conference, workshop or field project</List.Item>
                <List.Item>Notification of an infraction to a Home Institution. In cases where there has been a potentially serious policy or code of conduct violation, South Big Data Hub will notify the offender’s home institution</List.Item>
            </List>

            <p style={{fontSize: "1.2rem", margin: "calc(2rem - .14285714em) 0"}}>
                The South Big Data Hub intends for these policies to meet the needs of our constituents to have a positive event experience, and we welcome comments and suggestions from the community. Please contact South Big Data Hub staff onsite or by email/phone if you would like to provide feedback.
            </p>

            <Divider />
            
            <Header content="Reporting Unacceptable Behavior" />
            <p style={{fontSize: "1.2rem"}}>
                If you or someone you know is subject to unacceptable and/or unwelcome behavior, or have any other concerns, please contact the on-duty point(s) of contact for this conference, workshop or field project as identified below and who will be on-site and available by email or phone.
            </p>

            <Item style={{fontSize: "1.1rem"}}>
                <Header size='tiny' content="Amanda Miller" />
                <Item.Content>
                    <Item.Meta style={{ marginBottom: "0.5rem"}}>
                        <Icon name="envelope outline" />
                        <a href="mailto:amiller@renci.org">amiller@renci.org</a>
                    </Item.Meta>
                    <Item.Meta>
                        <Icon name="mobile alternate" />
                        <a href="tel:1-917-548-1591">(917) 548-1591</a>
                    </Item.Meta>
                </Item.Content>
            </Item>
        </div>
    )
}

export default Conduct;