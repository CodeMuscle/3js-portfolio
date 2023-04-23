import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMetricsHub from '../public/images/works/MetricsHub.png'
import thumbTechCube from '../public/images/works/techcube.png'
import thumbPinIt from '../public/images/works/pinit.png'
import thumbMintverse from '../public/images/works/mintverse.png'
import thumbSpark from '../public/images/works/Spark.png'
import thumbNeytt from '../public/images/works/neytt.png'
import thumbSmartshift from '../public/images/works/Smartshift.png'
import thumbBrillio from '../public/images/works/brillio.png'
import thumbPichu2 from '../public/images/works/EHR.png'
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
            id="metricshub"
            title="Metrics Hub"
            thumbnail={thumbMetricsHub}
          >
            React - MUI5
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="techcube"
            title="TechCube"
            thumbnail={thumbTechCube}
          >
            Next.js - Stripe
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="pinit"
            title="PinIt"
            thumbnail={thumbPinIt}
          >
            React - OAuth
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="mintverse" thumbnail={thumbMintverse} title="Mintverse">
            React - Web3
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
          <WorkGridItem id="smartshift" href="https://smartshift.com/" target="_blank" thumbnail={thumbSmartshift} title="smartShift ">
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

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="ehr" thumbnail={thumbPichu2} title="EHR 2.0">
            Solidity - IPFS
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.3}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section> */}
        {/* <Section delay={0.5}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
