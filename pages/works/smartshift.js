import {
  // Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  // UnorderedList,
  // Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="smartShift">
    <Container>
      <Title>
        smartShift <Badge>2022</Badge>
      </Title>
      <P>
        smartShift Intelligent Automation® is trusted by global brands to drive innovation. I am grateful to get an opportunity to revamp certain sections of the website and helped build the CMS for the blog page.
      </P>
      {/* <UnorderedList my={4}>
        <ListItem>Ramen shop recommendation based on photo</ListItem>
        <ListItem>Show shops near your current location</ListItem>
        <ListItem>Open in Tabelog/Foursquare</ListItem>
      </UnorderedList> */}

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordpress, Elementor, WooCommerce, CMS</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://smartshift.com/">
           smartShift<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        {/* <ListItem>
          <Meta>Presentation</Meta>
          <Link href="https://speakerdeck.com/craftzdog/caffedeoshou-qing-ben-ge-deipuraninguiosapuri">
            Caffeでお手軽本格ディープラーニングアプリ @potatotips{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
        {/* <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/craftzdog/caffe-ios-sample">
            github.com/craftzdog/caffe-ios-sample <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      {/* <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://itunes.apple.com/app/id1035645520?mt=8"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box> */}

      <WorkImage src="/images/works/smartshift-1.png" alt="smartShift" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/smartshift-2.png" alt="smartShift" />
        <WorkImage src="/images/works/smartshift-3.png" alt="smartShift" />
      </SimpleGrid>
      <WorkImage src="/images/works/smartshift-4.png" alt="smartShift" />
      <WorkImage src="/images/works/smartshift-5.png" alt="smartShift" />
      <WorkImage src="/images/works/smartshift-6.png" alt="smartShift" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
