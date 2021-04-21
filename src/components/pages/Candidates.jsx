import React, {useState, useEffect} from 'react';
import { Toggle, Icon, Link, Page, Card, CardTitle, CardHeader, CardFooter, CardContent ,Navbar, Block, BlockTitle, Row, Col} from 'framework7-react';
import axios from 'axios';

export default function Candidates({ f7router, f7route }) {
    
    const [syncToAirtable, setSyncToAirtable] = useState(true)
    const [candidates, setCandidates] = useState([])
    const [title, setTitle] = useState("Candidates")

    async function fetchCandidates(collection) {
        const url = `https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/talentdata-wqdfe/service/talentdataWebhook/incoming_webhook/talentdataWebhook?collection=${collection}&syncToAirtable=${syncToAirtable}`
        const result = await axios(url)
        setCandidates(result.data)
    }
    
    useEffect(() => {
        fetchCandidates(f7route.params.collection)
    },{})
    
    useEffect(() => {
        setTitle(f7route.params.collection)
    },{})

    return (
      <Page>
        <Navbar title={title} backLink="Back" />
        <BlockTitle>
            <b># Candidates: </b>{candidates.length}
        </BlockTitle>
        <Block>
            <Row>
                <Block>
                    <p>syncToAirtable</p>
                    <Toggle checked={syncToAirtable} ></Toggle>
                </Block>
            </Row>
        </Block>

        <Block>
            <Row>
                {candidates.map(candidate => {
                    return(
                        <CandidateCard key={candidate["Public LinkedIn URL"]} candidate={candidate}/>
                    )
                })}
            </Row>
        </Block>

        {/* <Block strong>
          <Link onClick={() => f7router.back()}>Go back via Router API</Link>
        </Block> */}
      </Page>
    );
}

const CandidateCard = (props) => {
    const firstName = props.candidate["Name"].split(" ")[0]
    let ranking = props.candidate["Candidate Ranking"]
    let stars = ranking[Object.keys(ranking)[0]] ? ranking[Object.keys(ranking)[0]] : 0

    return(
        <Card>
            <CardHeader>
                <p>{firstName} </p>
                <Link>
                    <Icon f7="logo_linkedin"></Icon>
                </Link>
            </CardHeader>
            <CardContent>
                <p>Summary</p>
                <img src={props.candidate["Picture URL"]} width="216px" alt="profile image"/>
                <p className="likes">Candidate details</p>
            </CardContent>
            <CardFooter className="no-border">
                <Link>Action 1</Link>
                <Link>Action 2</Link>
            </CardFooter>
        </Card>
    )
}
