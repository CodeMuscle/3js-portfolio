import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  // SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
// import { GridItem } from '../components/grid-item'
import { IoLogoInstagram, IoLogoLinkedin, IoLogoMedium, IoLogoTwitter } from 'react-icons/io5'
// import thumbYouTube from '../public/images/links/motiontodev.jpg'
// import thumbMenkiki from '../public/images/works/mintverse.png'
// import thumbInkdrop from '../public/images/works/MetricsHub - 1.png'
import Image from 'next/image'
// import ButtonMailto from '../components/mail';

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        mt={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        👋🏻 Hello, I&apos;m a front-end developer based in India!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Ganesh Govind
          </Heading>
          <p>Web Developer (React | Node)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/profile.png"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Paragraph>
          I&apos;m a freelancer and a front-end developer based in India with a
          passion for building digital services/apps that I like. <br /> I find ways to
          bring innovation in building products, from planning and designing to solving
          real-life problems with code. When not online, I love hanging out
          with my camera. <br />
          {/* <Link as={NextLink} href="/works/dashboard" passHref scroll={false}>
          Admin Dashboard
          </Link> */}
          I share knowledge by publishing content on my Instagram page
          &quot;
          <Link
            as={NextLink}
            href="https://www.instagram.com/motiontodev/"
            passHref
            target="_blank"
          >
            MotionToDev
          </Link>
          &quot;
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="purple"
          >
            View my work
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born and raised in TN, India.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Bachelors in Computer Science at SRM, Trichy
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Web Developer - Mellow Designs
        </BioSection>
        <BioSection>
          <BioYear>Present</BioYear>
          Web Developer - Workskills (Founding Team)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Photography, Music and Cooking
          {/* <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning */}
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List mb={6}>
          <ListItem>
            <Link href="https://github.com/b1urry.7ace" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoInstagram />}
              >
                Instagram
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/ganeshgovind21/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoLinkedin />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://medium.com/@ganeshgovind11" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoMedium />}
              >
                Medium
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/GaneshGovind7" target="_blank">
              <Button
                variant="ghost"
                colorScheme="purple"
                leftIcon={<IoLogoTwitter />}
              >
                Twitter
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://cryptoket-v2.vercel.app/"
            title="Mintverse"
            thumbnail={thumbMenkiki}
          >
            React - Web3
          </GridItem>
          <GridItem
            href="https://dashboard-front-react.netlify.app/"
            title="MetricsHub"
            thumbnail={thumbInkdrop}
          >
            React - MUI5
          </GridItem>
        </SimpleGrid> */}

        {/* <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Join me on a behind-the-scenes coding journey. Weekly updates on
          projects, tutorials, and videos
        </p> */}

        {/* <Box align="center" my={4}>
          <ButtonMailto
            mailto="mailto:ganeshgovind11@gmail.com" 
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Write me an E-Mail
          </ButtonMailto>
        </Box> */}
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
