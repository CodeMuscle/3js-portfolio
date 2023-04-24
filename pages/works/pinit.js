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
  <Layout title="PIN IT">
    <Container>
      <Title>
        PIN IT <Badge>2022</Badge>
      </Title>
      <P>
        PIN-IT is a Pinterest clone which has Google Authorisation, Upload and Categorization of images. 
        It works like social media app where we can view, save (bookmark) and download images posted by anyone in the app.
        A user can also comment on the images as per their requirement.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TailwindCSS, OAuth</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://pinitfinal.netlify.app/">
            PinIt <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/YLdHAggLBCw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}

      <WorkImage src="/images/works/pinit-1-min.png" alt="PINIT" />
      <WorkImage src="/images/works/pinit-2-min.png" alt="PINIT" />
      <WorkImage src="/images/works/pinit-3-min.png" alt="PINIT" />
      <WorkImage src="/images/works/pinit-4-min.png" alt="PINIT" />
      <WorkImage src="/images/works/pinit-5-min.png" alt="PINIT" />
      <WorkImage src="/images/works/pinit-6-min.png" alt="PINIT" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
