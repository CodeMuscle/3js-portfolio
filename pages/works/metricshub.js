import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="MetricsHub">
    <Container>
      <Title>
      MetricsHub <Badge>2023</Badge>
      </Title>
      <P>
        An interactive React dashboard that has functionalities like filtering, increasing/decreasing density of data, exporting data in to .csv files, viewing and editing events in the calendar, and various types of charts to visualize complex datasets. Built using React, MUI and DataGrid. Hosted on Netlify.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://dashboard-front-react.netlify.app/">
          https://dashboard-front-react.netlify.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, MUI, DataGrid</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://codemuscle.hashnode.dev/7-essential-steps-to-secure-your-ethereum-node">
          7 Essential Steps to Secure Your Ethereum Node <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/dashboard-1-min.png" alt="metricshub" />
      <WorkImage src="/images/works/dashboard-2-min.png" alt="metricshub" />
      <WorkImage src="/images/works/dashboard-3-min.png" alt="metricshub" />
      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
