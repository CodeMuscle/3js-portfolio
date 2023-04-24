import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // UnorderedList,
  Heading,
  Center,
  // Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
// import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Brillio">
    <Container>
      <Title>
        Brillio <Badge>2022</Badge>
      </Title>
      <P>Automatic audio file tagging tool using FreeDB for Windows</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordpress, MySQL, PHP, Bootstrap, Anime,js </span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.brillio.com/">
            Brillio
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>

      <WorkImage src="/images/works/brillio-1.png" alt="brillio" />
      <WorkImage src="/images/works/brillio-2.png" alt="brillio" />
      <WorkImage src="/images/works/brillio-3.png" alt="brillio" />
      <WorkImage src="/images/works/brillio-4.png" alt="brillio" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
