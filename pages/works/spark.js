import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Spark Diagnostics">
    <Container>
      <Title>
        Spark Diagnostics <Badge>2022</Badge>
      </Title>
      <P>
        I had a change to work with Spark Diagnostics to curate a website according to their requirements
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Webflow, Lottie, GSAP</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.sparkdiagnostics.com/" target="_blank">
            Spark Diagnostics
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      {/* <UnorderedList my={4}>
        <ListItem>
          <Link href="http://www.donpy.net/standard-entry/app-reiview/4303.html">
            <Badge mr={2}>覚醒する @CDiP</Badge>
            Webアプリ版twitterクライアントの「pichu*pichu」が凄い。{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="http://labs.laurahouse.net/articles/iphone/1115.html">
            <Badge mr={2}>LauraHouse Labs</Badge>
            知っておきたいWebアプリ版Twitterクライアント活用法{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList> */}

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>

      <WorkImage src="/images/works/spark-1.png" alt="Spark" />
      <WorkImage src="/images/works/spark-2.png" alt="Spark" />
      <WorkImage src="/images/works/spark-3.png" alt="Spark" />
      <WorkImage src="/images/works/spark-4.png" alt="Spark" />
      <WorkImage src="/images/works/spark-5.png" alt="Spark" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
