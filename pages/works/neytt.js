import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  // AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Neytt">
    <Container>
      <Title>
        Neytt <Badge>2022</Badge>
      </Title>
      <P>
        I helped Neytt via Mellow Designs to build responsive and animated layouts across the site. Based out of the southern-most state of India- Kerala, Neytt, orchestrated by Sivan Santhosh and Nimisha Srinivas, is a recent phenomenon.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="www.neytt.com" target="_blank">
            www.neytt.com <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Webflow, Anime.js
          </span>
        </ListItem>
        {/* <ListItem>
          <Meta>Video</Meta>
          <Link href="https://www.youtube.com/watch?v=GznmPACXBlY">
            How I built a software agency website with Next.js + Tailwind CSS
            (in nature) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/GznmPACXBlY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}

      <WorkImage src="/images/works/neytt-1.png" alt="neytt" />
      <WorkImage src="/images/works/neytt-2.png" alt="neytt" />
      <WorkImage src="/images/works/neytt-3.png" alt="neytt" />
      <WorkImage src="/images/works/neytt-4.png" alt="neytt" />
      <WorkImage src="/images/works/neytt-5.png" alt="neytt" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
