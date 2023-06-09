import {
  // Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => (
  <Layout title="EHR 2.0">
    <Container>
      <Title>
        Electronic Health Record System 2.0 <Badge>2021-2022</Badge>
      </Title>
      <P>
        The goal is to develop a system that will facilitate secure, trustable
        management, sharing, and aggregation of EHR data using IPFS on a
        blockchain network. The patient-centric system allows patients to manage
        their own health records across multiple hospitals. The system will
        ensure patient privacy protection and guarantee security with respect to
        the requirements for health care data management, including the access
        control policy specified by the patient.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, NodeJS, Angular, Truffle, Solidity</span>
        </ListItem>
        <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://docs.google.com/presentation/d/1IJHepGVY34O1eUu7Lj1dHlP8PClmuRsgbSBNlf29TTs/edit#slide=id.p1">
            EHR 2.0 <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Publication</Meta>
          <Link href="https://www.jetir.org/papers/JETIRTHE2011.pdf">
            JETIR (UGC Approved)
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Demo Video</Meta>
          <Link href="https://drive.google.com/file/d/1XsD0nkrXIW5qNopMjwnROr6BZYUBrTQK/view">
            EHR 2.0
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link href="https://github.com/CodeMuscle/ehr-2.0">
            EHR 2.0
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>

      {/* <WorkImage src="/images/works/uml.jpeg" alt="ehr" />
      <WorkImage src="/images/works/activity.png" alt="ehr" />
      <WorkImage src="/images/works/sequence.png" alt="ehr" /> */}
      <WorkImage src="/images/works/ehr-1-min.jpg" alt="ehr" />
      <WorkImage src="/images/works/ehr-2-min.png" alt="ehr" />
      <WorkImage src="/images/works/ehr-3-min.png" alt="ehr" />
      <WorkImage src="/images/works/ehr-4-min.png" alt="ehr" />
      <WorkImage src="/images/works/ehr-5-min.png" alt="ehr" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
