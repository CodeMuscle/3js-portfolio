import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/React Dashboard.png'
import thumbWalknote from '../public/images/works/techcube.png'
import thumbFourPainters from '../public/images/works/pinit.png'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
import thumbSpark from '../public/images/works/Spark.png'
import thumbNeytt from '../public/images/works/neytt.png'
import thumbSmartshift from '../public/images/works/Smartshift.png'
import thumbBrillio from '../public/images/works/brillio.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Work">
    <Container mt={6}>
      <Heading as="h3" fontSize={20} mb={4}>
        Recent Work
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="inkdrop"
            title="Admin Dashboard"
            thumbnail={thumbInkdrop}
          >
            Assess and visualize
            statistical data.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="techcube"
            title="TechCube"
            thumbnail={thumbWalknote}
          >
            Gadgets store built using Next.js
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="pinit"
            title="PinIt"
            thumbnail={thumbFourPainters}
          >
            A Pinterest clone
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="spark" href="https://www.sparkdiagnostics.com/" thumbnail={thumbSpark} title="Spark Diagnostics">
            Advanced diagnostics service provider to test the most important fluids in life based in the US.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id="neytt"
            thumbnail={thumbNeytt}
            title="Neytt"
          >
            High-fashion brand weaving stories through rugs & carpets.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="smartshift" thumbnail={thumbSmartshift} title="smartShift ">
          smartShift Technologies is a leader in SAP automation, Cloud Transformation and Cloud Migration.
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="brillio" thumbnail={thumbBrillio} title="Brillio">
            Brillio is a company focused on digital technologies and big data analytics
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Past Work
        </Heading>
      </Section>

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
